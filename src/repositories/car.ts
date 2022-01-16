import { Repository } from "redis-om";
import { Car, carSchema } from "../entities/car";
import { client, connect } from "../config/redis";

export class CarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = new Repository(carSchema, client);
  }

  async create(data: any) {
    await connect();

    const car = this.repository.createEntity(data);

    return this.repository.save(car);
  }
}
