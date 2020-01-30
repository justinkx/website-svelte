<script>
  import LeftContent from "./LeftContent.svelte";
  import RightContent from "./RightContent.svelte";
  import { slide } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import BackTo from "../../components/BackTo.svelte";
</script>

<style>
  .headerContainer {
    display: block;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 40px;
  }
.backContainer {
  padding: 15px 0px 0px  15px;
  display: inline-block;
}
  @media screen and (min-width: 550px) {
    .headerContainer {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: 900px) {
    .headerContainer {
      padding: 20px 90px;
    }
  }
</style>

<div class="backContainer">
  <BackTo />

</div>
<div
  class="headerContainer"
  transition:slide={{ delay: 250, duration: 300, easing: cubicInOut }}>

  <LeftContent />
  <RightContent />

</div>
