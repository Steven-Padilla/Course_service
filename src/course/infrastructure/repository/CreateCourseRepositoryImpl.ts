import { CreateCourseRepository } from "../../domain/repository/CreateCourseRepository";
import { Course } from "../db/CourseModel";

export class CreateCourseRepositoryImpl implements CreateCourseRepository {
  async createCourse(
    id: number,
    title: string,
    description: string,
    imgs: [],
    topics_ids: [],
    exercises_ids: [],
    tests_ids: []
  ): Promise<[Course, boolean]> {
    const course = Course.findOrCreate({
      where: { title },
      defaults: {
        id,
        title,
        description,
        imgs,
        topics_ids,
        exercises_ids,
        tests_ids,
      },
    });
    return course;
  }
}
