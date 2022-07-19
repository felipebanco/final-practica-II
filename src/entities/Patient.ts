import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("patient")
class Patient {

  @PrimaryColumn()
  idPatient: string;

  @Column()
  patientname: string;

  @Column()
  datebirth: string;

  @Column()
  weigth: string;

  @Column()
  heigth: string;

  @Column()
  specie: string;

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