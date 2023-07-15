<script>
  import promimage from "../../../public/promimage.jpeg";
  import { promos } from "../components/menu";
  //   href={"promoItem?name="+$promos[0].title.replace(" ","+")}
</script>

<div class="content-ctn">
  <p class="subtitle">Del día</p>
  <div class="prom-carousel">
    <a href={"promoItem?name=" + $promos[0].title.replace(" ", "+")}>
      <img src={$promos[0].image} alt="" class="prom-img" />
    </a>
  </div>
  <p class="subtitle">De la semana</p>
  <div class="prom-carousel">
    <a href={"promoItem?name=" + $promos[1].title.replace(" ", "+")}>
      <img src={$promos[1].image} alt="" class="prom-img" />
    </a>
    <a href={"promoItem?name=" + $promos[0].title.replace(" ", "+")}>
      <img src={$promos[0].image} alt="" class="prom-img" />
    </a>
  </div>
  <p class="subtitle">Del mes</p>
  <div class="prom-carousel">
    <!-- <a href={"promoItem?name=" + $promos[2].title.replace(" ", "+")}>
      <img src={$promos[2].image} alt="" class="prom-img" />
    </a> -->
    <a href={"promoItem?name=" + $promos[1].title.replace(" ", "+")}>
      <img src={$promos[1].image} alt="" class="prom-img" />
    </a>
    <a href={"promoItem?name=" + $promos[0].title.replace(" ", "+")}>
      <img src={$promos[0].image} alt="" class="prom-img" />
    </a>
  </div>
</div>

<style>
  a {
    margin: 0px;
  }
  .content-ctn {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    height: 100%;
    margin-top: -24px;
    border-radius: 16px 16px 0px 0px;
    padding-top: 12px;
    padding-bottom: 48px;
  }
  .subtitle {
    font-size: 18px;
    margin-left: 24px;
    color: #e17339;
    font-weight: bold;
  }
  .prom-carousel {
    display: flex;
    width: 100%;
    overflow: auto;
    gap: 0px 24px;
    padding: 12px 24px;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  .prom-img {
    outline: 2px solid #00000083;
    outline-offset: -2px;
    width: 72vw;
    height: 43vw;
    border-radius: 12px;
    box-shadow: 0px 4px 4px rgba(8, 7, 7, 0.25);
    box-sizing: border-box;
    cursor: pointer;
  }
  .prom-img:active {
    transform: scale(1.05);
  }
</style>
