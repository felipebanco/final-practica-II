import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("ofertas")
class Oferta {

  @PrimaryColumn()
  idOferta: string;

  @Column()
  puesto: string;
  
  @Column()
  ubicacion: string;

  @Column()
  requisitos: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.idOferta) {
      this.idOferta = uuid();
    }
  }

}

export { Oferta };