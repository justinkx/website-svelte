<script>
  import HomeHeader from "../../components/HomeHeader.svelte";
  import AboutMe from "../../components/AboutMe.svelte";
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
  @media screen and (min-width: 550px) {
    .headerContainer {
      height: 300px;
      margin-left: 20%;
    }
    .aboutMe {
      margin-left: 20%;
    }
  }
</style>

<div class="headerContainer">
  <HomeHeader />
</div>
<div class="aboutMe">
  <AboutMe />
</div>
