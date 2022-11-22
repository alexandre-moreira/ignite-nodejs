import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationsUseCase";

const specificationRepository = new SpecificationsRepository();

const createSpecificationsUseCase = new CreateSpecificationUseCase(
    specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationsUseCase
);

export { createSpecificationController };
