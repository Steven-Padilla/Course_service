import { Request, Response } from "express";

import { DeleteCourseUseCase } from "../../application/useCases/deleteCourseUseCase";

export class DeleteCourseController {
  constructor(readonly deleteCourseUseCase: DeleteCourseUseCase) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;
    const course = await this.deleteCourseUseCase.run(Number(id));
    return res.status(200).json(course);
  }
}
