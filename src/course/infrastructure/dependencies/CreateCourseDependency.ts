import { CreateCourseRepositoryImpl } from "../repository/CreateCourseRepositoryImpl";
import { CreateCourseUseCase } from "../../application/useCases/CreateCourseUseCase";
import { CreateCourseController } from "../controllers/CreateCourseController";

//main
const createCourseRepositoryImpl = new CreateCourseRepositoryImpl();

//Dependency to create a Course
const createCourseUseCase = new CreateCourseUseCase(createCourseRepositoryImpl);
export const createCourseController = new CreateCourseController(createCourseUseCase);
