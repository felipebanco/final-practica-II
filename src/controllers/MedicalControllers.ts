import { Request, Response } from "express";
import {MedicalService} from "../services/MedicalService";

class UserControllers{

  async handleCreateMedical(request: Request, response: Response) {
      const { medicalname, email, phone, address, specialty,datebirth } = request.body;
      const createUserService = new MedicalService();
  
      try {
        await createUserService.create({
            medicalname,
            email,
            phone,
            address,
            specialty,
            datebirth,
        }).then(() => {
          response.render("Empleados/message", {
            message: "Usuario registrado exitosamente"
          });
        });
      } catch (err) {
        response.render("Empleados/message", {
          message: `Error al registrar usuario: ${err.message}`
        });
      }
  }
  async handleDeleteMedical(request: Request, response: Response) {
    const { idMedical } = request.body;

    const deleteMedicalService = new MedicalService();

    try {
        await deleteMedicalService.delete(idMedical).then(() => {
        response.render("Empleados/message", {
          message: "Usuario eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al eliminar usuario: ${err.message}`
      });
    }
  } 
  async handleGetMedical(request: Request, response: Response) {
    let { idMedical } = request.query;
    idMedical = idMedical.toString();

    const getMedicalDataService = new MedicalService();            
    const medical = await getMedicalDataService.getData(idMedical);

    return response.render("Empleados/edit", {
      medical: medical
    }); 
  } 
  async handleListMedical(request: Request, response: Response) {
    const listMedicalService = new MedicalService();
    const medical = await listMedicalService.list();

    return response.render("Empleados/Usuarios", {
      medical: medical
    });
  }
  async handleSearchMedical(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchMedicalService = new MedicalService();

    try {
      const medical = await searchMedicalService.search(search);
      response.render("search", {
        medical: medical,
        search: search
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al buscar usuario: ${err.message}`
      });
    }
  }
  async handleUpdateMedical(request: Request, response: Response) {
    const { idMedical,medicalname, email, phone, address, specialty,datebirth } = request.body;
    const updateMedicalService = new MedicalService();

    try {
      await updateMedicalService.update({ idMedical,medicalname, email, phone, address, specialty,datebirth }).then(() => {
        response.render("Empleados/message", {
          message: "Usuario actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al actualizar usuario: ${err.message}`
      });
    }

  }
}
export {UserControllers};