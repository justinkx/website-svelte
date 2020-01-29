<style>
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .leftProfile {
    align-items: center;
    flex-direction: column;
  }
  .iconPara {
    line-height: 1.9rem;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    align-items: center;
  }
  .icon {
    padding-right: 5px;
  }
  .addressContainer {
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;
    padding-bottom: 25px;
  }
  .dResume {
    background-color: var(--primary);
    border-radius: 4px;
    color: white;
    font-size: 14px;
    height: 40px;
  }
  .name {
    font-size: 20px;
    color: var(--primary-shade);
  }
  .role {
    margin: 10px 0px 5px 0px;
    font-size: 16px;
    color: var(--resume);
  }
  p,
  span {
    color: var(--resume);
  }
  @media screen and (min-width: 400px) {
    .avatar {
      width: 100px;
      margin-top: 30px;
      margin-bottom: 10px;
      height: 100px;
    }
    .leftProfile {
      width: 35%;
    }
    .name {
      font-size: 22px;
    }
    .addressContainer {
      margin-left: 0px;
    }
  }
</style>

<div class="left leftProfile">
  <img
    class="avatar"
    src="https://avatars2.githubusercontent.com/u/28846043?s=460&v=4"
    alt="justin" />
  <h2 class="name">Justin K Xavier</h2>
  <p class="textCenter role">Javascript Fullstack Developer</p>
  <div class="addressContainer">
    <p class="iconPara">
      <ion-icon class="icon" name="ios-mail" />
      <span>justinkxavier@yahoo.com</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="ios-pin" />
      <span>Kerala, India</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="ios-basket" />
      <span>Full Time</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="ios-bowtie" />
      <span>Web,Hybrid Mobile Apps</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="ios-call" />
      <span class="sans">+917907772056</span>
    </p>
    <p class="iconPara">
      <ion-icon class="icon" name="logo-github" />
      <a target="_blank" href="https://github.com/justinkx">github</a>
    </p>
  </div>
  <a  target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="resume">
    <button type="submit" class="dResume">Download Resume</button>
  </a>

</div>
