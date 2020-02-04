<script>
  export let id;
  export let data = {};
</script>

<style>
  .slide-wrapper {
    width: 100vw;
    height: 100%;
    display: inline-block;
    scroll-snap-align: center;
  }
  h1 {
    padding-bottom: 10px;
  }
  .slideContent {
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
  }
  .slideImage {
    max-width: 60%;
    border-radius: 6px;
    margin: 0px auto;
    max-height: 60vh;
  }
</style>

<div class="slide-wrapper" {id}>
  <div class="slideContent">
    <h1 class="textCenter fullWidth" {id}>{data.h1}</h1>
    <img class="slideImage" src={data.image} alt={data.h1} />
  </div>
</div>
