import { EntityRepository, Repository } from "typeorm";
import Car from "../entities/Car";

@EntityRepository(Car)
class CarRepository extends Repository<Car> {

    // esta classe vai herdar todos os métodos de manipulação no banco de dados
    // personalizado para a classe Product

    // vamos criar um método novo
    // procura por nome
    public async findById(id: string): Promise<Car | undefined> {
        let car = this.findOne({ // procura pelo primeiro produto com nome
            where: {
                id
            }
        })
        return car
    }
}

export default CarRepository;