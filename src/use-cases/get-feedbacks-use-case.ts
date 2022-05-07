import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class GetFeedbacksUseCase {
    constructor(
        private feedbackRepository: FeedbacksRepository,
    ) {}

    async get() {
        return await this.feedbackRepository.get()
    }
}