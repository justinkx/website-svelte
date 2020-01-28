<script>
  import Home from "./pages/home/Home.svelte";
  import router, { curRoute } from "./router/router.js";
  import RouterLink from "./router/RouterLink.svelte";
  import { onMount } from "svelte";
  onMount(() => {
     console.log(window.location.pathname,'path')
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

</style>

<main>
  <svelte:component this={router[$curRoute]} />

</main>
