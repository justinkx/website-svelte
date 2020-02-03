<script>
  import Slide from "../../components/Slide.svelte";
  import { onMount } from "svelte";

  let activeSlide = 1;

  let slideItems = [1, 2, 3, 4, 5];
  function scrollRight() {
    console.log(activeSlide);
    if (activeSlide < slideItems.length) {
      activeSlide += 1;
      document.getElementById(activeSlide).scrollIntoView();
    }
  }
  function scrollLeft() {
    if (activeSlide > 1) {
      activeSlide += -1;
      document.getElementById(activeSlide).scrollIntoView();
    }
  }
  onMount(async () => {
    const config = {
      treshold: 1,
      root: document.getElementById("slidecontainer"),
      rootMargin: "50px"
    };
    const cards = document.querySelectorAll(".slideContent > h1");
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          console.log(activeSlide);
          activeSlide = parseInt(entry.target.id);
        } else {
        }
      });
    }, config);
    cards.forEach(card => {
      observer.observe(card);
    });
    const variable_input = document.getElementById("variable_input");
    variable_input.addEventListener("keyup", event => {
      if (event.key === "Enter") {
        if (event.target.value > slideItems.length) {
          activeSlide = 5;
        } else if (event.target.value < 1) {
          activeSlide = 1;
        } else {
          activeSlide = event.target.value;
        }
        console.log(event.target.value);
        document.getElementById(activeSlide).scrollIntoView();
      }
    });
  });
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
    box-shadow: inset 0 0 20px #ffffff80;
    filter: blur(10px);
    margin: -4px;
  }
  .iconButton {
    background: black;
    margin-bottom: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    justify-content: center;
    display: flex;
    padding: 0px;
    cursor: pointer;
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
    text-align: center;
    font-weight: bold;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ion-icon {
    font-size: 26px;
    color: white;
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

<div class="sliderContainer" id="slidecontainer">
  {#each slideItems as item}
    <Slide id={item} />
  {/each}
  <div class="actionContainer">
    <button
      disabled={activeSlide === 1}
      class="iconButton"
      on:click|preventDefault={scrollLeft}>
      <ion-icon name="arrow-dropleft" />

    </button>
    <div class="slideNos">
      <input
        id="variable_input"
        min="1"
        max={slideItems.length}
        type="number"
        bind:value={activeSlide}
        class="number" />
      :
      <input value={slideItems.length} type="number" class="number" readonly />
    </div>
    <button
      disabled={activeSlide === slideItems.length}
      class="iconButton"
      on:click|preventDefault={scrollRight}>
      <ion-icon name="arrow-dropright" />

    </button>
  </div>
</div>
