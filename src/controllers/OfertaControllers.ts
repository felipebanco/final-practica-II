import { Request, Response } from "express";
import {OfertaService} from "../services/OfertaService";

class OfertaControllers{

  async handleCreateOferta(request: Request, response: Response) {
      const {  puesto, ubicacion, requisitos  } = request.body;
      const createOfertaService = new OfertaService();
  
      try {
        await createOfertaService.create({
            puesto,
            ubicacion,
            requisitos,
        }).then(() => {
          response.render("Oferta/messageOferta", {
            message: "Oferta registrada exitosamente"
          });
        });
      } catch (err) {
        response.render("Oferta/messageOferta", {
          message: `Error al registrar consulta: ${err.message}`
        });
      }
  }
  async handleDeleteOferta(request: Request, response: Response) {
    const { idOferta } = request.body;

    const deleteOfertaService = new OfertaService();

    try {
        await deleteOfertaService.delete(idOferta).then(() => {
        response.render("Oferta/messageOferta", {
          message: "Oferta eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al eliminar usuario: ${err.message}`
      });
    }
  } 
  async handleGetOferta(request: Request, response: Response) {
    let { idOferta } = request.query;
    idOferta = idOferta.toString();

    const getOfertaDataService = new OfertaService();            
    const oferta = await getOfertaDataService.getData(idOferta);

    return response.render("Oferta/editOferta", {
      oferta: oferta
    }); 
  } 
  async handleListOferta(request: Request, response: Response) {
    const listOfertaService = new OfertaService();
    const oferta = await listOfertaService.list();

    return response.render("Oferta/oferta", {
      oferta: oferta
    });
  }
  async handleSearchOferta(request: Request, response: Response) {
    //@ts-ignore
    let { search } = request.oferta;
    search = search.toString();
    const searchOfertaService = new OfertaService();

    try {
      const oferta = await searchOfertaService.search(search);
      response.render("search", {
       oferta:oferta,
        search: search
      });
    } catch (err) {
      response.render("Oferta/messageOferta", {
        message: `Error al buscar Oferta: ${err.message}`
      });
    }
  }
  async handleUpdateOferta(request: Request, response: Response) {
    const { idOferta, fecha, puesto, ubicacion, requisitos } = request.body;
    const updateOfertaService = new OfertaService();

    try {
      await updateOfertaService.update({ idOferta, puesto, ubicacion, requisitos }).then(() => {
        response.render("Oferta/messageOferta", {
          message: "Oferta actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("Oferta/messageOferta", {
        message: `Oferta al actualizar usuario: ${err.message}`
      });
    }

  }
}
export  {OfertaControllers};