<script>
import { curRoute } from '../router/router.js';

  export let slide = {};
  function redirectTo(path){
  curRoute.set('/slide/101');
  
  window.history.pushState({path: '/slide/101'}, '', window.location.origin + '/slide/101');
}
</script>

<style>
  .slideContainer {
    border: 1px solid 66626259;
    border-radius: 6px;
    height: 150px;
    width: 250px;
    margin-bottom: 30px;
    margin-right: 40px;
    overflow: hidden;
    position: relative;
    padding: 0px;
    cursor: pointer;
    background-color: transparent;
    transform: scale(1);
    transition: all 0.4s linear;
    box-shadow: 0 0 10px 0px #66626259;
  }
  .slideContainer:hover {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
    box-shadow: 0 0 20px 0px #66626259;
  }
  .slideContainer:hover .name {
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 5px 5px rgba(27, 2, 2, 0.3);
  }
  .bgImage {
    filter: blur(1px);
    -webkit-filter: blur(1px);
    height: 100%;
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .content {
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
  }
  .name {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 15px;
    text-shadow: 2px 2px #000000;
    color: white;
    transition: all 0.4s linear;
  }
  .desc {
    font-size: 14px;
    color: black;
    text-shadow: 2px 2px white;
  }
</style>

<button on:click|preventDefault={redirectTo} class="slideContainer">
  <div class="bgImage" style="background-image: url({slide.image})" />
  <div class="content">
    <p class="name">{slide.name}</p>
    <span class="desc">{slide.desc}</span>
  </div>
</button>
