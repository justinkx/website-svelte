<script>
  import Badge from "../../components/Badge.svelte";
</script>

<style>
  .profileSummary {
    color: var(--resume);
    font-size: 15px;
  }
  .title {
    font-weight: bold;
    font-size: 20px;
    margin: 20px 0px;
    color: var(--primary-shade);
  }

  .courseBadge {
    width: 30px;
    height: 60px;
    color: var(--secondary);
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
  .marginLeft {
    margin-left: 30px;
  }
  .course {
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 400px) {
    .title {
      margin: 30px 0px;
    }
    .prDiv {
      max-width: 70%;
    }
    .skillsContainer {
      max-width: 80%;
    }
  }
  @media screen and (min-width: 400px) {
    .skillsContainer {
      max-width: 60%;
    }
  }
</style>

<h2 class="title">Professional Summary</h2>
<p class="profileSummary">
  Versatile Front-end Developer with 3 years of experience designing,
  developing, and managing complex mobile-responsive web sites and packages.
  Specializes in Angular, react, and react-native handled both web as well as
  hybrid mobile applications using ionic framework and react-native.
</p>
<h2 class="title">Skills</h2>
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
<h2 class="title">Work Experience</h2>
<div class="prDiv">
  <h3 class="role tertiary">
    Systems Engineer
    <Badge  title="full time" />
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
<h2 class="title">Educational Qualifications</h2>
<div class="column marginLeft">
  <span class="courseBadge" />
  <h3 class="course tertiary">
    B.Tech Electronics & Communication Engineering
  </h3>
  <p>College Of Engineering Kidangoor(CUSAT)</p>
</div>
