import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repositories/ProductsRepository";
import {CategoryRepository} from "../repositories/CategoryRepository";

import { Product } from "../entities/Product";


interface IProduct {
    id?: string;
    productname: string;
    price: number;
    categoriaId: string;
  }
  class ProductService {
    async create({ productname, price,name }) {
        /* if (!productname || !price || !categoriaId) {
          throw new Error("Por favor rellenar todos los campos");
        }
     */
        const productsRepository = getCustomRepository(ProductsRepository);
    
        const productnameAlreadyExists = await productsRepository.findOne({ productname });
    
        if (productnameAlreadyExists) {
          throw new Error("El producto ya esta registrado");
        }
        const categoryRepository = getCustomRepository(CategoryRepository);
    
        const categoria = await categoryRepository.findOne({name})
        if (!categoria) {
          throw new Error("No existe esa categoria");
        }
        
        
        const newProduct = new Product()
       
        newProduct.productname = productname
        newProduct.price = price
       
        newProduct.categoriaId=categoria.name
       
      
        const nuevoproducto = await productsRepository.save(newProduct);
       console.log(nuevoproducto);
  
        /* const product = productsRepository.create({ productname, price});
    
        await productsRepository.save(product);
        console.log(product);
        return product;
         */
    
      }
      async delete(id: string) {
        const productsRepository = getCustomRepository(ProductsRepository);
    
        const product = await productsRepository
          .createQueryBuilder()
          .delete()
          .from(Product)
          .where("id = :id", { id })
          .execute();
    
        return product;
    
      }
      async getData(id: string) {
        const productsRepository = getCustomRepository(ProductsRepository);
    
        const product = await productsRepository.findOne(id);
    
        return product;
      }
      async list() {
        const productsRepository = getCustomRepository(ProductsRepository);
    
        const product = await productsRepository.find();
    
        return product; 
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const productsRepository = getCustomRepository(ProductsRepository);
    
        const product = await productsRepository
          .createQueryBuilder()
          .where("productname like :search", { search: `%${search}%` })
          .orWhere("price like :search", { search: `%${search}%` })
          .orWhere("categoriaId like :search", { search: `%${search}%` })
          .getMany();
    
        return product;
    
      }
      async update({ id, productname, price, categoriaId }: IProduct) {
        const productsRepository = getCustomRepository(ProductsRepository);
    
        const product = await productsRepository
          .createQueryBuilder()
          .update(Product)
          .set({ productname, price, categoriaId})
          .where("id = :id", { id })
          .execute();
    
        return product;
    
      }

}

export {ProductService };