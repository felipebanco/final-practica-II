import { getCustomRepository } from "typeorm";
import { PatientsRepository } from "../repositories/PatientRepository";
import { Patient } from "../entities/Patient";
import { ClientsRepository } from "../repositories/ClientRepository";
import { ProductsRepository } from "../repositories/ProductsRepository";

interface IPatient {
    idPatient?: string;
    patientname: string;
    datebirth: Date;
    weigth: string;
    heigth: string;
    specie: string;
    client: string;
  }
class PatientService {
      async create({ patientname, datebirth,weigth, heigth, specie, clientname }) {
        if (!patientname || !datebirth || !weigth || !heigth || !specie || !clientname) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const patientRepository = getCustomRepository(PatientsRepository);
    
        const patientrnameAlreadyExists = await patientRepository.findOne({ patientname });
    
        if (patientrnameAlreadyExists) {
          throw new Error("El nombre de usuario ya esta registrado");
        }      
        const categoryRepository = getCustomRepository(ClientsRepository)

        const categoria = await categoryRepository.findOne({clientname})

        if(!categoria){
          throw new Error("No existe esa categoria");
        }
       const newPatient = new Patient()
       newPatient.patientname = patientname
       newPatient.datebirth = datebirth
       newPatient.weigth = weigth
       newPatient.heigth = heigth
       newPatient.specie = specie
       newPatient.client = clientname

       const nuevopaciente = await patientRepository.save(newPatient);
        return nuevopaciente;
      }
      async delete(idPatient: string) {
        const patientRepository = getCustomRepository(PatientsRepository);
    
        const patient = await patientRepository
          .createQueryBuilder()
          .delete()
          .from(Patient)
          .where("idPatient = :idPatient", { idPatient })
          .execute();
    
        return patient;

      }
      async getData(idPatient: string) {
        const patientRepository = getCustomRepository(PatientsRepository);
    
        const patient = await patientRepository.findOne(idPatient);
    
        return patient;
      }
      async list() {
        const patientRepository = getCustomRepository(PatientsRepository);
    
        const patient = await patientRepository.find();
    
        return patient;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const patientRepository = getCustomRepository(PatientsRepository);
    
        const patient = await patientRepository
          .createQueryBuilder()
          .where("patientname like :search", { search: `%${search}%` })
          .orWhere("datebirth like :search", { search: `%${search}%` })
          .orWhere("weigth like :search", { search: `%${search}%` })
          .orWhere("heigth like :search", { search: `%${search}%` })
          .orWhere("specie like :search", { search: `%${search}%` })
          .orWhere("client like :search", { search: `%${search}%` })
          .getMany();
    
        return patient;
    
      }
      async update({ idPatient, patientname, datebirth ,weigth, heigth, specie, client }: IPatient) {
        const patientRepository = getCustomRepository(PatientsRepository);
    
        const patient = await patientRepository
          .createQueryBuilder()
          .update(Patient)
          .set({ patientname, datebirth ,weigth, heigth, specie, client })
          .where("idPatient = :idPatient", { idPatient })
          .execute();
    
        return patient;
    
      }

}

export {PatientService};