<script>

</script>

<style>
  .aboutContainer {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .user {
    width: 120px;
    height: 140px;
    border-radius: 6px;
  }
  .imageContainer {
    width: 120px;
    height: 140px;
  }
  .textContainer {
    display: flex;
    width: -webkit-fill-available;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 30px;
  }
  .aboutTitle {
    font-size: 20px;
  }
  .aboutTitle:after {
    content: " ";
    border-bottom-style: solid;
    border-bottom-width: 3px;
    display: flex;
    padding-top: 2px;
    border-bottom-color: var(--warning);
    width: 50px;
  }
  .description {

  }
  @media screen and (min-width: 550px) {
    .aboutTitle {
      font-size: 24px;
    }
  }
</style>

<div class="aboutContainer">
  <div class="imageContainer">
    <img
      class="user"
      src="https://avatars2.githubusercontent.com/u/28846043?s=460&v=4"
      alt="justin" />
  </div>
  <div class="textContainer">
    <h2 class="aboutTitle">About Me</h2>
    <p class="description" >
      
    </p>
  </div>
</div>
