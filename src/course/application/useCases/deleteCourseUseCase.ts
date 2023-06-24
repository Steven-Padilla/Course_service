import { DeleteByIdRepository } from "../../domain/repository/DeleteByIdRepository";

export class DeleteCourseUseCase {
    constructor (
        readonly deleteByIdRepository:DeleteByIdRepository,
    ){}
    async run(id:number) {
        return await this.deleteByIdRepository.deleteById(id);
      }
}