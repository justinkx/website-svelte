<script>
  export let lang;
</script>

<style>
  .langWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    max-width: 70%;
  }

  .language {
    font-size: 14px;
  }
  .dotContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .dot {
    margin-right: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 0.5px solid #633ce0;
  }
  @media screen and (min-width: 550px) {
    .langWrapper {
      max-width: 100%;
    }
  }
</style>

<div class="langWrapper">
  <h4 class="language">{lang.name}</h4>
  <div class="dotContainer">
    {#each [1, 2, 3, 4, 5] as dot, i}
      <div
        class="dot"
        style="background: {i + 1 > parseInt(lang.rating) ? 'white' : '#633CE3'}" />
    {/each}
  </div>

</div>
