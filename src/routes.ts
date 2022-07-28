import { Router } from "express";
import {UserControllers} from "./controllers/UserControllers";
import ProductControllers from "./controllers/ProductControllers";
import CategoryControllers from "./controllers/CategoryControllers";
import { LoginControllers } from "./controllers/LoginControllers";
import { PatientControllers } from "./controllers/PatientControllers";
import { ClientControllers } from "./controllers/ClientControllers";
import { MedicalControllers} from "./controllers/MedicalControllers";
import { QueryControllers } from "./controllers/QueryControllers";
import { esAdminRole } from './middlewares/validar-roles';


//----------------------------Empleados--------------------------------------------
const router = Router();
const controllers = new UserControllers();
router.get("/profile", (request, response) => {
  response.render("profile");
});


router.get("/Usuarios",esAdminRole,controllers.handleListUser);
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
//-------------------------------Productos------------------------------------------
const product = new ProductControllers();
router.get("/product", product.handleListProduct);
router.get("/addProduct", product.handleAddProduct);
router.post("/addProduct", product.handleCreateProduct);
router.get("/searchProduct", product.handleSearchProduct);
router.get("/editProduct", product.handleGetProduct);
router.post("/editproduct", product.handleUpdateProduct);
router.post("/delete-product", product.handleDeleteProduct);
//---------------------------------Categorias----------------------------------------
const category = new CategoryControllers();
router.get("/Category", category.handleListCategory);
router.get("/addCategory", (request, response) => {
  response.render("Category/addCategory");});
router.post("/addCategory", category.handleCreateCategory);
router.get("/searchCategory", category.handleSearchCategory);
router.get("/editCategory", category.handleGetCategory);
router.post("/edit-category", category.handleUpdateCategory);
router.post("/delete-category", category.handleDeleteCategory);
//---------------------------------Paciente-------------------------------------
const patient = new PatientControllers();

router.get("/listPaciente",patient.handleListPatient);
router.get("/addPaciente", (request, response) => {
  response.render("Paciente/addPaciente");});
router.post("/addPaciente", patient.handleCreatePatient);
router.post("/addPatient", patient.handleCreatePatient);
router.get("/searchPaciente", patient.handleSearchPatient);
router.get("/editPatient", patient.handleGetPatient);
router.post("/edit-patient", patient.handleUpdatePatient);
router.post("/delete-patient", patient.handleDeletePatient);
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
//----------------------Cliente-------------------------
const client = new ClientControllers();

router.get("/Client", client.handleListClient);
router.get("/addClient", (request, response) => {
  response.render("Client/addClient");});
router.post("/addClient", client.handleCreateClient);
router.post("/addClient", client.handleCreateClient);
router.get("/searchClient", client.handleSearchClient);
router.get("/editClient", client.handleGetClient);
router.post("/edit-client", client.handleUpdateClient);
router.post("/delete-client", client.handleDeleteClient);
//---------------------Medico---------------------------
const medical = new MedicalControllers();

router.get("/medical",medical.handleListMedical);
router.get("/addMedical", (request, response) => {
  response.render("Medical/addMedical");});
router.post("/addMedical", medical.handleCreateMedical);
router.post("/addMedical", medical.handleCreateMedical);
router.get("/searchMedeical", medical.handleSearchMedical);
router.get("/editMedical", medical.handleGetMedical);
router.post("/edit-medical", medical.handleUpdateMedical);
router.post("/delete-medical", medical.handleDeleteMedical);
//----------------------Consultas-------------------------------
const query = new QueryControllers();

router.get("/Query",query.handleListQuery);
router.get("/addQuery", (request, response) => {
  response.render("Query/addQuery");});
router.post("/addQuery", query.handleCreateQuery);
router.post("/addQuery", query.handleCreateQuery);
router.get("/searchQuery", query.handleSearchQuery);
router.get("/editQuery", query.handleGetQuery);
router.post("/edit-query", query.handleUpdateQuery);
router.post("/delete-query", query.handleDeleteQuery);

export { router };

