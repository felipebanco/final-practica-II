import { Request, Response } from "express";
import {LoginService} from "../services/LoginService";
import bcrypt from 'bcrypt';
import  { LocalStorage } from 'node-localstorage';
const localStorage = new LocalStorage('./scratch');
import {LoginRepository} from "../repositories/LoginRepository"



class LoginControllers{

  async handleCreateSingUp(request: Request, response: Response) {
      
      
      const { username,rol } = request.body;
      let password = request.body;
      let pass = await bcrypt.hash(request.body.password, 2);
      const createUserService = new LoginService();
      
      try {
        await createUserService.create({
          username,
          password: pass,
          rol
        }).then(() => {
          response.render("index");
        });
      } catch (err) {
        response.render("Inicio/messageSignIn", {
          message: `Error al registrar usuario: ${err.message}`
        });
      }
  }
  async handleDeleteUser(request: Request, response: Response) {
    const { id } = request.body;

    const deleteUserService = new LoginService();

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

    const getUserDataService = new LoginService();            
    const user = await getUserDataService.getData(id);

    return response.render("Inicio/editLogin", {
      user: user
    }); 
  } 
  async handleListUser(request: Request, response: Response) {
    const listUsersService = new LoginService();
    const list = await listUsersService.list();

    return response.render("Inicio/ListLogin", {
      list: list
    });
  }
  async handleSearchUser(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchUserService = new LoginService();

    try {
      const users = await searchUserService.search(search);
      response.render("searchRegistro", {
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
    const { id, username, password, rol } = request.body;
    const updateUserService = new LoginService();

    try {
      await updateUserService.update({ username, password,rol }).then(() => {
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
  async signInAutentication(request: Request, response: Response){
    const { username, password,rol} = request.body;
    var loggedin = false;

    const singInAutenticationService = new LoginService();
    
    try {
      await singInAutenticationService.autentication({ username, password,rol}).then(() => {
        response.render("index", {
          message: "Sesion iniciada exitosamente",
        });
        loggedin = true; 
        // const token:any = generarJWT( usuario.id );
      });
      ;
    } catch (err) {
      response.render("Inicio/messageSignIn", {
        message: `Error al iniciar usuario: ${err.message}`
      });
      
    }
  }

}

export {LoginControllers};