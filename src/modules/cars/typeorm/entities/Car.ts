import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// decorator -> padrão de projeto
@Entity('cars')
class Car {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    year: number

    @Column()
    model: string

    @Column()
    brand: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Car;