<script>
  export let eduDetails;
</script>

<style>
  .marginLeft {
    margin-left: 40px;
    position: relative;
    margin-bottom: 10px;
  }
  .course {
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  .college {
    font-size: 15px;
    color: black;
  }
  .courseBadge {
    width: 7px;
    height: 90%;
    position: absolute;
    background-color: var(--primary);
    left: -37px;
    border-radius: 2px;
    top: 0px;
  }
  .datePara {
    width: 100%;
    display: flex;
    padding-top: 5px;
    color: #005dff;
    font-family: sans-serif;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
  }
  .subjectUl {
    padding-inline-start: 20px;
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
  }
</style>

<div class="column marginLeft">
  <span class="courseBadge" />
  <h3 class="course tertiary">{eduDetails.course}</h3>
  <p class="college">{eduDetails.college}</p>
  <p class="datePara">
    <span>{eduDetails.year}</span>
    <span>{eduDetails.place}</span>
  </p>
  <ul class="subjectUl">
    <li>{eduDetails.subject}</li>
  </ul>
</div>
