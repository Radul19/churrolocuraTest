<script>
  import Header from "./header.svelte";
  import logo from "../../../public/logosmall.png";
  import ContactModal from "../item/contactModal.svelte";
  import { onMount } from 'svelte';
 
 onMount(() => {
  window.document.body.classList.remove("hide-scroll");
 });

  let show = false;
  const openModal = () => {
    window.document.body.classList.toggle("hide-scroll");
    show = !show;
    // if (show) {
    //   show = false;
    // } else {
    //   show = true;
    // }
  };
</script>

<div class="page">
  {#if show}
    <ContactModal show={show} openModal={openModal}/>
  {/if}

  <Header />
  <img src={logo} alt="logosmall" class="logosmall" />
  <div class="info-ctn">
    <p>Danos tu opinión o cosulta mediante un correo electronico!</p>
    <input type="text" placeholder="correo@gmail.com" />
    <textarea
      name=""
      id=""
      cols="20"
      rows="10"
      placeholder="Descripcion del mensaje..."
    />
    <p>
      Recuerda que tambien puedes comunicarte con nosotros a traves de otros
      enlaces
    </p>
    <p><span class="strong-text">Correo:</span> churrolocura@gmail.com</p>
    <p><span class="strong-text">Telefono:</span> +58 414-880-1717</p>
    <p style="margin-bottom: 24px;" >
      <span class="strong-text">Sedes:</span> Centro comercial Costa Mall, Feria
      de comida
    </p>
  </div>
  <button class="btn-contact" on:click={openModal}>
    <p>Revisa nuestras redes sociales aqui!</p>
  </button>
</div>

<style>
  input,
  textarea {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  input:focus,
  textarea:focus {
    outline-width: 0;
  }
  p {
    margin: 16px 0px;
    color: #fff;
  }

  .page {
    background-color: #211209;
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    min-height: 100vh;
  }

  .logosmall {
    width: 40vw;
    align-self: center;
  }

  .info-ctn {
    padding: 0px 24px;
    margin-top: 24px;
  }

  .strong-text {
    font-weight: bold;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 12px;
    border-radius: 6px;
    margin: 16px 0px;
    border: 0px;
  }

  textarea {
    padding: 12px 12px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 6px;
    height: 15vh;
    margin-bottom: 24px;
  }

  .btn-contact {
    /* padding: 12px 0px; */
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
  .btn-contact:active {
    transform: scale(0.98);
    background-color: #c05318;
  }
  .btn-contact p {
    margin: 12px 0px;
  }
</style>
