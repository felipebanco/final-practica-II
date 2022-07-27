import { Column, CreateDateColumn,Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn  } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";
@Entity("products")
class Product {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  productname: string;

  @Column()
  price: number;

  @Column()
  categoriaId: string; 

  @ManyToOne(() => Category)
  
  @JoinColumn({ name: 'categoriaId'})
  categoria: Category;

  

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Product };