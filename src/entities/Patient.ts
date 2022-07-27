import { Column, CreateDateColumn, Entity, PrimaryColumn,ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./Client";

@Entity("patient")
class Patient {

  @PrimaryColumn()
  idPatient: string;

  @Column()
  patientname: string;

  @Column()
  datebirth: Date;

  @Column()
  weigth: string;

  @Column()
  heigth: string;

  @Column()
  specie: string;

  @Column()
  client: string;


  @ManyToOne(() => Client)
  
  @JoinColumn({ name: 'client'})
  cliente: Client;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.idPatient) {
      this.idPatient = uuid();
    }
  }

}

export { Patient };