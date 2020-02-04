<script>
	import { fade } from 'svelte/transition';
  import { navigate } from "svelte-routing";

  export let text = "Back To Home";
  function onBackClick() {
    navigate("/", { replace: true });
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
