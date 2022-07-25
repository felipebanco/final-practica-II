import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("querys")
class Query {

  @PrimaryColumn()
  idQuery: string;

  @Column()
  queryname: string;

  @Column()
  patientId: string;

  @Column()
  datequery: Date;

  @Column()
  reason: string;

  @Column()
  diagnosis: string;

  

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.idQuery) {
      this.idQuery = uuid();
    }
  }

}

export { Query };