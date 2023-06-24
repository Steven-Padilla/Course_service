import { Course } from "../db/CourseModel";
import { GetAllCoursesRepository } from "../../domain/repository/GetAllCoursesRepository";

export class GetAllCoursesRepositoryImpl implements GetAllCoursesRepository {
    async getAll(): Promise<Course[]> {
        const listCourses = await Course.findAll();
        return listCourses;
    }
}