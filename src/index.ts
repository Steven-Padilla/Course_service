import express from 'express';
import { config } from './config';
import { courseRouter } from './course/infrastructure/CourseRouter';
import * as bodyParser from 'body-parser'
const { port } = config.server;
const app = express();


app.use(bodyParser.json());
app.use("/api/v1", courseRouter)
app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
});

