import { Router } from "express";
import productRouter from "../../../modules/products/routes/routes.products";
import sessionRouter from "../../../modules/users/routes/routes.session";
import userRouter from "../../../modules/users/routes/routes.user";
import carRouter from "../../../modules/cars/routes/routes.car";

const routes = Router()

// acessando /product, poderemos executar get, post, put e delete 
routes.use('/product', productRouter);

routes.use('/car', carRouter);

routes.use('/user', userRouter);

routes.use('/session', sessionRouter);

export default routes;