import { CourseEntity } from "../entity/CourseEntity";

export interface GetAllCoursesRepository {
    getAll(): Promise<Array<CourseEntity>>;
}