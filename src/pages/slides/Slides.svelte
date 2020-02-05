<script>
  import Slide from "../../components/Slide.svelte";
  import { onMount, onDestroy } from "svelte";
  import { slideContent } from "../../apis/slideContent";
  import { navigate } from "svelte-routing";

  export let _id;
  let activeSlide = 1;
  let _slideContent = {
    slides: []
  };
  function scrollRight() {
    if (activeSlide < _slideContent.slides.length) {
      activeSlide += 1;
      document.getElementById(activeSlide).scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
    }
  }
  function scrollLeft() {
    if (activeSlide > 1) {
      activeSlide += -1;
      document.getElementById(activeSlide).scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
    }
  }
  onMount(async () => {
    document.getElementById("root").style["height"] = "auto";
    _slideContent = slideContent[`slide${_id}`];
    const config = {
      treshold: 1,
    };
    setTimeout(() => {
      const cards = document.querySelectorAll(".slideContent > h1");
      const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            activeSlide = parseInt(entry.target.id);
            entry.target.classList.add("activeSlide");
          } else {
            entry.target.classList.remove("activeSlide");
          }
        });
      }, config);
      cards.forEach(card => {
        observer.observe(card);
      });
    }, 200);

    const variable_input = document.getElementById("variable_input");
    variable_input.addEventListener("keyup", event => {
      if (event.key === "Enter") {
        if (event.target.value > _slideContent.slides.length) {
          activeSlide = 5;
        } else if (event.target.value < 1) {
          activeSlide = 1;
        } else {
          activeSlide = event.target.value;
        }
        document.getElementById(activeSlide).scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
      }
    });
  });
  onDestroy(() => {
		document.getElementById("root").style["height"] = "100%";
	});
</script>

<style>
  .sliderContainer {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
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
  {#each _slideContent.slides as item, index}
    <Slide activeSlide={activeSlide} id={index + 1} data={item} />
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
        max={_slideContent.slides.length}
        type="number"
        bind:value={activeSlide}
        class="number" />
      :
      <input
        value={_slideContent.slides.length}
        type="number"
        class="number"
        readonly />
    </div>
    <button
      disabled={activeSlide === _slideContent.slides.length}
      class="iconButton"
      on:click|preventDefault={scrollRight}>
      <ion-icon name="arrow-dropright" />

    </button>
  </div>
</div>
