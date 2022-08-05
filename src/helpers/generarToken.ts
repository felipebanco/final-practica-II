import jwt from 'jsonwebtoken'


export const generarJWT = ( usuario) => {

   return jwt.sign(usuario,'123',{expiresIn: '60'});
} 