<script>
  import Slide from "../../components/Slide.svelte";
  let activeSlide = 1;
  let _activeSlide = activeSlide;
  const config = {
  rootMargin: "10px 10px 10px 10px",
  threshold: [0, 0.33, 0.66, 1]
};
  let slides = document.querySelectorAll('.slide-wrapper');
  let observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.intersectionRatio > 0.5) {
      console.log('intersection')
      entry.target.classList.add(entry.target.id);
    } else {
      entry.target.classList.remove(entry.target.id);
      console.log('no intersection')
    }
  });
}, config);
slides.forEach(slide => {
  console.log('slide')
  observer.observe(slide);
});

  $: if (_activeSlide !== activeSlide) {
    if (activeSlide < slideItems.length && activeSlide !== 0) {
      document.getElementById(activeSlide).scrollIntoView();
      _activeSlide = activeSlide;
    }
  }
  let slideItems = [1, 2, 3, 4, 5];
  function scrollRight() {
    if (activeSlide < slideItems.length) {
      activeSlide += 1;
      _activeSlide += 1;
      document.getElementById(activeSlide).scrollIntoView();
    }
  }
  function scrollLeft() {
    if (activeSlide > 1) {
      activeSlide += -1;
      _activeSlide += -1;
      document.getElementById(activeSlide).scrollIntoView();
    }
  }
</script>

<style>
  .sliderContainer {
    width: 100%;
    height: 100%;
    overflow-y: unset;
    overflow-x: scroll;
    scroll-behavior: smooth;
    position: relative;
    scroll-snap-type: x mandatory;
    overflow: auto;
    white-space: nowrap;
    position: relative;
  }
  .sliderContainer::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  .actionContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 40px;
    position: fixed;
    left: calc(50% - 100px);
    bottom: 30px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    background: inherit;
    overflow: hidden;
  }
  .actionContainer:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5);
    filter: blur(10px);
    margin: -4px;
  }
  .iconButton {
    background: transparent;
    margin-bottom: 0px;
    display: flex;
  }
  .slideNos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80px;
  }
  .number {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background: white;
    margin-bottom: 0px;
    text-align: right;
    font-weight: bold;
  }
  ion-icon {
    font-size: 22px;
  }
  @media screen and (min-width: 550px) {
    .actionContainer {
      width: 300px;
      height: 60px;
      left: calc(50% - 150px);
    }
    .slideNos {
      width: 110px;
    }
    .number {
      width: 45px;
      height: 45px;
      border-radius: 3px;
    }
  }
</style>

<div class="sliderContainer" id="slideContainer">
  {#each slideItems as item}
    <Slide id={item} />
  {/each}
  <div class="actionContainer">
    <button class="iconButton" on:click|preventDefault={scrollLeft}>
      <ion-icon name="arrow-dropleft-circle" />

    </button>
    <div class="slideNos">
      <input
        min="1"
        max={slideItems.length}
        type="number"
        bind:value={activeSlide}
        readonly={activeSlide > slideItems.length}
        class="number" />
      :
      <input value={slideItems.length} type="number" class="number" readonly />
    </div>
    <button class="iconButton" on:click|preventDefault={scrollRight}>
      <ion-icon name="arrow-dropright-circle" />

    </button>
  </div>
</div>
