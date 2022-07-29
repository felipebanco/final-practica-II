import { Column, CreateDateColumn, Entity, PrimaryColumn,OneToMany, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Patient } from "./Patient";

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

  @OneToMany(() => Patient, patient => patient.cliente)
  cliente: Patient[]; 

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