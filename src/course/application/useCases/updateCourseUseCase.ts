import { UpdateCourseRepository } from "../../domain/repository/UpdateCourseRepository";

export class UpdateCourseUseCase {
  constructor(readonly updateCourseRepository: UpdateCourseRepository) {}
  async run(
    id: number,
    title: string,
    description: string,
    imgs: [],
    topics_ids: [],
    exercises_ids: [],
    tests_ids: []
  ) {
    return await this.updateCourseRepository.updateCourse(
      id,
      title,
      description,
      imgs,
      topics_ids,
      exercises_ids,
      tests_ids
    );
  }
}
