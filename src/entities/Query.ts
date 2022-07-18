import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("queries")
class Query {

  @PrimaryColumn()
  idQuery: string;

  @Column()
  queryname: string;

  @Column()
  patienteId: string;

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