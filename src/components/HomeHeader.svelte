<style>
  .userTitle {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .profilePic {
    width: 30%;
    background-color: var(--warning);
    height: 100%;
    max-height: 200px;
  }
  .user {
    width: 140px;
    position: relative;
    right: 65px;
    height: 145px;
    top: 55px;
    object-fit: cover;
    border-radius: 6px;
  }
  .name {
    color: var(--warning);
    font-size: 20px;
  }
  .userDesc {
    font-size: 15px;
    padding-top: 6px;
  }
  .hello {
    font-size: 18px;
    padding-bottom: 6px;
  }
  @media screen and (min-width: 550px) {
    .user {
    width: 250px;
    right: 115px;
    height: 265px;
    top: 35px;
  }
  .profilePic {
        max-height: 300px;
  }
   .name {
    font-size: 24px;
  }
  .userDesc {
    font-size: 18px;
  }
  .hello {
    font-size: 20px;
  }
  }
</style>
<div class="userTitle">
  <div class="column">
  <span class="hello">Hello</span>
    <h2 class="name">I'm JUSTIN</h2>
    <p class="userDesc">Javascript Fullstack Developer Towards Web Success</p></div>
    
  </div>
  <div class="profilePic">
    <!-- <img class="user" src="" alt="justin" /> -->

    <img class="user" src="https://user-images.githubusercontent.com/28846043/73516465-791ef100-441e-11ea-99bf-d18a5d30fa5b.png" alt="justin">
  </div>