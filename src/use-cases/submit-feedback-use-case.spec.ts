import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'TYPE',
            comment: 'comment',
            screenshot: 'data:image/png;base64/somethingelse',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })
    it('should not be able to send a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'comment',
            screenshot: 'data:image/png;base64/somethingelse',
        })).rejects.toThrow();
    })
    it('should not be able to send a feedback without a comment', async () => {
        await expect(submitFeedback.execute({
            type: 'TYPE',
            comment: '',
            screenshot: 'data:image/png;base64/somethingelse',
        })).rejects.toThrow();
    })
    it('should not be able to send a feedback with a invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'TYPE',
            comment: 'comment',
            screenshot: 'invalid',
        })).rejects.toThrow();
    })
})