import { GetAllCoursesRepository } from "../../domain/repository/GetAllCoursesRepository";

export class GetAllCoursesUseCase {
    constructor(
        readonly getAllCoursesRepository: GetAllCoursesRepository,
    ) { }
    async run() {
        return await this.getAllCoursesRepository.getAll();
    }
}