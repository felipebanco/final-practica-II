import { Request, Response } from "express";
import {QueryService} from "../services/QueryService";

class QueryControllers{

  async handleCreateQuery(request: Request, response: Response) {
      const {  queryname, patientId, datequery, reason, diagnosis  } = request.body;
      const createQueryService = new QueryService();
  
      try {
        await createQueryService.create({
            queryname,
            patientId,
            datequery,
            reason,
            diagnosis,
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
  async handleDeleteQuery(request: Request, response: Response) {
    const { idQuery } = request.body;

    const deleteQueryService = new QueryService();

    try {
        await deleteQueryService.delete(idQuery).then(() => {
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
  async handleGetQuery(request: Request, response: Response) {
    let { idQuery } = request.query;
    idQuery = idQuery.toString();

    const getQueryDataService = new QueryService();            
    const query = await getQueryDataService.getData(idQuery);

    return response.render("Empleados/edit", {
      query: query
    }); 
  } 
  async handleListQuery(request: Request, response: Response) {
    const listQueryService = new QueryService();
    const query = await listQueryService.list();

    return response.render("Empleados/Usuarios", {
      query: query
    });
  }
  async handleSearchQuery(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchQueryService = new QueryService();

    try {
      const query = await searchQueryService.search(search);
      response.render("search", {
        query: query,
        search: search
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al buscar usuario: ${err.message}`
      });
    }
  }
  async handleUpdateQuery(request: Request, response: Response) {
    const { idQuery, queryname, patientId, datequery, reason, diagnosis } = request.body;
    const updateQueryService = new QueryService();

    try {
      await updateQueryService.update({ idQuery, queryname, patientId, datequery, reason, diagnosis }).then(() => {
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
export  {QueryControllers};