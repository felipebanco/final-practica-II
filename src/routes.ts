import { Router } from "express";
import {UserControllers} from "./controllers/UserControllers";

import { LoginControllers } from "./controllers/LoginControllers";

import { OfertaControllers } from "./controllers/OfertaControllers";
import { validarJWT } from "./middlewares/validar-jwt";


//----------------------------Empleados--------------------------------------------
const router = Router();
const controllers = new UserControllers();
router.get("/profile", (request, response) => {
  response.render("profile");
});


router.get("/Usuarios",controllers.handleListUser);
router.get("/add", (request, response) => {
  response.render("Empleados/add");
});
router.get("/index", (request, response) => {
  response.render("index");
});
router.get("/navBar", (request, response) => {
  response.render("template/navBar");
});
router.post("/add-user", controllers.handleCreateUser);
router.get("/search", controllers.handleSearchUser);
router.get("/edit", controllers.handleGetUser);
router.post("/edit-user", controllers.handleUpdateUser);
router.post("/delete-user", controllers.handleDeleteUser);

//---------------------------------Sesion----------------------------------------

const login = new LoginControllers();

router.get("/signUp", (request, response) => {
  response.render("Registro/signUp");
});
router.get("/", (request, response) => {
  response.render("Inicio/signIn");
});
router.post("/signUp",login.handleCreateSingUp);
router.post("/signIn", login.signInAutentication);
router.get("/ListLogin",login.handleListUser);
router.get("/searchRegistro", login.handleSearchUser);
router.get("/editLogin", login.handleGetUser);
router.post("/edit-Login", login.handleUpdateUser);
router.post("/deleteLogin", login.handleDeleteUser);


//----------------------Ofertas-------------------------------
const oferta = new OfertaControllers();

router.get("/oferta",oferta.handleListOferta);
router.get("/addOferta", (request, response) => {
  response.render("Oferta/addOferta");});
router.post("/addOferta", oferta.handleCreateOferta);
router.post("/addOferta", oferta.handleCreateOferta);
router.get("/searchOferta", oferta.handleSearchOferta);
router.get("/editOferta", oferta.handleGetOferta);
router.post("/edit-oferta", oferta.handleUpdateOferta);
router.post("/delete-oferta", oferta.handleDeleteOferta);

export { router };

