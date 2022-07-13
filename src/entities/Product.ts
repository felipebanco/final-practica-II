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
  categoryId: string; 

  @ManyToOne(() => Category, category => category.products)
  @JoinColumn({ name: "categoryId" })
  category: Category[];

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