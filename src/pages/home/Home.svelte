<script>
  import HomeHeader from "../../components/HomeHeader.svelte";
  import AboutMe from "../../components/AboutMe.svelte";
  import HomeSlides from "../../components/HomeSlides.svelte";
  import { slides } from "../../apis/slides.js";
</script>

<style>
  .headerContainer {
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 8%;
    margin-bottom: 40px;
  }
  .aboutMe {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    object-fit: cover;
    margin-left: 8%;
  }
  .slidesContainer {
    margin-left: 8%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .talksContainer {
    padding-left: 8%;
    margin: 20px 0px;
  }
  .talks {
    font-size: 22px;
    color: var(--warning);
  }
  @media screen and (min-width: 550px) {
    .headerContainer {
      height: 300px;
      margin-left: 20%;
    }
    .aboutMe {
      margin-left: 20%;
    }
    .slidesContainer {
      margin-left: 20%;
    }
    .talksContainer {
      padding-left: 20%;
    }
  }
</style>

<div class="headerContainer">
  <HomeHeader />
</div>
<div class="aboutMe">
  <AboutMe />
</div>
<div class="talksContainer">
  <h3 class="talks">Talks</h3>
</div>
<div class="slidesContainer">
  {#each slides as slide}
    <HomeSlides {slide} />
  {/each}
</div>
