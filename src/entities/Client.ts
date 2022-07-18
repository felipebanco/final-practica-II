import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("clients")
class Client {

  @PrimaryColumn()
  idClient: string;

  @Column()
  clientname: string;

  @Column()
  dni: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.idClient) {
      this.idClient = uuid();
    }
  }

}

export { Client };