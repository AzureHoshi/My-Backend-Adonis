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

// Route.get('/', async () => {
//   return { hello: 'world' }
// })

Route.group(() => {
  Route.resource("curriculums", "CurriculumsController").apiOnly();
  Route.resource("faculties", "FacultiesController").apiOnly();
  Route.resource("collegian-groups", "CollegianGroupsController").apiOnly();
  Route.resource("study-plans", "StudyPlansController").apiOnly();
  Route.resource("subject-categories", "SubjectCategoriesController").apiOnly();
  Route.resource("subject-types", "SubjectTypesController").apiOnly();
  Route.resource("subject-groups", "SubjectGroupsController").apiOnly();
  Route.resource("subjects", "SubjectsController").apiOnly();
  Route.resource("collegians", "CollegiansController").apiOnly();
  Route.resource("study-records", "StudyRecordsController").apiOnly();
  Route.resource("feedback-answers", "FeedbackAnswersController").apiOnly();
  Route.resource("feedbacks", "FeedbacksController").apiOnly();
  Route.resource(
    "collegian-feedbacks",
    "CollegianFeedbacksController"
  ).apiOnly();
  Route.resource("interest-surveys", "InterestSurveysController").apiOnly();
  Route.resource("interest-questions", "InterestQuestionsController").apiOnly();
  Route.resource("interest-answers", "InterestAnswersController").apiOnly();
  Route.resource("interest-records", "InterestRecordsController").apiOnly();
}).prefix("/api/v1");
