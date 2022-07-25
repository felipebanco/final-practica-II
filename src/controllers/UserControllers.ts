import { Request, Response } from "express";
import {UserService} from "../services/UserService";

class UserControllers{

  async handleCreateUser(request: Request, response: Response) {
      const { username, email, phone, city, state } = request.body;
      const createUserService = new UserService();
  
      try {
        await createUserService.create({
          username,
          email,
          phone,
          city,
          state
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
  async handleDeleteUser(request: Request, response: Response) {
    const { id } = request.body;

    const deleteUserService = new UserService();

    try {
        await deleteUserService.delete(id).then(() => {
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
  async handleGetUser(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getUserDataService = new UserService();            
    const user = await getUserDataService.getData(id);

    return response.render("Empleados/edit", {
      user: user
    }); 
  } 
  async handleListUser(request: Request, response: Response) {
    const listUsersService = new UserService();
    const users = await listUsersService.list();

    return response.render("Empleados/Usuarios", {
      users: users
    });
  }
  async handleSearchUser(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchUserService = new UserService();

    try {
      const users = await searchUserService.search(search);
      response.render("Empleados/search", {
        users: users,
        search: search
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al buscar usuario: ${err.message}`
      });
    }
  }
  async handleUpdateUser(request: Request, response: Response) {
    const { id, username, email, phone, city, state } = request.body;
    const updateUserService = new UserService();

    try {
      await updateUserService.update({ id, username, email, phone, city, state }).then(() => {
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