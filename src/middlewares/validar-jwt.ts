import jwt from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from "../repositories/UsersRepository";
import  { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./scratch');

export const validarJWT = async ( req, res, next ) => {

    try {
    let token = JSON.parse(localStorage.getItem('x-token'))
        
        

    const usersRepository = getCustomRepository(UsersRepository);
    
 
    
    if( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }



        const { id } = jwt.verify( token, '123');

        const usuario = await usersRepository.findOne(id)


        if ( !usuario ) {
            return res.status(401) ({
                msg: 'Token no valido -usuario no existe DB'

            })
        }


        req.usuario = usuario;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).render("logueate")
    }




} 