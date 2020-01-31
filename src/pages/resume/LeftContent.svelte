<script>
  import { fade } from "svelte/transition";

  import Badge from "../../components/Badge.svelte";
  import Languages from "../../components/Languages.svelte";

  function downloadResume() {
    fetch("https://github.com/justinkx/website-svelte/files/4137923/resume.pdf")
      .then(resp => resp.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert("Unable to download.Try later!"));
  }
</script>

<style>
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .leftProfile {
    align-items: center;
    flex-direction: column;
  }
  .iconPara {
    line-height: 1.9rem;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    align-items: center;
  }
  .icon {
    padding-right: 5px;
  }
  .addressContainer {
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;
    padding-bottom: 25px;
  }
  .dResume {
    background-color: var(--primary-tint);
    border-radius: 6px;
    padding: 2px 8px;
    color: white;
    font-size: 13px;
    height: 35px;
  }
  .name {
    font-size: 20px;
    color: var(--primary-shade);
  }
  .role {
    margin: 10px 0px 5px 0px;
    font-size: 16px;
    color: var(--resume);
  }
  p,
  span {
    color: var(--resume);
  }
  .skillsContainer {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    display: none;
  }
  .title {
    display: none;
  }
  .showLang {
    display: none;
  }
  @media screen and (min-width: 550px) {
    .avatar {
      width: 100px;
      margin-top: 30px;
      margin-bottom: 10px;
      height: 100px;
    }
    .leftProfile {
      width: 35%;
    }
    .name {
      font-size: 22px;
    }
    .addressContainer {
      margin-left: 0px;
    }
    .skillsContainer {
      display: flex;
    }
    .title {
      display: flex;
    }
    .showLang {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
    }
  }
</style>

<div transition:fade class="left leftProfile">
  <img
    class="avatar"
    src="https://avatars2.githubusercontent.com/u/28846043?s=460&v=4"
    alt="justin" />
  <h2 class="name">Justin K Xavier</h2>
  <p class="textCenter role">Javascript Fullstack Developer</p>
  <div class="addressContainer">
    <p class="iconPara">
      <ion-icon class="icon" name="ios-mail" />
      <span>justinkxavier@yahoo.com</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="ios-pin" />
      <span>Kerala, India</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="ios-basket" />
      <span>Full Time</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="ios-bowtie" />
      <span>Web,Hybrid Mobile Apps</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="ios-call" />
      <span class="sans">+917907772056</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="logo-github" />
      <a target="_blank" href="https://github.com/justinkx">github</a>
    </p>
  </div>

  <button on:click|once={downloadResume} class="dResume">Download Resume</button>

  <h2 class="title fullWidth">Skills</h2>
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
  <span class="showLang">
    <h2 class="title">Languages</h2>
    <Languages lang={{ name: 'English', rating: 5 }} />
    <Languages lang={{ name: 'Malayalam', rating: 5 }} />
    <Languages lang={{ name: 'Tamil', rating: 2 }} />
    <Languages lang={{ name: 'Hindi', rating: 2 }} />

  </span>
</div>
