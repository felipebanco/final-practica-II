import { getCustomRepository } from "typeorm";
import { MedicalsRepository } from "../repositories/MedicalRepository";
import { Medical } from "../entities/Medical";

interface IMedical {
    idMedical?: string;
    medicalname: string;
    email: string;
    phone: string;
    address: string;
    specialty: string;
    datebirth: Date;
  }
class MedicalService {
      async create({ medicalname, email, phone, address, specialty,datebirth }) {
        if (!medicalname || !email || !phone || !address || !specialty || !datebirth) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const medicalRepository = getCustomRepository(MedicalsRepository);
    
        const medicalnameAlreadyExists = await medicalRepository.findOne({ medicalname });
    
        if ( medicalnameAlreadyExists) {
          throw new Error("El nombre de usuario ya esta registrado");
        }
    
        const emailAlreadyExists = await medicalRepository.findOne({ email });
    
        if (emailAlreadyExists) {
          throw new Error("El correo electrónico ya esta registrado");
        }
    
        const medical = medicalRepository.create({ medicalname, email, phone, address, specialty,datebirth });
    
        await medicalRepository.save(medical);
    
        return medical;
      }
      async delete(idMedical: string) {
        const medicalRepository = getCustomRepository(MedicalsRepository);
    
        const medical = await medicalRepository
          .createQueryBuilder()
          .delete()
          .from(Medical)
          .where("idMedical = :idMedical", { idMedical })
          .execute();
    
        return medical;
      }
      async getData(idMedical: string) {
        const medicalRepository = getCustomRepository(MedicalsRepository);
    
        const medical = await medicalRepository.findOne(idMedical);
    
        return medical;
      }
      async list() {
        const medicalRepository = getCustomRepository(MedicalsRepository);
    
        const medical = await medicalRepository.find();
    
        return medical;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const medicalRepository = getCustomRepository(MedicalsRepository);
    
        const medical = await medicalRepository
          .createQueryBuilder()
          .where("medicalname like :search", { search: `%${search}%` })
          .orWhere("email like :search", { search: `%${search}%` })
          .orWhere("phone like :search", { search: `%${search}%` })
          .orWhere("address like :search", { search: `%${search}%` })
          .orWhere("specialty like :search", { search: `%${search}%` })
          .orWhere("datebirth like :search", { search: `%${search}%` })
          .getMany();
    
        return medical;
    
      }
      async update({ idMedical,medicalname, email, phone, address, specialty,datebirth}: IMedical) {
        const medicalRepository = getCustomRepository(MedicalsRepository);
    
        const medical = await medicalRepository
          .createQueryBuilder()
          .update(Medical)
          .set({ idMedical,medicalname, email, phone, address, specialty,datebirth })
          .where("idMedical = :idMedical", { idMedical })
          .execute();
    
        return medical;
    
      }

}

export {MedicalService};