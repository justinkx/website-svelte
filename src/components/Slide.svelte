<script>
  export let id;
  export let data = {};
  export let activeSlide;
  let proConsSize;
  let proConsArray;
  if (data.pros) {
    proConsSize =
      data.pros.length > data.cons.length ? data.pros.length : data.cons.length;
    proConsArray = new Array(proConsSize);
  }
</script>

<style>
  .slide-wrapper {
    width: 100vw;
    height: 100%;
    display: inline-block;
    scroll-snap-align: center;
  }
  .hContainer {
    padding: 0px 30px;
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
    min-width: 100%;
    max-width: 100%;
    border-radius: 6px;
    margin: 15px auto;
    min-height: 30vh;
    max-height: 40vh;
    object-fit: contain;
  }
  .pContainer {
    max-width: 80%;
    display: block;
  }
  .para {
    padding: 6px 0px;
    font-size: 15px;
    color: black;
    white-space: initial;
  }
  table {
    border: 1px solid gray;
    table-layout: auto;
    font-size: 14px;
    margin-top: 8px;
  }
  table,
  td,
  th {
    border-collapse: collapse;
  }

  th {
    text-align: center;
    padding: 6px;
    border: solid 1px;
    max-width: 40vw;
  }
  td {
    padding: 6px;
    border: solid 1px;
    text-align: left;
    font-size: 14px;
    height: auto;
    white-space: pre-wrap;
    color: black;
    max-width: 40vw;
  }
  li {
    color: black;
    font-size: 14px;
  }
  /* ul {
    transition: all 1s ease-in-out;
    transform:translateY(50vh);
  } */
  .ulActive {
    transform: translateY(0vh);
  }
  @media screen and (min-width: 550px) {
    .slideImage {
      min-width: 60%;
      max-width: 70%;
      min-height: 35vh;
      max-height: 37vh;
    }
  }
  @media screen and (min-width: 950px) {
    .slideImage {
      min-width: 60%;
      max-width: 70%;
      min-height: 32vh;
      max-height: 35vh;
      object-fit: fill;
    }
  }
</style>

<div class="slide-wrapper">
  <div class="slideContent">
    <h1 class="textCenter fullWidth" {id}>{data.h1}</h1>

   {#if data.image} <img class="slideImage" src={data.image} alt={data.h1} />{/if}
    {#if data.p}
      <div class="pContainer">
        {#each data.p as p}
          <p class="para">{p}</p>
        {/each}
      </div>
    {/if}

    {#if data.ul}
      <ul class=" {activeSlide === id ? 'ulActive' : ''}">
        {#each data.ul as li}
          <li>{li}</li>
        {/each}
      </ul>
    {/if}
    {#if data.pros}
      <table >
        <tr>
          <th>Pros</th>
          <th>cons</th>
        </tr>
        {#each proConsArray as rows, i}
          <tr>
            <td>{data.pros[i] ? data.pros[i] : ''}</td>
            <td>{data.cons[i] ? data.cons[i] : ''}</td>
          </tr>
        {/each}
      </table>
    {/if}
  </div>
</div>
