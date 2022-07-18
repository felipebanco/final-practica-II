import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("patient")
class Patient {

  @PrimaryColumn()
  idPatient: string;

  @Column()
  patientname: string;

  @Column()
  datebirth: Date;

  @Column()
  weight: string;

  @Column()
  height: string;

  @Column()
  species: string;

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