<script>
  import heroimg from "../../../public/heroimg.png";
  import logosmall from "../../../public/logosmall.png";
  import HamburMenu from "../components/hamburMenu.svelte";

  let menuStatus = true;
  const clickMenu = () => {
    menuStatus = !menuStatus;
    window.document.body.classList.toggle('hide-scroll')
  };
</script>


{#if !menuStatus}
  <div class="blackScreen" />
{/if}
<header class="header">
  <img src={heroimg} alt="churrosAlt" class="heroimg" />
  <img src={logosmall} alt="logoAlg" class="logo" />
  <div class="absolute-black"></div>
  <div class="hamn-ctn">
    <HamburMenu {menuStatus} {clickMenu} menu={true} />
  </div>
 
  <p class="welcome-text">Bienvenido!</p>
</header>

<style>
  /* .blackScreen {
    position: absolute;
    width: 100%;
    min-height: 200vh;
    background-color: #00000086;
    z-index: 100;
  } */
  .absolute-black{
    position: absolute;
    background-color: #000;
    height: calc(10vh + 10vw);
    width: 100%;
    z-index: 10;
    bottom: 0;
    background: linear-gradient(#ffffff00, #00000081);
  }
  .header {
    /* height: 31.25vh; */
    height: calc(20vh + 20vw);
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
  }
  .hamn-ctn{
    /* background-color: blue; */
    align-self: flex-end;
    position: absolute;
    display: flex;
    padding: 24px;
    align-items: center;
    justify-content: flex-end;
  }
  .heroimg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .logo {
    z-index: -1;
    width: 100px;
    height: 109px;
    position: absolute;
  }

  .welcome-text {
    font-size: 32px;
    font-weight: 600;
    color: #f8f8f8;
    justify-self: flex-end;
    margin-top: auto;
    margin-left: 24px;
    z-index: 15;
    /* background-color: red; */
    /* margin: auto 0px 20px 20px; */
  }

</style>
