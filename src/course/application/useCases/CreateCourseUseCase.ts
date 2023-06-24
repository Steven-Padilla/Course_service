import { CreateCourseRepository } from "../../domain/repository/CreateCourseRepository";

export class CreateCourseUseCase {
  constructor(readonly createCourseRepository: CreateCourseRepository) {}
  async run(
    id: number,
    title: string,
    description: string,
    imgs: [],
    topics_ids: [],
    exercises_ids: [],
    tests_ids: []
  ) {
    return await this.createCourseRepository.createCourse(
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
