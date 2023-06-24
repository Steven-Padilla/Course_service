import {CourseEntity} from "../entity/CourseEntity";

export interface CreateCourseRepository {
  createCourse(
    id: number,
    title: string,
    description: string,
    imgs: [],
    topics_ids:[],
    exercises_ids: [],
    tests_ids: [],
  ): Promise<[CourseEntity, boolean]>;
}
