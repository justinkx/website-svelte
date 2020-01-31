<script>
  export let slide;
  let bgImage;
</script>

<style>
  .slideContainer {
    border: 1px solid black;
    border-radius: 6px;
    height: 150px;
    width: 250px;
    margin-bottom: 20px;
    margin-right: 20px;
    overflow: hidden;
    position: relative;
    padding: 0px;
    background-color: transparent;
  }
  .bgImage {
    filter: blur(1px);
    -webkit-filter: blur(1px);
    height: 100%;
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .content {
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
  }
</style>

<button class="slideContainer">
  <div class="bgImage" style="background-image: url({slide.image})" />
  <div class="content">
    <p>{slide.name}</p>

  </div>
</button>
