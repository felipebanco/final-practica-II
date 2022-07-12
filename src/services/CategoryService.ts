import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { Category } from "../entities/Category";

interface ICategory {
    id?: string;
    categoryname: string;

  }
class CategoryService {
      async create({id, categoryname}: ICategory) {
        if ( !id || !categoryname) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const categoriesRepository = getCustomRepository(CategoryRepository);
    
        const categorynameAlreadyExists = await categoriesRepository.findOne({ categoryname });
    
        if (categorynameAlreadyExists) {
          throw new Error("El nombre de categoria ya esta registrado");
        }
    
        const categories = categoriesRepository.create({ categoryname});
    
        await categoriesRepository.save(categories);
    
        return categories;
      }
      async delete(id: string) {
        const categoriesRepository = getCustomRepository(CategoryRepository);
    
        const categories = await categoriesRepository
          .createQueryBuilder()
          .delete()
          .from(Category)
          .where("id = :id", { id })
          .execute();
    
        return categories;
      }
      async getData(id: string) {
        const categoriesRepository = getCustomRepository(CategoryRepository);
    
        const categories = await categoriesRepository.findOne(id);
    
        return categories;
      }
      async list() {
        const categoriesRepository = getCustomRepository(CategoryRepository);
    
        const categories = await categoriesRepository.find();
    
        return categories;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const categoriesRepository = getCustomRepository(CategoryRepository);
    
        const categories = await categoriesRepository
          .createQueryBuilder()
          .where("categoryname like :search", { search: `%${search}%` })
          .getMany();

        return categories;
    
      }
      async update({ id, categoryname }: ICategory) {
        const categoriesRepository = getCustomRepository(CategoryRepository);
    
        const categories = await categoriesRepository
          .createQueryBuilder()
          .update(Category)
          .set({ categoryname})
          .where("id = :id", { id })
          .execute();
    
        return categories;
    
      }

}

export {CategoryService};