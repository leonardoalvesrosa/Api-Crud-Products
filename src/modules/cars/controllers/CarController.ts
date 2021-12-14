import { Request, Response } from "express";
import CreateCarService from "../services/CreateCarService";
import DeleteCarService from "../services/DeleteCarService";
import ListCarService from "../services/ListCarService";
import ShowCarService from "../services/ShowCarService";
import UpdateCarService from "../services/UpdateCarService";

// observem que não há regra de negócio aqui, elas estão nos services
export default class CarController {
    // vai chamar o ListCarService
    public async index(request: Request, response: Response): Promise<Response> {
        const listCar = new ListCarService()
        const cars = await listCar.execute()
        return response.json(cars) // converte para JSON e retorna
    }
    // vai chamar o ShowCarService
    public async show(request: Request, response: Response): Promise<Response> {
        // recupera o id do carro que vem dentro dos parâmetros da URL
        const { id } = request.params
        const showCar = new ShowCarService()
        const car = await showCar.execute(id)
        return response.json(car)
    }
    // vai chamar o CreateCarService
    public async create(request: Request, response: Response): Promise<Response> {
        // recupera os dados do produto que vem no corpo (body) do requisição
        const { id, year, model, brand } = request.body
        const createCar = new CreateCarService()
        const car = await createCar.execute({ id, year, model, brand })
        return response.json(car)
    }
    // vai chamar o UpdateCarService
    public async update(request: Request, response: Response): Promise<Response> {
        // recupera o id do carro que vem dentro dos parâmetros da URL
        const { id } = request.params
        // recupera os dados do produto que vem no corpo (body) do requisição
        const { year, model, brand } = request.body
        const updateCar = new UpdateCarService()
        const car = await updateCar.execute({ id, year, model, brand })
        return response.json(car)
    }
    // vai chamar o DeleteProductService
    public async delete(request: Request, response: Response): Promise<Response> {
        // recupera o id do produto que vem dentro dos parâmetros da URL
        const { id } = request.params
        const deleteCar = new DeleteCarService()
        await deleteCar.execute(id)
        return response.json([])
    }
}