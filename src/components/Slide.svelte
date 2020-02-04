<script>

  export let id;
  export let data = {};
</script>

<style>
  .slide-wrapper {
    width: 100vw;
    height: 100%;
    display: inline-block;
    scroll-snap-align: center;
  }
  h1 {
    padding-bottom: 10px;
  }
  .slideContent {
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
  .slideImage {
    max-width: 60%;
    border-radius: 6px;
    margin: 0px auto;
    max-height: 60vh;
    margin-bottom: 10px;
    object-fit: fill;
  }
  .pContainer {
    max-width: 80%;
    display: block;
    
  }
  .para {
    
    padding: 6px 0px;
    font-size: 15px;
    white-space: initial;
  } ul {
    /* transform: translateX(-100vh) */
  }
</style>

<div class="slide-wrapper" {id}>
  <div class="slideContent" {id}>
    <h1 class="textCenter fullWidth" >{data.h1}</h1>
    <img class="slideImage" src={data.image} alt={data.h1} />
    {#if data.p}
       <div class="pContainer" >
        {#each data.p as p}
       <p class="para">{p}</p>
    {/each}
    </div>
    {/if}
    
   
    {#if data.ul}
       <ul>
       {#each data.ul as li}
          <li>{li}</li>
       {/each}
       </ul>
    {/if}
  </div>
</div>
