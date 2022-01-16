import { NextApiRequest, NextApiResponse } from "next";
import { CarRepository } from "../../repositories/car";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const carRepository = new CarRepository();

  const id = await carRepository.create(req.body);

  return res.status(201).json({ id });
};

export default handler;
