## Description

Simple project developed during the RocketSeat Next Level Week in May/2022


#### Technologies
- NodeJS
- Prisma
- Jest
- Railway Deploy


#### Access API

Routes:

- List all feedbacks


`GET: https://nodejsprismajest-production.up.railway.app/feedbacks`



- Create a new feedback


`POST: https://nodejsprismajest-production.up.railway.app/create-feedback`

body:
```
{
  "type": "BUG",
  "comment": "Bug comment"
}
```
