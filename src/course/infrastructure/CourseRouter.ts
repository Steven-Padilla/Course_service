import * as express from "express";
const courseRouter = express.Router();

import { getAllCoursesController } from "./dependencies/GetAllDependency";
import { createCourseController } from "./dependencies/CreateCourseDependency";
import { deleteCourseController } from "./dependencies/DeleteCourseDependency";
import { updateCourseController } from "./dependencies/UpdateCourseDependency";

courseRouter.get("/courses/",getAllCoursesController.run.bind(getAllCoursesController)
);
courseRouter.post("/courses/",createCourseController.run.bind(createCourseController)
);
courseRouter.put("/courses/", updateCourseController.run.bind(updateCourseController));
courseRouter.delete("/courses/:id",deleteCourseController.run.bind(deleteCourseController)
);

export { courseRouter };
