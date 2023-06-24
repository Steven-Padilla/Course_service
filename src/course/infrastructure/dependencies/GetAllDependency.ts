import { GetAllCoursesRepositoryImpl } from "../repository/GetAllRepositoryImpl";
import { GetAllCoursesUseCase } from '../../application/useCases/getAllCoursesUseCase';
import { GetAllCoursesController } from '../controllers/GetAllCoursesController';

//main 
const getAllCoursesRepositoryImpl = new GetAllCoursesRepositoryImpl();

//Dependency to get all Courses 
const getAllCoursesUseCase = new GetAllCoursesUseCase(getAllCoursesRepositoryImpl);
export const getAllCoursesController = new GetAllCoursesController(getAllCoursesUseCase)