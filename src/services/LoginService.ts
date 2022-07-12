import { getCustomRepository } from "typeorm";
import { LoginRepository } from "../repositories/LoginRepository";
import { Login } from "../entities/Login";
import { response } from "express";
import bcrypt from 'bcrypt'

interface ILogin {
    username: string;
    password: number;
    rol: string
  }
class LoginService {
      async create({ username, password, rol }: ILogin) {
        if (!username || !password || !rol) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const loginRepository = getCustomRepository(LoginRepository);
    
        const loginAlreadyExists = await loginRepository.findOne({ username });
    
        if (loginAlreadyExists) {
          throw new Error("El nombre de usuario ya esta registrado");
        }
    
        const login = loginRepository.create({ username, password, rol });
    
        await loginRepository.save(login);
    
        return login;
      }

      async delete(id: string) {
        const loginRepository = getCustomRepository(LoginRepository);
    
        const user = await loginRepository
          .createQueryBuilder()
          .delete()
          .from(Login)
          .where("id = :id", { id })
          .execute();
    
        return user;
      }
      async getData(id: string) {
        const loginRepository = getCustomRepository(LoginRepository);
    
        const login = await loginRepository.findOne(id);
    
        return login;
      }
      async list() {
        const loginRepository = getCustomRepository(LoginRepository);
    
        const login = await loginRepository.find();
    
        return login;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const loginRepository = getCustomRepository(LoginRepository);
    
        const login = await loginRepository
          .createQueryBuilder()
          .where("username like :search", { search: `%${search}%` })
          .orWhere("password like :search", { search: `%${search}%` })
          .orWhere("rol like :search", { search: `%${search}%` })
          .getMany();
    
        return login;
    
      }
      async update({ username, password, rol }: ILogin) {
        const loginRepository = getCustomRepository(LoginRepository);

        const login = await loginRepository
          .createQueryBuilder()
          .update(Login)
          .set({ username, password, rol })
          .where("id = :id", {  })
          .execute();
    
        return login;
    
      }

    async autentication({username, password}: ILogin){
      let autenticado = false;
      const loginRepo = getCustomRepository(LoginRepository);
      const usuario = await loginRepo.findOne({username})
      let passwordString =password.toString()
      const validPassword = bcrypt.compareSync(passwordString, usuario.password);
      if (!username && !password) {
        throw new Error("Por favor rellenar todos los campos");
      }
      if (validPassword) {
        autenticado = true;
        return true;
      }
      else{
        throw new Error ("Usuario o contraseña incorrecta");
        
      }
      
    }
  

}

export {LoginService};