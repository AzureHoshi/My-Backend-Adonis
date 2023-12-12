import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

import FacultySeeder from "./subSeeders/Faculty";
import CollegianGroup from "./subSeeders/CollegianGroup";
import Curriculum from "./subSeeders/Curriculum";
import SubjectCategory from "./subSeeders/SubjectCategory";
import SubjectType from "./subSeeders/SubjectType";
import SubjectGroup from "./subSeeders/SubjectGroup";
import Subject from "./subSeeders/Subject";
import Competency from "./subSeeders/Competency";
import CompetencySub from "./subSeeders/CompetencySub";
import StudyPlan from "./subSeeders/StudyPlan";
import StudyPlanRecord from "./subSeeders/StudyPlanRecord";
import Feedback from "./subSeeders/Feedback";
import InterestSurvey from "./subSeeders/InterestSurvey";
import InterestQuestion from "./subSeeders/InterestQuestion";
import InterestAnswer from "./subSeeders/InterestAnswer";
import JobPosition from "./subSeeders/JobPosition";
import InterestAnswerJob from "./subSeeders/InterestAnswerJob";
import SubjectStructure from "./subSeeders/SubjectStructure";
import CurriculumStructuresV2 from "./subSeeders/CurriculumStructuresV2";
import ContinueSubject from "./subSeeders/ContinueSubject";
import SubjectsJobsRelated from "./subSeeders/SubjectsJobsRelated";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await new FacultySeeder(this.client).run();
    await new CollegianGroup(this.client).run();
    await new Curriculum(this.client).run();
    await new SubjectCategory(this.client).run();
    await new SubjectType(this.client).run();
    await new SubjectGroup(this.client).run();
    await new Subject(this.client).run();
    await new Competency(this.client).run();
    await new CompetencySub(this.client).run();
    await new StudyPlan(this.client).run();
    await new StudyPlanRecord(this.client).run();
    await new Feedback(this.client).run();
    await new InterestSurvey(this.client).run();
    await new InterestQuestion(this.client).run();
    await new InterestAnswer(this.client).run();
    await new JobPosition(this.client).run();
    await new InterestAnswerJob(this.client).run();
    await new SubjectStructure(this.client).run();
    await new CurriculumStructuresV2(this.client).run();
    await new ContinueSubject(this.client).run();
    await new SubjectsJobsRelated(this.client).run();
  }
}
