import { DeleteByIdRepositoryImpl } from "../repository/DeleteByIdRepositoryImpl";
import { DeleteCourseUseCase } from "../../application/useCases/deleteCourseUseCase";
import { DeleteCourseController } from "../controllers/DeleteCourseController";

const deleteByIdRepositoryImpl = new DeleteByIdRepositoryImpl();

//Dependenciy to delete a Course
const deleteCourseUseCase = new DeleteCourseUseCase(deleteByIdRepositoryImpl);
export const deleteCourseController = new DeleteCourseController(
  deleteCourseUseCase
);
