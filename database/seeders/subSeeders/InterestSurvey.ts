import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import InterestSurvey from "App/Models/InterestSurvey";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const interestSurveyData = [
      {
        curriculum_id: 2,
        interest_survey_version: 1,
      },
    ];

    await InterestSurvey.createMany(interestSurveyData);
  }
}
