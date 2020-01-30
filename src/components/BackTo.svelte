<script>
  import router, { curRoute } from "../router/router.js";
	import { fade } from 'svelte/transition';

  export let text = "Back To Home";
  function onBackClick() {
    let HREF = window.history.state.path.substring(
      0,
      window.history.state.path.lastIndexOf("/")
    );
    if (HREF.length == 0) {
      HREF = "/";
    }

    curRoute.set(HREF);
    window.history.pushState({ path: HREF }, "", window.location.origin + HREF);
  }
</script>

<style>
  .btn {
    display: inline-block;
    background: transparent;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  ion-icon {
      color: black;
      font-size: 22px;
      font-weight: bold;
      padding-right: 5px;
  }
</style>

<button transition:fade class="btn" on:click={onBackClick}>
  <ion-icon name="ios-arrow-back" />
  <span>{text}</span>
</button>
