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

  async createIndex() {
    await connect();

    return this.repository.createIndex();
  }

  async find(query: string) {
    await connect();

    return this.repository
      .search()
      .where("make")
      .eq(query)
      .or("model")
      .eq(query)
      .or("description")
      .matches(query)
      .return.all();
  }
}
