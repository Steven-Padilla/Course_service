
import { Request, Response } from "express";
import { UpdateCourseUseCase } from "../../application/useCases/updateCourseUseCase";
import { Course } from "../db/CourseModel";


export class UpdateCourseController {
  constructor(readonly updateCourseUseCase: UpdateCourseUseCase) { }

  async run(req: Request, res: Response) {
    const body = req.body as Course;

    const course = await this.updateCourseUseCase.run(
      body.id,
      body.title,
      body.description,
      body.imgs,
      body.topics_ids,
      body.exercises_ids,
      body.tests_ids
    );
    return res.status(200).json(course);
  }
}