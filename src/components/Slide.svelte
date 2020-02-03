<script>
  export let id;
</script>

<style>
  .slide-wrapper {
    width: 100vw;
    height: 100%;
    display: inline-block;
    scroll-snap-align: center;
  }
  .slideContent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>

<div class="slide-wrapper" {id}>
  <div class="slideContent">
    <h1 {id}>slide {id}</h1>

  </div>
</div>
