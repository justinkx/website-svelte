<script>
  import router, { curRoute } from "./router/router.js";
  import { onMount } from "svelte";
  import Slides from './pages/slides/Slides.svelte';

  onMount(() => {
    curRoute.set(window.location.pathname);
    if (!history.state) {
      window.history.pushState(
        { path: window.location.pathname },
        "",
        window.location.href
      );
    }
  });
  function handlerBackNavigation(event) {
    curRoute.set(event.state.path);
     window.history.pushState({path: '/'},'',window.location.href);
  }
</script>

<style>
  .mainFullHeight {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .mainFullHeight::-webkit-scrollbar {
    width: 0.35em;
  }

  .mainFullHeight::-webkit-scrollbar-track {
    background: #dbd4f3;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .mainFullHeight::-webkit-scrollbar-thumb {
    background-color: var(--tertiary-tint);
    outline: 1px solid var(--tertiary-tint);
    border-radius: 4px;
  }
  @media screen and (min-width: 550px) {
    .mainFullHeight::-webkit-scrollbar {
      width: 0.4em;
    }
  }
  @media screen and (min-width: 950px) {
    .mainFullHeight::-webkit-scrollbar {
      width: 0.48em;
    }
  }
</style>

<svelte:window on:popstate={handlerBackNavigation} />
<main class="mainFullHeight">
  <svelte:component this={router[$curRoute] ? router[$curRoute] : Slides} />

</main>
