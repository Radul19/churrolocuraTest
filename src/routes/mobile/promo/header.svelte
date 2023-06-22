<script>
  import HamburMenu from "../components/hamburMenu.svelte";
  let menuStatus = true;
  const clickMenu = () => {
    window.document.body.classList.toggle("hide-scroll");
    menuStatus = !menuStatus;
  };
</script>

{#if !menuStatus}
  <div class="blackScreen" />
{/if}

<div class="header">
  <p class="title">Promociones</p>
  <HamburMenu {menuStatus} {clickMenu} prom={true} />
</div>

<style>
  .blackScreen {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #00000086;
    z-index: 100;
  }
  p {
    margin: 0px;
  }

  .title {
    font-size: 20px;
    color: #eee;
    font-weight: 500;
    align-self: center;
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 24px;
    height: calc(8.5vh + 8.5vw);
    background-color: #e17339;
    box-sizing: border-box;
    padding-bottom: 48px;
  }
</style>
