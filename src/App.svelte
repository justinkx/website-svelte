<script>
  import router, { curRoute } from "./router/router.js";
  import { onMount } from "svelte";
  onMount(() => {
    curRoute.set(window.location.pathname);
    if (!history.state) {
      window.history.replaceState(
        { path: window.location.pathname },
        "",
        window.location.href
      );
    }
  });
  function handlerBackNavigation(event) {
    curRoute.set(event.state.path);
  }
</script>

<style>
.fullHeight {
  
  overflow-x: hidden;
  overflow-y: scroll;
}
.fullHeight::-webkit-scrollbar {
  width: 0.45em;
}
 
.fullHeight::-webkit-scrollbar-track {
  background: #dbd4f3;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
.fullHeight::-webkit-scrollbar-thumb {
  background-color: var(--tertiary-tint);
  outline: 1px solid var(--tertiary-tint);
  border-radius: 4px;
}
  @media screen and (min-width: 550px) {
    
  }
</style>
<svelte:window on:popstate={handlerBackNavigation} />
<main class="fullHeight">
  <svelte:component this={router[$curRoute]} />

</main>
