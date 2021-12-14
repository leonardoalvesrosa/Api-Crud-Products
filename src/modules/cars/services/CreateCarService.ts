import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Car from "../typeorm/entities/Car";
import CarRepository from "../typeorm/repositories/CarRepository";

// vamos criar um tipo de dado
interface IRequest {
    id: string;
    year: number;
    model: string;
    brand: string;
}
class CreateCarService {
    // método assíncrono que recebe os dados do produto
    public async execute({ id, year, model, brand }: IRequest): Promise<Car> {
        // regra de negócio 1 -> não podemos inserir um produto que já exista
        const carRepository = getCustomRepository(CarRepository)
        const carExists = await carRepository.findById(id)
        if (carExists) {
            throw new AppError(`Já existe um carro com este id cadastrado`, 400)
        }
        // podemos salvar no banco
        // cria produto
        const car = carRepository.create({
            id, year, model, brand
        })

        // vamos salvar no banco
        await carRepository.save(car)

        return car
    }
}

export default CreateCarService