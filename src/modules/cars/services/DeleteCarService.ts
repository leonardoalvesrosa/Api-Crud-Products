import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import CarRepository from "../typeorm/repositories/CarRepository";

class DeleteCarService {

    public async execute(id: string): Promise<void> {

        // não podemos remover um produto que não exista
        const carRepository = getCustomRepository(CarRepository)
        const carExist = await carRepository.findOne(id)
        if (!carExist) {
            throw new AppError(`Carro não existe `, 400)
        }
        // podemos remover
        await carRepository.remove(carExist)

    }
}

export default DeleteCarService;