import {Column,CreateDateColumn, Entity, UpdateDateColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./Product";

@Entity("categories")
class Category {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Product, products => products.categoria)
  producto: Product[]; 

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

export { Category };