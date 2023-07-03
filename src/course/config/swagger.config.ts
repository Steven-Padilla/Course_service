import swaggerJsdoc from "swagger-jsdoc";
import SwaggerUI from "swagger-ui-express";

const options = {
  definition: {
    "openapi": "3.0.0",
    "info": {
      "title": "Course service API",
      "description": "This is the api to Course service in amilingue project",
      "contact": {
        "email": "steven_padilla728@outlook.com"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "https://virtserver.swaggerhub.com/STEVENPADILLA728/LessonService/1.0.0",
        "description": "SwaggerHub API Auto Mocking"
      },
      {
        "url": "http://3.215.246.49/api/v1/courses",
        "description": "Course api"
      }
    ],
    "tags": [
      {
        "name": "courses",
        "description": "This is a course of amilingue"
      }
    ],
    "paths": {
      "/courses": {
        "get": {
          "tags": [
            "courses"
          ],
          "summary": "Get all courses",
          "description": "You get all courses available\n",
          "operationId": "getAllCourses",
          "responses": {
            "200": {
              "description": "List of all courses",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CourseModel"
                  }
                }
              }
            },
            "500": {
              "description": "Server error"
            }
          }
        },
        "put": {
          "tags": [
            "courses"
          ],
          "summary": "Update a course",
          "description": "Update course information",
          "operationId": "updateCourse",
          "requestBody": {
            "description": "The course you want to update (Important to send id)",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CourseModel"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Course Updated",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CourseModel"
                  }
                }
              }
            },
            "400": {
              "description": "invalid input, object invalid"
            },
            "500": {
              "description": "Server Error"
            }
          }
        },
        "post": {
          "tags": [
            "courses"
          ],
          "summary": "create a new courses",
          "description": "Create a new course and add it to db",
          "operationId": "createCourses",
          "requestBody": {
            "description": "The new course you want to create (Less id)",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CourseModel"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "Course created",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CourseModel"
                  }
                }
              }
            },
            "400": {
              "description": "invalid input, object invalid"
            },
            "500": {
              "description": "Server Error"
            }
          }
        }
      },
      "/course/{id}": {
        "delete": {
          "tags": [
            "courses"
          ],
          "summary": "Delete a course by id",
          "description": "Delete a course on db",
          "operationId": "deleteCourse",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "style": "simple",
              "explode": false,
              "schema": {
                "type": "integer",
                "example": 1
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Course deleted",
              "content": {
                "text/plain": {
                  "schema": {
                    "type": "string",
                    "example": "Course with id 1 deleted"
                  }
                }
              }
            },
            "400": {
              "description": "invalid input, object invalid"
            },
            "500": {
              "description": "Server Error"
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "CourseModel": {
          "required": [
            "description",
            "exercises_ids",
            "imgs",
            "test_ids",
            "title",
            "topics_ids"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 1
            },
            "title": {
              "type": "string",
              "example": "Course Title"
            },
            "description": {
              "type": "string",
              "example": "This a description of the course"
            },
            "topics_ids": {
              "type": "array",
              "example": [
                1,
                2
              ],
              "items": {
                "type": "integer"
              }
            },
            "exercises_ids": {
              "type": "array",
              "example": [
                1,
                2
              ],
              "items": {
                "type": "integer"
              }
            },
            "imgs": {
              "type": "array",
              "example": [
                "path/to/image1",
                "path/to/image2"
              ],
              "items": {
                "type": "string"
              }
            },
            "test_ids": {
              "type": "array",
              "example": [
                1,
                2
              ],
              "items": {
                "type": "integer"
              }
            }
          }
        }
      }
    }
  },
  apis: ["../infrastructure/CourseRouter.js"],
};

export const SwaggerServe = SwaggerUI.serve;
export const SwaggerSetup = SwaggerUI.setup(swaggerJsdoc(options));