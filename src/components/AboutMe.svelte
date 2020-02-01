<script>
import RouterLink from '../router/RouterLink.svelte';
</script>

<style>
  .aboutContainer {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .user {
    width: 100px;
    height: 120px;
    border-radius: 3px;
    position: relative;
    object-fit: cover;
    bottom: 8px;
    left: 8px;
  }
  .imageContainer {
    width: 100px;
    height: 120px;
    border: 4px solid var(--warning);
  }
  .textContainer {
    display: flex;
    width: -webkit-fill-available;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 30px;
  }
  .aboutTitle {
    font-size: 20px;
  }
  .aboutTitle:after {
    content: " ";
    border-bottom-style: solid;
    border-bottom-width: 3px;
    display: flex;
    padding-top: 2px;
    border-bottom-color: var(--warning);
    width: 50px;
  }
  .description {
    max-width: 90%;
    font-size: 15px;
    line-height: 20px;
    padding-bottom: 20px;
    padding-top: 10px;
  }
  .resumeButton {
    background-color: var(--primary);
    border: none;
    border-radius: 4px;
    padding: 6px 8px;
  }
  .resume {
    color: white;
    font-size: 14px;
  }
  @media screen and (min-width: 550px) {
    .aboutTitle {
      font-size: 24px;
    }
    .user {
      width: 120px;
      height: 140px;
      border-radius: 4px;
      position: relative;
      bottom: 8px;
      left: 8px;
    }
    .imageContainer {
      width: 120px;
      height: 140px;
      border: 4px solid var(--warning);
    }
    .description {
      max-width: 80%;
    }
  }
</style>

<div class="aboutContainer">
  <div class="imageContainer">
    <img
      class="user"
      src="https://avatars2.githubusercontent.com/u/28846043?s=460&v=4"
      alt="justin" />
  </div>
  <div class="textContainer">
    <h2 class="aboutTitle">About Me</h2>
    <p class="description">
      My name is Justin K Xavier. I'm a 26 years old Front End Developer based
      in Chennai. I describe myself as a developer who loves coding, open
      source, the web platform and hybrid mobile applications.. Currently I'm
      working at a company called TCS, as a Front End Engineer.
    </p>
    <p class="description">
      In my spare time, I like to create and contribute to open source projects.
      That helps me to learn a lots of new stuff, grow as a developer and
      support other open source projects. I love travelling and discovering new
      places.
    </p>
    <button class="resumeButton">
      <RouterLink path="/resume" name="Resume" color="white"/>
    </button>

  </div>
</div>
