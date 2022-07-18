import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("medicals")
class Medical {

  @PrimaryColumn()
  idMedical: string;

  @Column()
  medicalname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  specialty: string;

  @Column()
  datebirth: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.idMedical) {
      this.idMedical = uuid();
    }
  }

}

export { Medical };