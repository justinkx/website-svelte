<style>
  .userTitle {
    width: 70%;
    height: 100%;
  }
  .profilePic {
    width: 30%;
    background-color: var(--warning);
    height: 100%;
    max-height: 200px;
  }
  .user {
    width: 100px;
    position: relative;
    right: 50px;
    height: 120px;
    top: 40px;
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
    width: 160px;
    right: 80px;
    height: 180px;
    top: 60px;
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

    <img class="user" src="https://avatars2.githubusercontent.com/u/28846043?s=460&v=4" alt="justin">
  </div>