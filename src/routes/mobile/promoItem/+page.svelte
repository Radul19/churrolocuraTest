<script>
  import { onMount } from "svelte";
  import img from "../../../public/block.png";
  import ContactModal from "../item/contactModal.svelte";
  import Header from "../item/header.svelte";
  import Picture from "./picture.svelte";
  import { promos } from "../components/menu";

  function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
      queryEnd = url.indexOf("#") + 1 || url.length + 1,
      query = url.slice(queryStart, queryEnd - 1),
      pairs = query.replace(/\+/g, " ").split("&"),
      parms = {},
      i,
      n,
      v,
      nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
  }

  let item = [
    {
      title: "",
      price: "",
      description: "",
      image: img,
      units: "",
    },
  ];

  onMount(() => {
    window.document.body.classList.remove("hide-scroll");
    let params = parseURLParams(window.location.href);
    item = $promos.filter((elm) => elm.title === params.name[0]);
  });

  let show = false;
  const openModal = () => {
    window.document.body.classList.toggle("hide-scroll");
    show = !show;
  };
</script>

<div class="page">
  {#if show}
    <ContactModal {show} {openModal} />
  {/if}
  <Header backRef="/mobile/promo" />
  <Picture {item} />

  <div class="info-display">
    <div class="info-top">
      <p class="subtitle">Detalles</p>
      <p class="min-text">{item[0].units} unit/s</p>
    </div>
    <p class="info-text">
      {item[0].description}
    </p>

    <!-- <p class="subtitle">Extras</p>
    <div class="topics-row" /> -->
  </div>
  <button class="contact-btn" on:click={openModal}>
    <p style="color:#fff">Contactanos!</p>
  </button>
</div>

<style>
  .page {
    /* height: 100vh; */
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

  }
  .info-display {
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
  }
  .info-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .subtitle {
    font-weight: 500;
    font-size: 18px;
    color: #e17339;
  }
  .min-text {
    color: #e17339;
  }
  .info-text {
    margin: 0px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.85);
  }
  .contact-btn {
    border: 0px;
    margin-top: auto;
    margin-bottom: 24px;
    width: 80%;
    align-self: center;
    background: #e17339;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .contact-btn:active {
    transform: scale(0.98);
    background-color: #c05318;
  }
</style>
