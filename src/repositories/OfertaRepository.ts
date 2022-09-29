import { Repository, EntityRepository } from "typeorm";
import { Oferta } from "../entities/Oferta";


@EntityRepository(Oferta)
class OfertasRepository extends Repository<Oferta>{}

export { OfertasRepository };