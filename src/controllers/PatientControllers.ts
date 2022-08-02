import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";
import { ClientService } from "../services/ClientService";
import {PatientService} from "../services/PatientService";

class PatientControllers{
  async handleAddPatient(request: Request, response: Response){
    const service = new ClientService();
    const clients = await service.list();
    response.render("Paciente/addPaciente", {clients});
  }
  async handleCreatePatient(request: Request, response: Response) {
      const { patientname, datebirth,weigth, heigth, specie, clientname } = request.body;
      const service = new PatientService();
  
      try {
        await service.create({
          patientname,
            datebirth,
            weigth,
            heigth,
            specie,
            clientname
        }).then(() => {
          response.render("Paciente/messagePaciente", {
            message: "El paciente fue registrado exitosamente"
          });
        });
      } catch (err) {
        response.render("Paciente/messagePaciente", {
          message: `Error al registrar paciente: ${err.message}`
        })
      }

  }
  
  async handleDeletePatient(request: Request, response: Response) {
    const { idPatient } = request.body;

    const deletePatientService = new PatientService();

    try {
        await deletePatientService.delete(idPatient).then(() => {
        response.render("Paciente/messagePaciente", {
          message: "Paciente eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("Paciente/messagePaciente", {
        message: `Error al eliminar paciente: ${err.message}`
      });
    }
  } 
  async handleGetPatient(request: Request, response: Response) {
    let { idPatient } = request.query;
    idPatient = idPatient.toString();

    const getPatientDataService = new PatientService();            
    const patient = await getPatientDataService.getData(idPatient);

    const listClient = new ClientService();
    const client = await listClient.list()
    return response.render("Paciente/editPaciente", {
      patient: patient,
      clients: client
    }); 
  } 
  async handleListPatient(request: Request, response: Response) {
    const listPatientService = new PatientService();
    const patient = await listPatientService.list();
    const listClient = new CategoryService();
    const client = await listClient.list()
    return response.render("Paciente/listPaciente", {
      patient: patient,
      clients: client
    });
  }
  async handleSearchPatient(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchPatientService = new PatientService();

    try {
      const patient = await searchPatientService.search(search);
      response.render("Paciente/searchPaciente", {
        patient: patient,
        search: search
      });
    } catch (err) {
      response.render("Paciente/messagePaciente", {
        message: `Error al buscar al paciente: ${err.message}`
      });
    }
  }
  async handleUpdatePatient(request: Request, response: Response) {
    const { idPatient, patientname, datebirth ,weigth, heigth, specie, client} = request.body;
    const updatePatientService = new PatientService();
    
    try {
      await updatePatientService.update({ idPatient, patientname, datebirth ,weigth, heigth, specie, client}).then(() => {
        response.render("Paciente/messagePaciente", {
          message: "Paciente actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("Paciente/messagePaciente", {
        message: `Error al actualizar paciente: ${err.message}`
      });
    }

  }
}
export default PatientControllers;