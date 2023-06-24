import { DeleteByIdRepository } from "../../domain/repository/DeleteByIdRepository";
import { Course } from "../db/CourseModel";

export class DeleteByIdRepositoryImpl implements DeleteByIdRepository {
  async deleteById(id: number): Promise<string> {
    const tarjet = await Course.findByPk(id);
    if (tarjet) {
      const { title } = tarjet;
      await tarjet.destroy();
      return `Course with title: <${title}> successfully deleted`;
    } else {
      return `Course with id: ${id} not found`;
    }
  }
}
