/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.resource("curriculums", "CurriculumsController").apiOnly();
  Route.resource("faculties", "FacultiesController").apiOnly();
  Route.resource("collegian-groups", "CollegianGroupsController").apiOnly();
  Route.resource("subject-categories", "SubjectCategoriesController").apiOnly();
  Route.resource("subject-types", "SubjectTypesController").apiOnly();
  Route.resource("subject-groups", "SubjectGroupsController").apiOnly();
  Route.resource("subjects", "SubjectsController").apiOnly();
  Route.resource("collegians", "CollegiansController").apiOnly();
  Route.resource("study-records", "StudyRecordsController").apiOnly();
  Route.resource(
    "collegian-feedbacks",
    "CollegianFeedbacksController"
  ).apiOnly(); //done
  Route.resource("interest-surveys", "InterestSurveysController").apiOnly();
  Route.resource("interest-questions", "InterestQuestionsController").apiOnly();
  Route.resource("interest-answers", "InterestAnswersController").apiOnly();
  Route.resource("interest-records", "InterestRecordsController").apiOnly();
  Route.resource("competencies", "CompetenciesController").apiOnly();
  Route.resource("competency-subs", "CompetencySubsController").apiOnly();
  Route.resource("feedbacks", "FeedbacksController").apiOnly();
  Route.resource("feedback-records", "FeedbackRecordsController").apiOnly();
  Route.resource(
    "curriculum-structures",
    "CurriculumStructuresController"
  ).apiOnly();
  Route.resource("study-plans", "StudyPlansController").apiOnly();
  Route.resource("study-plan-records", "StudyPlanRecordsController").apiOnly();
  Route.resource("continue-subjects", "ContinueSubjectsController").apiOnly();

  // ? custom route
  Route.get(
    "subjects-by-curriculum/:id",
    "SubjectsController.showByCurriculum"
  ); // done
  Route.post("csv-upload", "UploadDownloadCsvsController.upload");
  Route.get("csv-download", "UploadDownloadCsvsController.download");

  // ? สำหรับทดสอบการอัพโหลดไฟล์
  Route.group(() => {
    Route.get("download", "FileUploadsController.download");
    Route.post("upload", "FileUploadsController.upload");
  }).prefix("/test");
}).prefix("/api/v1");
