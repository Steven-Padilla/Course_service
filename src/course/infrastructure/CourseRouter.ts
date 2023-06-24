import * as express from "express";
const courseRouter = express.Router();

import { getAllCoursesController } from "./dependencies/GetAllDependency";
import { createCourseController } from "./dependencies/CreateCourseDependency";
import { deleteCourseController } from "./dependencies/DeleteCourseDependency";
import { updateCourseController } from "./dependencies/UpdateCourseDependency";

courseRouter.get("/getall/",getAllCoursesController.run.bind(getAllCoursesController)
);
courseRouter.post("/create/",createCourseController.run.bind(createCourseController)
);
courseRouter.put("/update/", updateCourseController.run.bind(updateCourseController));
courseRouter.delete("/delete/:id",deleteCourseController.run.bind(deleteCourseController)
);

export { courseRouter };
