import jwt from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from "../repositories/UsersRepository";
import  { LocalStorage } from 'node-localstorage';
const {promisify} = require('util')

const localStorage = new LocalStorage('./scratch');
export const validarJWT = async ( req, res, next ) => {
   
   try {
        let token = localStorage.getItem('x-token')

    if( !token ) {
        console.log("falta token")
        res.redirect("/");
        
    }else{
        next()
    }   

    } catch (error) {
        console.log(error)
    }
        
      
  
} 