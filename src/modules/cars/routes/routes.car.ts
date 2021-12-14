// vamos utilizar a classe Router do express
import { Router } from "express";
import isAuthenticated from "../../../shared/middleware/isAuthenticated";
import CarController from "../controllers/CarController";

let carRouter = Router();

let carController = new CarController();

carRouter.get('/', isAuthenticated, carController.index);
carRouter.get('/:id', isAuthenticated, carController.show);
carRouter.post('/', isAuthenticated, carController.create);
carRouter.put('/:id', isAuthenticated, carController.update);
carRouter.delete('/:id', isAuthenticated, carController.delete);

export default carRouter;