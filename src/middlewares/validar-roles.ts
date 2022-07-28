
export const esAdminRole = (req, res,next ) => {
    const login = req.rol
   /*  
    const usuario = await usersRepository.findOne({rol})
    if ( !req.usuario ) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }

    const { rol, username } = req.usuario;

    if( rol !== 'admin' ){
        return res.render("noadmin");
       
    }

    next()  */
    if (res.path != '/'){
        return res.send('no tiene acceso a la ruta')
    }next()
    
}