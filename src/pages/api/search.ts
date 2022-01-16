import { NextApiRequest, NextApiResponse } from "next";
import { CarRepository } from "../../repositories/car";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;

  const carRepository = new CarRepository();

  const cars = await carRepository.find(q as string);

  return res.status(200).json(cars);
};

export default handler;
