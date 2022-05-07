require('dotenv').config()
import cors from 'cors';
import express from 'express'
import { routes } from './routes';

const app = express()

app.use(cors());
app.use(express.json())
app.use(routes);

const port = process.env.PORT || 3003
app.listen(port, () => {
    console.log('Server Running on port: ', port)
})