import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Car from "../typeorm/entities/Car";
import CarRepository from "../typeorm/repositories/CarRepository";

interface IRequest {
    id: string;
    year: number;
    model: string;
    brand: string;
}
class UpdateCarService {

    public async execute({ id, year, model, brand }: IRequest): Promise<Car> {

        const carRepository = getCustomRepository(CarRepository)
        const carExist = await carRepository.findOne(id)
        if (!carExist) {
            throw new AppError(`Carro não existe`, 400)
        }
        // produto existe
        // será que o nome já existe
        const carId = await carRepository.findById(id)
        if (!carId) {
            throw new AppError(`Não existe carro com esse ID`, 400)
        }
        // podemos atualizar
        carExist.year = year
        carExist.model = model
        carExist.brand = brand
        await carRepository.save(carExist) // atualiza pois carExist tem id

        return carExist
    }
}

export default UpdateCarService;