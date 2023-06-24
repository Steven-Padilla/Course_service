import { UpdateCourseRepositoryImpl } from '../repository/UpdateCoursesRepositoryImpl';
import { UpdateCourseUseCase } from '../../application/useCases/updateCourseUseCase';
import { UpdateCourseController } from '../controllers/UpdateCourseController'

const updateCourseControllerImpl = new UpdateCourseRepositoryImpl();

//Dependency to update a Course
const updateCourseUseCase = new UpdateCourseUseCase(updateCourseControllerImpl);
export const updateCourseController = new UpdateCourseController(updateCourseUseCase);