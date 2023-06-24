import { UpdateCourseRepository } from "../../domain/repository/UpdateCourseRepository";
import { Course } from "../db/CourseModel";

export class UpdateCourseRepositoryImpl implements UpdateCourseRepository {
  async updateCourse(
    id: number,
    title: string,
    description: string,
    imgs: [],
    topics_ids: [],
    exercises_ids: [],
    tests_ids: []
  ): Promise<Course> {
    const course = await Course.findByPk(id);

    if (course) {
      await course.update({
        id,
        title,
        description,
        imgs,
        topics_ids,
        exercises_ids,
        tests_ids,
      });
      return course;
    } else {
      return new Course();
    }
  }
}
