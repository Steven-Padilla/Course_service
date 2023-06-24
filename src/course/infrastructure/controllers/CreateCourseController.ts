import { Request, Response } from "express";
import { CreateCourseUseCase } from "../../application/useCases/CreateCourseUseCase";
import { Course } from "../db/CourseModel";

export class CreateCourseController {
  constructor(readonly createCourseUseCase: CreateCourseUseCase) {}

  async run(req: Request, res: Response) {
    const body = req.body as Course;
    const course = await this.createCourseUseCase.run(
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
