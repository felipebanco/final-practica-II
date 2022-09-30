import {  getCustomRepository } from "typeorm";
import { OfertasRepository } from "../repositories/OfertaRepository";
import { Oferta } from "../entities/Oferta";

interface IOferta {
    idOferta?: string;
    puesto: string;
    ubicacion: string;
    requisitos: string;
  }
class OfertaService {
      async create({ puesto, ubicacion, requisitos }: IOferta) {
        if ( !puesto || !ubicacion || !requisitos) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const ofertaRepository = getCustomRepository(OfertasRepository);
    
        const usernameAlreadyExists = await ofertaRepository.findOne({ puesto });
    
        if (usernameAlreadyExists) {
          throw new Error("La oferta ya esta registrado");
        }
    
        const oferta = ofertaRepository.create({ puesto, ubicacion, requisitos});
    
        await ofertaRepository.save (oferta);
    
        return oferta;
      }

      async delete(idOferta: string) {
        const ofertaRepository = getCustomRepository(OfertasRepository);
    
        const oferta = await ofertaRepository
          .createQueryBuilder()
          .delete()
          .from(Oferta)
          .where("idOferta = :idOferta", { idOferta })
          .execute();
    
        return oferta;
      }
      async getData(idOferta: string) {
        const ofertaRepository = getCustomRepository(OfertasRepository);
    
        const oferta = await ofertaRepository.findOne(idOferta);
    
        return oferta;
      }
      async list() {
        const ofertaRepository = getCustomRepository(OfertasRepository);
    
        const oferta = await ofertaRepository.find();
    
        return oferta;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const ofertaRepository = getCustomRepository(OfertasRepository);
    
        const oferta = await ofertaRepository
          .createQueryBuilder()
          .where("fecha like :search", { search: `%${search}%` })
          .orWhere("puesto like :search", { search: `%${search}%` })
          .orWhere("ubicacion like :search", { search: `%${search}%` })
          .orWhere("requisitos like :search", { search: `%${search}%` })
          .getMany();
    
        return oferta;
    
      }
      async update({ idOferta,  puesto, ubicacion, requisitos }: IOferta) {
        const ofertaRepository = getCustomRepository(OfertasRepository);
    
        const oferta = await ofertaRepository
          .createQueryBuilder()
          .update(Oferta)
          .set({ puesto, ubicacion, requisitos })
          .where("idOferta = :idOferta", { idOferta })
          .execute();
    
        return oferta;
    
      }

}

export {OfertaService};