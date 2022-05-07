import { Feedback } from "@prisma/client";
import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";


export class PrismaFeedbackRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    }
    async get(): Promise<Feedback[]> {
        return await prisma.feedback.findMany()
    }
}