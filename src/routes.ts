import express from 'express';

import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { GetFeedbacksUseCase } from './use-cases/get-feedbacks-use-case';

export const routes = express.Router()


const prismaFeedbackRepository = new PrismaFeedbackRepository()
const nodemailerMailAdapter = new NodemailerMailAdapter()



routes.post('/create-feedback', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter)
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })
    return res.status(201).send()
})

routes.get('/feedbacks', async (req, res) => {
    const getFeedbacksUseCase = new GetFeedbacksUseCase(prismaFeedbackRepository)
    const data = await getFeedbacksUseCase.get()
    return res.status(200).json({ feedbacks: data })
})

