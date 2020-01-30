<script>
  import Badge from "../../components/Badge.svelte";
  import EducationalInstitute from "../../components/EducationalInstitute.svelte";
  import PersonalProjects from "../../components/PersonalProjects.svelte";
  import Languages from "../../components/Languages.svelte";
	import { fade } from 'svelte/transition';

</script>

<style>
  .profileSummary {
    color: var(--resume);
    font-size: 15px;
  }

  .role {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 17px;
  }
  .location {
    font-size: 12px;
    display: flex;
    align-items: center;
    color: var(--dark-tint);
  }
  .locIcon {
    font-size: 18px;
    padding-right: 4px;
  }
  .city {
    padding-left: 10%;
    display: flex;
    align-items: center;
  }
  .task {
    color: var(--primary);
    margin: 12px 0px;
    font-size: 15px;
  }
  .skillsContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .taskUl {
    margin: 5px 0px;
    padding-inline-start: 30px;
  }
  li {
    font-size: 15px;
    color: var(--resume);
  }
  .showLang {
    display: flex;
      flex-direction: column;
  }
  @media screen and (min-width: 550px) {
     .right {
      margin-left: 30px;
    }
    .title {
      margin: 30px 0px;
    }
    .prDiv {
      max-width: 70%;
    }
    .skillsContainer {
      display: none;
    }
    .showSkills {
      display: none;
    }
    .profileSummary {
      max-width: 80%;
    }
    .showLang {
     display: none;
    }
  }
 
</style>
 <div class="right" transition:fade >
  
<h2 class="title">Professional Summary</h2>
<p class="profileSummary">
  Versatile Front-end Developer with 3 years of experience designing,
  developing, and managing complex mobile-responsive web sites and packages.
  Specializes in Angular, react, and react-native handled both web as well as
  hybrid mobile applications using ionic framework and react-native.
</p>
<h2 class="title showSkills">Skills</h2>
<div class="skillsContainer">
  <Badge color="#633ce0" title="javascript" />
  <Badge color="#633ce0" title="HTML,CSS" />
  <Badge color="#633ce0" title="Typescript" />
  <Badge color="#633ce0" title="Nodejs" />
  <Badge color="#633ce0" title="Ionic Framework" />
  <Badge color="#633ce0" title="React-Native" />
  <Badge color="#633ce0" title="Redux" />
  <Badge color="#633ce0" title="Angular" />

</div>
<h2 class="title">Educational Qualifications</h2>
<EducationalInstitute
  eduDetails={{ course: 'B.Tech Electronics & Communication Engineering', college: 'College Of Engineering Kidangoor(CUSAT)', year: '06/2012 - 04/2016', place: 'Kottayam', subject: 'Electronics' }} />
<EducationalInstitute
  eduDetails={{ course: 'Higher Secondary Education', college: `St John The Baptist's HSSS`, year: '06/2010 - 04/2012', place: 'Kottayam', subject: 'Computer Science' }} />
<h2 class="title">Work Experience</h2>
<div class="prDiv">
  <h3 class="role tertiary">
    Systems Engineer
    <Badge title="full time" />
  </h3>
  <p class="location">
    <ion-icon class="locIcon" name="ios-desktop" />
    Tata Consultancy Services
    <span class="city">
      <ion-icon name="ios-pin" />
      Chennai
    </span>
  </p>
  <h3 class="task">Achievements/Tasks</h3>
  <ul class="taskUl">
    <li>
      Developed Hybrid mobile app for the company appraisal system, SPEED.
    </li>
    <li>
      Fluke-Assist Mobile App - Contributed to Fluke assist mobile app which
      features audio/video call & remote assist using OpenTok.
    </li>
  </ul>
</div>
<h2 class="title">Personal Projects</h2>
<PersonalProjects
  project={{ name: 'WeSchool Mobile App(01/2018- 07/2018)', desc: ['Developed the official app for the Welingkar Educational Institution.', 'https://play.google.com/store/apps/details?id=com.weschool.project'] }} />
<PersonalProjects
  project={{ name: 'Champakarapally Mobile App', desc: ['Official App of the church using react-native,which features activity feeds, push notifications, image sharing backed by firebase.', 'https://play.google.com/store/apps/details?id=com.champakarapally.project&hl=en'] }} />
<PersonalProjects
  project={{ name: 'mytown Mobile App(10/2019- 01/2020)', desc: ['Salon and Hall booking app for town level services.'] }} />
<span class="showLang">
<h2 class="title">Languages</h2>
<Languages lang={{name: 'English',rating: 5}}/>
<Languages lang={{name: 'Malayalam',rating: 5}}/>
<Languages lang={{name: 'Tamil',rating: 2}}/>
<Languages lang={{name: 'Hindi',rating: 2}}/>

</span>
</div>