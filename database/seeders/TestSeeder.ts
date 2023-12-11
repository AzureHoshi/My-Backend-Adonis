import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// import models
import CollegianGroup from "App/Models/CollegianGroup";
import Competency from "App/Models/Competency";
import CompetencySub from "App/Models/CompetencySub";
import ContinueSubject from "App/Models/ContinueSubject";
import Curriculum from "App/Models/Curriculum";
import CurriculumStructuresV2 from "App/Models/CurriculumStructuresV2";
import Faculty from "App/Models/Faculty";
import Feedback from "App/Models/Feedback";
import InterestAnswer from "App/Models/InterestAnswer";
import InterestAnswerJob from "App/Models/InterestAnswersJob";
import InterestQuestion from "App/Models/InterestQuestion";
import InterestSurvey from "App/Models/InterestSurvey";
import JobPosition from "App/Models/JobPosition";
import StudyPlan from "App/Models/StudyPlan";
import StudyPlanRecord from "App/Models/StudyPlanRecord";
import Subject from "App/Models/Subject";
import SubjectCategory from "App/Models/SubjectCategory";
import SubjectGroup from "App/Models/SubjectGroup";
import SubjectStructure from "App/Models/SubjectStructure";
import SubjectType from "App/Models/SubjectType";
import SubjectsJobsRelated from "App/Models/SubjectsJobsRelated";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const facultyData = [
      {
        faculty_name_th: "คณะบริหารธุรกิจและศิลปศาสตร์",
        faculty_name_en: "Faculty of Business Administration and Liberal Arts",
      },
      {
        faculty_name_th: "คณะวิทยาศาสตร์และเทคโนโลยีการเกษตร",
        faculty_name_en: "Faculty of Sciences and Agricultural Technology",
      },
      {
        faculty_name_th: "คณะวิศวกรรมศาสตร์",
        faculty_name_en: "Faculty of Engineering",
      },
      {
        faculty_name_th: "คณะศิลปกรรมกรรมและสถาปัตยกรรมศาสตร์",
        faculty_name_en: "Faculty of Fine Arts and Architecture",
      },
      {
        faculty_name_th: "วิทยาลัยเทคโนโลยีและสหวิทยาการ",
        faculty_name_en: "College of Integrated Science and Technology",
      },
    ];

    const collegianGroupData = [
      {
        collegian_group_name_th: "บริหารธุรกิจบัณฑิต",
        collegian_group_name_en: "Bachelor of  Business Administration",
        collegian_group_short_name_th: "บธ.บ.",
        collegian_group_short_name_en: "B.B.A.",
      },
      {
        collegian_group_name_th: "ศิลปศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Arts",
        collegian_group_short_name_th: "ศศ.บ.",
        collegian_group_short_name_en: "B.A.",
      },
      {
        collegian_group_name_th: "บัญชีบัณฑิต",
        collegian_group_name_en: "Bachelor of  Accountancy",
        collegian_group_short_name_th: "บช.บ.",
        collegian_group_short_name_en: "B.Acc.",
      },
      {
        collegian_group_name_th: "วิทยาศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Science",
        collegian_group_short_name_th: "วท.บ.",
        collegian_group_short_name_en: "B.Sc.",
      },
      {
        collegian_group_name_th: "คหกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Home Economics ",
        collegian_group_short_name_th: "คศ.บ.",
        collegian_group_short_name_en: "B.H.E.",
      },
      {
        collegian_group_name_th: "เทคโนโลยีบัณฑิต",
        collegian_group_name_en: "Bachelor of  Technology",
        collegian_group_short_name_th: "ทล.บ.",
        collegian_group_short_name_en: "B.T.",
      },
      {
        collegian_group_name_th: "วิศวกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Engineering",
        collegian_group_short_name_th: "วศ.บ.",
        collegian_group_short_name_en: "B.Eng",
      },
      {
        collegian_group_name_th: "วิศวกรรมศาสตรบัณฑิต ต่อเนื่อง",
        collegian_group_name_en:
          "Bachelor of  Engineering (Continuing Program)",
        collegian_group_short_name_th: "วศ.บ. (ต่อเนื่อง)",
        collegian_group_short_name_en: "B.Eng (Continuing Program)",
      },
      {
        collegian_group_name_th: "อุตสาหกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Industrial Technology",
        collegian_group_short_name_th: "อส.บ.",
        collegian_group_short_name_en: "B.Ind.Tech.",
      },
      {
        collegian_group_name_th: "ครุศาสตร์อุตสาหกรรมบัณฑิต",
        collegian_group_name_en: "Bachelor of Science in Technical Education",
        collegian_group_short_name_th: "ค.อ.บ.",
        collegian_group_short_name_en: "B.S.Tech.Ed.",
      },
      {
        collegian_group_name_th: "เทคโนโลยีบัณฑิต",
        collegian_group_name_en: "Bachelor of  Technology",
        collegian_group_short_name_th: "ทล.บ.",
        collegian_group_short_name_en: "B.Tech.",
      },
      {
        collegian_group_name_th: "ศิลปบัณฑิต",
        collegian_group_name_en: "Bachelor of  Fine Arts",
        collegian_group_short_name_th: "ศ.บ.",
        collegian_group_short_name_en: "B.F.A.",
      },
      {
        collegian_group_name_th: "ศิลปกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Fine and Applied Arts",
        collegian_group_short_name_th: "ศป.บ.",
        collegian_group_short_name_en: "B.F.A.",
      },
      {
        collegian_group_name_th: "ศิลปบัณฑิต",
        collegian_group_name_en: "Bachelor of  Fine Arts",
        collegian_group_short_name_th: "ศล.บ.",
        collegian_group_short_name_en: "B.F.A.",
      },
      {
        collegian_group_name_th: "สถาปัตยกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Architecture",
        collegian_group_short_name_th: "สถ.บ.",
        collegian_group_short_name_en: "B.Arch.",
      },
    ];

    const curriculumData = [
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์",
        curriculum_name_en:
          "Bachelor of Engineering Program in Computer Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมคอมพิวเตอร์)",
        curriculum_short_name_en: "B.Eng (Computer Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมซอฟต์แวร์",
        curriculum_name_en:
          "Bachelor of Engineering Program in Software Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมซอฟต์แวร์)",
        curriculum_short_name_en: "B.Eng (Software Engineering)",
        curriculum_year: 2566,
      },
    ];

    const subjectCategoryData = [
      {
        subject_category_name: "หมวดวิชาศึกษาทั่วไป",
      },
      {
        subject_category_name: "หมวดวิชาเฉพาะ",
      },
      {
        subject_category_name: "หมวดวิชาเลือกเสรี",
      },
    ];

    const subjectTypeData = [
      {
        subject_category_id: 1,
        subject_type_name: "วิชาศึกษาทั่วไปบังคับ",
      },
      {
        subject_category_id: 1,
        subject_type_name: "วิชาศึกษาทั่วไปเลือก",
      },
      {
        subject_category_id: 2,
        subject_type_name: "วิชาแกน",
      },
      {
        subject_category_id: 2,
        subject_type_name: "วิชาเฉพาะด้าน",
      },
      {
        subject_category_id: 2,
        subject_type_name: "วิชาเลือก",
      },
    ];

    const subjectGroupData = [
      {
        subject_type_id: 1,
        subject_group_name: "กลุ่มวิชาภาษาและการสื่อสาร",
      },
      {
        subject_type_id: 1,
        subject_group_name: "กลุ่มวิชาสุภาพ",
      },
      {
        subject_type_id: 1,
        subject_group_name: "กลุ่มวิชาบูรณาการ",
      },
      {
        subject_type_id: 2,
        subject_group_name: "กลุ่มวิชาบูรณาการ",
      },
      {
        subject_type_id: 2,
        subject_group_name: "กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์",
      },
      {
        subject_type_id: 3,
        subject_group_name: "กลุ่มวิชาพื้นฐานทางวิทยาศาสตร์และคณิตศาสตร์",
      },
      {
        subject_type_id: 3,
        subject_group_name: "กลุ่มวิชาพื้นฐานทางวิศวกรรมศาสตร์",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มโครงสร้างพื้นฐานของระบบ",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มเทคโนโลยีเพื่องานประยุกต์",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มฝึกวิชาชีพและโครงงาน",
      },
      {
        subject_type_id: 5,
        subject_group_name: "กลุ่มวิชาเครือข่ายคอมพิวเตอร์",
      },
      {
        subject_type_id: 5,
        subject_group_name: "กลุ่มวิชาระบบคอมพิวเตอร์",
      },
      {
        subject_type_id: 5,
        subject_group_name: "กลุ่มวิชาวิศวกรรมซอฟต์แวร์",
      },
      {
        subject_type_id: null,
        subject_group_name: "กลุ่มวิชาพื้นฐานวิชาชีพ",
      },
      {
        subject_type_id: null,
        subject_group_name: "กลุ่มวิชาชีพบังคับ",
      },
      {
        subject_type_id: null,
        subject_group_name: "กลุ่มวิชาชีพเลือก",
      },
      {
        subject_type_id: null,
        subject_group_name: "กลุ่มวิชาฝึกประสบการณ์วิชาชีพ",
      },
    ];

    // const subjectData = [
    //   {
    //     // กลุ่มวิชาภาษาและการสื่อสาร
    //     curriculum_id: 1,
    //     subject_group_id: 1,
    //     subject_code: "GEBLC101",
    //     subject_name_th: "ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน",
    //     subject_name_en: "English for Everyday Communication",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาคำศัพท์ สำนวน โครงสร้างภาษาอังกฤษ พัฒนาทักษะการใช้ภาษาอังกฤษด้าน การฟัง พูด อ่าน เขียน เพื่อใช้ในการสื่อสารในชีวิตประจำวัน ในบริบททางสังคมและวัฒนธรรมต่างๆ ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 1,
    //     subject_code: "GEBLC102",
    //     subject_name_th: "ภาษาอังกฤษเพื่อทักษะชีวิต",
    //     subject_name_en: "English for Life Skills",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาคำศัพท์ สำนวน โครงสร้างภาษาอังกฤษ โดยเน้นหลักการฟัง การพูด การอ่าน การเขียน การสรุปความ และการนำเสนอในบริบททางวิชาการ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 1,
    //     subject_code: "GEBLC103",
    //     subject_name_th: "ภาษาอังกฤษเชิงวิชาการ",
    //     subject_name_en: "Academic English",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาคำศัพท์ สำนวน โครงสร้างภาษาอังกฤษ โดยเน้นหลักการฟัง การพูด การอ่าน การเขียน การสรุปความ และการนำเสนอในบริบททางวิชาการ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 1,
    //     subject_code: "GEBLC201",
    //     subject_name_th: "ศิลปะการใช้ภาษาไทย",
    //     subject_name_en: "Arts of Using Thai Language",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษารูปแบบและวิธีการสื่อสารด้วยการใช้ภาษาไทยอย่างมีประสิทธิภาพ พัฒนา กระบวนการคิดอย่างมีระบบร่วมกับการสื่อสารอย่างสร้างสรรค์ โดยมีศิลปะในการฟังและการอ่านอย่างมีวิจารณญาณ มีทักษะในการพูดและการเขียนทางวิชาการอย่างมี คุณภาพ สามารถบูรณาการการใช้ภาษาไทยกับเทคโนโลยีและนวัตกรรมสําหรับการ เรียนรู้ตลอดชีวิต ตลอดจนตระหนักถึงการใช้ภาษาไทยในฐานะที่เป็นมรดกทาง วัฒนธรรมของชาติ",
    //   },
    //   {
    //     // กลุ่มวิชาสุภาพ
    //     curriculum_id: 1,
    //     subject_group_id: 2,
    //     subject_code: "GEBHT101",
    //     subject_name_th: "กิจกรรมเพื่อสุขภาพ",
    //     subject_name_en: "Activities for Health",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษารูปแบบและวิธีการสื่อสารด้วยการใช้ภาษาไทยอย่างมีประสิทธิภาพ พัฒนา กระบวนการคิดอย่างมีระบบร่วมกับการสื่อสารอย่างสร้างสรรค์โดยมีศิลปะในการฟังและการอ่านอย่างมีวิจารณญาณ มีทักษะในการพูดและการเขียนทางวิชาการอย่างมี",
    //   },
    //   {
    //     // กลุ่มวิชาบูรณาการ
    //     curriculum_id: 1,
    //     subject_group_id: 3,
    //     subject_code: "GEBIN101",
    //     subject_name_th: "กระบวนการคิดและการแก้ปัญหา",
    //     subject_name_en: "Process of Thinking and Problem Solving",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาแนวคิด ทฤษฎี เทคนิคและกระบวนการพัฒนาการฝึกคิดแบบต่างๆ หลักการใช้ เหตุผล แรงบันดาลใจส่งเสริมความคิดโดยใช้ภูมิปัญญาท้องถิ่นและภูมิปัญญาไทยนวัตกรรมและเทคโนโลยีสมัยใหม่เป็นกรณีศึกษา",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 3,
    //     subject_code: "GEBIN102",
    //     subject_name_th: "นวัตกรรมและเทคโนโลยี",
    //     subject_name_en: "Innovation and Technology",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาการเปลี่ยนแปลงทางสังคมและวิวัฒนาการทางด้านวิทยาศาสตร์และเทคโนโลยี กระบวนการสร้างนวัตกรรมและเทคโนโลยี ความสัมพันธ์ระหว่างมนุษย์ สังคม นวัตกรรม เทคโนโลยีและสิ่งแวดล้อม ผลกระทบของนวัตกรรมและเทคโนโลยีต่อ สังคมและสิ่งแวดล้อม ประเด็นร่วมสมัยในด้านวิทยาศาสตร์ นวัตกรรม และเทคโนโลยี เพื่ออนาคต ฝึกออกแบบนวัตกรรม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 3,
    //     subject_code: "GEBIN103",
    //     subject_name_th: "ศิลปะการใช้ชีวิต",
    //     subject_name_en: "Art of Living",
    //     subject_credit: 3,
    //     subject_description:
    //       "วิทยาศาสตร์และจริยธรรมในชีวิต กระบวนการพัฒนาปัญญาเพื่อแก้ไขปัญหาใน ชีวิตประจําวันและสามารถแสวงหาความสุขอย่างยั่งยืน การฝึกสมอง การจัดการ อารมณ์ การเข้าใจและเห็นคุณค่าในตัวเอง บุคลิกภาพและการปรับตัว การต่อต้าน การทุจริต พฤติกรรมสังคมสมัยใหม่ การประยุกต์ใช้เทคโนโลยีสารสนเทศกับ กรณีศึกษา",
    //   },
    //   {
    //     // กลุ่มวิชาสังคมศาสตร์และมนุษย์ศาสตร์
    //     curriculum_id: 1,
    //     subject_group_id: 4,
    //     subject_code: "GEBSO101",
    //     subject_name_th: "ปรัชญาเศรษฐกิจพอเพียงและภูมิปัญญาในการดำเนินชีวิต",
    //     subject_name_en: "Sufficiency Economy and Wisdom of Living",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาปรัชญาของเศรษฐกิจพอเพียงและการประยุกต์ใช้ หลักการทรงงานในพระบาท สมเด็จพระเจ้าอยู่หัวฯ โครงการอันเนื่องจากพระราชดำริ หลักธรรมาภิบาล ภูมิปัญญา การคิดและการบริหารจัดการชีวิตอย่างรู้เท่าทันการเปลี่ยนแปลงของสังคมไทยและ กระแสสังคมโลก การบูรณาการวัฒนธรรมที่หลากหลายสู่การดำเนินชีวิต การมีจิต สาธารณะและรักษ์สิ่งแวดล้อม การอยู่ร่วมกันในสังคมอย่างมีความสุขบนพื้นฐาน คุณธรรม จริยธรรม และหลักการของเศรษฐกิจพอเพียง",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 4,
    //     subject_code: "GEBSO102",
    //     subject_name_th: "การพัฒนาคุณภาพชีวิตและสังคม",
    //     subject_name_en: "Life and Social Skills",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับปรัชญา คุณค่าแห่งความเป็นมนุษย์ และหลักธรรมในการดำรงชีวิต การ พัฒนาความคิด เจตคติ บทบาท หน้าที่ และความรับผิดชอบต่อตนเองและผู้อื่น การมี ส่วนร่วมในกิจกรรมทางสังคมและวัฒนธรรมไทย การมีจิตสำนึกต่อส่วนรวม ศึกษาวิธี จัดการกับภาวะอารมณ์ และสร้างสัมพันธภาพ การทํางานเป็นทีม การสร้างผลิตผลในการทำงาน และจรรยาบรรณวิชาชีพ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 4,
    //     subject_code: "GEBSO103",
    //     subject_name_th: "สังคม เศรษฐกิจ การเมือง และกฎหมาย",
    //     subject_name_en: "Society, Economy, Politics and Law",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาประวัติศาสตร์ไทย ระบบสังคม วัฒนธรรม เศรษฐกิจและการเมืองไทย แนวโน้ม การเปลี่ยนแปลงทางสังคม เศรษฐกิจ การบริหารจัดการ และพฤติกรรมการเมืองไทย วิเคราะห์สัมพันธภาพระหว่างการเมืองกับปัจจัยทางสังคม เศรษฐกิจสำรวจปัญหาที่ เกี่ยวข้องในยุคของการเปลี่ยนแปลง สังคมกับการเมืองและกฎหมาย บทบาท ความรับผิดชอบ การมีส่วนร่วมต่อสังคม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 4,
    //     subject_code: "GEBSO104",
    //     subject_name_th: "มนุษยสัมพันธ์",
    //     subject_name_en: "Human Relations",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับธรรมชาติและพฤติกรรมของมนุษย์ ทฤษฎีที่เกี่ยวกับมนุษยสัมพันธ์ การใช้ ในชีวิตประจำวัน การทํางานและการเป็นผู้นำ พื้นฐานวัฒนธรรมไทยและสากล การสื่อสารเพื่อสร้างมนุษยสัมพันธ์ตาม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 4,
    //     subject_code: "GEBSO105",
    //     subject_name_th: "ภูมิสังคมวัฒนธรรมอาเซียน",
    //     subject_name_en: "Social Geography and Culture of ASEAN",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาข้อมูลทั่วไปเกี่ยวกับประเทศในกลุ่มอาเซียน ประวัติและความสำคัญของประชาคม อาเซียน ความร่วมมือของประเทศในกลุ่มอาเซียน ได้แก่ ด้านการเมืองและความมั่นคง ด้านเศรษฐกิจ ด้านสังคมและวัฒนธรรม ผลกระทบของการรวมกลุ่ม ตลอดจนปัญหาและ อุปสรรค",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 4,
    //     subject_code: "GEBSO106",
    //     subject_name_th: "จิตวิทยาเพื่อการดำเนินชีวิตและการทำงาน",
    //     subject_name_en: "Psychology for Living and Work",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาความรู้เบื้องต้นเกี่ยวกับจิตวิทยาเพื่อการดำรงชีวิต การจัดการอารมณ์ ความเครียด และสุขภาพจิต การเข้าใจและเห็นคุณค่าในตัวเอง แรงจูงใจในการเรียนรู้และการ ทำงาน สัมพันธภาพในการทำงาน การบริหารความขัดแย้ง ตลอดจนการปรับตัวในสังคม และการทำงาน เพื่อที่จะสามารถใช้ชีวิตในสังคมและการประกอบอาชีพได้อย่างมีความสุข",
    //   },
    //   {
    //     // กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์
    //     curriculum_id: 1,
    //     subject_group_id: 5,
    //     subject_code: "GEBSC101",
    //     subject_name_th: "คณิตศาสตร์และสถิติในชีวิตประจำวัน",
    //     subject_name_en: "Mathematics and Statistics in Daily Life",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับกระบวนการตัดสินโดยใช้ตรรกศาสตร์ คณิตศาสตร์การเงินและเบี้ยประกัน นำความรู้ทางคณิตศาสตร์และสถิติเพื่อใช้งานประจำวัน และนำโปรแกรมคอมพิวเตอร์มาช่วยประมวลผลทางคณิตศาสตร์และสถิติ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 5,
    //     subject_code: "GEBSC102",
    //     subject_name_th: "เทคโนโลยีสารสนเทศที่จำเป็นในชีวิตประจำวัน",
    //     subject_name_en: "Necessary Information  Technology in Daily  Life",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาความหมาย ความสำคัญ องค์ประกอบของเทคโนโลยีสารสนเทศ เครือข่าย อินเทอร์เน็ต สื่อสังคมออนไลน์ (Social Network) พาณิชย์อิเล็กทรอนิกส์ กฎหมาย การกระทำความผิดเกี่ยวกับคอมพิวเตอร์ การละเมิดลิขสิทธิ์ ทรัพย์สินทางปัญญา ภัย คุกคามความปลอดภัยในการใช้อินเทอร์เน็ต การสืบค้นข้อมูลทางอินเทอร์เน็ต การใช้ บริการโปรแกรมทางอินเทอร์เน็ต เทคโนโลยีสื่อประสมและการใช้โปรแกรมสำเร็จรูป เบื้องต้นที่จำเป็นในปัจจุบัน",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 5,
    //     subject_code: "GEBSC103",
    //     subject_name_th: "การคิดและการตัดสินใจเชิงวิทยาศาสตร์",
    //     subject_name_en: "Scientific Thinking and Decision Making",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับกระบวนการคิด การแสวงหาความรู้ทางวิทยาศาสตร์ การวิเคราะห์ข้อมูล ข่าวสารและการให้เหตุผล กระบวนการตัดสินใจโดยใช้ตรรกศาสตร์ การประยุกต์ใช้ หลักการคิดทางวิทยาศาสตร์ในชีวิตประจำวัน",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 5,
    //     subject_code: "GEBSC104",
    //     subject_name_th:
    //       "การสร้างกระบวนการทางวิทยาศาสตร์เพื่อทำงานวิจัย และการสร้างนวัตกรรม",
    //     subject_name_en:
    //       "Creation of Scientific Methods for Research and Innovation",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและพัฒนาทักษะทางด้านการหาข้อมูล วิเคราะห์และสรุปผล โดยใช้กระบวนการทางด้านวิทยาศาสตร์เพื่อเตรียมความพร้อมให้กับผู้เรียนในการนำทักษะไปประยุกต์ใช้ใน การวิจัยหรือสร้างสรรค์นวัตกรรมต่อไป",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 5,
    //     subject_code: "GEBSC105",
    //     subject_name_th: "วิทยาศาสตร์เพื่อสุขภาพ",
    //     subject_name_en: "Science for Health",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับการพัฒนาวิทยาศาสตร์และเทคโนโลยี การใช้สารเคมีในชีวิตประจำวัน และผลกระทบของสารเคมีต่อสิ่งแวดล้อม อาหารเพื่อสุขภาพ โรคสำคัญที่มีผลกระทบ ทางสังคมและการป้องกัน แนวคิดการสร้างเสริมสุขภาพแบบองค์รวม ความก้าวหน้าทาง วิทยาศาสตร์ที่มีต่อมนุษย์ สภาพแวดล้อม สังคม การเมืองและวัฒนธรรม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 5,
    //     subject_code: "GEBSC106",
    //     subject_name_th: "สิ่งแวดล้อมกับการพัฒนา",
    //     subject_name_en: "Environment and Development",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับทรัพยากรธรรมชาติและสิ่งแวดล้อม ความสัมพันธ์ระหว่างมนุษย์กับ สิ่งแวดล้อม ปัจจัยที่มีผลกระทบต่อสิ่งแวดล้อม ปัญหาสิ่งแวดล้อมในปัจจุบัน แนวทางการใช้ทรัพยากรธรรมชาติและการรักษาสิ่งแวดล้อมอย่างยั่งยืนบนพื้นฐานวิทยาศาสตร์ นวัตกรรมเทคโนโลยีสมัยใหม่เพื่อการรักษ์ธรรมชาติและสิ่งแวดล้อม คุณธรรมและจริยธรรมในการใช้ทรัพยากรธรรมชาติ",
    //   },
    //   {
    //     // กลุ่มวิชาพื้นฐานทางวิทยาศาสตร์และคณิตศาสตร์
    //     curriculum_id: 1,
    //     subject_group_id: 6,
    //     subject_code: "FUNMA105",
    //     subject_name_th: "แคลคูลัส 1 สำหรับวิศวกร",
    //     subject_name_en: "Calculus 1 for Engineers",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับฟังก์ชัน ลิมิตและความต่อเนื่อง การหาอนุพันธ์ของฟังก์ชันค่าจริง รูปแบบยังไม่กำหนด การประยุกต์ของอนุพันธ์ การหาปริพันธ์ของฟังก์ชันค่าจริง เทคนิคการหาปริพันธ์ การประยุกต์ของปริพันธ์จำกัดเขต",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 6,
    //     subject_code: "FUNMA106",
    //     subject_name_th: "แคลคูลัส 2 สำหรับวิศวกร",
    //     subject_name_en: "Calculus 2 for Engineers",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับพิกัดเชิงขั้วและสมการอิงตัวแปรเสริม เวกเตอร์ในปริภูมิสามมิติ ฟังก์ชันค่าเวกเตอร์ของตัวแปรจริง การหาอนุพันธ์และการหาปริพันธ์ของฟังก์ชันค่า เวกเตอร์ของตัวแปรจริงและการประยุกต์ เส้น ระนาบ และผิวในปริภูมิสามมิติ แคลคูลัสของฟังก์ชันค่าจริงของสองตัวแปรและการประยุกต์ แคลคูลัสของฟังก์ชันค่าจริงของหลายตัวแปรและการประยุกต์",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 6,
    //     subject_code: "FUNSC101",
    //     subject_name_th: "ฟิสิกส์ 1 สำหรับวิศวกร",
    //     subject_name_en: "Physics 1 for Engineers",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับกลศาสตร์ของอนุภาคและวัตถุแข็งเกร็ง สมบัติของสสาร กลศาสตร์ ของไหล ความร้อน การสั่นและคลื่น โดยการสอนจะเน้นที่หลักการที่สำคัญทางฟิสิกส์ การสร้างทักษะในการวิเคราะห์และคำนวณแก้ปัญหาทางวิศวกรรม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 6,
    //     subject_code: "FUNSC102",
    //     subject_name_th: "ปฏิบัติการฟิสิกส์ 1 สำหรับวิศวกร",
    //     subject_name_en: "Physics Laboratory 1 for Engineers",
    //     subject_credit: 1,
    //     subject_description:
    //       "ปฏิบัติการเกี่ยวกับการทดลองที่เกี่ยวข้องกับเทคนิคพื้นฐานทางฟิสิกส์ประกอบ ด้วยการ ทดลองทางกลศาสตร์ของอนุภาคและวัตถุแข็งเกร็ง สมบัติเชิงกลของสสาร กลศาสตร์ ของไหล ความร้อน การสั่นและคลื่น โดยเนื้อหาจะสอดคล้องกับวิชาฟิสิกส์ 1 สําหรับ วิศวกร",
    //   },
    //   {
    //     // กลุ่มวิชาพื้นฐานทางวิศวกรรมศาสตร์
    //     curriculum_id: 1,
    //     subject_group_id: 7,
    //     subject_code: "ENGCC301",
    //     subject_name_th: "เขียนแบบวิศวกรรม",
    //     subject_name_en: "Engineering Drawing",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเขียนแบบพื้นฐานเบื้องต้น การมองภาพและการเขียนภาพออร์โธกราฟิกภาพช่ววยการเขียนภาพสามมิติ การกำหนดขนาดและพิกัดความเผื่อภาพตัด แผ่นคลี่ การสเก็ตภาพด้วยมือ การเขียนภาพแยกชิ้นและภาพประกอบ การ ใช้โปรแกรมคอมพิวเตอร์ช่วยในการเขียนแบบและออกแบบ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 7,
    //     subject_code: "ENGCC302",
    //     subject_name_th: "กลศาสตร์วิศวกรรม",
    //     subject_name_en: "Engineering Mechanics",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาหลักการเบื้องต้นของกลศาสตร์ แรงและโมเมนต์ของแรง ระบบแรงและผลลัพธ์ ของระบบแรง การสมดุลและการเขียนแผนภาพวัตถุอิสระ แรงภายใต้ของไหลที่อยู่นิ่ง แรงในชิ้นส่วนของโครงสร้าง โครงกรอบและเครื่องจักรกลคิเนแมติกส์และคิเนติกส์ ของอนุภาคและวัตถุเกร็ง กฎข้อที่สองของนิวตัน งานและพลังงาน การดลและโมเมนต์ตัม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 7,
    //     subject_code: "ENGCC303",
    //     subject_name_th: "วัสดุวิศวกรรม",
    //     subject_name_en: "Engineering Materials",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับโครงสร้าง คุณสมบัติ กระบวนการผลิตและการประยุกต์ใช้วัสดุ วิศวกรรม เช่น โลหะ โพลิเมอร์ พลาสติก ยางมะตอย ไม้ คอนกรีต เซรามิค และวัสดุ เชิงประกอบ แผนภาพสมดุลเฟสและการแปลความหมาย การทดสอบสมบัติต่างๆ ของวัสดุวิศวกรรมและการแปลความหมายสมบัติทางกลและการเสียหายของวัสดุ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 7,
    //     subject_code: "ENGCC304",
    //     subject_name_th: "การเขียนโปรแกรมคอมพิวเตอร์",
    //     subject_name_en: "Computer Programming",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับแนวคิดและองค์ประกอบของระบบคอมพิวเตอร์ ปฏิสัมพันธ์ (Interaction) ระหว่างฮาร์ดแวร์และซอฟต์แวร์ ภาษาที่ใช้เขียนโปรแกรม ในปัจจุบัน",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 7,
    //     subject_code: "ENGEE101",
    //     subject_name_th: "วงจรไฟฟ้า",
    //     subject_name_en: "Electric Circuits",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับองค์ประกอบวงจรไฟฟ้า การวิเคราะห์วงจรด้วยวิธีโนดและวิธีเมช ทฤษฎีวงจรไฟฟ้า ค่าความต้านทาน ค่าความเหนี่ยวนำและค่าความจุ วงจรอันดับหนึ่ง และวงจรอันดับสอง เฟสเซอร์ไดอะแกรม วงจรกำลังกระแสสลับ ระบบไฟฟ้าสามเฟส",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 7,
    //     subject_code: "ENGEE102",
    //     subject_name_th: "คณิตศาสตร์วิศวกรรมไฟฟ้า",
    //     subject_name_en: "Electrical Engineering Mathematics",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับการใช้งานของตัวแปรเชิงซ้อน การวิเคราะห์เวกเตอร์และการ ประยุกต์ใช้ ทฤษฎีของอนุกรมฟูเรียร์ การแปลงฟูเรียร์ และการนำไปใช้วิเคราะห์รูป คลื่นไฟฟ้า ทฤษฎีการแปลงลาปลาซ และการนำไปใช้วิเคราะห์วงจรไฟฟ้า",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 7,
    //     subject_code: "ENGEE105",
    //     subject_name_th: "การฝึกเบื้องต้นทางวิศวกรรม",
    //     subject_name_en: "Fundamental of Engineering Training",
    //     subject_credit: 1,
    //     subject_description:
    //       "ฝึกปฏิบัติงานพื้นฐานทางด้านวิศวกรรม ที่เกี่ยวข้องกับเครื่องมือวัดเครื่องมือกลพื้นฐาน การเชื่อมประสาน เครื่องมือทั่วไป และหลักการปฏิบัติงานพื้นฐานทางด้านวิศวกรรมอย่างปลอดภัย",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 7,
    //     subject_code: "ENGEE106",
    //     subject_name_th: "เครื่องมือวัดและการวัดทางไฟฟ้า",
    //     subject_name_en: "Electrical Instruments and Measurements",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับหน่วยและมาตรฐานการวัดทางไฟฟ้า ประเภทและคุณลักษะของเครื่องมือวัด การวิเคราะห์การวัด การวัดกระแสและแรงดันไฟฟ้ากระแสตรง และไฟฟ้ากระแสสลับโดยใช้เครื่องวัดแบบอนาล็อกและแบบดิจิทัล การวัดกำลัง ตัวประกอบกำลังและพลังงานไฟฟ้า การวัดค่าความต้านทาน ค่าความเหนี่ยวนำและค่าความจุไฟฟ้า การวัดความถี่และคาบหรือช่วงเวลา สัญญาณรบกวนการแปลงสัญญาณ และการสอบเทียบเครื่องมือวัด",
    //   },
    //   {
    //     // กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์
    //     curriculum_id: 1,
    //     subject_group_id: 8,
    //     subject_code: "ENGEL105",
    //     subject_name_th: "อิเล็กทรอนิกส์วิศวกรรม",
    //     subject_name_en: "Engineering Electronics",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับอุปกรณ์เซมิคอนดักเตอร์ คุณลักษณะทางกระแส-แรงดัน และคุณลักษณะทางความถี่ การวิเคราะห์และออกแบบวงจรไดโอด การวิเคราะห์และ การออกแบบของวงจรทรานซิสเตอร์แบบ บีเจที, MOS, CMOS และ BiCMOS, OPAMP และการประยุกต์ใช้งาน โมดูลแหล่งจ่ายไฟ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 8,
    //     subject_code: "ENGEL106",
    //     subject_name_th: "วงจรดิจิทัล",
    //     subject_name_en: "Digital Circuits",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับระบบตัวเลขและรหัส พีชคณิตบูลีน การลดทอนฟังก์ชัน ลอจิก การออกแบบวงจรลอจิกคอมไบเนชัน การออกแบบวงจรซีเควนเชียล หน่วย คำนวณและลอจิกด้านคณิตศาสตร์ในระบบดิจิทัล การแปลงสัญญาณดิจิทัลเป็นแอ นะล็อก และแอนะล็อกเป็นดิจิทัล การประยุกต์ใช้วงจรดิจิทัลในงานอุตสาหกรรม อุปกรณ์ดิจิทัลสมัยใหม่",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 8,
    //     subject_code: "ENGCE101",
    //     subject_name_th: "งานฝึกพื้นฐานทางวิศวกรรมคอมพิวเตอร์",
    //     subject_name_en: "Basic Computer Engineering Skills",
    //     subject_credit: 1,
    //     subject_description:
    //       "ฝึกปฏิบัติการพื้นฐานทางด้านวิศวกรรมคอมพิวเตอร์ ที่เกี่ยวกับเครื่องมือวัด เครื่องมือ กลพื้นฐาน เทคนิคการใช้อุปกรณ์ ความปลอดภัยในการปฏิบัติงาน จริยธรรมและ จรรยาบรรณทางวิชาชีพ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 8,
    //     subject_code: "ENGCE102",
    //     subject_name_th: "คณิตศาสตร์พื้นฐานสำหรับวิศวกรรมคอมพิวเตอร์",
    //     subject_name_en: "Mathematical Foundations for Computer Engineering",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับคณิตศาสตร์พื้นฐานที่จำเป็นสำหรับงานทางวิศวกรรมคอมพิวเตอร์ ประกอบด้วยหัวข้อในวิยุตคณิต ได้แก่ ฟังก์ชัน ความสัมพันธ์ เซต พีชคณิตบูลีน ตรรกะลำดับที่หนึ่ง การพิสูจน์ทางคณิตศาสตร์ การนับเบื้องต้น การวนซ้ำ และการ เรียกซ้ำ หัวข้อในพีชคณิตเชิงเส้น ได้แก่ ฐาน ปริภูมิเวกเตอร์ การตั้งฉาก การเขียน ระบบสมการเชิงเส้นในรูปแบบเมทริกซ์ เมทริกซ์ผกผัน การแปลงเชิงเส้น และการแก้ ระบบสมการเชิงเส้นโดยใช้เมทริกซ์ และหัวข้อในเรื่องความน่าจะเป็นและสถิติ ได้แก่ ตัวแปรสุ่มวิยุต ตัวแปรสุ่มต่อเนื่อง ค่าคาดหมาย และกระบวนการสโตแคสติก รวมถึง การใช้ซอฟต์แวร์เชิงคณิตศาสตร์ และการประยุกต์ใช้เพื่อแก้ปัญหาในเชิงวิศวกรรม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 8,
    //     subject_code: "ENGCE104",
    //     subject_name_th: "โครงสร้างและสถาปัตยกรรมคอมพิวเตอร์",
    //     subject_name_en: "Computer Architecture and Organization",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเกี่ยวกับ สถาปัตยกรรมของคอมพิวเตอร์ หน่วยประมวลผล ชุดคำสั่ง ระบบหน่วยความจำ หน่วยควบคุมการทำงานและระบบบัส การ จัดการข้อมูลตัวเลข การเชื่อมต่อและสื่อสารกับช่องรับส่งข้อมูล การใช้ อุปกรณ์สนันสนุน การวัดประสิทธิภาพ ตัวประมวลผลแบบหลายตัว การกระจายการ ทำงาน",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 8,
    //     subject_code: "ENGCE107",
    //     subject_name_th: "การออกแบบและการอินเตอร์เฟสไมโครคอนโทรลเลอร์",
    //     subject_name_en: "Microcontroller System Design and Interface",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ สถาปัตยกรรม และโครงสร้างของไมโครคอนโทรลเลอร์ ชุดของคำสั่งเครื่อง การต่อประสานและการจัดการหน่วยความจำ การต่อประสาน และการจัดการการรับเข้าและการส่งออก การขัดจังหวะ ภาษาเครื่องและ ภาษาแอสเซมบลี การออกแบบฮาร์ดแวร์และการเขียนโปรแกรมไมโครคอนโทรลเลอร์ การประยุกต์ของไมโครคอนโทรลเลอร์ รวมถึงการประยุกต์ใช้สําหรับอินเทอร์เน็ตในทุกสรรพสิ่ง",
    //   },
    //   {
    //     // กลุ่มโครงสร้างพื้นฐานของระบบ
    //     curriculum_id: 1,
    //     subject_group_id: 9,
    //     subject_code: "ENGCE103",
    //     subject_name_th: "โครงสร้างข้อมูลและขั้นตอนวิธี",
    //     subject_name_en: "Data Structures and Algorithms",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเกี่ยวกับการแทนข้อมูล โครงสร้างและการออกแบบข้อมูล แบบอาร์เรย์ สแต็ก คิว ลิงค์ลิสต์ ต้นไม้ กราฟ การจัดเรียงข้อมูล การค้นหาข้อมูล วิเคราะห์ขั้นตอนวิธี",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 9,
    //     subject_code: "ENGCE105",
    //     subject_name_th: "ระบบปฏิบัติการ",
    //     subject_name_en: "Operating Systems",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเกี่ยวกับระบบปฏิบัติการของคอมพิวเตอร์ ชนิดของ ระบบปฏิบัติการของคอมพิวเตอร์ การแบ่งปันทรัพยากร การจัดการหน่วยประมวลผล การจัดการโพรเซสและเทรด การจัดการหน่วยความจำ การจัดการอุปกรณ์ การแบ่ง ความจำและชุดคำสั่งเป็นส่วนและเป็นหน้า หน่วยความจำเสมือน ขั้นตอนของการจัด ตารางการประเมินผลการทำงาน ปัญหาการติดตาย การป้องกันแหล่งทรัพยากร ความมั่นคงและปลอดภัยของทรัพยากร การศึกษาตัวอย่างเป็นรายๆ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 9,
    //     subject_code: "ENGCE106",
    //     subject_name_th: "การสื่อสารข้อมูลและเครือข่าย",
    //     subject_name_en: "Data Communication and Networks",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับพื้นฐานของการสื่อสารข้อมูล สถาปัตยกรรมเครือข่าย คอมพิวเตอร์ เน้น Physical Datalink layer ทฤษฎีเครือข่ายท้องถิ่น เครือข่ายแบบ วงกว้าง เครือข่ายแบบเสมือน โปรโตคอล TCP/IP การอ้างแอดเดรสแบบ IP การทํา ซับเนต การค้นหาเส้นทางแบบต่างๆ การตั้งค่าอุปกรณ์โดยใช้เราท์เตอร์และสวิทช์ชิง ในการให้บริการสื่อสารข้อมูลแบบมีสายและไร้สาย โดยอาศัยโปรแกรมจำลองสถานการณ์",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 9,
    //     subject_code: "ENGCE109",
    //     subject_name_th: "เครือข่ายคอมพิวเตอร์",
    //     subject_name_en: "Computer Networks",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเกี่ยวกับโปรโตคอล TCP/IP โดยอาศัยโปรแกรมจำลอง สถานการณ์ การนำใช้งานเทคโนโลยี IPV4 ร่วมกับ IPV6 ออกแบบเครือข่ายระดับ campus การสำรองระบบเครือข่าย การให้บริการ Server ต่างๆ บนระบบเครือข่าย เช่น DNS, Mail, Web, VoIP, Proxy, และอื่นๆ ที่จำเป็นสําหรับหน่วยงาน รวมถึงการ ประยุกต์ใช้เครือข่ายคอมพิวเตอร์สําหรับอินเทอร์เน็ตในทุกสรรพสิ่ง",
    //   },
    //   {
    //     //  กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์
    //     curriculum_id: 1,
    //     subject_group_id: 10,
    //     subject_code: "ENGCE108",
    //     subject_name_th: "การวิเคราะห์และออกแบบระบบ",
    //     subject_name_en: "System Analysis and Design",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับ ระบบสารสนเทศ วงจรการพัฒนาระบบ วิธีวิเคราะห์ระบบ การศึกษา ความเป็นไปได้ของระบบ ระบบธุรกิจ แผนภาพแสดงการไหลของข้อมูล คำอธิบาย การประมวลผล ผังแสดงการตัดสินใจ แผนภาพแสดงความสัมพันธ์ของข้อมูล พจนานุกรมข้อมูล ผังโครงสร้าง การออกแบบส่วนรับข้อมูล การออกแบบส่วน แสดงผลข้อมูล การออกแบบส่วนติดต่อกับผู้ใช้ การบริหารโครงการ การทําเอกสารประกอบ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 10,
    //     subject_code: "ENGCE110",
    //     subject_name_th: "ความมั่นคงปลอดภัยของคอมพิวเตอร์และข้อมูล",
    //     subject_name_en: "Computer and Data Security",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ หลักการความมั่นคงปลอดภัยของข้อมูลในระบบ คอมพิวเตอร์ วิทยาการเข้ารหัสลับ การเข้าและถอดรหัสลับแบบต่างๆ อัลกอริทึมใน การเข้ารหัสลับ การระบุตัวตน การวิเคราะห์คุณลักษณะสมบัติของข้อมูลสำหรับลด ความซับซ้อนขบวนการเข้ารหัสลับ การลดเวลาและภาระการประมวลผลเข้ารหัสลับ การฝังสัญญาณลายน้ำ และความปลอดภัยในการสื่อสารข้อมูล รวมถึงความปลอดภัย ของข้อมูลในอินเทอร์เน็ตในทุกสรรพสิ่ง",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 10,
    //     subject_code: "ENGCE112",
    //     subject_name_th: "การออกแบบและพัฒนาซอฟต์แวร์",
    //     subject_name_en: "Software Design and Development",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเกี่ยวกับ แบบจำลองข้อมูล และระบบฐานข้อมูล การเลือกใช้ เครื่องมือในการพัฒนาซอฟต์แวร์ มาตรฐานของซอฟต์แวร์ และการจัดการข้อจำกัด เชิงวิศวกรรม กระบวนทัศน์การเขียนโปรแกรมและเทคนิคการเลือกคำสั่งในการแก้ไขปัญหาในเชิงโปรแกรมรูปแบบการเขียนโปรแกรมเชิงโครงสร้าง แบบจำลองการไม่ประสานกันสำหรับการเขียนโปรแกรมที่มีการประมวลผลร่วมกัน การออกแบบและ เขียนโปรแกรมเชิงวัตถุ กระบวนการผลิตซอฟต์แวร์ กระบวนการทดสอบและคุณภาพ ของซอฟต์แวร์ การสร้างหน่วยทดสอบ รวมถึงการประยุกต์ใช้งานสำหรับอินเทอร์เน็ต ในทุกสรรพสิ่ง",
    //   },
    //   {
    //     // กลุ่มเทคโนโลยีเพื่องานประยุกต์
    //     curriculum_id: 1,
    //     subject_group_id: 11,
    //     subject_code: "ENGCE111",
    //     subject_name_th: "วิศวกรรมฐานข้อมูลและข้อมูลขนาดใหญ่เบื้องต้น",
    //     subject_name_en: "Introduction to Database and Big Data Engineering",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ แนะนำเกี่ยวกับฐานข้อมูลสมัยใหม่ ข้อมูลขนาดใหญ่ และ การใช้งานภาษา SQL/NoSQL/NewSQL สตอร์โพรซีเดอร์ และ ทริกเกอร์ การออกแบบและสร้างฐานข้อมูล การทำความสะอาดข้อมูลและการนำข้อมูลเข้า การสำรองข้อมูลและการคืนสภาพข้อมูล การจัดการทรานแซคชันและการทำงานพร้อม กัน การประมวลผลข้อมูลขนาดใหญ่ และขยายขีดความสามารถ ความมั่นคงปลอดภัย ของข้อมูล การวิเคราะห์ข้อมูลด้วยการเรียนรู้ของเครื่อง รวมถึงการประยุกต์ใช้งาน สำหรับอินเทอร์เน็ตในทุกสรรพสิ่ง",
    //   },
    //   {
    //     // กลุ่มฝึกวิชาชีพและโครงงาน
    //     curriculum_id: 1,
    //     subject_group_id: 12,
    //     subject_code: "ENGCE113",
    //     subject_name_th: "การเตรียมโครงงานวิศวกรรมคอมพิวเตอร์",
    //     subject_name_en: "Computer Engineering Pre-Project",
    //     subject_credit: 1,
    //     subject_description:
    //       "ฝึกปฎิบัติการเกี่ยวกับการค้นคว้าบทความ งานวิจัย สิ่งประดิษฐ์ นวัฒกรรม หรืองานทางวิศวกรรมคอมพิวเตอร์ การตั้งชื่อโครงงาน วิธีการเขียนรายงาน ความเป็นมาของปัญหา วัตถุประสงค์ ขอบเขต ขั้นตอนและแผนการดำเนินงาน การจัดเตรียมวัสดุและอุปกรณ์ การรวบรวมและวิเคราะห์ข้อมูล การรายงานความก้าวหน้า และการนำเสนอโครงงาน",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 12,
    //     subject_code: "ENGCE114",
    //     subject_name_th: "โครงงานวิศวกรรมคอมพิวเตอร์",
    //     subject_name_en: "Computer Engineering Project",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฎิบัติการเกี่ยวกับการทบทวนชื่อโครงงาน ความเป็นมาของปัญหา วัตถุประสงค์ ขอบเขต การเตรียมโครงงานวิศวกรรมคอมพิวเตอร์ ศึกษาทฤษฎีที่เกี่ยวข้อง แนวทางการแก้ปัญหา ปฏิบัติการตามขั้นตอนและแผนการดำเนินงาน รวบรวมและวิเคราะห์ข้อมูล สรุปผล จัดทำรายงาน และนำเสนอโครงงานต่อคณะกรรมการสอบโครงงาน",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 12,
    //     subject_code: "ENGCE115",
    //     subject_name_th: "สหกิจศึกษาทางวิศวกรรมคอมพิวเตอร์",
    //     subject_name_en: "Co-operative Education in Computer Engineering",
    //     subject_credit: 6,
    //     subject_description:
    //       "ฝึกปฏิบัติการฝึกงานโดยนำความรู้จากสาขาวิศวกรรมคอมพิวเตอร์ ไปประยุกต์ใช้ใน สถานประกอบการทางด้านวิศวกรรมคอมพิวเตอร์อย่างมีระบบ โดยมีวิศวกรที่ปรึกษา หรือผู้ชำนาญการของสถานประกอบการจริงทำหน้าที่ควบคุมดูแล และนักศึกษา จะต้องมีโครงงานและหน้าที่รับผิดชอบที่แน่นอนตลอดระยะเวลา 1 ภาคการศึกษา ปกติ หรือไม่น้อยกว่า 15 สัปดาห์ ทั้งนี้นักศึกษาจะต้องสามารถสรุปโครงการและ หน้าที่ที่ได้รับมอบหมายที่ก่อให้เกิดประโยชน์ต่อสถานประกอบการนั้น ๆ อย่างเป็น รูปธรรม และมีการจัดทำรายงาน การปฏิบัติงาน มีการประเมินผลงานร่วมกันจากทาง สถานประกอบการและคณาจารย์ เพื่อให้นักศึกษาได้มีประสบการณ์จริงก่อนสําเร็จการศีกษา หมายเหตุ : 1. นักศึกษาต้องฝึกงาน ณ สถานประกอบการตลอดระยะเวลา 1 ภาคการศึกษาปกติ 2. การประเมินผลนักศึกษา ให้ค่าระดับคะแนนเป็น S (Satisfactory) พ.จ. (พอใจ) และ U (Unsatisfactory) ม.จ. (ไม่พอใจ)",
    //   },
    //   {
    //     // กลุ่มวิชาเครือข่ายคอมพิวเตอร์
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE130",
    //     subject_name_th: "การติดตั้งและบำรุงรักษาสายสัญญาณเครือข่ายคอมพิวเตอร์",
    //     subject_name_en: "Network Cabling Installation and Maintenance",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการชนิดของสายแบบต่างในระบบเครือข่าย การต่อสายแบบต่างๆ ระบบจายสาย การออกแบบคู่สายสมาชิก การออกแบบการกระจ่ายสายเคเบิลเหนือศีรษะ และใต้ดิน การบํารุงรักษา งานทางสายตอนนอก สายเคเบิลเส้นใยแก้วนำแสง มาตรฐาน การติดตั้งสายสัญญาณแบบต่าง ๆ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE131",
    //     subject_name_th: "การสื่อสารเชิงดิจิทัล",
    //     subject_name_en: "Digital Communication",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับระบบการสื่อสารข้อมูลเชิงดิจิทัล สื่อกลางและสัญญาณที่ใช้ในการส่งผ่านข้อมูล ทฤษฏีการสุ่มศัญญาณ ศัญญาณและระบบ มอดูเลทชั่น การวิเคราะห์การแปลง สัญญาณแบบฟูเรียร์ การเข้ารหัสข้อมูล ความปลอดภัยในการสื่อสารข้อมูล และการบีบอัดข้อมูล",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE132",
    //     subject_name_th: "การคำนวณสมรรถนะสูงและสถาปัตยกรรมแบบคลาวด์",
    //     subject_name_en: "High Performance Computing and Cloud Architecture",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ คลัสเตอร์คอมพิวเตอร์ การคำนวณสมรรถนะสูง การประมวลผลแบบขนาน การประมวลผลแบบคลาวด์ การให้บริการโครงสร้างพื้นฐาน การ ให้บริการแพลตฟอร์ม บริการระบบจัดเก็บข้อมูล และการประยุกต์ใช้บริการ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE133",
    //     subject_name_th: "การวัดทดสอบและประเมินประสิทธิภาพของระบบเครือข่าย",
    //     subject_name_en: "Network Testing and Measurement",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการติดตั้งและบำรุงรักษาระบบเครือข่ายเบื้องต้น มาตรฐาน กระบวนการบำรุงรักษาระบบ การวางแผนกระบวนการตรวจสอบ การเฝ้าระวังและแก้ไข ปัญหามาตรฐานการวัดประสิทธิภาพของสัญญาณ มาตรฐานการวัดประสิทธิภาพของ ระบบ การวิเคราะห์ข้อมูลการใช้งานระบบ การออกแบบระบบเครือข่ายพื้นฐานไปจนถึง ระบบเครือข่ายขนาดใหญ่ การจัดการระบบเครือข่ายให้มีเสถียรภาพและพร้อมในการใช้ งานอยู่ตลอดเวลา การประยุกต์ใช้แอปพลิเคชั่นสําหรับการดูและและบริหารจัดการระบบ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE134",
    //     subject_name_th: "การรักษาความปลอดภัยบนระบบเครือข่าย",
    //     subject_name_en: "Network Security",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการรักษาความปลอดภัย เครือข่ายทางกายภาพ กลไกขั้นตอนวิธีการ รักษาความปลอดภัยที่ใช้ภายในเราเตอร์ สวิทช์ การเข้ารหัส/ถอดรหัส การพิสูจน์การ ยืนยันตัวบุคคล การรักษาความปลอดภัย Datacenter ระบบตรวจจับ การบุกรุก การ โจมตี ความปลอดภัยของอินเทอร์เน็ต เครือข่าย มัลแวร์ และอื่น ๆ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE135",
    //     subject_name_th: "การออกแบบและวางแผนการจัดการระบบเครือข่าย",
    //     subject_name_en: "Network Planning and Design",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการ เกี่ยวกับการวางแผนและออกแบบระบบเครือข่ายคอมพิวเตอร์พฤติกรรมการสื่อสารของโปรแกรมประยุกต์ชนิดต่างๆการออกแบบโมเดลสำหรับที่อยู่และการตั้งชื่อ (Addressing, Namning) การเลือกใช้โปรโตคอลเลือกเส้นทาง (Routing Protocols) การออกแบบการบริหารจัดการความปลอดภัย การเลือกใช้เทคโนโลยีของอุปกรณ์เครือข่ายที่เหมาะสม การออกแบบและประมาณราคาระบบโครงข่ายเครือข่าย สำหรับองค์กร",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE136",
    //     subject_name_th: "การใช้งานเครือข่ายโดยกำหนดจากซอฟต์แวร์",
    //     subject_name_en: "Software-Defined Networks",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ เทคโนโลยี SDN (Software defined Networking) สถาปัตยกรรม SDN แนวทางใหม่ในการออกแบบสร้างและบริหารจัดการระบบเครือข่าย แนวคิดพื้นฐานการทำงานของ SDN",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE137",
    //     subject_name_th: "การดูแลระบบยูนิกซ์",
    //     subject_name_en: "Unix System Administration",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการติดตั้ง พื้นฐานคำสั่ง Unix การประมวลผล Text การบริหาร จัดการระบบบัญชีผู้ใช้ การติดตั้ง Application การตั้งค่าระบบเครือข่าย การสร้างระบบ รักษาความปลอดภัยเบื้องต้น ทฤษฎีเทคโนโลยีการบริการบนระบบเครือข่ายโดยระบบ Unix แบบต่าง ๆ เช่น NIS, Quota, Network Storage, Disk Management",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 13,
    //     subject_code: "ENGCE138",
    //     subject_name_th: "การสื่อสารข้อมูลมัลติมีเดียบนระบบเครือข่าย",
    //     subject_name_en: "Multimedia Communication on Network",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเกี่ยวกับ การประมวลผลมัลติมีเดียและเครือข่ายการสื่อสารเทคโนโลยีการสื่อสารมัลติมีเดียบนเครือข่ายอินเทอร์เน็ต ปฏิสัมพันธ์ ของข้อมูลของมัลติมีเดีย เช่น ภาพและเสียงบนระบบเครือข่าย เทคโนโลยีและมาตรฐานการเข้ารหัส ข้อมูลภาพและเสียง คุณลักษณะการรับ-ส่งมัลติมีเดียสตีมมิ่งผ่านระบบเครือข่ายการ สื่อสารข้อมูลมัลติมีเดียแบบ point-to-point และ Multipoint การออกแบบระบบ เครือข่ายรองรับการสื่อสารมัลติมีเดีย",
    //   },
    //   {
    //     // กลุ่มวิชาระบบคอมพิวเตอร์
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE150",
    //     subject_name_th: "อินเตอร์เน็ตในทุกสิ่ง",
    //     subject_name_en: "IoT: Internet of Things",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับเครือข่ายของวัตถุ อุปกรณ์ พาหนะ สิ่งปลูกสร้าง และสิ่งของอื่นๆ ที่มีวงจรอิเล็กทรอนิกส์ ซอฟต์แวร์ เซ็นเซอร์ และการเชื่อมต่อกับเครือข่ายที่ฝังตัวอยู่ การทําให้วัตถุเหล่านั้นสามารถเก็บบันทึกและแลกเปลี่ยนข้อมูลได้ การทําให้วัตถุสามารถรับรู้สภาพแวดล้อมและถูกควบคุมได้จากระยะไกลผ่านโครงสร้างพื้นฐานเครือข่ายที่มีอยู่แล้ว",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE151",
    //     subject_name_th: "ทฤษฎีฟัซซีเซต",
    //     subject_name_en: "Fuzzy Set Theory",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาเกี่ยวกับแนวคิดพื้นฐานทฤษฎีฟัซซีเซต การดำเนินการในฟัซซีเซต เลขคณิตเชิงฟัซซี ความสัมพันธ์ในรูปแบบฟัซซี ทฤษฎีความเป็นไปได้ ฟัซซีลอจิก การประยุกต์ใช้ฟัซซีเซต",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE152",
    //     subject_name_th: "การออกแบบระบบดิจิทัล",
    //     subject_name_en: "Digital Systems Design",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติ ทฤษฎีสวิตชิ่ง การออกแบบระบบดิจิทัล วงจรคอมบิเนชันลอจิก การออกแบบโมดูลของวงจร คอมบิเนชั่นลอจิก องค์ประกอบของหน่วยความจํา วงจรซีเควน เขียลลอจิก",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE153",
    //     subject_name_th: "การสั่งงานด้วยอุปกรณ์พกพาอัจฉริยะเคลื่อนที่",
    //     subject_name_en: "Smart Mobile Control",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปปฏิบัติเกี่ยวกับสถานปัตยกรรมของระบบปฏิบัติการที่ทำงานบนอุปกรณ์พกพาโมดูลเซ็นเซอร์ต่างๆ ที่ทำงานร่วมกัน การรับภาพจากกล้องที่อยู่บนตัวอุปกรณ์พกพา การเขียนโปรแกรมฝังตัวบนอุปกรณ์พกพาเพื่อสั่งงานผ่านโปรโตคอลต่างๆ ในรูปแบบไน้สาย เช่น WiFi, Bluetooth, NFC หรือ อื่นๆ สำหรับการควบคุมฮาร์ดแวร์ให้ทำงานตามเป้าประสงค์",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE154",
    //     subject_name_th: "ปฏิบัติการฮาร์ดแวร์",
    //     subject_name_en: "Hardware Laboratory",
    //     subject_credit: 1,
    //     subject_description:
    //       "ฝึกปฏิบัติการการในเนื้อหาที่เกี่ยวข้องกับการใช้งานเครื่องมือทางด้านวิศวกรรมคอมพิวเตอร์ ปฏิบัติการติดตั้ง ทดสอบใช้งาน และบํารุงรักษา อุปกรณ์ทางด้านวิศวกรรมคอมพิวเตอร์  และอุปกรณ์ทางด้านวิศวกรรมคอมพิวเตอร์ที่เกี่ยวข้องกับอินเทอร์เน็ตในทุกสรรพสิ่ง",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE155",
    //     subject_name_th: "หัวข้อเฉพาะทางวิศวกรรมคอมพิวเตอร์",
    //     subject_name_en: "Selected Topics in Computer Engineering",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติ เรื่องเฉพาะทางวิศวกรรมคอมพิวเตอร์ในระดับปริญญาตรี หัวข้อเปลี่ยนแปลงไปในแต่ละภาคการศึกษา",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE156",
    //     subject_name_th: "การโต้ตอบระหว่างคอมพิวเตอร์กับมนุษย์",
    //     subject_name_en: "Human-Computer Interaction",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับการออกแบบและสร้างส่วนต่อประสานระหว่างหมุษย์กับคอมพิวเตอร์ สถาปัตยกรรมด้านฮาร์ดแวร์กับซอฟต์แวร์เพื่อสถานีงานส่วนบุคคลหลักการเขียนโปรแกรมเชิงวัตถุ การจัดการส่วนแสดงผลแบบปฏิสัมพัธ์และช่องหน้าต่าง",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE157",
    //     subject_name_th: "ระบบสมองกลฝังตัวและอินเทอร์เน็ตในทุกสรรพสิ่ง",
    //     subject_name_en: "Embedded Systems and Internet of Everything",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและปฏิบัติการเกี่ยวกับ สถาปัตยกรรมของระบบฝังตัว หลักการทํางานของ ระบบ ระบบปฏิบัติการของระบบฝังตัว การออกแบบระบบฝังตัวและการโปรแกรมการทํางานร่วมกันระหว่างระบบฝังตัวและระบบอื่นที่ถูกเชื่อมต่อ การสื่อสาร ระบบระหว่างระบบการประหยัดพลังงาน ความปลอดภัย เสถียรภาพ อินเทอร์เน็ตทุกสรรพสิ่ง กษาการประยุก งานทางด้าน อา เฟไอดี RFID) เครือข่ายไร้สาย (Wireless) เซ็นเซอร์ Sensor ล เ อ า เซ็นทรัลย (Wireless sensor network) เครือข่ายอินเทอร์เน็ต ระบบเครือข่ายแบบก้อนเมฆ (Cloud) เทคโนโลยีการสื่อสารระหว่างอุปกรณ์ต่ออุปกรณ์ ( M2M) โดยผ่าน โปรโตคอลการสื่อสารและการทํางานร่วมกันตามมาตรฐาน และระบบรักษาความปลอดภัยดิจิทัล",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE158",
    //     subject_name_th: "การจัดการเทคโนโลยีและนวัตกรรม",
    //     subject_name_en: "Management of Technology and Innovation",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ เทคโนโลยีสารสนเทศนวัตกรรมกลยุทธ์เพื่อการจัดการเทคโนโลยี และนวัตกรรมวัฏจักรชีวิตของเทคโนโลยี และนวัตกรรมการวางแผนเทคโนโลยี การพัฒนาเทคโนโลยีการควบคุม และการประเมินผลเทคโนโลยีการวางแผนนวัตกรรม การนํานวัตกรรมไปปฏิบัติ การควบคุม และการประเมินผลนวัตกรรมการแข่งขัน",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE159",
    //     subject_name_th: "เทคโนโลยีสารสนเทศสำหรับวิศวกร",
    //     subject_name_en: "Information Technology for Engineers",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเรียนรู้ด้วยตนเองจากสื่ออิเล็กทรอนิกส์ ภายใต้การชี้แนะและควบคุมของอาจารย์เกี่ยวกับสถาปัตยกรรมของคอมพิวเตอร์ การจัดเก็บข้อมูลในระบบคอมพิวเตอร์ ประเภทของซอฟต์แวร์คอมพิวเตอร์ การติดตั้งและใช้งานซอฟต์แวร์การใช้ซอฟต์แวร์สําหรับสํานักงานทั่วไป เครือข่ายคอมพิวเตอร์ การใช้งานอินเทอร์เน็ตระบบสารสนเทศ และระบบจัดการฐานข้อมูล การดูแลบํารุงรักษาคอมพิวเตอร์เบื้องต้น และการประยุกต์ใช้งานคอมพิวเตอร์ด้านวิศวกรรม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE160",
    //     subject_name_th: "การโปรแกรมแบบขนานสำหรับระบบคลัสเตอร์คอมพิวเตอร์",
    //     subject_name_en: "Parallel Programming for Cluster Systems",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับโปรแกรมแบบขนาสำหรับระบบคลัสเตอร์คอมพิวเตอร์ การเขียนโปรแกรมบนระบบประมวลผลของคอมพิวเตอร์สมรรถนะสูง โมเคลการแกรมแบบขนาน การวัดสมรรถนะของโปรแกรมแบบขนาน การวัดสมรรถนะของคอมพิวเตอร์สมรรถนะสูง การโปรแกรมแบบส่งผ่านข้อความ การโปรแกรมเทรด การโปรแกรมบนหน่วยประมวลผลกราฟิก กรณีศึกษาและจำลองสถานการณ์จริง",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE161",
    //     subject_name_th: "การประมวลผลสัญญาณดิจิทัล",
    //     subject_name_en: "Digital Signal Processing",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและทบทวนเกี่ยวกับ การออกแบบวงจรกรองเวลาต่อเนื่องและการแทน การวิเคราะห์และออกแบบระบบและสัญญาณดิสครีต การแปลงแซด และการแปลงฟูริเยร์แบบดีสครีต โครงสร้างของระบบเวลาดีสครีต เทคนิคการออกแบบวงจรกรองแบบผลตอบสนองอิมพัลส์อนันต์และผลตอบสนองอิมพัลส์จํากัด การแปลงฮิลเบิร์ตแบบดิสครีต และการวิเคราะห์เซฟสตรัม สัญญาณสุ่ม",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 14,
    //     subject_code: "ENGCE162",
    //     subject_name_th: "สัญญาณและระบบ",
    //     subject_name_en: "Signals and Systems",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ การจําแนกประเภทและคุณสมบัติของสัญญาณและระบบ วิธีวิเคราะห์ระบบทั้งในเชิงเวลาและเชิงความถี่ ทฤษฎีคอนโวลูชั่น การแปลงแบบลาปลาซ การแปลงแบบฟูเรียร์ การแปลงแบบแซด การประยุกต์ใช้วิเคราะห์ในวงจรไฟฟ้าของการแปลงแบบต่างๆ ผังการไหลเวียน สัญญาณ แบบจําลองของโรงงานระบบวงจรเปิด ระบบวงจรปิด เสถียรภาพของระบบ แนวทางเดินของรากทฤษฎี การสุ่ม ผลตอบสนองเชิงเวลา ผลตอบสนองเชิงความถี่ ระบบป้อนกลับ ชุดสมการแสดงสถานภาพของระบบและคําตอบ",
    //   },
    //   {
    //     // กลุ่มวิชาวิศวกรรมซอฟต์แวร์
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE170",
    //     subject_name_th: "การกำหนดความต้องการและการออกแบบทางซอฟต์แวร์",
    //     subject_name_en: "Software Requirements Specification and Design",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติ การจัดการความต้องการของผู้ใช้และการออกแบบซอฟแวร์ โดยมีเนื้อหาประกอบด้วย การเก็บรวบรวม การวิเคราะห์ การต่อรอง การระบุรายละเอียด การทดสอบ บริหารจัดการความต้องการ แนะนำวิธีการ เทคนิคและเครื่องมือในการบันทึกเอกสารความต้องการ กลยุทธ์การออกแบบสถาปัตยกรรม การออกแบบการปฏิสัมพันธ์กับมนุษย์ ออกแบบรายละเอียด และการประเมินผลการออกแบบ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE171",
    //     subject_name_th: "การตรวจสอบความสมเหตุสมผลและการทวนสอบซอฟต์แวร์",
    //     subject_name_en: "Software Validation and Verification",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติแนวคิดพื้นฐานเกี่ยวกับการทดสอบซอฟต์แวร์ กระบวนการและแบบจำลองสำหรับการทดสอบซอฟต์แวร์ การตรวจสอบและการยืนยันความถูกต้องของซอฟต์แวร์ การทดสอบระดับส่วนประกอบ การทดสอบการรวมส่วนประกอบของซอฟต์แวร์ การทดสอบระบบ และทดสอบการยอมรับของผู้ใช้ การทดสอบเชิงไม่เป็นฟังก์ชัน เทคนิคการทบทวน การประมาณการทดสอบ เทคนิคการสร้างและตรวจสอบข้อมูลการทดสอบ เทคนิคดูแลและควบคุมการทดสอบ เครื่องมือที่ใช้ในการทดสอบซอฟร์แวร์ การางแผนการทดสอบ การวิเคราะห์ปัญหาและการจัดทำรายงาน รวมถึงการใช้เทคนิคต่างๆ ในการทดสอบเพื่อให้แน่ใจว่าส่วนประกอบของซอฟต์แวร์หรือระบบตอบสนองความต้องการของผู้ออกแบบ และตรงตามความคาดหวังของผู้มีส่วนได้ส่วนเสีย",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE172",
    //     subject_name_th: "กระบวนการซอฟต์แวร์และการประกันคุณภาพ",
    //     subject_name_en: "Software Process and Quality Assurance",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการวิเคราห์แบบจำลองของกระบวนการการพัฒนาซอฟต์แวร์แบบจำลองและมาตรฐานของวัฏจักร กระบวนการพัฒนา สภาพแวดล้อมและกรอบของการปรับปรุงกระบวนการผลิต การนำกระบวนการผลิตไปใช้ในองค์กร โครงการ ทีม และบุคคล ในแบบต่างๆกัน การวัดและการวิเคราะห์กระวนการพัฒนาซอฟต์แวร์ ประโยนช์ที่ได้ต่อธุรกิจ ศึกษาแนวคิดเกี่ยวกับคุณภาพซอฟต์แวร์ วิธีการประกันคุณภาพซอฟต์แวร์ การวางแผนและการทำการประกันคุณภาพซอฟต์แวร์และกลยุทธ์ มาตรฐานคุณภาพ วิธีการพิชญพิจารณ์ การทบทวน การตรวจสอบดูการทำงาน และการตรวจตราอย่างละเอียด การแบ่งระดับหน่วยและการทดสอบระดับหน่วย ความน่าเชื่อถือของซอฟต์แวร์ การจัดการความรับผิดชอบในการประกันคุณภาพ และกรณีศึกษา",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE173",
    //     subject_name_th: "การวิเคราะห์และออกแบบเชิงวัตถุ",
    //     subject_name_en: "Object-Oriented Analysis and Design",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ การวิเคราะห์และออกแบบ ตามแนวความคิด และ หลักการเชิงวัตถุ ด้วยภาษาโมเดลยูอ็มเอล (UML) เพื่อวิเคราะห์และออกแบบความสัมพันธ์รหว่างคลาสและวัตถุ การสือทอดคุณสมบัติ การนำคลาสกลับมาใช้ การวิเคราะห์ความต้องการโดยใช้แบบจำลองยูสเคส (Use Case) การวิเคราะห์เพื่อหาวัตถุจากแบบจำลองยูสเคส การเขียนโมเดลทางสถิติ โมเดลแบบไดนามิก และการออกแบบแบบแผน",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE174",
    //     subject_name_th: "การเขียนโปรแกรมเชิงวัตถุ",
    //     subject_name_en: "Object-Oriented Programming",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติ องค์ประกอบของการเขียนโปรแกรมตามแนวคิดเชิงวัตถุ เช่น สิ่งที่เป็นนามธรรม โมดุล การนำโค้ดกลับมาใช้ซ้ำ อ็อบเจ็กต์ คลาส การส่งผ่านข้อความระหว่างวัตถุ เมธอด อินเทอร์เฟส การห่อหุ้ม โพลืมอร์ฟิซึม การสืบทอดคุณสมบัติ เป็นต้น ฝึกปฏิบัติการเขียนโปรแกรมด้วยเครื่องมือที่ง่ายต่อการสร้างโปรแกรม และบำรุงรักษาโปรแกรม เพื่อศึกษาการเรียกใช้งานไลบรารีฟังก์ชันและเอพีไอของภาษาคอมพวเตอร์ที่สนับสนุนการเขียนโปรแกรมเชิงวัตถึ โดยการใช้ส่วนติดต่อประสานโปรแกรมประยุกต์ (API)",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE175",
    //     subject_name_th: "การบริหารจัดการโครงการซอฟต์แวร์",
    //     subject_name_en: "Software Project Management",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติ เกี่ยวกับ องค์ความรู้และฝึกทักษะที่เกี่ยวข้องกับการวางแผนโครงการด้านซอฟต์แวร์ การวิเคราะห์ต้นทุนของซอฟต์แวร์ การวางแผนการจัดการและวิธีการที่นำไปสู่เป้าหมาย การใช้หลักการและเทคนิคการบริหารโครงการในสถานการณ์จริง การวางแผนการบิรหารความเสี่ยงโครงการซอฟต์แวร์ ได้แก่ การระบุควมเสี่ยง การวิเคราะห์ความเสี่ยง จัดลำดับความสำคัญความเสี่ยง การวางแผน การจัดการแก้ไขความเสี่ยง และการตวจสอบความเสี่ยง การตรวจสอบโครงการซอฟต์แวร์และการควบคุมด้วยทฤษฎีมาตรวัดซอฟต์แวร์และโมเดล ตัวชี้วัดผลิตภัณฑ์ซอฟต์แวร์ ตัวชี้วัดกระบวนการซอฟต์แวร์และวิธีการที่แตกต่างกันในการเก็บรวบรวมข้อมูล การรวบรวมและการประเมินผล",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE176",
    //     subject_name_th: "การเขียนโปรแกรมบนเว็บ",
    //     subject_name_en: "Web Programming",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติการเกี่ยวกับ เทคโนโลยีของอินเทอร์เน็ต โพรโตคอล HTTP กลไกจัดการการร้องขอในเว็บเซิร์ฟเวอร์ การเขียนโปรแกรมแบบ CGI และการสร้างหน้าเว็บแบบพลวัต การใช้งานคุกกี้ การติดต่อเชื่อมโยงกับฐานข้อมูล การปรับแต่งประสิทธิภาพและความปลอดภัยในการใช้งาน การเขียนโปรแกรมในฝั่งของ Client เช่น HTML, CSS, JavaScript และ ฝั่งของ Server เช่น PHP, ASP, JSP, AJAX เป็นต้น",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE177",
    //     subject_name_th: "หัวข้อความก้าวล้ำในงานวิศวกรรมซอฟต์แวร์",
    //     subject_name_en: "Advanced Topics in Software Engineering",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติ ให้สามารถเห็นคุณค่า และตระหนักถึงความจำเป็นที่จะต้องเรียนรู้ทฤษฏีใหม่ๆ แบบจำลอง เทคนิค และเทคโนโลยีต่างๆ ที่เกี่ยวข้องกับวิศวกรรมซอฟต์แวร์ฝึกปฏิบัติด้วยเครื่องมือและเทคนิคที่ทำให้การพัฒนาระบบซอฟต์แวร์ และการประยุกต์ใช้จากงานวิจัยสู่ นวัตกรรมใหม่ๆ อย่างมืออาชีพ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE178",
    //     subject_name_th: "ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง",
    //     subject_name_en: "Artificial Intelligence and Machine Learning",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ การเรียนรู้ของเครื่องและทฤษฎีการเรียนรู้ การเรียนรู้แบบมีผู้สอน การแบ่งประเภท การถดถอย ค่าผิดปกติ ซัพพอร์ตเวกเตอร์แมชชีน การเลือกแบบจําลองและคุณลักษณะ การลดขนาดมิติของข้อมูล ต้นไม้ตัดสินใจ การเรียนรู้แบบไม่มีผู้สอน การจัดกลุ่ม การเรียนรู้แบบเสริมกําลัง ข่ายงานประสาทเทียม การเรียนรู้เชิงลึก",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE179",
    //     subject_name_th: "คอมพิวเตอร์กราฟฟิก",
    //     subject_name_en: "Computer Graphics",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติ ระบบคอมพิวเตอร์กราฟิกเบื้องต้น โดยมีเนื้อหาประกอบด้วยอุปกรณ์ อินพุต-เอาต์พุต การหาทางเดินของจุดจากภาพ การแปลงใน 2 มิติ การเลื่อนที่การเชื่อมต่อ การหมุน การสะท้อน การตัดเล็ม หลักการกำหนดกรอบหน้าต่าง อัลกอริทึมการคลิป การแปลงจากวินโดว์ไปยังวิวพอร์ท หลักการประมวลผลใน 3 มิติ การแสดงภาพใน 3 มิติ การแปลงใน 3 มิติ การมองใน 3 มิติ และการโปรแกรมงานคอมพิวเตอร์กราฟิกส์",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE180",
    //     subject_name_th: "การประมวลผลภาพดิจิทัล และการมองเห็นโดยคอมพิวเตอร์",
    //     subject_name_en: "Digital Image Processing and Computer Vision",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติโมเดลการมองเห็นภาพของมนุษย์หลักการของการเก็บข้อมูลภาพในระบบดิจิตอล การปรับปรุงคุณภาพของภาพ การหาขอบและเส้น การแบ่งพื้นที่ภาพ การใช้ฟิลเตอร์แบบเชิงเส้น แบบไม่เป็นเชิงเส้น เพื่อแก้ปัญหาต่างๆในการประมวลผลภาพ การประมวลผลภาพสี การบีบอัดข้อมูลภาพ การมองเห็นโดยคอมพิวเตอร์",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE181",
    //     subject_name_th: "การทำเหมืองข้อมูลและระบบสารสนเทศทางธุรกิจ",
    //     subject_name_en: "Data Mining and Business Information Systems",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติ ความรู้เบื้องต้นเกี่ยวกับ การทําเหมืองข้อมูล และการเรียนรู้ เครื่องแนวคิด อินสแตนซ์ และ ลักษณะวิธีการจําแนก ต้นไม้ ตัดสินใจการประเมินผล และความน่าเชื่อถือ และการประเมินผล มีลิฟท์ และค่าใช้จ่าย การจัดเตรียม ข้อมูลสําหรับการ ค้นพบความรู้ การจัดกลุ่ม กฎ สมาคม การแสดง, การสรุป และ การตรวจสอบการ เบี่ยงเบน การประยุกต์ใช้งานสําหรับระบบข้อมูลทางการตลาด การวิเคราะห์ข้อมูลและ การประยุกต์ใช้งานในด้านอื่นๆ",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE182",
    //     subject_name_th: "การพัฒนาโปรแกรมประยุกต์และเกมสำหรับอุปกรณ์เคลื่อนที่",
    //     subject_name_en: "Application and Game Development for Mobile Device",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ สถาปัตยกรรมฮาร์ดแวร์และซอฟต์แวร์ คุณลักษณะและข้อจํากัดของอุปกรณ์เคลื่อนที่ ระบบปฏิบัติการและสภาพแวดล้อมในการพัฒนา ศึกษาเครื่องมือและภาษาที่ใช้สําหรับพัฒนาโปรแกรมประยุกต์ การติดต่อกับผู้ใช้ การสื่อสารกับ ระบบภายนอก พัฒนาโปรแกรมประยุกต์และเกมบนอุปกรณ์เคลื่อนที่ การจําลองเพื่อทดสอบและแก้ไขบนระบบคอมพิวเตอร์",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE183",
    //     subject_name_th: "การประมวลผลแบบคลาวด์",
    //     subject_name_en: "Cloud Computing",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับหลัการและเทคโนโลยีในการประมวลผลแบบคลาวด์ โครงสร้างพื้นฐานคลาวด์ การจำลองหน่วยประมวลผลและหน่วยความจำ (เวอร์ชวลไลเซซั่น) เมฆเก็บข้อมูล ระบบไฟล์แบบกระจาย ฐานข้อมูลแบบ NoSQL โมเดลการเขียนโปรแกรมแบบ MapReduce ปฏิบัติการใช้บริการคลาด์สาธาธารณะ เช่น Amazon Web Service ในการเช่าและบริหารทรัพยากรสำหรับการประมวลผล การ deploy โปรแกรมประยุกต์บนบริการคลาวด์ การพัฒนาบริการบนเว็บเพื่อประมวลผลและเรียกค้นข้อมูลขนาดใหญ่",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE184",
    //     subject_name_th: "การพัฒนาโปรแกรมบนระบบคลาวด์",
    //     subject_name_en: "Cloud Application Development",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับ ความรู้พื้นฐานเกี่ยวกับคลาวด์คอมพิวติ้ง การพัฒนาซอฟต์แวร์ที่มีรูปแบบการให้บริการผ่านเครือข่ายอินเทอร์เน็ตบนคลาวด์ การเลือกใช้เครื่องมือและทรัพยากรสำหรับการพัฒนาซอฟต์แวร์บนคลาวด์ การพัฒนาทักษะการเขียนโปรแกรมและการพัฒนาซอฟต์แวร์บนอุปกรณ์เคลื่อนที่โดยการทำงานร่วมกับฟังก์ชันหลักของระบบคลาวด์",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE185",
    //     subject_name_th: "ปฏิบัติการซอฟต์แวร์",
    //     subject_name_en: "Software Laboratory",
    //     subject_credit: 1,
    //     subject_description:
    //       "ฝึกปฏิบัติการในเนื้อหาที่เกี่ยวข้องกับทางด้านวิศวกรรมคอมพิวเตอร์ซอฟต์แวร์ อาทิ เช่น ระบบปฏิบัติการ ซอฟต์แวร์เพื่อใช้ในการทํางานทางด้านวิศวกรรมคอมพิวเตอร์ ซอฟต์แวร์ที่เกี่ยวข้องกับการใช้งานด้านอินเทอร์เน็ตในทุกสรรพสิ่ง",
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_group_id: 15,
    //     subject_code: "ENGCE186",
    //     subject_name_th: "สถาปัตยกรรมซอฟต์แวร์",
    //     subject_name_en: "Software Architecture",
    //     subject_credit: 3,
    //     subject_description:
    //       "ศึกษาและฝึกปฏิบัติเกี่ยวกับพื้นฐานของสถาปัตยกรรมซอฟแวร์ หลักการพื้นฐานและแนวทางในการออกแบบสถาปัตยกรรมซอฟต์แวร์รูปแบบและกรอบแนวคิดต่างๆ ของสถาปัตยกรรมซอฟต์แวร์ วิธีการ เทคนิคและเครื่องมือสำหรับการการใช้เอกสารอธิบายสถาปัตยกรรมซอฟต์แวร์อย่างสมเหตุสมผล การออกแบบสถาปัตยกรรมซอฟต์แวร์และกระบวนการประเมินผล ศึกษาวิธีการและเครื่องมือสำหรับการออกแบบและประเมินสถาปัตยกรรมซอฟต์แวร์ สำหรับสถานะของเทคโนโลยีที่ทันสมัย เช่น การประมวลผลแบบคลาวด์และการประมวลผลสำหรับอุปกรณ์เคลื่อนที่",
    //   },
    // ];
    const subjectSE66Data = [
      {
        curriculum_id: 2,
        subject_group_id: 1,
        subject_code: "GEBLC101",
        subject_name_th: "ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน",
        subject_name_en: "English for Everyday Communication",
        subject_credit: 3,
        subject_description:
          "ศึกษาคำศัพท์ สำนวน โครงสร้างภาษาอังกฤษพัฒนาทักษะการใช้ภาษาอังกฤษด้านการฟัง พูด อ่าน เขียนเพื่อใช้ในการสื่อสารในชีวิตประจำวันในบริบททางสังคมและวัฒนธรรมต่างๆ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 1,
        subject_code: "GEBLC103",
        subject_name_th: "ภาษาอังกฤษเชิงวิชาการ",
        subject_name_en: "Academic English",
        subject_credit: 3,
        subject_description:
          "ศึกษาคำศัพท์ สำนวน โครงสร้างภาษาอังกฤษ โดยเน้นหลักการฟัง การพูด การอ่าน การเขียน การสรุปความ และการนำเสนอในบริบททางวิชาการ ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 1,
        subject_code: "GEBLC105",
        subject_name_th: "ภาษาอังกฤษเพื่อทักษะการทำงาน",
        subject_name_en: "English for Working Skills",
        subject_credit: 3,
        subject_description:
          "ศึกษาคำศัพท์ สำนวน โครงสร้างภาษาอังกฤษที่ใช้ในงานอาชีพ และพัฒนาทักษะการใช้ภาษาอังกฤษด้านการฟัง พูด อ่าน เขียน เพื่อการสื่อสารและการทำงานในสาขาวิชาชีพ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 1,
        subject_code: "GEBLC201 ",
        subject_name_th: "ศิลปะการใช้ภาษาไทย",
        subject_name_en: "Arts of Using Thai Language",
        subject_credit: 3,
        subject_description:
          "ศึกษารูปแบบและวิธีการสื่อสารด้วยการใช้ภาษาไทยอย่างมีประสิทธิภาพ พัฒนากระบวนการคิดอย่างมีระบบร่วมกับการสื่อสารอย่างสร้างสรรค์ โดยมีศิลปะในการฟัง การอ่าน การพูด และการเขียนเหมาะสมกับทักษะในศตวรรษที่ 21 ใช้ภาษาไทยในฐานะที่เป็นมรดกทางวัฒนธรรมของชาติ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 2,
        subject_code: "GEBHT601",
        subject_name_th: "กิจกรรมเพื่อสุขภาพ",
        subject_name_en: "Activities for Health",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติการเกี่ยวกับพลศึกษาและสุขภาพ โภชนาการ พฤติกรรมการบริโภคและการควบคุมน้ำหนัก การปฐมพยาบาลเบื้องต้น วิทยาศาสตร์การกีฬา สมรรถภาพทางกาย การจัดโปรแกรมการออกกำลังกายและฝึกปฏิบัติกิจกรรมการออกกำลังกายเพื่อสุขภาพ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 3,
        subject_code: "GEBIN701",
        subject_name_th: "กระบวนการคิดและการแก้ปัญหา",
        subject_name_en: "Problem Solving and Thinking Process",
        subject_credit: 3,
        subject_description:
          "ศึกษาแนวคิด ทฤษฎี เทคนิคและกระบวนการพัฒนาการฝึกคิดแบบต่างๆ ทักษะการคิดเพื่อการแก้ปัญหา หลักการใช้เหตุผล การสร้างแรงบันดาลใจ กระบวนการคิดและแก้ปัญหาโดยนำภูมิปัญญาท้องถิ่น ภูมิปัญญาไทย นวัตกรรมและเทคโนโลยีสมัยใหม่เป็นกรณีศึกษา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 3,
        subject_code: "GEBIN702",
        subject_name_th: "นวัตกรรมและเทคโนโลยี",
        subject_name_en: "Innovation and Technology",
        subject_credit: 3,
        subject_description:
          "ศึกษาการเปลี่ยนแปลงทางสังคมและวิวัฒนาการทางด้านวิทยาศาสตร์และเทคโนโลยี  กระบวนการสร้างและออกแบบนวัตกรรมและเทคโนโลยี ความสัมพันธ์ระหว่างมนุษย์  กับนวัตกรรมและเทคโนโลยี ผลกระทบของนวัตกรรมและเทคโนโลยีต่อสังคมและสิ่งแวดล้อม ฝึกกระบวนการออกแบบนวัตกรรมที่สอดคล้องกับมนุษย์ในปัจจุบัน ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 3,
        subject_code: "GEBIN703",
        subject_name_th: "ศิลปะการใช้ชีวิต",
        subject_name_en: "Art of living",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับการบูรณาการศาสตร์เพื่อเข้าใจการเปลี่ยนแปลงของสังคมไทยและสังคมโลก มีจริยธรรม ความรับผิดชอบต่อสังคม การต่อต้านทุจริตและคอรัปชัน ทักษะการคิดเชิงระบบ รู้เท่าทันเทคโนโลยี การใช้ชีวิตที่เป็นมิตรกับสิ่งแวดล้อม เป็นบัณฑิตนักปฏิบัติที่พึงประสงค์ สามารถเรียนรู้และวางแผนชีวิตที่เหมาะสมในสังคมแห่งการเรียนรู้",
      },
      {
        curriculum_id: 2,
        subject_group_id: 3,
        subject_code: "GEBIN705",
        subject_name_th: "แก่นวิศวกรรมซอฟต์แวร์",
        subject_name_en: "Software Engineering Essentials",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับภาพรวมของวิศวกรรมซอฟต์แวร์ ฮาร์ดแวร์และซอฟต์แวร์ ศึกษากระบวนการพัฒนาซอฟต์แวร์ ประเภทซอฟต์แวร์และการใช้งาน (ซอฟต์แวร์ระบบและเทคโนโลยีสารสนเทศ ซอฟต์แวร์ระบบและการควบคุม) การประมวลผล อัลกอริทึม กระบวนงาน (Flow Chart) และการโปรแกรม เครือข่ายคอมพิวเตอร์และอินเตอร์เน็ตทุกสรรพสิ่ง ระบบฐานข้อมูล ภาพรวมปัญญาประดิษฐ์และหุ่นยนต์ ระบบฝังตัว ซอฟต์แวร์ในงานอุตสาหกรรม และประยุกต์ใช้ซอฟต์แวร์ การควบคุมคุณภาพซอฟต์แวร์และกระบวนการปรับปรุงอย่างต่อเนื่อง",
      },
      {
        curriculum_id: 2,
        subject_group_id: 5,
        subject_code: "GEBSC301",
        subject_name_th: "เทคโนโลยีสารสนเทศที่จำเป็นในชีวิตประจำวัน",
        subject_name_en: "Necessary Information Technology in Daily Life",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับความหมาย ความสำคัญ องค์ประกอบของเทคโนโลยีสารสนเทศ เครือข่ายอินเทอร์เน็ต สื่อดิจิทัล สื่อสังคมออนไลน์ พาณิชย์อิเล็กทรอนิกส์ อินเทอร์เน็ตของสรรพสิ่ง ปัญญาประดิษฐ์ การใช้เทคโนโลยีสื่อประสม และการใช้โปรแกรมสำเร็จรูปที่จำเป็นเบื้องต้น ความปลอดภัยในการใช้เทคโนโลยีสารสนเทศ กฎหมายการกระทำความผิดเกี่ยวกับคอมพิวเตอร์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 5,
        subject_code: "GEBSC302",
        subject_name_th: "มโนทัศน์และเทคนิคทางวิทยาศาสตร์สมัยใหม่",
        subject_name_en: "Modern of Concept and Scientific Techniques",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับองค์ความรู้ทางวิทยาศาสตร์ ประเภทความรู้ทางวิทยาศาสตร์ กระบวนการทางวิทยาศาสตร์ ทักษะทางด้านวิทยาศาสตร์ การวิเคราะห์ข้อมูลทางวิทยาศาสตร์ การบูรณาการหลักการทางวิทยาศาสตร์และวิธีคิดเชิงออกแบบ (Design Thinking) เพื่อแก้ปัญหาในชีวิตประจำวัน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 5,
        subject_code: "GEBSC303",
        subject_name_th:
          "กระบวนการทางวิทยาศาสตร์เพื่อทำงานวิจัยและการสร้างนวัตกรรม",
        subject_name_en: "Scientific Methods for Research and Innovation",
        subject_credit: 3,
        subject_description:
          "ศึกษาและพัฒนาทักษะทางด้านการเก็บรวบรวมข้อมูล วิเคราะห์และสรุปผล  โดยใช้กระบวนการทางด้านวิทยาศาสตร์เพื่อเตรียมความพร้อมให้กับผู้เรียนในการนำทักษะไปประยุกต์ใช้ในการวิจัยหรือสร้างสรรค์นวัตกรรม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 5,
        subject_code: "GEBSC304",
        subject_name_th: "วิทยาศาสตร์เพื่อสุขภาพ",
        subject_name_en: "Science for Health",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับวิทยาศาสตร์สุขภาพและการพัฒนาวิทยาศาสตร์ด้านสุขภาพ อาหารเพื่อสุขภาพและสารปนเปื้อนในอาหาร การใช้สารเคมีในชีวิตประจำวัน และผลกระทบของสารเคมีต่อสุขภาพ การใช้เครื่องสำอางและเทคโนโลยีสมัยใหม่เพื่อการดูแลสุขภาพ การใช้ยารักษาโรคเบื้องต้น โรคสำคัญและโรคอุบัติใหม่ที่มีผลกระทบทางสังคมและการป้องกัน แนวคิดการสร้างเสริมสุขภาพแบบองค์รวม ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 5,
        subject_code: "GEBSC305",
        subject_name_th: "สิ่งแวดล้อมและการพัฒนาที่ยั่งยืน",
        subject_name_en: "Environment and Sustainable Development",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับทรัพยากรธรรมชาติและสิ่งแวดล้อม ระบบนิเวศและความสัมพันธ์ระหว่างสิ่งมีชีวิตกับสิ่งแวดล้อม ปัญหาสิ่งแวดล้อมในปัจจุบัน กฎหมายสิ่งแวดล้อมเบื้องต้น การเปลี่ยนแปลงสภาพภูมิอากาศ การวิเคราะห์ผลกระทบทางสิ่งแวดล้อม  แนวทางการใช้ทรัพยากรธรรมชาติและการรักษาสิ่งแวดล้อมอย่างยั่งยืนบนพื้นฐานวิทยาศาสตร์ การเลือกใช้แหล่งพลังงานที่เป็นมิตรต่อสิ่งแวดล้อม เทคโนโลยีสีเขียว นวัตกรรมเทคโนโลยีสมัยใหม่เพื่อการอนุรักษ์ธรรมชาติและสิ่งแวดล้อม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 5,
        subject_code: "GEBSC401",
        subject_name_th: "คณิตศาสตร์และสถิติในชีวิตประจำวัน",
        subject_name_en: "Mathematics and Statistics in Daily Life",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับกระบวนการตัดสินโดยใช้ตรรกศาสตร์  คณิตศาสตร์การเงินและเบี้ยประกัน   นำความรู้ทางคณิตศาสตร์และสถิติเพื่อใช้ในชีวิตประจำวัน  และนำโปรแกรมคอมพิวเตอร์มาช่วยประมวลผลทางคณิตศาสตร์และสถิติ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 5,
        subject_code: "GEBSC402 ",
        subject_name_th: "สถิติและการวิเคราะห์ข้อมูลเบื้องต้น",
        subject_name_en: "Statistics and Basic Data Analysis",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับ ความรู้พื้นฐาน และบทบาทของสถิติในชีวิตประจำวัน การสืบค้นข้อมูลและสารสนเทศ การเก็บรวบรวมข้อมูล การนำเสนอข้อมูลแบบต่าง ๆ การวิเคราะห์ข้อมูลสถิติเชิงพรรณนาและเชิงอนุมาน การแปลความหมายข้อมูล การประยุกต์ใช้สถิติในวิชาชีพ และชีวิตประจำวัน การวิเคราะห์ข้อมูลโดยใช้โปรแกรมคอมพิวเตอร์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO501",
        subject_name_th: "การพัฒนาทักษะชีวิตและสังคม",
        subject_name_en: "Life and Social Skills Development",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับปรัชญา ทักษะการใช้ชีวิต คุณค่าแห่งความเป็นมนุษย์ และหลักธรรมในการดำรงชีวิต การพัฒนาความคิด   เจตคติ  บทบาท หน้าที่ และความรับผิดชอบต่อตนเองและผู้อื่น การมีส่วนร่วมในกิจกรรมทางสังคมและวัฒนธรรมไทย  การมีจิตสำนึกต่อส่วนรวม   ศึกษาวิธีจัดการกับภาวะอารมณ์ และสร้างสัมพันธภาพ การทำงานเป็นทีม การสร้างผลิตผลในการทำงาน และจรรยาบรรณวิชาชีพ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO502",
        subject_name_th: "ความรู้เบื้องต้นทางสังคม เศรษฐกิจและการเมืองไทย",
        subject_name_en: "Introduction to Thai Politics, Society and Economy",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับความหมายและความสำคัญของการเมือง ความสัมพันธ์ของการเมืองที่มีต่อสังคมและระบบเศรษฐกิจ แนวโน้มการเปลี่ยนแปลงทางการเมือง สังคมและเศรษฐกิจของประเทศไทย สังคมวิทยากับการเปลี่ยนแปลงร่วมสมัย การพัฒนาความเป็นพลเมืองและความรับผิดชอบต่อสังคม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO503",
        subject_name_th: "มนุษยสัมพันธ์",
        subject_name_en: "Human Relations",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับความรู้พื้นฐานและความสำคัญของมนุษยสัมพันธ์ การศึกษาเกี่ยวกับธรรมชาติและพฤติกรรมของมนุษย์ ทฤษฎีที่เกี่ยวข้องกับมนุษยสัมพันธ์ในชีวิตประจำวันและการทำงาน มนุษยสัมพันธ์กับความเป็นผู้นำ การบริหารความขัดแย้ง  การติดต่อสื่อสารเพื่อสร้างมนุษยสัมพันธ์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO504",
        subject_name_th: "การพัฒนาศักยภาพมนุษย์และจิตวิทยาเชิงบวก",
        subject_name_en: "Human Potential Development and Positive Psychology",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับกลยุทธ์การบริหารงานเพื่อพัฒนาศักยภาพของมนุษย์ การพัฒนาคุณลักษณะทางบวกของมนุษย์ เช่น ความคิดสร้างสรรค์  ความหวัง  การมองโลกในแง่ดี  ความสามารถในการปรับตัวและความสัมพันธ์ระหว่างบุคคล การประยุกต์ทฤษฎีทางจิตวิทยาเพื่อการดำเนินชีวิตอย่างมีความหมายโดยส่งเสริมให้นักศึกษาเกิดการเรียนรู้ผ่านตัวแบบที่ปรากฏในสื่อต่าง ๆ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO505",
        subject_name_th: "พลเมืองดิจิทัล",
        subject_name_en: "Digital Citizenship",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับ ความหมาย คุณลักษณะของพลเมืองดิจิทัลที่ดี ความรู้ดิจิทัล การสื่อสารในสังคมดิจิทัล อัตลักษณ์และตัวตน ความเป็นส่วนตัวและปลอดภัย การกลั่นแกล้งบนสื่อดิจิทัล มารยาทและวิจารณญาณบนสื่อดิจิทัล สิทธิ กฎหมายและจริยธรรมสำหรับดิจิทัล การรู้เท่าทันสื่อ ทักษะและองค์ประกอบการวิเคราะห์สื่อเพื่อการรู้เท่าทัน และการเป็นผู้ประกอบการในโลกดิจิทัล",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO506",
        subject_name_th: "วัฒนธรรมและเศรษฐกิจสร้างสรรค์",
        subject_name_en: "Cultural and Creative Economy",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับ ความรู้ และพัฒนาการของวัฒนธรรมไทย วัฒนธรรมท้องถิ่น ทุนทางวัฒนธรรม มรดกภูมิปัญญาทางวัฒนธรรมของไทย  ความหมาย ความสำคัญ ประเภท องค์ประกอบของเศรษฐกิจสร้างสรรค์ นโยบายการพัฒนาเศรษฐกิจสร้างสรรค์ของไทย ต้นแบบเศรษฐกิจสร้างสรรค์ วัฒนธรรมไทยกับการขับเคลื่อนเศรษฐกิจสร้างสรรค์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO507",
        subject_name_th: "ศาสตร์พระราชากับการพัฒนาที่ยั่งยืน",
        subject_name_en: "The King’s Philosophy and Sustainable Development",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับ ความหมาย หลักคิด หลักวิชา และหลักปฏิบัติของศาสตร์พระราชา พระราชประวัติพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราชบรมนาถบพิตร (รัชกาลที่ ๙) แนวคิดพระราโชบายของพระบาทสมเด็จพระปรเมนทรรามาธิบดี ศรีสินทรมหาวชิราลงกรณ พระวชิรเกล้าเจ้าอยู่หัว (รัชกาลที่ ๑o) หลักการเข้าใจ เข้าถึง พัฒนา และการน้อมนำศาสตร์พระราชามาประยุกต์ใช้ในชีวิตประจำวัน เพื่อนำไปสู่เป้าหมายการพัฒนาที่ยั่งยืน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO508",
        subject_name_th: "จิตวิทยาการจัดการองค์การในโลกยุคใหม่",
        subject_name_en:
          "Psychology of organizational Management in Modern world",
        subject_credit: 3,
        subject_description:
          "ศึกษาความหมาย ขอบเขต หลักการของจิตวิทยาองค์การ ระบบองค์การ การบริหารจัดการในองค์การทั้งในระดับบุคคล กลุ่ม และองค์กร  การเปรียบเทียบความแตกต่างระหว่างบุคคลเชิงพฤติกรรมในการทำงาน ปัจจัยทางด้านจิตวิทยาที่มีผลต่อความสำเร็จในการบริหารงาน การบริหารจัดการความขัดแย้งและการเปลี่ยนแปลงในองค์การ การเพิ่มพูนประสิทธิภาพการทำงานและคุณค่าของบุคคลในองค์การ รวมทั้งเรียนรู้เกี่ยวกับกลยุทธ์และเทคนิคในการบริหารจัดการองค์การอย่างมีประสิทธิภาพในสังคมยุคใหม่",
      },
      {
        curriculum_id: 2,
        subject_group_id: 4,
        subject_code: "GEBSO509",
        subject_name_th: "มนุษย์กับจริยธรรมในศตวรรษที่ 21",
        subject_name_en: "Man and Ethics in 21st Century ",
        subject_credit: 3,
        subject_description:
          "ศึกษาการกำเนิดชีวิตมนุษย์ คุณค่าและเป้าหมายของชีวิต การพัฒนาสู่ความเป็นมนุษย์ที่สมบูรณ์  แนวคิด ทฤษฎี จริยธรรมในทัศนะของปรัชญาและศาสนา จริยธรรมวิชาชีพ  ปัญหาจริยธรรมในสังคมไทยและการต่อต้านการทุจริตคอรัปชัน ในศตวรรษที่ 21",
      },
      {
        curriculum_id: 2,
        subject_group_id: 16,
        subject_code: "ENGSE100",
        subject_name_th: "ความน่าจะเป็นและสถิติในงานวิศวกรรม",
        subject_name_en: "Probability and Statistics for Engineering",
        subject_credit: 3,
        subject_description:
          "ศึกษา สถิติเชิงพรรณนา ทฤษฎีความน่าจะเป็นเบื้องต้น ตัวแปรสุ่มและการแจกแจงความน่าจะเป็นที่สำคัญ ประชากรและตัวอย่างสุ่ม ทฤษฎีบทขีดจำกัดกลาง การแจกแจงของตัวอย่างสุ่ม สถิติเชิงอนุมาน การวิเคราะห์สหสัมพันธ์และการวิเคราะห์การถดถอย ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 16,
        subject_code: "ENGSE101",
        subject_name_th: "คณิตศาสตร์ดิสครีต",
        subject_name_en: "Discrete Mathematics",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับพื้นฐานคณิตศาสตร์ดิสครีต ตรรกศาสตร์ เทคนิคการพิสูจน์ การให้เหตุผลเชิงคณิตศาสตร์ ทฤษฎีของเซต ความสัมพันธ์ ฟังก์ชั่น เทคนิคการนับ รีเคอร์ชัน ทฤษฎีกราฟและต้นไม้ การประยุกต์ใช้ในงานวิศวกรรม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 16,
        subject_code: "ENGSE102",
        subject_name_th: "พีชคณิตเชิงเส้นสำหรับวิศวกรรม ",
        subject_name_en: "Linear Algebra for Engineering",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับเมทริกซ์ ตัวกำหนด การดำเนินการตามแถว ระบบสมการเชิงเส้น เวกเตอร์ ผลคูณเชิงสเกลลาร์ ผลคูณเชิงเวกเตอร์ ปริภูมิเวกเตอร์ การแปลงเชิงเส้น เมทริกซ์ของการแปลงเชิงเส้น การใช้ซอฟต์แวร์สำเร็จรูปเพื่อแก้ปัญหาทางพีชคณิตเชิงเส้น",
      },
      {
        curriculum_id: 2,
        subject_group_id: 16,
        subject_code: "ENGCC304",
        subject_name_th: "การเขียนโปรแกรมคอมพิวเตอร์",
        subject_name_en: "Computer Programming",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับองค์ประกอบคอมพิวเตอร์,การปฏิสัมพันธ์ระหว่างฮาร์ดแวร์กับซอฟต์แวร์,ชนิดข้อมูล,อัลกอริทึม, รหัสเทียม และผังงาน,ตัวดำเนินการ,คำสั่งควบคุมแบบทางเลือก,คำสั่งควบคุมแบบวนรอบ,ตัวแปรชุด, ฟังก์ชัน, การประยุกต์ใช้เพื่อแก้ปัญหาในงานทางวิศวกรรม,แนวโน้มภาษาคอมพิวเตอร์สมัยใหม่",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE200",
        subject_name_th: "วิศวกรรมซอฟต์แวร์เบื้องต้น",
        subject_name_en: "Introduction to Software Engineering",
        subject_credit: 3,
        subject_description:
          "ศึกษาพื้นฐานวิศวกรรมซอฟต์แวร์ แนะนำกระบวนการพัฒนาซอฟต์แวร์ และวงจรชีวิตการพัฒนาซอฟต์แวร์  โดยเฉพาะแบบจำลองการพัฒนาแบบวนรอบและเพิ่มพูนโดยใช้วิธีพัฒนาโปรแกรมเชิงอ็อบเจกต์ หัวข้อที่มีการสอนได้แก่ การเก็บรวบรวมความต้องการของผู้ใช้ การวิเคราะห์และออกแบบระบบโดยใช้ยูเอ็มแอล (UML) การทดสอบระบบ เฟรมเวิร์คและ  เอพีไอ สถาปัตยกรรมแบบ client-server การวิเคราะห์ ออกแบบและพัฒนาระบบ client-server อย่างง่าย และเทคโนโลยีที่เกี่ยวข้องกับส่วนต่อประสานกับผู้ใช้นอกจากนี้ยังแนะนำกลยุทธ์การพัฒนาซอฟต์แวร์สมัยใหม่ เช่น  Unified Process, Personal Software Process, Extreme Programming และ Agile Programming.",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE201",
        subject_name_th: "กฎหมายและจริยธรรมด้านเทคโนโลยีสารสนเทศ",
        subject_name_en: "Laws and Ethics in information Technology",
        subject_credit: 1,
        subject_description:
          "ศึกษาด้านจริยธรรมและกฎหมายในเทคโนโลยีสารสนเทศ แนวปฏิบัติด้านจริยธรรมทางเทคโนโลยีสารสนเทศ ประเด็นทางสังคมของคอมพิวเตอร์และการพัฒนาซอฟต์แวร์ ทรัพย์สินทางปัญญา ความเป็นส่วนตัว ความปลอดภัยทางซอฟต์แวร์ อาชญากรรมและนิติคอมพิวเตอร์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE202",
        subject_name_th: "ระบบปฏิบัติการและการจัดโครงแบบเครื่องแม่ข่าย",
        subject_name_en: "Operating System and Server Configure",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติการเกี่ยวกับหลักการพื้นฐานการจัดการงานของระบบปฏิบัติติการ การวิเคราะห์ปริมาณงานเพื่อเตรียมเครื่องแม่ข่าย การติดตั้งระบบปฏิบัติการในเครื่องแม่ข่ายเพื่อเตรียมแม่ข่ายศูนย์กลางข้อมูล แม่ข่ายบริการแฟ้มข้อมูล และแม่ข่ายในระบบอินเทอร์เน็ต โดยใช้ระบบปฏิบัติการยูนิกซ์ หรือระบบปฏิบัติการวินโดว์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE203",
        subject_name_th: "การเขียนโปรแกรมสำหรับวิศวกรซอฟต์แวร์",
        subject_name_en: "Computer Programming for Software Engineer",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติการเกี่ยวกับเทคโนโลยีของการพัฒนาโปรแกรมทั้งการทำงานของส่วนหน้าและส่วนหลัง  และเทคโนโลยีการพัฒนาโปรแกรมแบบผสมผสานที่ต่างแพลตฟอร์ม หลักการเขียนโปรแกรมเชิงลึกที่เกี่ยวข้องกับภาษาและกรอบภาษาที่เหมาะสมกับสถานการณ์ปัจจุบัน การพัฒนาส่วนติดต่อกับผู้ใช้ การทดสอบซอฟต์แวร์ เครื่องมือที่ใช้ในการพัฒนาซอฟต์แวร์ ระบบควบคุมเวอร์ชั่น",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE204",
        subject_name_th: "การเขียนโปรแกรมเชิงวัตถุ",
        subject_name_en: "Object-Oriented Programming",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติ องค์ประกอบของการเขียนโปรแกรมตามแนวคิดเชิงวัตถุ เช่น สิ่งที่เป็นนามธรรม โมดูล การนำโค้ดกลับมาใช้ซ้ำ อ็อบเจ็กต์ คลาส การส่งผ่านข้อความระหว่างวัตถุ เมธอด อินเทอร์เฟส การห่อหุ้ม โพลีมอร์ฟิซึม การสืบทอดคุณสมบัติ เป็นต้น ฝึกปฏิบัติการเขียนโปรแกรมด้วยเครื่องมือที่ง่ายต่อการสร้างโปรแกรม และบำรุงรักษาโปรแกรม เพื่อศึกษาการเรียกใช้งานไลบรารีฟังก์ชันและเอพีไอของภาษาคอมพิวเตอร์ที่สนับสนุนการเขียนโปรแกรมเชิงวัตถุ โดยการใช้ส่วนติดต่อประสานโปรแกรมประยุกต์ (API)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE205",
        subject_name_th: "กระบวนการซอฟต์แวร์และการประกันคุณภาพ",
        subject_name_en: "Software Process and Quality Assurance",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับการวิเคราะห์แบบจำลองของกระบวนการการพัฒนาซอฟต์แวร์ แบบจำลองและมาตรฐานของวัฏจักร กระบวนการพัฒนา สภาพแวดล้อมและกรอบของการปรับปรุงกระบวนการผลิต การนำกระบวนการผลิตไปใช้ในองค์กร โครงการ ทีม และบุคคล ในแบบต่าง ๆกัน การวัดและการวิเคราะห์กระบวนการพัฒนาซอฟต์แวร์ ประโยชน์ที่ได้ต่อธุรกิจ ศึกษาแนวคิดเกี่ยวกับคุณภาพซอฟต์แวร์ วิธีการประกันคุณภาพซอฟต์แวร์ การวางแผนและการทำการประกันคุณภาพซอฟต์แวร์และกลยุทธ์  มาตรฐานคุณภาพ  วิธีการพิชญพิจารณ์ การทบทวน การตรวจดูการทำงาน และการตรวจตราอย่างละเอียด การแบ่งระดับหน่วยและการทดสอบระดับหน่วย ความน่าเชื่อถือของซอฟต์แวร์ การจัดการความรับผิดชอบในการประกันคุณภาพ และกรณีศึกษา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE206",
        subject_name_th: "การกำหนดความต้องการและการออกแบบทางซอฟต์แวร์",
        subject_name_en: "Software Requirements Specification and Design",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติ การจัดการความต้องการของผู้ใช้และการออกแบบซอฟต์แวร์  โดยมีเนื้อหาประกอบด้วย การเก็บรวบรวม การวิเคราะห์ การต่อรอง การระบุรายละเอียด การทดสอบ บริหารจัดการความต้องการ แนะนำวิธีการ เทคนิคและเครื่องมือในการบันทึกเอกสารความต้องการ    กลยุทธ์การออกแบบ การออกแบบสถาปัตยกรรม การออกแบบ การปฏิสัมพันธ์กับมนุษย์ ออกแบบรายละเอียด และการประเมินผลการออกแบบ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE207",
        subject_name_th: "สถาปัตยกรรมซอฟต์แวร์",
        subject_name_en: "Software Architecture  ",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับพื้นฐานของสถาปัตยกรรมซอฟต์แวร์ อันได้แก่หลักการพื้นฐานและแนวทางในการออกแบบสถาปัตยกรรมซอฟต์แวร์รูปแบบและกรอบแนวคิดต่าง ๆของสถาปัตยกรรมซอฟต์แวร์   วิธีการ เทคนิคและเครื่องมือสำหรับการการใช้เอกสารอธิบายสถาปัตยกรรมซอฟต์แวร์อย่างสมเหตุสมผล การออกแบบสถาปัตยกรรมซอฟต์แวร์และกระบวนการประเมินผล ศึกษาวิธีการและเครื่องมือสำหรับการออกแบบและประเมินสถาปัตยกรรมซอฟต์แวร์ สำหรับสถานะของเทคโนโลยีที่ทันสมัยเช่นการประมวลผลแบบคลาวด์และการประมวลผลสำหรับอุปกรณ์เคลื่อนที่",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE208",
        subject_name_th: "การวิเคราะห์และออกแบบระบบ",
        subject_name_en: "System Analysis and Design",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับ ระบบสารสนเทศ วงจรการพัฒนาระบบ วิธีวิเคราะห์ระบบ การศึกษาความเป็นไปได้ของระบบ ระบบธุรกิจ แผนภาพแสดงการไหลของข้อมูล คำอธิบายการประมวลผล ผังแสดงการตัดสินใจ แผนภาพแสดงความสัมพันธ์ของข้อมูล พจนานุกรมข้อมูล ผังโครงสร้าง การอกแบบส่วนรับข้อมูล การออกแบบส่วนแสดงผลข้อมูล การออกแบบส่วนติดต่อกับผู้ใช้ เครื่องมือในการพัฒนาซอฟต์แวร์ มาตรฐานของซอฟต์แวร์ การจัดการข้อจำกัดเชิงวิศวกรรม กระบวนการผลิตซอฟต์แวร์ กระบวนการทดสอบและประเมินคุณภาพของซอฟต์แวร์ การสร้างหน่วยทดสอบ การบริหารโครงการ การทำเอกสารประกอบ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE209",
        subject_name_th: "วิวัฒนาการซอฟต์แวร์และการบำรุงรักษา",
        subject_name_en: "Software Evolution and Maintenance",
        subject_credit: 3,
        subject_description:
          "ศึกษาวิวัฒนาการของซอฟต์แวร์และผลกระทบของ วิวัฒนาการซอฟต์แวร์ พื้นฐานการบำรุงรักษาซอฟต์แวร์ กระบวนการและกิจกรรมการบำรุงรักษาซอฟต์แวร์ ประเด็นด้านเทคนิค เครื่องมือ และการจัดการการบำรุงรักษา การจัดการโครงแบบซอฟต์แวร์ในการบำรุงรักษา การจัดทำเอกสาร เทคนิคโปรแกรมคอมพรีเฮนชัน แบบรูปการออกแบบ การปรับรื้อระบบ การวิศวกรรมย้อนกลับเพื่อการบำรุงรักษา โค้ดรีแฟคเทอริงเครื่องมือในการบำรุงรักษา การบำรุงรักษาซอฟต์แวร์ในโดเมนต่าง ๆ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE210",
        subject_name_th: "การจัดการโครงการซอฟต์แวร์",
        subject_name_en: "Software Project Management",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับโครงการและการจัดการโครงการ วัฏจักรของการจัดการโครงการกลุ่มของกระบวนการในการจัดการโครงการ การจัดการการบูรณาการของโครงการ การจัดการขอบเขต การจัดการเวลา การจัดการค่าใช้จ่าย การจัดการคุณภาพ การจัดการทรัพยากรมนุษย์ การจัดการการสื่อสาร การจัดการความเสี่ยง การจัดการการจัดซื้อจัดหา การจัดการผู้มีส่วนได้ส่วนเสีย",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE211",
        subject_name_th: "สัมมนาทางวิศวกรรมซอฟต์แวร์",
        subject_name_en: "Seminar in Software Engineering",
        subject_credit: 1,
        subject_description:
          "สัมมนาเรื่องต่าง ๆ ที่น่าสนใจทางวิศวกรรมซอฟต์แวร์   ฝึกปฏิบัติการเกี่ยวกับการค้นคว้าบทความ งานวิจัย สิ่งประดิษฐ์ นวัตกรรม หรืองานทางวิศวกรรมซอฟต์แวร์ การตั้งชื่อโครงงาน วิธีการเขียนรายงาน ความเป็นมาของปัญหา วัตถุประสงค์ ขอบเขต ขั้นตอนและแผนการดำเนินงาน การจัดเตรียมวัสดุและอุปกรณ์ การรวบรวมและวิเคราะห์ข้อมูล การรายงานความก้าวหน้า และการนำเสนอโครงงาน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE212",
        subject_name_th: "โครงงานทางวิศวกรรมซอฟต์แวร์ ",
        subject_name_en: "Senior Project in Software Engineering ",
        subject_credit: 3,
        subject_description:
          "ฝึกปฏิบัติกระบวนการซอฟต์แวร์ ศึกษาวิเคราะห์ความต้องการ ออกแบบ พัฒนาระบบซอฟต์แวร์  จัดทำปริญญานิพนธ์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE213",
        subject_name_th: "ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง",
        subject_name_en: "Artificial Intelligence and Machine Learning",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ การเรียนรู้ของเครื่องและทฤษฎีการเรียนรู้ พีชคณิตเชิงเส้นที่จำเป็น ได้แก่ เวกเตอร์ เมทริกซ์ การแปลงเชิงเส้น ค่าและเวกเตอร์ลักษณะเฉพาะ การเรียนรู้แบบมีผู้สอน  การแบ่งประเภท  การถดถอย ค่าผิดปกติ ซัพพอร์ตเวกเตอร์แมชชีน การเลือกแบบจำลองและคุณลักษณะ การลดขนาดมิติของข้อมูล ต้นไม้ตัดสินใจ การเรียนรู้แบบไม่มีผู้สอน การจัดกลุ่ม การเรียนรู้แบบเสริมกำลัง ข่ายงานประสาทเทียม การเรียนรู้เชิงลึก การประยุกต์ใช้ในงานเชิงปัญญาประดิษฐ์ เช่น การประมวลภาพและภาษา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE214",
        subject_name_th: "ความมั่นคงปลอดภัยทางไซเบอร์เบื้องต้น",
        subject_name_en: "Introduction to Cyber Security",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติติพื้นฐานด้านความปลอดภัยทางไซเบอร์ หลักการเกี่ยวกับความมั่นคงปลอดภัยของระบบคอมพิวเตอร์และสารสนเทศ วิธีการปกป้องระบบปฏิบัติการคอมพิวเตอร์ ระบบเครือข่ายและข้อมูลจากการโจมตีทางไซเบอร์ วิธีตรวจสอบระบบและรับมือเมื่อเกิดภัยทางไซเบอร์  รวมถึงการปกป้องความเป็นส่วนตัวของผู้ใช้งาน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE215",
        subject_name_th: "ธุรกิจสตาร์อัพด้านซอฟต์แวร์",
        subject_name_en: "Software Startup Business ",
        subject_credit: 2,
        subject_description:
          "ศึกษาเกี่ยวกับ แนวคิดเกี่ยวกับการเป็นผู้ประกอบการ แนวคิดการจัดการลักษณะเฉพาะของธุรกิจซอฟต์แวร์ การสร้างโอกาสทางธุรกิจ พฤติกรรมขององค์กร การบริหารผลตอบแทนจากการประกอบธุรกิจ การจัดการทรัพยากร การจัดการธุรกิจผลิตซอฟต์แวร์ตลาด และธุรกิจเทคโนโลยี สารสนเทศ การประเมินโครงการธุรกิจซอฟต์แวร์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE216",
        subject_name_th: "โครงสร้างข้อมูลและขั้นตอนวิธี",
        subject_name_en: "Data Structures and Algorithms",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติการเกี่ยวกับการแทนข้อมูล โครงสร้างและการออกแบบข้อมูลแบบอาร์เรย์ สแต็ก คิว ลิงค์ลิสต์ ต้นไม้ กราฟ การจัดเรียงข้อมูล การค้นหาข้อมูล รูปแบบ และวิธีการของขั้นตอนวิธีแบบต่าง ๆ การวัดความซับซ้อนของขั้นตอนวิธี หลักการ และแนวคิดของการทางานแบบการเวียนเกิด และมีปฏิบัติการการประยุกต์ใช้ โครงสร้างข้อมูลชนิดต่าง ๆ ในการแก้ไขปัญหา  ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE217",
        subject_name_th: "การสื่อสารข้อมูลและเครือข่าย",
        subject_name_en: "Data Communication and Networks",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับพื้นฐานของการสื่อสารข้อมูล สถาปัตยกรรมเครือข่ายคอมพิวเตอร์  เน้น Physical  Datalink layer ทฤษฎีเครือข่ายท้องถิ่น เครือข่ายแบบวงกว้าง เครือข่ายแบบเสมือน โปรโตคอล TCP/IP การอ้างแอดเดรสแบบ IP การทำซับเน็ต การค้นหาเส้นทางแบบต่าง ๆ การตั้งค่าอุปกรณ์โดยใช้เราท์เตอร์และสวิตช์ชิงในการให้บริการสื่อสารข้อมูลแบบมีสายและไร้สาย โดยอาศัยโปรแกรมจำลองสถานการณ์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE218",
        subject_name_th: "โครงสร้างและสถาปัตยกรรมคอมพิวเตอร์",
        subject_name_en: "Computer Architecture and Organization",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติการเกี่ยวกับโครงสร้างและสถาปัตยกรรมคอมพิวเตอร์ พีชคณิตบูลีนและดิจิทัลตรรกะ รูปแบบการ แทนข้อมูล รูปแบบคาสั่ง หน่วยประมวลผลกลาง ชุดคำสั่ง หน่วยควบคุมและเส้นทางข้อมูล ไปป์ไลน์ ลำดับขั้นของหน่วยความจำ บัส การเชื่อมต่อและสื่อสารกับช่องรับส่งข้อมูล อุปกรณ์ต่อพ่วง หลักการออกแบบ การประเมินประสิทธิภาพ หน่วยประมวลผลแบบหลายแกน ระบบประมวลผลแบบหลายตัว ระบบประมวลผลประสิทธิภาพสูงและการเชื่อมต่อ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 17,
        subject_code: "ENGSE219",
        subject_name_th: "ระบบฐานข้อมูล",
        subject_name_en: "Database System",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติการเกี่ยวกับ ระบบฐานข้อมูล แบบจำลองข้อมูลและทฤษฎีการออกแบบฐานข้อมูลเชิงสัมพันธ์ ภาษาจัดการฐานข้อมูล ข้อจำกัด วิวและอินเด็กซ์ การโปรแกรมฐานข้อมูล การสำรองข้อมูลและการฟื้นสภาพ ความปลอดภัยและการกำหนดสิทธิ การควบคุมภาวะพร้อมกัน แนวโน้มใหม่ในระบบฐานข้อมูล",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGRA002",
        subject_name_th: "พื้นฐานระบบควบคุมอัตโนมัติ",
        subject_name_en: "Fundamentals of Automatic Control System",
        subject_credit: 3,
        subject_description:
          "ศึกษาพื้นฐานระบบควบคุมอัตโนมัติ  เครื่องจักรกลไฟฟ้า ระบบนิวแมติกส์และระบบนิวแมติกส์ไฟฟ้า ระบบไฮดรอลิกส์และระบบไฮดรอลิกส์ไฟฟ้า การโปรแกรมเชิงตรรกะสำหรับควบคุมสถานีจำลองกระบวนการผลิตแบบอัตโนมัติในงานอุตสาหกรรม การประยุกต์และการออกแบบระบบอัตโนมัติสำหรับระบบการผลิต การวัดปริมาณทางวิศวกรรมในรูปสัญญาณไฟฟ้าเพื่อการควบคุม การวัดการเคลื่อนที่ความดัน อุณหภูมิความเครียด การไหลของของไหล แรงและแรงบิด การตอบสนองทางพลวัติของเครื่องมือวัด",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGRA017",
        subject_name_th: "ระบบอัตโนมัติในโรงงาน",
        subject_name_en: "Automatic System in factory",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติการที่ครอบคลุมด้านระบบอัตโนมัติในโรงงานปัจจุบัน หรือกรณีศึกษาเทคโนโลยีระบบอัตโนมัติ ที่ใช้งานจริงในสถานประกอบการที่นักศึกษาสนใจโดยผ่านความเห็นชอบจากอาจารย์ผู้สอน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGRA027",
        subject_name_th: "คอมพิวเตอร์ควบคุมในโรงงาน",
        subject_name_en: "Computer Control in factory",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติการที่ครอบคลุมด้านคอมพิวเตอร์ควบคุมในโรงงานปัจจุบัน หรือกรณีศึกษาเทคโนโลยีคอมพิวเตอร์ควบคุมที่ใช้งานจริงในสถานประกอบการที่นักศึกษาสนใจโดยผ่านความเห็นชอบจากอาจารย์ผู้สอน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGRA020",
        subject_name_th: "คอมพิวเตอร์ช่วยในงานวิศวกรรมและการผลิต",
        subject_name_en: "Computer Aid in Engineering and Manufacturing",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับประวัติความเป็นมาพื้นฐานเครื่องจักรกลที่ควบคุมด้วยคอมพิวเตอร์ ในการสร้างชิ้นงานแบบ 2 มิติ 3 มิติ พื้นผิว ทรงตัน การควบคุมเชิงตัวเลขและการเขียนโปรแกรมควบคุมเชิงตัวเลข ลักษณะของเครื่องกัด เครื่องกลึง ระบบโคออร์ดิเนต และระบบของตำแหน่ง การวางแผนสำหรับการดำเนินการเอ็นซี หลักการของอุปกรณ์ขับเคลื่อนระบบ การอินเทอโปเลทในระบบการผลิต โปรแกรมควบคุมเครื่องจักร",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE401",
        subject_name_th: "การบริหารจัดการระบบ",
        subject_name_en: "System Administration",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ บทบาทและหน้าที่ของผู้ดูแลระบบคอมพิวเตอร์ กระบวนการ ในการเปิดและปิดเครื่อง สิทธิพิเศษของผู้ดูแลระบบ ระบบแฟ้มและ สิทธิในการใช้งาน การสร้าง การควบคุม และการจัดการ โปรเซส การเพิ่ม การจัดกลุ่มและการจัดการผู้ใช้ระบบ การจัดการอุปกรณ์ รอบข้าง การดูแลและการปรับแต่งระบบปฏิบัติการ การสำรอง ข้อมูลในระบบ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE402",
        subject_name_th: "บล็อคเชนและแอปพลิเคชันประมวลผลแบบกระจาย",
        subject_name_en: "Blockchain and Distributed Computing Applications",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับบล็อกเชนเบื้องต้น บัญชีแยกประเภทแบบกระจาย  คุณสมบัติเบื้องต้นของการพิสูจน์งาน บัญชีแยก ประเภทธุรกรรมทนทาน ประเด็นความเป็นส่วนตัว ประเด็นการปรับขนาดได้ บล็อกเชนในรูปแบบแพล็ตฟอร์ม สมาร์ตคอนแทรก การประยุกต์ใช้บล็อกเชน สกุลเงิน คริปโต เทคนิคทางเลือกสาหรับการพิสูจน์งาน การวิเคราะห์โพรโทคอลบล็อกเชน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE403",
        subject_name_th: "การออกแบบและการพัฒนาระบบการวางแผนทรัพยากรองค์กร",
        subject_name_en:
          "Enterprise Resource Planning System Design and Development",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ แนวคิดและพัฒนาการของระบบการวางแผนทรัพยากรองค์กร กรอบงานและสถาปัตยกรรมอีอาร์พี การสร้างตัวแบบและการวิเคราะห์ ระเบียบวิธีการพัฒนาและการทาให้เกิดผล กระบวนการการพัฒนา ปัจจัยความสำเร็จในการทำให้เกิดผล ระบบขององค์กรชั้นนำ กรณีศึกษาและแนวโน้มทางเทคโนโลยี ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE404",
        subject_name_th: "ฝึกปฏิบัติทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม",
        subject_name_en: "Software Engineering for Industrial",
        subject_credit: 3,
        subject_description:
          "ฝึกปฏิบัติโครงการทางวิศวกรรมซอฟต์แวร์ผ่านกรณีศึกษาด้วยวิธีการทางวิศวกรรมซอฟต์แวร์ร่วมสมัย การเลือก การปรับแต่ง และการประกอบกระบวนการซอฟต์แวร์ เครื่องมือและเอกสารในกระบวนการซอฟต์แวร์ การจัดการโครงการ การจัดการความเสี่ยง การวิศวกรรมความต้องการ การออกแบบซอฟต์แวร์ การพัฒนาซอฟต์แวร์ การจัดการโครงการซอฟต์แวร์ การทดสอบซอฟต์แวร์ การวิศวกรรมความมั่นคงซอฟต์แวร์ การจัดและประกันคุณภาพซอฟต์แวร์ การทวนสอบ การตรวจสอบ การสอบย้อนซอฟต์แวร์ การติดตั้งซอฟต์แวร์และการบริหารจัดการ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE421",
        subject_name_th: "หัวข้อพิเศษทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม 1",
        subject_name_en:
          "Special Topics in Software Engineering for Industrial 1",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE422",
        subject_name_th: "หัวข้อพิเศษทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม 2",
        subject_name_en:
          "Special Topics in Software Engineering for Industrial 2",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE423",
        subject_name_th: "หัวข้อพิเศษทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม 3",
        subject_name_en:
          "Special Topics in Software Engineering for Industrial 3",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE424",
        subject_name_th: "หัวข้อพิเศษทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม 4",
        subject_name_en:
          "Special Topics in Software Engineering for Industrial 4",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE425",
        subject_name_th: "หัวข้อพิเศษทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม 5",
        subject_name_en:
          "Special Topics in Software Engineering for Industrial 5",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE426",
        subject_name_th: "หัวข้อพิเศษทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม 6",
        subject_name_en:
          "Special Topics in Software Engineering for Industrial 6",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางวิศวกรรมซอฟต์แวร์อุตสาหกรรม",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE500",
        subject_name_th: "การคำนวณสมรรถนะสูงและสถาปัตยกรรมแบบคลาวด์",
        subject_name_en: "High Performance Computing and Cloud Architecture",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ คลัสเตอร์คอมพิวเตอร์ การคำนวณสมรรถนะสูง การประมวลผลแบบขนาน การประมวลผลแบบคลาวด์ การให้บริการโครงสร้างพื้นฐาน การให้บริการแพลตฟอร์ม บริการระบบจัดเก็บข้อมูล และการประยุกต์ใช้บริการ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE501",
        subject_name_th: "ฟัซซีเซต",
        subject_name_en: "Fuzzy set",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับแนวคิดของทฤษฎีฟัซซีเซต การดำเนินการในฟัซซีเซต เลขคณิตเชิงฟัซซี ความสัมพันธ์ในรูปแบบฟัซซี ทฤษฎีความเป็นไปได้ ฟัซซีลอจิก การประยุกต์ใช้ฟัซซีเซต",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE502",
        subject_name_th: "ระบบฝังตัวและระบบอินเทอร์เน็ตในทุกสิ่ง",
        subject_name_en: "Embedded Systems and Internet of Things",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ สถาปัตยกรรมของระบบฝังตัวและระบบอินเทอร์เน็ตในอุปกรณ์ หลักการทำงานและระบบปฏิบัติการ การออกแบบระบบฝังตัวและการโปรแกรมไมโครคอนโทรลเลอร์ การทำงานร่วมกันระหว่างระบบฝังตัวและระบบอื่นผ่านเครือข่ายอินเทอร์เน็ต การวิเคราะห์ข้อมูลสำหรับระบบอินเทอร์เน็ตในทุกสิ่งเครื่องมือและเทคโนโลยีสำหรับการพัฒนาระบบอินเทอร์เน็ตในทุกสิ่ง",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE503",
        subject_name_th: "การประมวลผลภาพดิจิทัล และการมองเห็นโดยคอมพิวเตอร์",
        subject_name_en: "Digital Image Processing and Computer Vision",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติ โมเดลการมองเห็นภาพของมนุษย์ หลักการของการเก็บข้อมูลภาพในระบบดิจิตอล การปรับปรุงคุณภาพของภาพ การหาขอบและเส้น การแบ่งพื้นที่ภาพ การฟิลเตอร์ด้วยวิธีแบบเชิงเส้น และแบบไม่เป็นเชิงเส้น การหารูปทรงจากภาพสองตา เฉดสี ลวดลาย เทคโนโลยีการเรียนรู้จดจำเพื่อประมวลผลภาพ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE504",
        subject_name_th: "การประมวลผลแบบคลาวด์",
        subject_name_en: "Cloud Computing",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับหลักการและเทคโนโลยีในการประมวลผลแบบคลาวด์ โครงสร้างพื้นฐานคลาวด์ การจำลองหน่วยประมวลผลและหน่วยความจำ (เวอร์ชวลไลเซชั่น) เมฆเก็บข้อมูล ระบบไฟล์แบบกระจาย ฐานข้อมูลแบบ NoSQL โมเดลการเขียนโปรแกรมแบบ MapReduce ปฏิบัติการใช้บริการคลาวด์สาธารณะ เช่น Amazon Web Service ในการเช่าและบริหารทรัพยากรสำหรับการประมวลผล การ deploy โปรแกรมประยุกต์บนบริการคลาวด์ การพัฒนาบริการบนเว็บเพื่อประมวลผลและเรียกค้นข้อมูลขนาดใหญ่",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE505",
        subject_name_th: "เทคโนโลยีบล็อคเชน",
        subject_name_en: "Blockchain Technology",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติการเกี่ยวกับ การเข้ารหัสเบื้องต้น  เงินตราเข้ารหัสลับ บิตคอยน์ โพรโทคอลของฉันทามติ การพิสูจน์การทำงาน การพิสูจน์ว่ามีส่วนได้ส่วนเสีย การจัดการและป้องกันความปลอดภัยสินทรัพย์ดิจิทัล การโจมตีทางเครือข่าย เอธิเรียม สัญญาอัจฉริยะ ความเป็นส่วนตัว การขยายขนาด กฎหมายและระเบียบข้อบังคับของบล็อคเชน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE506",
        subject_name_th: "คลังข้อมูลและเหมืองข้อมูล",
        subject_name_en: "Data Warehousing and Data Mining",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับการค้นหาองค์ความรู้จากฐานข้อมูล คลังข้อมูล  เปรียบเทียบฐานข้อมูลสำหรับดำเนินงานกับคลังข้อมูล ระบบคลังข้อมูลและส่วนประกอบ แบบจำลองมิติ กระบวนการวิเคราะห์ออนไลน์ (โอแล็บ) การเตรียมข้อมูล เหมืองข้อมูล สถาปัตยกรรมของระบบเหมืองข้อมูล วีการทำเหมืองข้อมูล ได้แก่ กฎความสัมพันธ์ การจำแนกประเภท การทำนาย และการจัดกลุ่ม การประยุกต์ใช้คลังข้อมูลและเหมืองข้อมูล",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE507",
        subject_name_th: "การจัดเก็บและค้นคืนเนื้อหาดิจิทัล",
        subject_name_en: "Digital Content Storage and Retrieval",
        subject_credit: 3,
        subject_description:
          "ศึกษาแนวความคิดในการจัดเก็บและค้นคืนเนื้อหาดิจิทัล การจัดเก็บข้อมูลและขั้นตอนการสืบค้น วิธีการค้นคืน รูปแบบการจัดเก็บข้อมูล กระบวนการในการเลือกข้อมูลที่ตรงกับการสอบถาม เทคนิคการสร้างดัชนีและการสืบค้น การประเมินประสิทธิผลของการค้นคืน การแสดงข้อมูลที่สืบค้นได้ การแสดงข้อมูลที่สืบค้นได้ เครื่องมือในการสืบค้น",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE508",
        subject_name_th: "ข้อมูลขนาดใหญ่และศูนย์ข้อมูลอัตโนมัติ",
        subject_name_en: "Big Data and Data Center Automation",
        subject_credit: 3,
        subject_description:
          "ศึกษาสถาปัตยกรรมองค์กร แนวคิดเกี่ยวกับข้อมูลขนาดใหญ่ กรอบความคิดของแมพ-รีดิวซ์ สถาปัตยกรรมข้อมูลขนาดใหญ่ การวิเคราะห์ข้อมูลขนาดใหญ่ ภาพรวมของศูนย์ข้อมูลอัตโนมัติ ประเภทของศูนย์ข้อมูล ศูนย์ข้อมูลในที่ตั้ง ศูนย์ข้อมูลเสมือน ศูนย์ข้อมูลอัตโนมัติ องค์ประกอบและโครงสร้างพื้นฐานมาตรฐานศูนย์ข้อมูล หลักการออกแบบศูนย์ข้อมูล การประสานศูนย์ข้อมูล การจัดการศูนย์ข้อมูล",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE509",
        subject_name_th: "วิศวกรรมเทคโนโลยีสื่อประสมและแอนิเมชัน",
        subject_name_en: "Multimedia Technology Engineering and Animation",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ กระบวนการทางวิศวกรรมซอฟต์แวร์ในงานสื่อประสม วิธีการ เขียนสคริปต์แอนิเมชัน การประยุกต์ใช้โปรแกรมสำเร็จรูปในการสร้างแอนิเมชันสองมิติหรือสามมิติ การใช้อุปกรณ์ทุ่นแรงในการ วาดภาพ เทคนิคการเคลื่อนไหวสมจริง การให้แสงเงา ระบบเสียง และระบบภาพเคลื่อนไหว การคำนวณประสิทธิภาพของทรัพยากร และนำเสนอผลงานกราฟิกแอนิเมชัน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE510",
        subject_name_th: "คอมพิวเตอร์กราฟิกส์",
        subject_name_en: "Computer Graphics",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติ ระบบคอมพิวเตอร์กราฟิกเบื้องต้น โดยมีเนื้อหาประกอบด้วยอุปกรณ์อินพุต- เอาต์พุต การหาทางเดินของจุดจากภาพ การแปลงใน 2 มิติ การเลื่อนที่การเชื่อมต่อ การหมุน การสะท้อน การตัดเล็ม หลักการกำหนดกรอบหน้าต่าง อัลกอริทึมการคลิป การแปลงจากวินโดว์ไปยังวิวพอร์ท หลักการประมวลผลใน 3 มิติ การแสดงภาพใน 3 มิติ การแปลงใน 3 มิติ การมองใน 3 มิติ และการโปรแกรมงานคอมพิวเตอร์กราฟิกส์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE511",
        subject_name_th: "การคำนวณเชิงควอนตัม",
        subject_name_en: "Quantum Computation ",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับพีชคณิตเชิงเส้นสำหรับการคำนวณเชิงควอนตัม เกตเชิงควอนตัม วงจรเชิงควอนตัม ขั้นตอนวิธีเชิง ควอนตัม ทฤษฎีสารสนเทศเชิงควอนตัม ควอนตัมคอมพิวเตอร์เชิงกายภาพ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE521",
        subject_name_th: "หัวข้อพิเศษด้านเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม 1",
        subject_name_en:
          "Special Topics in Applied Technology for Industrial 1",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE522",
        subject_name_th: "หัวข้อพิเศษด้านเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม 2",
        subject_name_en:
          "Special Topics in Applied Technology for Industrial 2",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE523",
        subject_name_th: "หัวข้อพิเศษด้านเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม 3",
        subject_name_en:
          "Special Topics in Applied Technology for Industrial 3",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE524",
        subject_name_th: "หัวข้อพิเศษด้านเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม 4",
        subject_name_en:
          "Special Topics in Applied Technology for Industrial 4",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE525",
        subject_name_th: "หัวข้อพิเศษด้านเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม 5",
        subject_name_en:
          "Special Topics in Applied Technology for Industrial 5",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE526",
        subject_name_th: "หัวข้อพิเศษด้านเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม 6",
        subject_name_en:
          "Special Topics in Applied Technology for Industrial 6",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางเทคโนโลยีประยุกต์เพื่ออุตสาหกรรม (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE600",
        subject_name_th: "ระบบสารสนเทศทางธุรกิจ",
        subject_name_en: "Information Systems of Business",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับ แนวคิดเกี่ยวกับระบบสารสนเทศทางธุรกิจ ระบบสารสนเทศตามหน้าที่ในองค์กรธุรกิจกรณีศึกษาระบบสารสนเทศด้านการบัญชี ระบบสารสนเทศด้านการเงิน ระบบสารสนเทศด้านการตลาดระบบสารสนเทศด้านการผลิตและการดำเนินการ ระบบสารสนเทศด้านทรัพยากรบุคคล ระบบธุรกรรมทางอิเล็กทรอนิกส์ เทคโนโลยีกับการพัฒนาระบบสารสนเทศทางธุรกิจ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE601",
        subject_name_th: "การตรวจสอบความสมเหตุสมผลและการทวนสอบซอฟต์แวร์",
        subject_name_en: "Software Validation and Verification",
        subject_credit: 3,
        subject_description:
          "ศึกษาแนวคิดพื้นฐานเกี่ยวกับการทดสอบซอฟต์แวร์  กระบวนการและแบบจำลองสำหรับการทดสอบซอฟต์แวร์  การตรวจสอบและการยืนยันความถูกต้องของซอฟต์แวร์  การทดสอบระดับส่วนประกอบ การทดสอบการรวมส่วนประกอบของซอฟต์แวร์ การทดสอบระบบ และทดสอบการยอมรับของผู้ใช้ การทดสอบเชิงไม่เป็นฟังก์ชัน เทคนิคการทบทวน การประมาณการทดสอบ เทคนิคการสร้างและตรวจสอบข้อมูลการทดสอบ เทคนิคการดูแลและควบคุมการทดสอบ  เครื่องมือที่ใช้ในการทดสอบซอฟต์แวร์ การวางแผนการทดสอบ การวิเคราะห์ปัญหาและการจัดทำรายงาน รวมถึงการใช้เทคนิคต่าง ๆในการทดสอบเพื่อให้แน่ใจว่าส่วนประกอบของซอฟต์แวร์หรือระบบตอบสนองความต้องการของผู้ออกแบบ และตรงตามความคาดหวังของผู้มีส่วนได้ส่วนเสีย",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE602",
        subject_name_th: "กระบวนการการพัฒนาซอฟต์แวร์เชิงบุคคล",
        subject_name_en: "Individual Software Development Process",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับกระบวนการพัฒนาซอฟต์แวร์เชิงบุคคล การวัดขนาดซอฟต์แวร์วิธีการประมาณการซอฟต์แวร์ การวางแผนการพัฒนาซอฟต์แวร์ คุณภาพของซอฟต์แวร์ แม่แบบสำหรับการออกแบบซอฟต์แวร์ การตรวจสอบความถูกต้องของการออกแบบและการเขียนโปรแกรมเศรษฐศาสตร์ของการกำจัดข้อบกพร่อง การกำหนดกระบวนการซอฟต์แวร์เชิงบุคคลเครื่องมือที่ช่วยในการปรับปรุงกระบวนการซอฟต์แวร์เชิงบุคคล",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE603",
        subject_name_th: "การออกแบบกราฟิกเพื่อการนำเสนอ  ",
        subject_name_en: "Graphics Design for Presentation",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับการนำเสนอ กระบวนการนำเสนอ เทคนิคการนำเสนอ หลักการในการออกแบบกราฟิกเพื่อการนำเสนอ การเตรียมข้อมูลสำหรับการออกแบบกราฟิก และการใช้โปรแกรมประยุกต์เพื่อสร้างกราฟิก",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE604",
        subject_name_th: "ระบบธุรกิจอัจฉริยะ",
        subject_name_en: "Business Intelligence Systems",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับแนวคิด หลักการ และประโยชน์ของธุรกิจอัจฉริยะ การนำธุรกิจอัจฉริยะไปประยุกต์ใช้ในองค์กร การออกแบบโครงสร้างพื้นฐานสำหรับธุรกิจอัจฉริยะ การจัดการกระบวนการธุรกิจอัจฉริยะ การใช้เครื่องมือสำหรับกระบวนการอีทีแอล การใช้เครื่องมือสำหรับการประมวลผลข้อมูล การใช้เครื่องมือสำหรับการสร้างและวิเคราะห์ข้อมูลในคิวบ์หลายมิติ การใช้เครื่องมือในการทำรายงาน และการสร้างแดชบอร์ด",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE605",
        subject_name_th: "การจัดการเทคโนโลยีและนวัตกรรม",
        subject_name_en: "Management of Technology and Innovation",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ เทคโนโลยีสารสนเทศนวัตกรรมกลยุทธ์เพื่อการจัดการเทคโนโลยีและนวัตกรรมวัฎจักรชีวิตของเทคโนโลยีและนวัตกรรมการวางแผนเทคโนโลยีการพัฒนาเทคโนโลยีการควบคุมและการประเมินผลเทคโนโลยีการวางแผนนวัตกรรม การนํานวัตกรรมไปปฏิบัติ การควบคุมและการประเมินผลนวัตกรรมการแข่งขัน ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE606",
        subject_name_th: "การทำเหมืองข้อมูลและระบบสารสนเทศทางธุรกิจ",
        subject_name_en: "Data Mining and Business Information Systems",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติ เกี่ยวกับการทำเหมืองข้อมูลเบื้องต้น และการเรียนรู้ของเครื่อง แนวคิด ตัวอย่าง และคุณลักษณะ วิธีการจำแนก ต้นไม้ ตัดสินใจการประเมินผล และความน่าเชื่อถือ และการประเมินผลด้วยลิฟต์และต้นทุน การจัดเตรียม ข้อมูลสำหรับการ ค้นพบความรู้ การจัดกลุ่ม กฎการเชื่อมโยง การสร้างภาพ, การสรุปและการตรวจจับการเบี่ยงเบน การประยุกต์ใช้งานในระบบสารสนเทศทางธุรกิจ (BIS) การวิเคราะห์ข้อมูลและการประยุกต์ใช้งานในด้านอื่น ๆ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE607",
        subject_name_th: "การสร้างและทำการตลาดสินค้าดิจิทัล",
        subject_name_en: "Digital Product Marketing",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติการเกี่ยวกับหลักแนวคิดเพื่อสร้างความเข้าใจในการสร้างและออกแบบนวัตกรรมเพื่อตอบสนองความต้องการของตลาดบนโลกออนไลน์ การบริหารจัดการการเงินเบื้องต้นสำหรับธุรกิจออนไลน์ ประเภทของสินค้าเชิงดิจิทัล กระบวนการวิเคราะห์และค้นหากลุ่มเป้าหมายให้ตรงตามแบรนด์ที่ต้องการมากที่สุด  หลักการสร้างเนื้อหาให้ตอบโจทย์กลุ่มเป้าหมาย กลยุทธ์ในการทำการโฆษณาผ่านเครือข่ายดิจิทัล ช่องทางการติดต่อกับลูกค้าและกระบวนการตอบสนองต่อลูกค้าด้วยระบบตอบสนองอัตโนมัติผ่านช่องทางอีเมลล์ หลักการวัดและประเมินผลสำหรับการทำตลาดบนโลกออนไลน์เพื่อการนำมาพัฒนาและปรับปรุงกระบวนการเดิมอย่างมีประสิทธิภาพ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE608",
        subject_name_th:
          "การออกแบบและพัฒนาโปรแกรมประยุกต์สำหรับอุปกรณ์เคลื่อนที่ ",
        subject_name_en: "Mobile Devices Application Design and Development  ",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ สถาปัตยกรรมฮาร์ดแวร์และซอฟต์แวร์ คุณลักษณะและข้อจำกัดของอุปกรณ์เคลื่อนที่ ระบบปฏิบัติการและสภาพแวดล้อมในการพัฒนา ศึกษาเครื่องมือและภาษาที่ใช้สำหรับพัฒนาโปรแกรมประยุกต์ การสร้างส่วนติดต่อกับผู้ใช้งาน พัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่ การจำลองเพื่อทดสอบและแก้ไขบนระบบคอมพิวเตอร์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE609",
        subject_name_th: "ผู้ประกอบการซอฟต์แวร์",
        subject_name_en: "Software Entrepreneurship",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับ    กลยุทธ์ผลิตภัณฑ์ซอฟต์แวร์ การบริหารบุคลากรโครงการซอฟต์แวร์ แผนการพัฒนาซอฟต์แวร์ ธุรกิจผลิตภัณฑ์ซอฟต์แวร์ ธุรกิจบริการลิขสิทธิ์ซอฟต์แวร์ และ แหล่งเงินทุน",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE610",
        subject_name_th: "การบริหารซอฟต์แวร์ขนาดใหญ่ในองค์กร",
        subject_name_en: "Enterprise Software Management in Organization",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับ ความรู้เกี่ยวกับการวางแผนทรัพยากร (Enterprise resource Planning: ERP) กระบวนการติดตั้งและติดตามการทางานของซอฟต์แวร์ กระบวนการสำรองข้อมูลอัตโนมัติ การแจ้งเตือน เมื่อเกิดเหตุการณ์ผิดปกติ การแก้ไขทางไกล ทักษะการสื่อสารเพื่อแก้ปัญหากับผู้ใช้งาน ระบบให้ความ ช่วยเหลือและแก้ปัญหาเร่งด่วนกรณีเกิดปัญหา การกู้คืนจากความเสียหาย การออกแบบ การสร้าง DR Site และการประยุกต์หลักการของ Cloud computing ในการบริหารซอฟต์แวร์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE611",
        subject_name_th: "การพัฒนาเว็บด้วยเทคโนโลยีสมัยใหม่",
        subject_name_en: "การพัฒนาเว็บด้วยเทคโนโลยีสมัยใหม่",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับ  การประยุกต์ใช้ CSS ในการออกแบบเว็บไซต์ การพัฒนาเว็บไซต์ที่เชื่อมต่อกับฐานข้อมูล การแปลงข้อมูล การโปรแกรมฝั่งเครื่องลูกข่าย การโปรแกรมฝั่งเครื่องแม่ข่าย เว็บเซอร์วิส และการ ประยุกต์ใช้เฟรมเวิร์คในการจัดทำโปรแกรมบนเว็บที่มีประสิทธิภาพ และวิธีการในการรักษาความ ปลอดภัยบนเว็บไซต์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE612",
        subject_name_th: "การพัฒนาโปรแกรมบนระบบคลาวด์",
        subject_name_en: "Cloud Application Development",
        subject_credit: 3,
        subject_description:
          "ศึกษาและฝึกปฏิบัติเกี่ยวกับ ความรู้พื้นฐานเกี่ยวกับคลาวด์คอมพิวติ้ง การพัฒนาซอฟต์แวร์ที่มีรูปแบบการให้บริการผ่านเครือข่ายอินเทอร์เน็ตบนคลาวด์ การพัฒนาซอฟต์แวร์บนแพลทฟอร์มและทรัพยากรบนคลาวด์ การเลือกใช้เครื่องมือและทรัพยากรสำหรับการพัฒนาซอฟต์แวร์บนคลาวด์ การพัฒนาทักษะการเขียนโปรแกรมและการพัฒนาซอฟต์แวร์บนอุปกรณ์เคลื่อนที่โดยการทำงานร่วมกับฟังก์ชันหลักของระบบคลาวด์",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE613",
        subject_name_th:
          "การพัฒนาโปรแกรมประยุกต์สำหรับอุปกรณ์เคลื่อนที่ขั้นสูง",
        subject_name_en: "Advance Mobile Device Application Development",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับ  การเขียนโปรแกรมบนระบบปฏิบัติการของอุปกรณ์เคลื่อนที่ การออกแบบการนำเข้าข้อมูล และการแสดงผลข้อมูล การเชื่อมต่อเว็บเซอร์วิส การพัฒนาแอพพลิเคชั่นบนอุปกรณ์เคลื่อนที่ การเรียกใช้ฐานข้อมูลทั้งแบบภายในเครื่อง และแบบเครือข่าย การใช้คำสั่งติดต่อผู้ใช้งานด้วย Table View การใช้ Framework และการส่งโปรแกรมประยุกต์ขึ้นไปสู่สาธารณะ",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE614",
        subject_name_th: "ทักษะสนับสนุนวิศวกรซอฟต์แวร์มืออาชีพ",
        subject_name_en: "Soft Skills for Professional Software Engineers",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับ ทัศนคติและทักษะที่พึงประสงค์ของวิศวกรซอฟต์แวร์มืออาชีพ วินัย ข้อผูกพัน และความรับผิดชอบ ทักษะการตั้งเป้าหมาย การจัดการเวลาและการจัดลำดับความสำคัญ ทักษะการเรียนรู้และการแบ่งปันความรู้ ทักษะการสื่อสาร การนำเสนองาน การสื่อสารระหว่างวัฒนธรรม ทักษะการทำงานเป็นทีม การเป็นผู้นำ และการเจรจาต่อรอง",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE621",
        subject_name_th: "หัวข้อพิเศษด้านผู้ประกอบการวิศวกรรมซอฟต์แวร์ 1",
        subject_name_en:
          "Special Topics in Software Engineering Entrepreneurship 1",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางผู้ประกอบการซอฟต์แวร์ (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)\r",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE622",
        subject_name_th: "หัวข้อพิเศษด้านผู้ประกอบการวิศวกรรมซอฟต์แวร์ 2",
        subject_name_en:
          "Special Topics in Software Engineering Entrepreneurship 2",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางผู้ประกอบการซอฟต์แวร์ (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)\r",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE623",
        subject_name_th: "หัวข้อพิเศษด้านผู้ประกอบการวิศวกรรมซอฟต์แวร์ 3",
        subject_name_en:
          "Special Topics in Software Engineering Entrepreneurship 3",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางผู้ประกอบการซอฟต์แวร์ (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)\r",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE624",
        subject_name_th: "หัวข้อพิเศษด้านผู้ประกอบการวิศวกรรมซอฟต์แวร์ 4",
        subject_name_en:
          "Special Topics in Software Engineering Entrepreneurship 4",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางผู้ประกอบการซอฟต์แวร์ (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)\r",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE625",
        subject_name_th: "หัวข้อพิเศษด้านผู้ประกอบการวิศวกรรมซอฟต์แวร์ 5",
        subject_name_en:
          "Special Topics in Software Engineering Entrepreneurship 5",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางผู้ประกอบการซอฟต์แวร์ (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)\r",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE626",
        subject_name_th: "หัวข้อพิเศษด้านผู้ประกอบการวิศวกรรมซอฟต์แวร์ 6",
        subject_name_en:
          "Special Topics in Software Engineering Entrepreneurship 6",
        subject_credit: 3,
        subject_description:
          "ศึกษาเกี่ยวกับหัวข้อปัจจุบันทางผู้ประกอบการซอฟต์แวร์ (จัดการสอนโดยอาจารย์ที่มีความเชี่ยวชาญเฉพาะ หรือเชิญผู้เชี่ยวชาญพิเศษหรืออาจารย์พิเศษ หรือมีจัดการเรียนการสอนร่วมกับหน่วยงานองค์กรหรือภาคอุตสาหกรรม)\r",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE701",
        subject_name_th: "หัวข้อพิเศษด้านวิศวกรรมซอฟต์แวร์ 1",
        subject_name_en: "Special Topics in Software Engineering 1",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับหัวข้อตามแนวทางการหารือร่วมกับผู้ประกอบการ หมายเหตุ : โดยในรายวิชาดังกล่าว ให้อาจารย์ผู้รับผิดชอบหลักสูตรและสถานประกอบการ หรือหน่วยงานของรัฐที่มีความร่วมมือ (MOU) ร่วม จัดการศึกษา วิเคราะห์ลักษณะงานของสถานที่ประกอบการรัฐวิสาหกิจ หรือหน่วยงานของรัฐ เพื่อกำหนดรายละเอียดของแต่ละรายวิชา ได้แก่ รหัสวิชา ชื่อวิชา จุดประสงค์รายวิชา สมรรถนะรายวิชา คำอธิบาย รายวิชา เวลาที่ใช้ในการเรียนและการฝึกปฏิบัติ และจำนวนหน่วยกิต เพื่อนำไปจัดทำแผนการเรียน และแนวทางการวัดประเมินผลรายวิชา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE702",
        subject_name_th: "หัวข้อพิเศษด้านวิศวกรรมซอฟต์แวร์ 2",
        subject_name_en: "Special Topics in Software Engineering 2",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับหัวข้อตามแนวทางการหารือร่วมกับผู้ประกอบการ หมายเหตุ : โดยในรายวิชาดังกล่าว ให้อาจารย์ผู้รับผิดชอบหลักสูตรและสถานประกอบการ หรือหน่วยงานของรัฐที่มีความร่วมมือ (MOU) ร่วม จัดการศึกษา วิเคราะห์ลักษณะงานของสถานที่ประกอบการรัฐวิสาหกิจ หรือหน่วยงานของรัฐ เพื่อกำหนดรายละเอียดของแต่ละรายวิชา ได้แก่ รหัสวิชา ชื่อวิชา จุดประสงค์รายวิชา สมรรถนะรายวิชา คำอธิบาย รายวิชา เวลาที่ใช้ในการเรียนและการฝึกปฏิบัติ และจำนวนหน่วยกิต เพื่อนำไปจัดทำแผนการเรียน และแนวทางการวัดประเมินผลรายวิชา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE703",
        subject_name_th: "หัวข้อพิเศษด้านวิศวกรรมซอฟต์แวร์ 3",
        subject_name_en: "Special Topics in Software Engineering 3",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับหัวข้อตามแนวทางการหารือร่วมกับผู้ประกอบการ หมายเหตุ : โดยในรายวิชาดังกล่าว ให้อาจารย์ผู้รับผิดชอบหลักสูตรและสถานประกอบการ หรือหน่วยงานของรัฐที่มีความร่วมมือ (MOU) ร่วม จัดการศึกษา วิเคราะห์ลักษณะงานของสถานที่ประกอบการรัฐวิสาหกิจ หรือหน่วยงานของรัฐ เพื่อกำหนดรายละเอียดของแต่ละรายวิชา ได้แก่ รหัสวิชา ชื่อวิชา จุดประสงค์รายวิชา สมรรถนะรายวิชา คำอธิบาย รายวิชา เวลาที่ใช้ในการเรียนและการฝึกปฏิบัติ และจำนวนหน่วยกิต เพื่อนำไปจัดทำแผนการเรียน และแนวทางการวัดประเมินผลรายวิชา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE704",
        subject_name_th: "หัวข้อพิเศษด้านวิศวกรรมซอฟต์แวร์ 4",
        subject_name_en: "Special Topics in Software Engineering 4",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับหัวข้อตามแนวทางการหารือร่วมกับผู้ประกอบการ หมายเหตุ : โดยในรายวิชาดังกล่าว ให้อาจารย์ผู้รับผิดชอบหลักสูตรและสถานประกอบการ หรือหน่วยงานของรัฐที่มีความร่วมมือ (MOU) ร่วม จัดการศึกษา วิเคราะห์ลักษณะงานของสถานที่ประกอบการรัฐวิสาหกิจ หรือหน่วยงานของรัฐ เพื่อกำหนดรายละเอียดของแต่ละรายวิชา ได้แก่ รหัสวิชา ชื่อวิชา จุดประสงค์รายวิชา สมรรถนะรายวิชา คำอธิบาย รายวิชา เวลาที่ใช้ในการเรียนและการฝึกปฏิบัติ และจำนวนหน่วยกิต เพื่อนำไปจัดทำแผนการเรียน และแนวทางการวัดประเมินผลรายวิชา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE705",
        subject_name_th: "หัวข้อพิเศษด้านวิศวกรรมซอฟต์แวร์ 5",
        subject_name_en: "Special Topics in Software Engineering 5",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับหัวข้อตามแนวทางการหารือร่วมกับผู้ประกอบการ หมายเหตุ : โดยในรายวิชาดังกล่าว ให้อาจารย์ผู้รับผิดชอบหลักสูตรและสถานประกอบการ หรือหน่วยงานของรัฐที่มีความร่วมมือ (MOU) ร่วม จัดการศึกษา วิเคราะห์ลักษณะงานของสถานที่ประกอบการรัฐวิสาหกิจ หรือหน่วยงานของรัฐ เพื่อกำหนดรายละเอียดของแต่ละรายวิชา ได้แก่ รหัสวิชา ชื่อวิชา จุดประสงค์รายวิชา สมรรถนะรายวิชา คำอธิบาย รายวิชา เวลาที่ใช้ในการเรียนและการฝึกปฏิบัติ และจำนวนหน่วยกิต เพื่อนำไปจัดทำแผนการเรียน และแนวทางการวัดประเมินผลรายวิชา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE706",
        subject_name_th: "หัวข้อพิเศษด้านวิศวกรรมซอฟต์แวร์ 6",
        subject_name_en: "Special Topics in Software Engineering 6",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับหัวข้อตามแนวทางการหารือร่วมกับผู้ประกอบการ หมายเหตุ : โดยในรายวิชาดังกล่าว ให้อาจารย์ผู้รับผิดชอบหลักสูตรและสถานประกอบการ หรือหน่วยงานของรัฐที่มีความร่วมมือ (MOU) ร่วม จัดการศึกษา วิเคราะห์ลักษณะงานของสถานที่ประกอบการรัฐวิสาหกิจ หรือหน่วยงานของรัฐ เพื่อกำหนดรายละเอียดของแต่ละรายวิชา ได้แก่ รหัสวิชา ชื่อวิชา จุดประสงค์รายวิชา สมรรถนะรายวิชา คำอธิบาย รายวิชา เวลาที่ใช้ในการเรียนและการฝึกปฏิบัติ และจำนวนหน่วยกิต เพื่อนำไปจัดทำแผนการเรียน และแนวทางการวัดประเมินผลรายวิชา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 18,
        subject_code: "ENGSE707",
        subject_name_th: "หัวข้อพิเศษด้านวิศวกรรมซอฟต์แวร์ 7",
        subject_name_en: "Special Topics in Software Engineering 7",
        subject_credit: 3,
        subject_description:
          "ศึกษาและปฏิบัติเกี่ยวกับหัวข้อตามแนวทางการหารือร่วมกับผู้ประกอบการ หมายเหตุ : โดยในรายวิชาดังกล่าว ให้อาจารย์ผู้รับผิดชอบหลักสูตรและสถานประกอบการ หรือหน่วยงานของรัฐที่มีความร่วมมือ (MOU) ร่วม จัดการศึกษา วิเคราะห์ลักษณะงานของสถานที่ประกอบการรัฐวิสาหกิจ หรือหน่วยงานของรัฐ เพื่อกำหนดรายละเอียดของแต่ละรายวิชา ได้แก่ รหัสวิชา ชื่อวิชา จุดประสงค์รายวิชา สมรรถนะรายวิชา คำอธิบาย รายวิชา เวลาที่ใช้ในการเรียนและการฝึกปฏิบัติ และจำนวนหน่วยกิต เพื่อนำไปจัดทำแผนการเรียน และแนวทางการวัดประเมินผลรายวิชา",
      },
      {
        curriculum_id: 2,
        subject_group_id: 19,
        subject_code: "ENGSE300",
        subject_name_th: "การเตรียมสหกิจศึกษาและฝึกงานด้านวิศวกรรมซอฟต์แวร์",
        subject_name_en:
          "Co-operative Education Preparation in Software Engineering ",
        subject_credit: 1,
        subject_description:
          "ฝึกปฏิบัติเกี่ยวกับ หลักการและแนวคิดเกี่ยวกับสหกิจศึกษาและฝึกงาน กระบวนการของสหกิจศึกษาและฝึกประสบการวิชาชีพ ระเบียบข้อบังคับที่เกี่ยวข้องกับสหกิจศึกษาและฝึกงาน ความรู้พื้นฐานและเทคนิคในการ สมัครงานอาชีพ เช่น การเลือกสถานประกอบการ วิธีการเขียนจดหมายสมัครงาน และสัมภาษณ์งาน อาชีพ ความรู้พื้นฐานที่จำเป็นสำหรับการไปปฏิบัติงานในสถานประกอบการ เทคนิคการนำเสนอและ การเขียนรายงาน การพัฒนาบุคลิกภาพเพื่อสังคมการทำงาน จิตวิทยาในการทำงาน ก่อนออกไปปฏิบัติงานที่สถานประกอบการ หมายเหตุ : การประเมินผลนักศึกษา ให้ค่าระดับคะแนนเป็น S (Satisfactory) พ.จ. (พอใจ) และ U (Unsatisfactory) ม.จ. (ไม่พอใจ)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 19,
        subject_code: "ENGSE301",
        subject_name_th: "สหกิจศึกษาด้านวิศวกรรมซอฟต์แวร์",
        subject_name_en: "Co-operative Education in Software Engineering",
        subject_credit: 6,
        subject_description:
          "ปฏิบัติงานในสถานที่ปฏิบัติงานเสมือนเป็นพนักงานชั่วคราวเต็มเวลาของสถานที่ปฏิบัติงาน ในตำแหน่งตามที่ตรงกับวิชาชีพและเหมาะสมกับความรู้ความสามารถของนักศึกษา เพื่อเชื่อมโยงความรู้ทางทฤษฎีกับการปฏิบัติงาน ทั้งรูปแบบของงานประจำหรือโครงงาน เป็นระยะเวลาไม่น้อยกว่า 15 สัปดาห์ ปฏิบัติตนตามระเบียบการบริหารงานบุคคลของ สถานที่ปฏิบัติงานตลอดระยะเวลาการปฏิบัติงาน มีหน้าที่รับผิดชอบแน่นอน นักศึกษาต้อง รับผิดชอบงานที่ได้รับมอบหมายจากสถานประกอบการอย่างเต็มความสามารถ มีอาจารย์ นิเทศและผู้นิเทศงานทำหน้าที่ให้คำปรึกษาระหว่างปฏิบัติงาน มีการติดตามและการ ประเมินผลการปฏิบัติงานอย่างเป็นระบบ ตลอดระยะเวลาปฏิบัติงาน ทำให้นักศึกษาได้รับ ประสบการณ์จริงจากการปฏิบัติงาน เกิดการพัฒนาตนเองให้เป็นผู้มีความพร้อมในการ ทำงาน และสามารถทำงานได้ทันทีหลังสำเร็จการศึกษา หมายเหตุ : การประเมินผลนักศึกษา ให้ค่าระดับคะแนนเป็น S (Satisfactory) พ.จ. (พอใจ) และ U (Unsatisfactory) ม.จ. (ไม่พอใจ)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 19,
        subject_code: "ENGSE302",
        subject_name_th: "ฝึกประสบการณ์วิชาชีพด้านวิศวกรรมซอฟต์แวร์ 1",
        subject_name_en: "Professional Experience in Software Engineering 1",
        subject_credit: 3,
        subject_description:
          "ฝึกประสบการณ์วิชาชีพด้านวิศวกรรมซอฟต์แวร์ในองค์การหรือหน่วยงานหรือ สถานประกอบการธุรกิจที่เหมาะสม เพื่อให้ได้รับความรู้ ทักษะ เจตคติ และประสบการณ์ในอาชีพ เป็นเวลา 1 ภาคเรียนตามที่หลักสูตรกำหนดแต่ไม่น้อยกว่า 15 สัปดาห์ โดยระหว่างการปฏิบัติงานจะมีการติดตามผล และประเมินร่วมกันระหว่างนักศึกษา อาจารย์ที่ปรึกษาและหัวหน้างาน นักศึกษา จะต้องส่งรายงานฉบับสมบูรณ์และเข้าสอบโดยการสัมมนา หมายเหตุ : การประเมินผลนักศึกษา ให้ค่าระดับคะแนนเป็น S (Satisfactory) พ.จ. (พอใจ) และ U (Unsatisfactory) ม.จ. (ไม่พอใจ)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 19,
        subject_code: "ENGSE303",
        subject_name_th: "ฝึกประสบการณ์วิชาชีพด้านวิศวกรรมซอฟต์แวร์ 2",
        subject_name_en: "Professional Experience in Software Engineering 2",
        subject_credit: 3,
        subject_description:
          "ฝึกประสบการณ์วิชาชีพด้านวิศวกรรมซอฟต์แวร์ในองค์การหรือหน่วยงานหรือ สถานประกอบการธุรกิจที่เหมาะสม เพื่อให้ได้รับความรู้ ทักษะ เจตคติ และประสบการณ์ในอาชีพ เป็นเวลา 1 ภาคเรียนตามที่หลักสูตรกำหนดแต่ไม่น้อยกว่า 15 สัปดาห์ โดยระหว่างการปฏิบัติงานจะมีการติดตามผล และประเมินร่วมกันระหว่างนักศึกษา อาจารย์ที่ปรึกษาและหัวหน้างาน นักศึกษา จะต้องส่งรายงานฉบับสมบูรณ์และเข้าสอบโดยการสัมมนา หมายเหตุ : การประเมินผลนักศึกษา ให้ค่าระดับคะแนนเป็น S (Satisfactory) พ.จ. (พอใจ) และ U (Unsatisfactory) ม.จ. (ไม่พอใจ)",
      },
      {
        curriculum_id: 2,
        subject_group_id: 19,
        subject_code: "ENGSE304",
        subject_name_th: "ปัญหาพิเศษจากสถานประกอบการ",
        subject_name_en: "Workplace Special Problem",
        subject_credit: 3,
        subject_description:
          "การนำโจทย์ปัญหาที่ได้จากสถานประกอบการ ทั้งภาคเอกชน รัฐวิสาหกิจ รัฐบาล หรือชุมชน หรือที่นักศึกษาได้ออกทำการฝึกประสบการณ์ ทั้งในรูปแบบของการฝึกงาน ปฏิบัติงานภาคสนาม หรืออื่น ๆ เพื่อนำมาศึกษา วิเคราะห์ โดยใช้ความรู้ทางด้านวิชาชีพของนักศึกษา มาทำการประยุกต์หาวิธี การแก้ปัญหา การพัฒนาวิธีการ หรือกระบวนการ โดยจัดทำตามรูปแบบของ โครงงานหรือโครงการหรือโครงการร่วม โดยมีอาจารย์ผู้เชี่ยวชาญในสาขาวิชาให้คำแนะนำและเป็นที่ปรึกษา โดยมีส่วนร่วม จากบุคลากรของสถานประกอบการหรือชุมชนนั้น.",
      },
      {
        curriculum_id: 2,
        subject_group_id: 19,
        subject_code: "ENGSE305",
        subject_name_th: "การฝึกเฉพาะตำแหน่ง",
        subject_name_en: "Practicum",
        subject_credit: 3,
        subject_description:
          "การฝึกตรงตามสาขาวิชาชีพของนักศึกษาในสถานที่ปฏิบัติงาน เพื่อให้มีทักษะและ สมรรถนะตามวิชาชีพ การฝึกเฉพาะตำแหน่งต้องเหมาะสมกับความรู้ทางทฤษฎี ตามชั้นปีของนักศึกษา สามารถดำเนินการควบคู่กับการเรียน มีผู้นิเทศงาน ผู้สอน หรือครูฝึก ให้คำปรึกษาและติดตามความก้าวหน้าของนักศึกษา มีการแลกเปลี่ยน ประสบการณ์ ระหว่างการฝึก",
      },
    ];

    const competencyData = [
      {
        // วิชา Computer Programming
        subject_id: 28,
        competency_name: "การคิดแบบเป็นขั้นเป็นตอน",
      },
      {
        subject_id: 28,
        competency_name:
          "ความเข้าใจในพื้นฐานคณิตศาสตร์และวิทยาศาสตร์คอมพิวเตอร์",
      },
      {
        subject_id: 28,
        competency_name: "ทักษะการโปรแกรม",
      },
      {
        // วิชา Data Structures and Algorithms
        subject_id: 39,
        competency_name: "ความเข้าใจเกี่ยวกับโครงสร้างข้อมูล",
      },
      {
        subject_id: 39,
        competency_name: "ความเข้าใจเกี่ยวกับอัลกอริทึม",
      },
      {
        subject_id: 39,
        competency_name: "การวิเคราะห์อัลกอริทึม",
      },
      {
        subject_id: 39,
        competency_name: "การเขียนโค้ดที่มีประสิทธิภาพ",
      },
      {
        subject_id: 39,
        competency_name: "การคิดแบบโครงสร้างข้อมูล",
      },
      {
        // วิชา Artificial Intelligence and Machine Learning
        subject_id: 80,
        competency_name: "ความเข้าใจเกี่ยวกับ Machine Learning",
      },
      {
        subject_id: 80,
        competency_name: "ความเข้าใจเกี่ยวกับเครื่องมือและไลบรารี",
      },
    ];
    const competencySubData = [
      {
        competency_id: 1,
        competency_sub_name: "การแยกปัญหา",
        competency_sub_description:
          "ความสามารถในการระบุปัญหาและแบ่งเป็นขั้นตอนย่อยที่เป็นเบื้องต้นเพื่อวางแผนการแก้ปัญหา",
      },
      {
        competency_id: 1,
        competency_sub_name: "การวางแผน",
        competency_sub_description:
          "การสามารถวางแผนวิธีแก้ปัญหาโดยระบุขั้นตอนที่จำเป็นและการเรียงลำดับเหตุการณ์ตามลำดับที่เหมาะสม",
      },
      {
        competency_id: 1,
        competency_sub_name: "การออกแบบ",
        competency_sub_description:
          "ความสามารถในการออกแบบโครงสร้างข้อมูลและอัลกอริทึมที่เหมาะสมเพื่อแก้ปัญหา และการคำนึงถึงประสิทธิภาพและประสิทธิภาพในการทำงาน",
      },
      {
        competency_id: 1,
        competency_sub_name: "การคิดแบบเชิงวิศวกรรม",
        competency_sub_description:
          "การสามารถคิดแบบเชิงวิศวกรรมเพื่อสร้างโซลูชันที่เหมาะสมและยั่งยืนสำหรับปัญหา",
      },
      {
        competency_id: 2,
        competency_sub_name: "การเข้าใจแบบตรรกะ",
        competency_sub_description:
          "ความสามารถในการใช้ตรรกะเพื่อแก้ปัญหาและการตรวจสอบความถูกต้องของข้อมูลและอัลกอริทึม",
      },
      {
        competency_id: 2,
        competency_sub_name: "ความเข้าใจในเลขฐานสองและการคำนวณทางคอมพิวเตอร์",
        competency_sub_description:
          "ทราบและเข้าใจเลขฐานสอง (binary) และการการคำนวณเชิงดิจิทัล แบบอย่างง่าย",
      },
      {
        competency_id: 3,
        competency_sub_name: "การเขียนโค้ด",
        competency_sub_description:
          "ทราบและเข้าใจวิธีการเขียนโค้ดในภาษาโปรแกรมต่าง ๆ โดยมีไวยากรณ์ที่ถูกต้องและโครงสร้างของโปรแกรมที่ดี",
      },
      {
        competency_id: 4,
        competency_sub_name: "ความเข้าใจแบบพื้นฐานของโครงสร้างข้อมูล",
        competency_sub_description:
          "ความเข้าใจถึงพื้นฐานของโครงสร้างข้อมูล เช่น อาร์เรย์ (Arrays), รายการ (Linked Lists), แถวคอย (Queues), และสแต็ก (Stacks) รวมถึงความเข้าใจถึงคุณสมบัติและการทำงานของแต่ละโครงสร้าง",
      },
      {
        competency_id: 4,
        competency_sub_name: "การเขียนโค้ดที่ใช้โครงสร้างข้อมูล",
        competency_sub_description:
          "ความสามารถในการเขียนโค้ดที่ใช้โครงสร้างข้อมูลอย่างถูกต้องและประสิทธิภาพ",
      },
      {
        competency_id: 5,
        competency_sub_name: "ความเข้าใจแบบพื้นฐานของอัลกอริทึม",
        competency_sub_description:
          "ความเข้าใจถึงอัลกอริทึมในรูปแบบของขั้นตอนและวิธีการทำงาน",
      },
      {
        competency_id: 6,
        competency_sub_name: "การวิเคราะห์อัลกอริทึม",
        competency_sub_description:
          "ความสามารถในการวิเคราะห์อัลกอริทึมเพื่อเข้าใจการทำงานและประสิทธิภาพ",
      },
      {
        competency_id: 7,
        competency_sub_name: "การประยุกต์ใช้อัลกอริทึม",
        competency_sub_description:
          "สามารถในการระบุวิธีการใช้อัลกอริทึมเพื่อแก้ปัญหาทางคอมพิวเตอร์",
      },
      {
        competency_id: 8,
        competency_sub_name: "ความเข้าใจเกี่ยวกับการประมวลผลข้อมูล",
        competency_sub_description:
          "สามารถในการเลือกใช้โครงสร้างข้อมูลที่เหมาะสมสำหรับประมวลผลข้อมูล และเข้าใจวิธีการทำงานของโครงสร้าง",
      },
      {
        competency_id: 9,
        competency_sub_name: "ความเข้าใจเกี่ยวกับแนวคิดการเรียนรู้เครื่อง",
        competency_sub_description:
          "ความเข้าใจถึงทฤษฎีและหลักการพื้นฐานของการเรียนรู้เครื่องและความสามารถในการจำแนะนำแนวคิดทั่วไปของ ML",
      },
      {
        competency_id: 9,
        competency_sub_name: "การเข้าใจเกี่ยวกับแบบจำลอง (Model Understanding)",
        competency_sub_description:
          "ความเข้าใจถึงวิธีการสร้างและประมวลผลแบบจำลองของ ML รวมถึงการคำนวณค่าความสามารถและค่าสเกลที่ใช้ในการวิเคราะห์และตรวจสอบแบบจำลอง",
      },
      {
        competency_id: 9,
        competency_sub_name: "ความเข้าใจเกี่ยวกับข้อมูล (Data Understanding)",
        competency_sub_description:
          "ความสามารถในการเข้าใจและจัดการข้อมูลที่ใช้ใน ML รวมถึงการทราบเกี่ยวกับข้อมูลเชิงทางการคณิตและการแสดงข้อมูล",
      },
      {
        competency_id: 10,
        competency_sub_name: "การใช้งานเครื่องมือและไลบรารี",
        competency_sub_description:
          "ความสามารถในการใช้เครื่องมือและไลบรารีในการแก้ปัญหาและการพัฒนาซอฟต์แวร์ รวมถึงการเข้าใจวิธีการใช้คำสั่งและฟังก์ชันที่เกี่ยวข้อง",
      },
    ];
    const studyPlanData = [
      {
        curriculum_id: 1,
        study_plan_name: "แผนการศึกษาแนะนำ มคอ.2 หลักสูตร 2560",
        study_plan_total_credit: 130,
      },
    ];
    const studyPlanRecordData = [
      {
        // ปี 1 เทอม 1
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 1",
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 21,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 25,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 28,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 31,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 32,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 33,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        // ปี 1 เทอม 2
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 2",
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 22,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 23,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 24,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 36,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 34,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 35,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 39,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        // ปี 2 เทอม 1
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 3",
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 26,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 29,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 30,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 37,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 46,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        // ปี 2 เทอม 2
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 4",
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 5",
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 27,
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 40,
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 41,
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 38,
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        // ปี 3 เทอม 1
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 3",
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 43,
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 42,
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 44,
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาชีพเลือก 1",
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาชีพเลือก 2",
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        // ปี 3 เทอม 2
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 7",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 8",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 45,
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 47,
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาชีพเลือก 3",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาชีพเลือก 4",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาเลือกเสรี 1",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        // ปี 4 เทอม 1
        study_plan_id: 1,
        subject_id: 49,
        study_plan_record_year: 4,
        study_plan_record_semester: 1,
      },
      {
        // ปี 4 เทอม 2
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปเลือก 1",
        study_plan_record_year: 4,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปเลือก 2",
        study_plan_record_year: 4,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 48,
        study_plan_record_year: 4,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาเลือกเสรี 2",
        study_plan_record_year: 4,
        study_plan_record_semester: 2,
      },
    ];
    const feedbackData = [
      {
        feedback_question: "ด้านการออกแบบ Design และการจัดรูปแบบของ Website",
        feedback_type: 1,
      },
      {
        feedback_question: "การจัดรูปแบบ Website ง่ายต่อการอ่านและใช้งาน",
        feedback_type: 1,
      },
      {
        feedback_question: "สีสันในการออกแบบ Website มีความเหมาะสม",
        feedback_type: 1,
      },
      {
        feedback_question: "ความเหมาะสมในการใช้สัญลักษณ์ในการสื่อสารความหมาย",
        feedback_type: 1,
      },
      {
        feedback_question: "ความรวดเร็วในการแสดงผล",
        feedback_type: 1,
      },
      {
        feedback_question: "ความถูกต้องของเนื้อหาบน Website",
        feedback_type: 1,
      },
      {
        feedback_question: "ผลลัพธ์ที่ได้ตรงกับความต้องการ",
        feedback_type: 1,
      },
      {
        feedback_question: "เนื้อหามีประโยชน์ต่อผู้ใช้งาน",
        feedback_type: 1,
      },
      {
        feedback_question: "Website สามารถเป็นแหล่งความรู้ได้",
        feedback_type: 1,
      },
      {
        feedback_question: "เป็นแหล่งข้อมูลที่ตรงกับความต้องการของผู้ใช้งาน",
        feedback_type: 1,
      },
      {
        feedback_question: "ข้อเสนอแนะ เชิงคุณภาพ",
        feedback_type: 2,
      },
    ];
    const interestSurveyData = [
      {
        curriculum_id: 2,
        interest_survey_version: 1,
      },
    ];
    const interestQuestionsData = [
      {
        // อาชีพที่ 1
        interest_survey_id: 1,
        interest_question_title: "มีความในชอบการศึกษาหรือหาเทคโนโลยีใหม่ ๆ",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title: "มีการจัดการความคิดเชิงวิศวกรรม",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 2
        interest_survey_id: 1,
        interest_question_title:
          "มีความชอบในการออกแบบ และ วางแผนการทำงานต่าง ๆ",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title: "มีความชอบในการเขียนโค้ด การแก้ไขโจทย์ปัญหา",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 3,4
        interest_survey_id: 1,
        interest_question_title: "มีทักษะ การวิเคราะห์ปัญหา และศึกษาปัญหา",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 3
        interest_survey_id: 1,
        interest_question_title: "มีทักษะในการตรวจสอบและสังเกต ถึงข้อผิดพลาด",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 4
        interest_survey_id: 1,
        interest_question_title:
          "มีความชอบในการออกแบบ และ วางแผน เพื่อแก้ไขปัญหา",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 5
        interest_survey_id: 1,
        interest_question_title: "มีทักษะในการตรวจสอบและสังเกต ถึงความบกพร่อง",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title:
          "มีทักษะในการวิเคราะห์ว่า ควรใช้อะไร เหมาะกับสิ่งไหน เพื่อให้ตรงกับวัตถุประสงค์",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 6
        interest_survey_id: 1,
        interest_question_title:
          "มีความชอบในการประกอบส่วนต่าง ๆ มารวมกันเป็นระบบเดียว",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title:
          "ชอบมองภาพรวม แต่ไม่สามารถระบุรายละเอียดทุกด้านของการทำงานได้",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 7
        interest_survey_id: 1,
        interest_question_title: "มีความชอบเทคโนโลยีที่สามารถทำให้มีรายได้",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title: "มีทักษะ หรือ เทคนิคด้านการบริหารและการจัดการ",
        interest_question_type: 1,
      },
      {
        //  คำถาม type 2 แบบ ทดสอบ
        interest_survey_id: 1,
        interest_question_title: "ลามะมีกี่ขา?",
        interest_question_type: 2,
      },
    ];
    const jobPositionData = [
      {
        job_position_name: "วิศวกรซอฟต์แวร์ (Software Engineer)",
      },
      {
        job_position_name: "นักพัฒนาซอฟต์แวร์ (Developer/Programmer)",
      },
      {
        job_position_name:
          "นักวิเคราะห์ระบบสารสนเทศในงานอุตสาหกรรม (IT Analyst)",
      },
      {
        job_position_name:
          "นักวิเคราะห์และออกแบบระบบ (System Analyst and Designer)",
      },
      {
        job_position_name:
          "นักประกันคุณภาพซอฟต์แวร์ (Software Quality Assurance)",
      },
      {
        job_position_name: "สถาปนิกซอฟต์แวร์ (Software Architect)",
      },
      {
        job_position_name:
          "ผู้ประกอบการด้านซอฟต์แวร์ (Software Entrepreneurship)",
      },
      {
        job_position_name: "ลามะ",
      },
    ];
    const InterestAnswersData = [
      {
        interest_question_id: 1,
      },
      {
        interest_question_id: 2,
      },
      {
        interest_question_id: 3,
      },
      {
        interest_question_id: 4,
      },
      {
        interest_question_id: 5,
      },
      {
        interest_question_id: 6,
      },
      {
        interest_question_id: 7,
      },
      {
        interest_question_id: 8,
      },
      {
        interest_question_id: 9,
      },
      {
        interest_question_id: 10,
      },
      {
        interest_question_id: 11,
      },
      {
        interest_question_id: 12,
      },
      {
        interest_question_id: 13,
      },
      {
        //  คำตอบ type 2 แบบ ทดสอบ
        interest_question_id: 14,
        interest_answer_title: "2 ขา",
      },
      {
        interest_question_id: 14,
        interest_answer_title: "4 ขา",
      },
      {
        interest_question_id: 14,
        interest_answer_title: "6 ขา",
      },
      {
        interest_question_id: 14,
        interest_answer_title: "ลามะไม่มีขา",
      },
    ];
    const interestAnswersJobData = [
      {
        interest_answer_id: 1,
        job_position_id: 1,
      },
      {
        interest_answer_id: 2,
        job_position_id: 1,
      },
      {
        interest_answer_id: 3,
        job_position_id: 2,
      },
      {
        interest_answer_id: 4,
        job_position_id: 2,
      },
      {
        interest_answer_id: 5,
        job_position_id: 3,
      },
      {
        interest_answer_id: 5,
        job_position_id: 4,
      },
      {
        interest_answer_id: 6,
        job_position_id: 3,
      },
      {
        interest_answer_id: 7,
        job_position_id: 4,
      },
      {
        interest_answer_id: 8,
        job_position_id: 5,
      },
      {
        interest_answer_id: 9,
        job_position_id: 5,
      },
      {
        interest_answer_id: 10,
        job_position_id: 6,
      },
      {
        interest_answer_id: 11,
        job_position_id: 6,
      },
      {
        interest_answer_id: 12,
        job_position_id: 7,
      },
      {
        interest_answer_id: 13,
        job_position_id: 7,
      },
      {
        interest_answer_id: 14,
        job_position_id: 8,
      },
    ];

    // const subjectStructuresData = [
    //   {
    //     // 1
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 1,
    //     subject_id: 1,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 1,
    //     subject_id: 2,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 1,
    //     subject_id: 3,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 1,
    //     subject_id: 4,
    //   },
    //   {
    //     // 2
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 2,
    //     subject_id: 5,
    //   },
    //   {
    //     // 3
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 3,
    //     subject_id: 6,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 3,
    //     subject_id: 7,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 3,
    //     subject_id: 8,
    //   },
    //   {
    //     // 4
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 4,
    //     subject_id: 9,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 4,
    //     subject_id: 10,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 4,
    //     subject_id: 11,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 4,
    //     subject_id: 12,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 4,
    //     subject_id: 13,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 4,
    //     subject_id: 14,
    //   },
    //   {
    //     // 5
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 5,
    //     subject_id: 15,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 5,
    //     subject_id: 16,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 5,
    //     subject_id: 17,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 5,
    //     subject_id: 18,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 5,
    //     subject_id: 19,
    //   },
    //   {
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 5,
    //     subject_id: 20,
    //   },
    //   {
    //     // 6
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 6,
    //     subject_id: 21,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 6,
    //     subject_id: 22,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 6,
    //     subject_id: 23,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 6,
    //     subject_id: 24,
    //   },
    //   {
    //     // 7
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     subject_id: 25,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     subject_id: 26,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     subject_id: 27,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     subject_id: 28,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     subject_id: 29,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     subject_id: 30,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     subject_id: 31,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     subject_id: 32,
    //   },
    //   {
    //     // 8
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 8,
    //     subject_id: 33,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 8,
    //     subject_id: 34,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 8,
    //     subject_id: 35,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 8,
    //     subject_id: 36,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 8,
    //     subject_id: 37,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 8,
    //     subject_id: 38,
    //   },
    //   {
    //     // 9
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 9,
    //     subject_id: 39,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 9,
    //     subject_id: 40,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 9,
    //     subject_id: 41,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 9,
    //     subject_id: 42,
    //   },
    //   {
    //     // 10
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 10,
    //     subject_id: 43,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 10,
    //     subject_id: 44,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 10,
    //     subject_id: 45,
    //   },
    //   {
    //     // 11
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 11,
    //     subject_id: 46,
    //   },
    //   {
    //     // 12
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 12,
    //     subject_id: 47,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 12,
    //     subject_id: 48,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 12,
    //     subject_id: 49,
    //   },
    //   {
    //     // 13
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 50,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 51,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 52,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 53,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 54,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 55,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 56,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 57,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 13,
    //     subject_id: 58,
    //   },
    //   {
    //     // 14
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 59,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 60,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 61,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 62,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 63,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 64,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 65,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 66,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 67,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 68,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 69,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 70,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 14,
    //     subject_id: 71,
    //   },
    //   {
    //     // 15
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 72,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 73,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 74,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 75,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 76,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 77,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 78,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 79,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 80,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 81,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 82,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 83,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 84,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 85,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 86,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 87,
    //   },
    //   {
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: 15,
    //     subject_id: 88,
    //   },
    // ];
    const subjectStructuresSE66Data = [
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 1,
        subject_id: 1,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 1,
        subject_id: 2,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 1,
        subject_id: 3,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 1,
        subject_id: 4,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 2,
        subject_id: 5,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 3,
        subject_id: 6,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 3,
        subject_id: 7,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 3,
        subject_id: 8,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 3,
        subject_id: 9,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        subject_id: 10,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        subject_id: 11,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        subject_id: 12,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        subject_id: 13,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        subject_id: 14,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        subject_id: 15,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        subject_id: 16,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 17,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 18,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 19,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 20,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 21,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 22,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 23,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 24,
      },
      {
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        subject_id: 25,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 16,
        subject_id: 26,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 16,
        subject_id: 27,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 16,
        subject_id: 28,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 16,
        subject_id: 29,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 30,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 31,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 32,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 33,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 34,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 35,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 36,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 37,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 38,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 39,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 40,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 41,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 42,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 43,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 44,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 45,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 46,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 47,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 48,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        subject_id: 49,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 50,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 51,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 52,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 53,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 54,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 55,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 56,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 57,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 58,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 59,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 60,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 61,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 62,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 63,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 64,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 65,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 66,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 67,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 68,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 69,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 70,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 71,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 72,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 73,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 74,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 75,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 76,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 77,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 78,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 79,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 80,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 81,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 82,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 83,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 84,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 85,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 86,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 87,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 88,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 89,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 90,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 91,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 92,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 93,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 94,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 95,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 96,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 97,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 98,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 99,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 100,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 101,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 102,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 103,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 104,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 105,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 106,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 107,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 108,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        subject_id: 109,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 19,
        subject_id: 110,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 19,
        subject_id: 111,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 19,
        subject_id: 112,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 19,
        subject_id: 113,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 19,
        subject_id: 114,
      },
      {
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 19,
        subject_id: 115,
      },
    ];

    // const curriculumStructureV2Data = [
    //   {
    //     // 1
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 1,
    //     credit_total: 12,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 2,
    //     credit_total: 3,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 3,
    //     credit_total: 9,
    //   },
    //   {
    //     // 2
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 4,
    //     credit_total: 3,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 5,
    //     credit_total: 4,
    //   },
    //   {
    //     // 3
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 6,
    //     credit_total: 10,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     credit_total: 22,
    //   },
    //   {
    //     // 4
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 8,
    //     credit_total: 16,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 9,
    //     credit_total: 12,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 10,
    //     credit_total: 9,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 11,
    //     credit_total: 3,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 12,
    //     credit_total: 10,
    //   },
    //   {
    //     // 5
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: null,
    //     credit_total: 12,
    //   },
    // ];
    const curriculumStructureSE66Data = [
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 1,
        credit_total: 9,
      },
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 2,
        credit_total: 3,
      },
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 3,
        credit_total: 6,
      },
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        credit_total: 3,
      },
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        credit_total: 3,
      },
      {
        curriculum_id: 2,
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 16,
        credit_total: 12,
      },
      {
        curriculum_id: 2,
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        credit_total: 55,
      },
      {
        curriculum_id: 2,
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        credit_total: 21,
      },
      {
        curriculum_id: 2,
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 19,
        credit_total: 12,
      },
      {
        curriculum_id: 2,
        subject_category_id: 3,
        subject_type_id: null,
        subject_group_id: null,
        credit_total: 6,
      },
    ];

    // const continueSubjectsData = [
    //   {
    //     // level 1
    //     parent_id: null,
    //     subject_id: 28,
    //   },
    //   {
    //     // level 2
    //     parent_id: 28,
    //     subject_id: 39,
    //   },
    //   {
    //     parent_id: 28,
    //     subject_id: 65,
    //   },

    //   {
    //     parent_id: 28,
    //     subject_id: 69,
    //   },

    //   {
    //     parent_id: 28,
    //     subject_id: 75,
    //   },
    //   {
    //     parent_id: 28,
    //     subject_id: 76,
    //   },
    //   {
    //     // level 3
    //     parent_id: 39,
    //     subject_id: 40,
    //   },
    //   {
    //     parent_id: 39,
    //     subject_id: 46,
    //   },
    //   {
    //     parent_id: 39,
    //     subject_id: 45,
    //   },
    //   {
    //     parent_id: 39,
    //     subject_id: 81,
    //   },
    //   {
    //     // level 4
    //     parent_id: 40,
    //     subject_id: 52,
    //   },
    //   {
    //     // level 4
    //     parent_id: 46,
    //     subject_id: 43,
    //   },
    //   {
    //     // level 4
    //     parent_id: 45,
    //     subject_id: 72,
    //   },
    //   {
    //     parent_id: 45,
    //     subject_id: 73,
    //   },
    //   {
    //     parent_id: 45,
    //     subject_id: 74,
    //   },
    //   {
    //     parent_id: 45,
    //     subject_id: 77,
    //   },
    //   {
    //     parent_id: 45,
    //     subject_id: 78,
    //   },
    //   {
    //     parent_id: 45,
    //     subject_id: 83,
    //   },
    //   {
    //     parent_id: 45,
    //     subject_id: 86,
    //   },
    // ];

    // const continueSubjectCE60Data = [
    //   { parent_id: null, subject_id: 1 },
    //   { parent_id: null, subject_id: 2 },
    //   { parent_id: null, subject_id: 3 },
    //   { parent_id: null, subject_id: 4 },
    //   { parent_id: null, subject_id: 5 },
    //   { parent_id: null, subject_id: 6 },
    //   { parent_id: null, subject_id: 7 },
    //   { parent_id: null, subject_id: 8 },
    //   { parent_id: null, subject_id: 9 },
    //   { parent_id: null, subject_id: 10 },
    //   { parent_id: null, subject_id: 11 },
    //   { parent_id: null, subject_id: 12 },
    //   { parent_id: null, subject_id: 13 },
    //   { parent_id: null, subject_id: 14 },
    //   { parent_id: null, subject_id: 15 },
    //   { parent_id: null, subject_id: 16 },
    //   { parent_id: null, subject_id: 17 },
    //   { parent_id: null, subject_id: 18 },
    //   { parent_id: null, subject_id: 19 },
    //   { parent_id: null, subject_id: 20 },
    //   { parent_id: null, subject_id: 21 },
    //   { parent_id: 21, subject_id: 22 },
    //   { parent_id: 21, subject_id: 29 },
    //   { parent_id: 21, subject_id: 30 },
    //   { parent_id: 30, subject_id: 70 },
    //   { parent_id: 30, subject_id: 71 },
    //   { parent_id: null, subject_id: 23 },
    //   { parent_id: 23, subject_id: 24 },
    //   { parent_id: 23, subject_id: 26 },
    //   { parent_id: null, subject_id: 25 },
    //   { parent_id: null, subject_id: 27 },
    //   { parent_id: null, subject_id: 28 },
    //   { parent_id: 28, subject_id: 39 },
    //   { parent_id: 28, subject_id: 65 },
    //   { parent_id: 28, subject_id: 69 },
    //   { parent_id: 28, subject_id: 75 },
    //   { parent_id: 28, subject_id: 76 },
    //   { parent_id: 39, subject_id: 40 },
    //   { parent_id: 39, subject_id: 46 },
    //   { parent_id: 39, subject_id: 45 },
    //   { parent_id: 39, subject_id: 81 },
    //   { parent_id: 40, subject_id: 52 },
    //   { parent_id: 46, subject_id: 43 },
    //   { parent_id: 45, subject_id: 72 },
    //   { parent_id: 45, subject_id: 73 },
    //   { parent_id: 45, subject_id: 74 },
    //   { parent_id: 45, subject_id: 77 },
    //   { parent_id: 45, subject_id: 78 },
    //   { parent_id: 45, subject_id: 83 },
    //   { parent_id: 45, subject_id: 86 },
    //   { parent_id: null, subject_id: 31 },
    //   { parent_id: null, subject_id: 32 },
    //   { parent_id: null, subject_id: 33 },
    //   { parent_id: null, subject_id: 34 },
    //   { parent_id: 34, subject_id: 38 },
    //   { parent_id: 34, subject_id: 61 },
    //   { parent_id: 34, subject_id: 66 },
    //   { parent_id: 38, subject_id: 62 },
    //   { parent_id: null, subject_id: 35 },
    //   { parent_id: null, subject_id: 36 },
    //   { parent_id: 36, subject_id: 60 },
    //   { parent_id: 36, subject_id: 80 },
    //   { parent_id: 36, subject_id: 82 },
    //   { parent_id: null, subject_id: 37 },
    //   { parent_id: 37, subject_id: 52 },
    //   { parent_id: 37, subject_id: 69 },
    //   { parent_id: null, subject_id: 41 },
    //   { parent_id: 41, subject_id: 42 },
    //   { parent_id: 41, subject_id: 53 },
    //   { parent_id: 41, subject_id: 59 },
    //   { parent_id: 42, subject_id: 54 },
    //   { parent_id: 42, subject_id: 55 },
    //   { parent_id: 42, subject_id: 56 },
    //   { parent_id: 42, subject_id: 58 },
    //   { parent_id: null, subject_id: 44 },
    //   { parent_id: 44, subject_id: 54 },
    //   { parent_id: null, subject_id: 47 },
    //   { parent_id: 47, subject_id: 48 },
    //   { parent_id: null, subject_id: 49 },
    //   { parent_id: null, subject_id: 50 },
    //   { parent_id: null, subject_id: 51 },
    //   { parent_id: null, subject_id: 57 },
    //   { parent_id: null, subject_id: 63 },
    //   { parent_id: null, subject_id: 64 },
    //   { parent_id: null, subject_id: 67 },
    //   { parent_id: null, subject_id: 68 },
    //   { parent_id: null, subject_id: 79 },
    //   { parent_id: null, subject_id: 84 },
    //   { parent_id: null, subject_id: 85 },
    //   { parent_id: null, subject_id: 87 },
    //   { parent_id: null, subject_id: 88 },
    // ];
    const continueSubjectsSE66Data = [
      {
        parent_id: null,
        subject_id: 1,
      },
      {
        parent_id: null,
        subject_id: 2,
      },
      {
        parent_id: null,
        subject_id: 3,
      },
      {
        parent_id: null,
        subject_id: 4,
      },
      {
        parent_id: null,
        subject_id: 5,
      },
      {
        parent_id: null,
        subject_id: 6,
      },
      {
        parent_id: null,
        subject_id: 7,
      },
      {
        parent_id: null,
        subject_id: 8,
      },
      {
        parent_id: null,
        subject_id: 9,
      },
      {
        parent_id: null,
        subject_id: 10,
      },
      {
        parent_id: null,
        subject_id: 11,
      },
      {
        parent_id: null,
        subject_id: 12,
      },
      {
        parent_id: null,
        subject_id: 13,
      },
      {
        parent_id: null,
        subject_id: 14,
      },
      {
        parent_id: null,
        subject_id: 15,
      },
      {
        parent_id: null,
        subject_id: 16,
      },
      {
        parent_id: null,
        subject_id: 17,
      },
      {
        parent_id: null,
        subject_id: 18,
      },
      {
        parent_id: null,
        subject_id: 19,
      },
      {
        parent_id: null,
        subject_id: 20,
      },
      {
        parent_id: null,
        subject_id: 21,
      },
      {
        parent_id: null,
        subject_id: 22,
      },
      {
        parent_id: null,
        subject_id: 23,
      },
      {
        parent_id: null,
        subject_id: 24,
      },
      {
        parent_id: null,
        subject_id: 25,
      },
      {
        parent_id: null,
        subject_id: 26,
      },
      {
        parent_id: null,
        subject_id: 27,
      },
      {
        parent_id: null,
        subject_id: 28,
      },
      {
        parent_id: null,
        subject_id: 29,
      },
      {
        parent_id: 29,
        subject_id: 33,
      },
      {
        parent_id: 29,
        subject_id: 34,
      },
      {
        parent_id: 29,
        subject_id: 46,
      },
      {
        parent_id: 29,
        subject_id: 66,
      },
      {
        parent_id: 29,
        subject_id: 67,
      },
      {
        parent_id: 29,
        subject_id: 90,
      },
      {
        parent_id: 33,
        subject_id: 94,
      },
      {
        parent_id: 90,
        subject_id: 95,
      },
      {
        parent_id: null,
        subject_id: 30,
      },
      {
        parent_id: null,
        subject_id: 31,
      },
      {
        parent_id: null,
        subject_id: 32,
      },
      {
        parent_id: null,
        subject_id: 35,
      },
      {
        parent_id: null,
        subject_id: 36,
      },
      {
        parent_id: null,
        subject_id: 37,
      },
      {
        parent_id: null,
        subject_id: 38,
      },
      {
        parent_id: null,
        subject_id: 39,
      },
      {
        parent_id: null,
        subject_id: 40,
      },
      {
        parent_id: null,
        subject_id: 41,
      },
      {
        parent_id: 41,
        subject_id: 42,
      },
      {
        parent_id: null,
        subject_id: 43,
      },
      {
        parent_id: null,
        subject_id: 44,
      },
      {
        parent_id: null,
        subject_id: 45,
      },
      {
        parent_id: null,
        subject_id: 47,
      },
      {
        parent_id: null,
        subject_id: 48,
      },
      {
        parent_id: 48,
        subject_id: 64,
      },
      {
        parent_id: null,
        subject_id: 49,
      },
      {
        parent_id: null,
        subject_id: 50,
      },
      {
        parent_id: null,
        subject_id: 51,
      },
      {
        parent_id: null,
        subject_id: 52,
      },
      {
        parent_id: null,
        subject_id: 53,
      },
      {
        parent_id: null,
        subject_id: 54,
      },
      {
        parent_id: null,
        subject_id: 55,
      },
      {
        parent_id: null,
        subject_id: 56,
      },
      {
        parent_id: null,
        subject_id: 57,
      },
      {
        parent_id: null,
        subject_id: 58,
      },
      {
        parent_id: null,
        subject_id: 59,
      },
      {
        parent_id: null,
        subject_id: 60,
      },
      {
        parent_id: null,
        subject_id: 61,
      },
      {
        parent_id: null,
        subject_id: 62,
      },
      {
        parent_id: null,
        subject_id: 63,
      },
      {
        parent_id: null,
        subject_id: 65,
      },
      {
        parent_id: null,
        subject_id: 68,
      },
      {
        parent_id: null,
        subject_id: 69,
      },
      {
        parent_id: null,
        subject_id: 70,
      },
      {
        parent_id: null,
        subject_id: 71,
      },
      {
        parent_id: null,
        subject_id: 72,
      },
      {
        parent_id: null,
        subject_id: 73,
      },
      {
        parent_id: null,
        subject_id: 74,
      },
      {
        parent_id: null,
        subject_id: 75,
      },
      {
        parent_id: null,
        subject_id: 76,
      },
      {
        parent_id: null,
        subject_id: 77,
      },
      {
        parent_id: null,
        subject_id: 78,
      },
      {
        parent_id: null,
        subject_id: 79,
      },
      {
        parent_id: null,
        subject_id: 80,
      },
      {
        parent_id: null,
        subject_id: 81,
      },
      {
        parent_id: null,
        subject_id: 82,
      },
      {
        parent_id: null,
        subject_id: 83,
      },
      {
        parent_id: null,
        subject_id: 84,
      },
      {
        parent_id: null,
        subject_id: 85,
      },
      {
        parent_id: null,
        subject_id: 86,
      },
      {
        parent_id: null,
        subject_id: 87,
      },
      {
        parent_id: null,
        subject_id: 88,
      },
      {
        parent_id: null,
        subject_id: 89,
      },
      {
        parent_id: null,
        subject_id: 91,
      },
      {
        parent_id: null,
        subject_id: 92,
      },
      {
        parent_id: null,
        subject_id: 93,
      },
      {
        parent_id: null,
        subject_id: 96,
      },
      {
        parent_id: null,
        subject_id: 97,
      },
      {
        parent_id: null,
        subject_id: 98,
      },
      {
        parent_id: null,
        subject_id: 99,
      },
      {
        parent_id: null,
        subject_id: 100,
      },
      {
        parent_id: null,
        subject_id: 101,
      },
      {
        parent_id: null,
        subject_id: 102,
      },
      {
        parent_id: null,
        subject_id: 103,
      },
      {
        parent_id: null,
        subject_id: 104,
      },
      {
        parent_id: null,
        subject_id: 105,
      },
      {
        parent_id: null,
        subject_id: 106,
      },
      {
        parent_id: null,
        subject_id: 107,
      },
      {
        parent_id: null,
        subject_id: 108,
      },
      {
        parent_id: null,
        subject_id: 109,
      },
      {
        parent_id: null,
        subject_id: 110,
      },
      {
        parent_id: 110,
        subject_id: 111,
      },
      {
        parent_id: null,
        subject_id: 112,
      },
      {
        parent_id: 112,
        subject_id: 113,
      },
      {
        parent_id: null,
        subject_id: 114,
      },
      {
        parent_id: null,
        subject_id: 115,
      },
    ];

    const subjectsJobsRelatedSE66Data = [
      {
        subject_id: 30,
        job_position_id: 1,
      },
      {
        subject_id: 33,
        job_position_id: 1,
      },
      {
        subject_id: 41,
        job_position_id: 1,
      },
      {
        subject_id: 54,
        job_position_id: 1,
      },
      {
        subject_id: 56,
        job_position_id: 1,
      },
      {
        subject_id: 34,
        job_position_id: 2,
      },
      {
        subject_id: 46,
        job_position_id: 2,
      },
      {
        subject_id: 47,
        job_position_id: 2,
      },
      {
        subject_id: 49,
        job_position_id: 2,
      },
      {
        subject_id: 95,
        job_position_id: 2,
      },
      {
        subject_id: 38,
        job_position_id: 3,
      },
      {
        subject_id: 39,
        job_position_id: 3,
      },
      {
        subject_id: 52,
        job_position_id: 3,
      },
      {
        subject_id: 57,
        job_position_id: 3,
      },
      {
        subject_id: 36,
        job_position_id: 4,
      },
      {
        subject_id: 38,
        job_position_id: 4,
      },
      {
        subject_id: 54,
        job_position_id: 4,
      },
      {
        subject_id: 56,
        job_position_id: 4,
      },
      {
        subject_id: 74,
        job_position_id: 4,
      },
      {
        subject_id: 85,
        job_position_id: 4,
      },
      {
        subject_id: 31,
        job_position_id: 5,
      },
      {
        subject_id: 35,
        job_position_id: 5,
      },
      {
        subject_id: 83,
        job_position_id: 5,
      },
      {
        subject_id: 96,
        job_position_id: 5,
      },
      {
        subject_id: 32,
        job_position_id: 6,
      },
      {
        subject_id: 37,
        job_position_id: 6,
      },
      {
        subject_id: 48,
        job_position_id: 6,
      },
      {
        subject_id: 67,
        job_position_id: 6,
      },
      {
        subject_id: 45,
        job_position_id: 7,
      },
      {
        subject_id: 82,
        job_position_id: 7,
      },
      {
        subject_id: 89,
        job_position_id: 7,
      },
      {
        subject_id: 91,
        job_position_id: 7,
      },
      {
        subject_id: 92,
        job_position_id: 7,
      },
    ];

    await Faculty.createMany(facultyData);
    await CollegianGroup.createMany(collegianGroupData);
    await Curriculum.createMany(curriculumData);
    await SubjectCategory.createMany(subjectCategoryData);
    await SubjectType.createMany(subjectTypeData);
    await SubjectGroup.createMany(subjectGroupData);
    await Subject.createMany(subjectSE66Data);
    await Competency.createMany(competencyData);
    await CompetencySub.createMany(competencySubData);
    await StudyPlan.createMany(studyPlanData);
    await StudyPlanRecord.createMany(studyPlanRecordData);
    await Feedback.createMany(feedbackData);
    await InterestSurvey.createMany(interestSurveyData);
    await InterestQuestion.createMany(interestQuestionsData);
    await InterestAnswer.createMany(InterestAnswersData);
    await JobPosition.createMany(jobPositionData);
    await InterestAnswerJob.createMany(interestAnswersJobData);

    await SubjectStructure.createMany(subjectStructuresSE66Data);
    await CurriculumStructuresV2.createMany(curriculumStructureSE66Data);
    await ContinueSubject.createMany(continueSubjectsSE66Data);
    await SubjectsJobsRelated.createMany(subjectsJobsRelatedSE66Data);
  }
}
