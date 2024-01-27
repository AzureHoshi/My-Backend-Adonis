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
  Route.resource("interest-surveys", "InterestSurveysController").apiOnly();
  Route.resource("interest-questions", "InterestQuestionsController").apiOnly();
  Route.resource("interest-answers", "InterestAnswersController").apiOnly();
  Route.resource(
    "interest-answers-jobs",
    "InterestAnswersJobsController"
  ).apiOnly();
  Route.resource("competencies", "CompetenciesController").apiOnly();
  Route.resource("competency-subs", "CompetencySubsController").apiOnly();
  Route.resource("feedback-records", "FeedbackRecordsController").apiOnly();
  Route.resource(
    "curriculum-structures",
    "CurriculumStructuresController"
  ).apiOnly();
  Route.resource("study-plans", "StudyPlansController").apiOnly();
  Route.resource("study-plan-records", "StudyPlanRecordsController").apiOnly();
  Route.resource("continue-subjects", "ContinueSubjectsController").apiOnly();
  Route.resource("job-positions", "JobPositionsController").apiOnly();
  Route.resource("subject-structures", "SubjectStructuresController").apiOnly();
  Route.resource(
    "curriculum-structures-v2",
    "CurriculumStructuresV2sController"
  ).apiOnly();
  Route.resource(
    "subject-job-relateds",
    "SubjectJobRelatedsController"
  ).apiOnly();
  Route.resource("interest-results", "InterestResultsController").apiOnly();
  Route.resource("stu-acad-recs", "StuAcadRecsController").apiOnly();
  Route.resource("ylos", "YlOsController").apiOnly();
  Route.resource("ylo-descriptions", "YloDescriptionsController").apiOnly();
  Route.resource("plos", "PlOsController").apiOnly();
  Route.resource("sub-plos", "SubPlosController").apiOnly();
  Route.resource("sub-plo-mappings", "SubPloMappingsController").apiOnly();
  Route.resource("job-competencies", "JobCompetenciesController").apiOnly();

  // ? custom route
  Route.get(
    "subjects-by-curriculum/:id",
    "SubjectsController.showByCurriculum"
  ); // done
  Route.post("csv-upload", "UploadDownloadCsvsController.upload");
  Route.get("csv-download", "UploadDownloadCsvsController.download");
  Route.get(
    "continue-subjects-subject/:id",
    "ContinueSubjectsController.showBySubject"
  );
  Route.get(
    "continue-subjects-curriculum/:id",
    "ContinueSubjectsController.showByCurriculum"
  );
  Route.post("ylo-plos", "YloPlosController.store");
  Route.delete("ylo-plos", "YloPlosController.destroy");

  // ? for simulation
  Route.post(
    "simulation-result-subject",
    "SimulationsController.simulationResultBySubject"
  );
  Route.post(
    "simulation-result-job",
    "SimulationsController.simulationResultByJob"
  );

  // * login
  Route.post("login", "AuthController.login");
  Route.post("logout", "AuthController.logout").middleware("auth");
  Route.get("check-login", "AuthController.checkLogin").middleware("auth");
  Route.get("get-user-data", "AuthController.getUserData").middleware("auth");
  Route.post("register", "AuthController.register");
  Route.get("user-all", "UsersController.index");
}).prefix("/api/v1");
