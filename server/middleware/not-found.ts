import { Request, Response } from "express";

const notFound = (req: Request, res: Response) =>
  res.status(404).send("Route does not exits");

export default notFound;
