import express from "express";
import { courseRouter } from "./course/infrastructure/CourseRouter";
import * as bodyParser from "body-parser";
const app = express();

//Setting 
import { SwaggerServe, SwaggerSetup } from './course/config/swagger.config';
import { config } from "./course/config/config";
const { port } = config.server;

// Midlewares
app.use(bodyParser.json());
app.use("/api/v1", courseRouter);
app.use('/api-docs',SwaggerServe,SwaggerSetup)

// Server
app.listen(port, () => {
  console.log(`[APP] - Starting application on port ${port}`);
});
