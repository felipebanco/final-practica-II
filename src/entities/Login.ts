import {Column,CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, OneToMany}from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("login")
class Login {

  @PrimaryColumn()
  username: string;

  @Column()
  password: number;
  
  @Column()
  rol: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {

  }
  
}

export { Login };