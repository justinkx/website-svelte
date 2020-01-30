<script>
  import LeftContent from "./LeftContent.svelte";
  import RightContent from "./RightContent.svelte";
</script>

<style>
  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 40px;
  }

  @media screen and (min-width: 550px) {
    .headerContainer {
      flex-direction: row;
      align-items: flex-start;
    }
    .right {
      margin-left: 30px;
    }
  }
  @media screen and (min-width: 550px) {
    .right {
      margin-left: 60px;
    }
  }
  @media screen and (min-width: 900px) {
    .headerContainer {
      padding: 20px 90px;
    }
  }
</style>

<div class="headerContainer">

  <LeftContent />
  <div class="right">
    <RightContent />
  </div>
</div>
