import { Request, Response } from "express";
import {ClientService} from "../services/ClientService";

class ClientControllers{

  async handleCreateClient(request: Request, response: Response) {
      const { clientname,dni, email, phone, city } = request.body;
      const createClientService = new ClientService();
  
      try {
        await createClientService.create({
          clientname,
          dni,
          email,
          phone,
          city
        }).then(() => {
          response.render("Client/messageClient", {
            message: "Cliente registrado exitosamente"
          });
        });
      } catch (err) {
        response.render("Client/messageClient", {
          message: `Error al registrar cliente: ${err.message}`
        });
      }
  }
  async handleDeleteClient(request: Request, response: Response) {
    const { idClient } = request.body;

    const deleteClientService = new ClientService();

    try {
        await deleteClientService.delete(idClient).then(() => {
        response.render("Client/messageClient", {
          message: "Cliente eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("Client/message", {
        message: `Error al eliminar cliente: ${err.message}`
      });
    }
  } 
  async handleGetClient(request: Request, response: Response) {
    let { idClient } = request.query;
    idClient = idClient.toString();

    const getClientDataService = new ClientService();            
    const client = await getClientDataService.getData(idClient);

    return response.render("Client/editClient", {
      client: client
    }); 
  } 
  async handleListClient(request: Request, response: Response) {
    const listClientsService = new ClientService();
    const client = await listClientsService.list();

    return response.render("Client/Client", {
      client: client
    });
  }
  async handleSearchClient(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchClientService = new ClientService();

    try {
      const client = await searchClientService.search(search);
      response.render("search", {
        client: client,
        search: search
      });
    } catch (err) {
      response.render("Client/message", {
        message: `Error al buscar usuario: ${err.message}`
      });
    }
  }
  async handleUpdateClient(request: Request, response: Response) {
    const {  idClient, clientname, dni,  email, phone, city,} = request.body;
    const updateClientService = new ClientService();

    try {
      await updateClientService.update({ idClient, clientname, dni,  email, phone, city,}).then(() => {
        response.render("Client/messageClient", {
          message: "Cliente actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("Client/messageClient", {
        message: `Error al actualizar Clinet: ${err.message}`
      });
    }

  }
}
export {ClientControllers};