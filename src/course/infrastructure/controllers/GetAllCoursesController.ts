import { Request, Response } from "express";

import { GetAllCoursesUseCase } from "../../application/useCases/getAllCoursesUseCase";

export class GetAllCoursesController {
  constructor(readonly getAllCoursesUseCase: GetAllCoursesUseCase) { }

  async run(req: Request, res: Response) {
    const listCourses = await this.getAllCoursesUseCase.run();
    return res.status(200).json(listCourses);
  }
}