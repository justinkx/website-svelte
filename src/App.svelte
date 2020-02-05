<script>
  import { onMount } from "svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/home/Home.svelte";
  import Resume from "./pages/resume/Resume.svelte";
  import Slides from './pages/slides/Slides.svelte';
  onMount(() => {
    
  });
 
</script>

<style>
  .mainFullHeight {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
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
      height: 100%;
    }
  }
  @media screen and (min-width: 950px) {
    .mainFullHeight::-webkit-scrollbar {
      width: 0.48em;
    }
  }
</style>

<!-- <svelte:window on:popstate={handlerBackNavigation} /> -->
<main id="root" class="mainFullHeight">
  <!-- <svelte:component this={router[$curRoute] ? router[$curRoute] : Slides} /> -->
  <Router>
    <Route path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/slide/:id"  let:params>
      <Slides _id={params.id} />
    </Route>
  </Router>

</main>
