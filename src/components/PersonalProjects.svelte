<script>
  export let project;
</script>

<style>
  .projContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  .projectName {
    color: var(--tertiary);
    font-size: 16px;
  }
  ul {
    padding-inline-start: 30px;
    margin-top: 10px;
    list-style: none;
  }
  li {
      font-size: 15px;
      color: black;
  }
   li::before {
    content: "\2022";
    color: var(--primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    font-size: 20px;
    margin-left: -1em;
  }
</style>

<div class="projContainer">
  <h4 class="projectName">{project.name}</h4>
  <ul>
    {#each project.desc as des, i}
      {#if i === 1}
        <li>
          <a href={des} target="_blank">{des}</a>
        </li>
      {:else}
        <li>{des}</li>
      {/if}
    {/each}
  </ul>
</div>
