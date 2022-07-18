import { Repository, EntityRepository } from "typeorm";
import { Medical} from "../entities/Medical";

@EntityRepository(Medical)
class MedicalsRepository extends Repository<Medical>{ }

export { MedicalsRepository };