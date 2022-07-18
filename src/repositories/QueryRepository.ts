import { Repository, EntityRepository } from "typeorm";
import { Query } from "../entities/Query";


@EntityRepository(Query)
class QuerysRepository extends Repository<Query>{ }

export { QuerysRepository };