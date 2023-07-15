<script>
  import logosmall from "../../../public/logosmall.png";
  import Item from "./item.svelte";
  import { data, promos } from "../../mobile/components/menu";

  let filter = "Todos";
  let promFilter = "Todas";
  let modalState = false;
  let modalItem = {
    title: $data[0].title,
    price: $data[0].price,
    description: $data[0].description,
    category: $data[0].category,
    units: $data[0].units,
    image: $data[0].image,
  };
  // let modalItem = {
  //   title: "",
  //   price: "",
  //   description: "",
  //   category: "",
  //   units: "",
  //   image: "_",
  // };

  const itemOpen = (item) => {
    modalItem = item;
    modalState = true;
  };

  const itemClose = () => {
    modalState = false;
  };

</script>

<main>
  {#if modalState}
    <div class="blackscreen">
      <div class="item-preview">
        <button class="cross-icon-ctn" on:click={itemClose}>
          <svg
            class="cross-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15"
              stroke="#1E1E1E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 5L15 15"
              stroke="#1E1E1E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <img src={modalItem.image} alt="preview" />
        <div class="item-data-ctn">
          <div class="cross-ctn" />
          <div class="data-top">
            <p class="name">{modalItem.title}</p>
            <p class="units">{modalItem.units} unit/s</p>
          </div>
          <p class="description">{modalItem.description}</p>
          <p class="price">{modalItem.price}</p>
        </div>
      </div>
    </div>
  {/if}

  <header>
    <img src={logosmall} alt="logo" class="logosmall" />
    <div class="options-ctn">
      <a class="option" href="#menu">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3.13798C6.04133 1.91798 3.056 1.42665 0 1.33331V13.1426C2.62467 13.2226 5.19667 13.5966 7.11133 14.4726C7.67533 14.7313 8.32267 14.7313 8.88933 14.4726C10.804 13.5966 13.3753 13.2226 16 13.1426V1.33331C12.944 1.42665 9.95867 1.91798 8 3.13798ZM1.33333 11.874V2.73798C4.77133 2.99731 6.35133 3.71331 7.33333 4.29398V13.0726C6.31667 12.7086 4.18933 12.0693 1.33333 11.874ZM14.6667 11.874C11.8113 12.0693 9.68333 12.7086 8.66667 13.0733V4.29265C9.63533 3.71865 11.22 2.99798 14.6667 2.73798V11.874Z"
            fill="#1e1e1e"
          />
        </svg>
        <p class="option-text">Menú</p>
      </a>
      <a class="option" href="#promos">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.88867 4.53666L11.6973 9.40133L2.86 11.55C2.47867 11.6387 2.148 11.772 1.86533 11.9527L1.714 11.6907C2.064 11.4953 2.33333 11.2407 2.532 11.0287L8.88867 4.53666ZM9.11 2.786L1.76933 10.282C1.35867 10.722 0.993333 10.9333 0.531333 10.9333C0.368667 10.9333 0.193333 10.9067 0 10.8553L1.764 13.912C1.936 13.1827 2.30667 12.7733 3.10133 12.5887L13.3333 10.1007L9.11 2.786ZM9.31667 12.0867L9.00533 13.4987C8.94267 13.7507 8.74467 13.948 8.492 14.0127L6.52467 14.5287C6.28133 14.592 6.022 14.5207 5.846 14.342L4.79667 13.2007L5.86667 12.9373L6.29733 13.4507C6.41467 13.5687 6.586 13.616 6.74733 13.5747L7.81267 13.2913C7.98067 13.2487 8.112 13.1173 8.15333 12.95L8.26067 12.346L9.31667 12.0867ZM15.1293 4.57533L13.34 5.65066L12.836 4.80933L14.6267 3.73466L15.1293 4.57533ZM12.1987 3.80133L11.3087 3.39066L12.2033 1.448L13.0933 1.85933L12.1987 3.80133ZM15.9447 7.906L13.81 7.79L13.864 6.81066L16 6.92733L15.9447 7.906Z"
            fill="#1e1e1e"
          />
        </svg>
        <p class="option-text">Promociones</p>
      </a>
      <a class="option" href="#info">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00133 1.33667C11.68 1.33667 14.6667 4.32334 14.6667 8.00134C14.6667 11.68 11.68 14.6667 8.00133 14.6667C4.32333 14.6667 1.33667 11.68 1.33667 8.00134C1.33667 4.32334 4.32333 1.33667 8.00133 1.33667ZM8.00133 2.33667C4.87467 2.33667 2.33667 4.87467 2.33667 8.00134C2.33667 11.128 4.87467 13.6667 8.00133 13.6667C11.128 13.6667 13.6667 11.128 13.6667 8.00134C13.6667 4.87467 11.128 2.33667 8.00133 2.33667ZM8.00133 6.67C7.72533 6.67 7.50133 6.894 7.50133 7.17V10.8367C7.50133 11.1127 7.72533 11.3367 8.00133 11.3367C8.27733 11.3367 8.50133 11.1127 8.50133 10.8367V7.17C8.50133 6.894 8.27733 6.67 8.00133 6.67ZM8 4.67C8.368 4.67 8.66667 4.96867 8.66667 5.33667C8.66667 5.70467 8.368 6.00334 8 6.00334C7.632 6.00334 7.33333 5.70467 7.33333 5.33667C7.33333 4.96867 7.632 4.67 8 4.67Z"
            fill="#1e1e1e"
          />
        </svg>
        <p class="option-text">Consultas</p>
      </a>
    </div>
    <div class="welcome-ctn">
      <p class="welcome">
        Disfruta de nuestro variado <br /> catalogo y locurizate con nuestras promociones!
      </p>
    </div>
  </header>

  <div class="menu-select-ctn" id="menu">
    <p class="menu-big">Menú</p>
    <button
      on:click={() => {
        filter = "Todos";
      }}
    >
      <p active={filter === "Todos" ? "true" : "false"} class="menu-option">
        Todos
      </p>
    </button>
    <button
      on:click={() => {
        filter = "Barquillas";
      }}
    >
      <p
        active={filter === "Barquillas" ? "true" : "false"}
        class="menu-option"
      >
        Barquillas
      </p>
    </button>
    <button
      on:click={() => {
        filter = "Churros";
      }}
    >
      <p active={filter === "Churros" ? "true" : "false"} class="menu-option">
        Churros
      </p>
    </button>
  </div>

  <div class="menu-items-ctn">
    {#each $data as item}
      {#if item.category === filter || filter === "Todos"}
        <Item {item} onClick={itemOpen} />
      {/if}
    {/each}
  </div>
  <div class="height" />

  <div class="menu-select-ctn" id="promos">
    <p class="menu-big">Promociones</p>
    <button
      on:click={() => {
        promFilter = "Todas";
      }}
    >
      <p class="menu-option"  active={promFilter === "Todas" ? "true" : "false"} >Todas</p>
    </button>
    <button
      on:click={() => {
        promFilter = "Dia";
      }}
    >
      <p class="menu-option"  active={promFilter === "Dia" ? "true" : "false"} >Del dia</p>
    </button>
    <button
      on:click={() => {
        promFilter = "Semana";
      }}
    >
      <p class="menu-option"  active={promFilter === "Semana" ? "true" : "false"} >De la semana</p>
    </button>
    <button
      on:click={() => {
        promFilter = "Mes";
      }}
    >
      <p class="menu-option"  active={promFilter === "Mes" ? "true" : "false"} >Del mes</p>
    </button>
  </div>

  <div class="promos-ctn">
    {#if promFilter === 'Dia'  }
    <button on:click={()=>{itemOpen($promos[0])}} >
      <img src={$promos[0].image} alt="" class="prom-img" />
    </button>
    {/if}
    {#if promFilter === 'Semana'  }
    <button on:click={()=>{itemOpen($promos[0])}} >
      <img src={$promos[0].image} alt="" class="prom-img" />
    </button>
    <button on:click={()=>{itemOpen($promos[1])}} >
      <img src={$promos[1].image} alt="" class="prom-img" />
    </button>
    
    {/if}
    {#if promFilter === 'Todas' || promFilter === 'Mes'  }
    <button on:click={()=>{itemOpen($promos[0])}} >
      <img src={$promos[0].image} alt="" class="prom-img" />
    </button>
    <button on:click={()=>{itemOpen($promos[1])}} >
      <img src={$promos[1].image} alt="" class="prom-img" />
    </button>

    {/if}
    
  </div>

  <section class="contact-section" id="info">
    <div class="left-side">
      <p class="contact-title">Envianos a nuestras redes sociales</p>
      <div class="buttons-ctn">
        <a
          class="whatsapp-ctn btn"
          href="https://api.whatsapp.com/send?phone=+584146382366"
        >
          <!-- icon -->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_85_156)">
              <path
                d="M2.04749 22L3.45332 16.8642C2.58582 15.3608 2.12999 13.6567 2.13082 11.9092C2.13332 6.44583 6.57915 2 12.0417 2C14.6925 2.00083 17.1808 3.03333 19.0525 4.90667C20.9233 6.78 21.9533 9.27 21.9525 11.9183C21.95 17.3825 17.5042 21.8283 12.0417 21.8283C10.3833 21.8275 8.74915 21.4117 7.30165 20.6217L2.04749 22ZM7.54498 18.8275C8.94165 19.6567 10.275 20.1533 12.0383 20.1542C16.5783 20.1542 20.2767 16.4592 20.2792 11.9167C20.2808 7.365 16.6 3.675 12.045 3.67333C7.50165 3.67333 3.80582 7.36833 3.80415 11.91C3.80332 13.7642 4.34665 15.1525 5.25915 16.605L4.42665 19.645L7.54498 18.8275ZM17.0342 14.2742C16.9725 14.1708 16.8075 14.1092 16.5592 13.985C16.3117 13.8608 15.0942 13.2617 14.8667 13.1792C14.64 13.0967 14.475 13.055 14.3092 13.3033C14.1442 13.5508 13.6692 14.1092 13.525 14.2742C13.3808 14.4392 13.2358 14.46 12.9883 14.3358C12.7408 14.2117 11.9425 13.9508 10.9967 13.1067C10.2608 12.45 9.76332 11.6392 9.61915 11.3908C9.47498 11.1433 9.60415 11.0092 9.72748 10.8858C9.83915 10.775 9.97498 10.5967 10.0992 10.4517C10.225 10.3083 10.2658 10.205 10.3492 10.0392C10.4317 9.87417 10.3908 9.72917 10.3283 9.605C10.2658 9.48167 9.77082 8.2625 9.56499 7.76667C9.36332 7.28417 9.15915 7.34917 9.00749 7.34167L8.53249 7.33333C8.36749 7.33333 8.09915 7.395 7.87249 7.64333C7.64582 7.89167 7.00582 8.49 7.00582 9.70917C7.00582 10.9283 7.89332 12.1058 8.01665 12.2708C8.14082 12.4358 9.76248 14.9375 12.2467 16.01C12.8375 16.265 13.2992 16.4175 13.6583 16.5317C14.2517 16.72 14.7917 16.6933 15.2183 16.63C15.6942 16.5592 16.6833 16.0308 16.89 15.4525C17.0967 14.8733 17.0967 14.3775 17.0342 14.2742Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_85_156">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(2 2)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>Whatsapp</p>
        </a>
        <a
          class="facebook-ctn btn"
          href="https://www.facebook.com/churromania.ve/"
          target="_blank"
        >
          <!-- icon -->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.128 14.706V24H13.869V14.707H16.989L17.456 11.085H13.869V8.772C13.869 7.724 14.16 7.009 15.664 7.009L17.582 7.008V3.768C17.25 3.724 16.112 3.625 14.787 3.625C12.021 3.625 10.128 5.313 10.128 8.413V11.084H6.99997V14.706H10.128Z"
              fill="white"
            />
          </svg>

          <p>Facebook</p>
        </a>
        <a
          class="twitter-ctn btn"
          href="https://twitter.com/Mortdog"
          target="_blank"
        >
          <!-- icon -->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3622 8.24023C18.5713 12.8577 15.1277 18.0055 9.03122 18.0055C7.17737 18.0055 5.45268 17.4615 4 16.53C5.74184 16.7357 7.48025 16.2511 8.85978 15.171C7.42424 15.1447 6.21159 14.1949 5.79213 12.8908C6.30759 12.9891 6.81506 12.9606 7.27566 12.8348C5.69726 12.5171 4.6069 11.0953 4.64233 9.57404C5.08579 9.81977 5.59097 9.96721 6.12929 9.98436C4.66748 9.00714 4.25373 7.07672 5.11322 5.60119C6.73162 7.58761 9.15122 8.89399 11.8794 9.03114C11.4005 6.97843 12.9584 5 15.0785 5C16.0214 5 16.8752 5.39889 17.4741 6.03665C18.2216 5.89035 18.9256 5.61604 19.5588 5.24002C19.3131 6.00693 18.7931 6.64926 18.1153 7.05615C18.7793 6.97614 19.4125 6.80013 20 6.5384C19.5611 7.19901 19.0056 7.77734 18.3622 8.24023Z"
              fill="white"
            />
          </svg>

          <p>Twitter</p>
        </a>
        <a class="instagram-ctn btn" href="http://instagram.com/_u/iam_seori/">
          <!-- icon -->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_85_163)">
              <path
                d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_85_163">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p>Instagram</p>
        </a>
      </div>
    </div>
    <div class="center-line">
      <div class="line-v" />
      <p>o</p>
      <div class="line-v" />
    </div>
    <div class="right-side">
      <p class="contact-title">
        Danos tu opinion o consulta mediante un correo electronico
      </p>
      <form class="contact-form">
        <input type="text" class="email-input" placeholder="correo@gmail.com" />
        <textarea
          name="description"
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Descripción del mensaje"
        />
        <button>Enviar</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="footer-ctn">
      <div class="footer-div">
        <p class="text-left">
          Recuerda que tambien puedes comunicarte con nosotros a traves de
          nuestros numeros telefonicos
        </p>
      </div>
      <div class="footer-div">
        <p class="text-center"><span>Telefono: </span>+58 414-880-1717</p>
        <p class="text-center"><span>Correo: </span>churrolocura@gmail.com</p>
      </div>
      <div class="footer-div">
        <p class="text-right">
          Estamos ubicados en el Centro comercial Costa Mall, Feria de comida.
        </p>
      </div>
    </div>
    <p class="copyright">© Todos los derechos reservados a Churrolocura</p>
  </footer>
</main>

<style>
  main {
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /* position: fixed; */
  }

  p {
    margin: 0px;
  }
  .height {
    height: 42px;
  }

  header {
    height: 40vh;
    width: 100vw;
    box-sizing: border-box;
    background-image: url("../../../public/heroimg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logosmall {
    position: absolute;
    width: calc(6.5vw + 6.5vh);
    height: calc(6.4vw+6.4vh);
    top: 24px;
    left: 24px;
  }

  .welcome-ctn {
    align-self: flex-end;
    background: linear-gradient(#ffffff00, #000000b5);
    width: 100%;
    height: 50%;
    display: flex;
  }

  .welcome {
    color: #eee;
    font-size: 3em;
    margin: 34px;
    font-weight: 500;
  }

  .options-ctn {
    height: 7vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 42px 0px 0px;
    box-sizing: border-box;
  }
  .option {
    padding: 8px 14px;
    display: flex;
    border: 1px solid #eeeeeeac;
    background-color: #00000065;
    margin: 0px 12px;
    align-items: center;
    border-radius: 6px;
  }
  .option:hover {
    border: 1px solid #e17339;
  }
  .option-text {
    color: #eee;
  }

  .option svg {
    margin-right: 12px;
    filter: invert(99%) sepia(1%) saturate(281%) hue-rotate(325deg)
      brightness(117%) contrast(95%);
  }

  .menu-big {
    font-size: 32px;
    font-weight: bold;
    position: absolute;
    left: 32px;
    color: #c05318;
  }

  .menu-select-ctn {
    display: flex;
    justify-content: center;
    height: 7vh;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 24px;
  }

  .menu-option {
    position: relative;
    margin: 0px 24px;
    width: 130px;
    font-weight: 500;
    text-align: center;
    font-size: 18px !important;
  }
  .menu-option[active="true"] {
    color: #e17339;
  }
  .menu-option[active="true"]::before {
    position: absolute;
    content: " ";
    width: 20px;
    height: 6px;
    background-color: #e17339;
    bottom: -12px;
    left: 55px;
    border-radius: 12px;
  }

  .menu-items-ctn {
    width: 80vw;
    align-self: center;
    flex-wrap: wrap;
    gap: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  .menu-select-ctn button {
    border: 0px;
    background-color: #ffffff00;
    padding: 6px 0px;
    cursor: pointer;
    margin: 0px 12px;
  }

  .promos-ctn {
    width: 70vw;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    justify-items: center;
    gap: 24px;
    margin-bottom: 46px;
  }
  .promos-ctn button {
    padding: 0px;
    width: 320px;
    height: 200px;
    outline: 2px solid #00000083;
    outline-offset: -2px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(8, 7, 7, 0.25);
    transition: transform 0.1s;
  }

  .promos-ctn button:hover{
    transform: scale(1.03);
  }

  .prom-img {
    height: 100%;
    width: 100%;
  }

  .contact-section {
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .left-side {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .right-side {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .contact-title {
    font-size: 26px;
    width: 60%;
    text-align: center;
    font-weight: 500;
  }

  .center-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .center-line p {
    margin-bottom: 5px;
  }

  .line-v {
    width: 1px;
    height: 45%;
    background-color: #1e1e1e61;
  }

  .buttons-ctn {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    padding: 24px 24px;
    width: 70%;
  }

  .btn {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 12px 24px;
    border-radius: 16px;
    justify-content: center;
    margin-bottom: 24px;
    cursor: pointer;
    transition: transform .2s;
  }
  .btn:hover{
    transform: scale(1.03);
  }
  .btn svg {
    position: absolute;
    left: 24px;
  }
  .btn p {
    color: #fff;
    font-size: 16px;
  }
  .whatsapp-ctn {
    background-color: #25d366;
  }
  .facebook-ctn {
    background-color: #4267b2;
  }
  .twitter-ctn {
    background-color: #1da1f2;
  }
  .instagram-ctn {
    background-image: url("../../../public/ig-back.png");
    background-position: center;
    background-size: cover;
  }

  form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  form input {
    background-color: #f8f8f885;
    padding: 12px 16px;
    color: #191919;
    border: 1px solid #00000036;
    border-radius: 6px;
    margin: 12px 0px;
    box-sizing: border-box;
    width: 100%;
  }
  form textarea {
    background-color: #f8f8f885;
    width: 100% !important;
    padding: 12px 16px;
    color: #191919;
    border: 1px solid #00000036;
    border-radius: 6px;
    margin: 12px 0px;
    resize: none;
    box-sizing: border-box;
  }

  form button {
    background-color: #c05318;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #c05318;
    color: #eee;
    padding: 12px 0px;
    border-radius: 6px;
    margin-top: 12px;
    cursor: pointer;
  }

  form button:hover{
    border: 2px solid #c05318;
    background-color: #fff;
    color: #c05318;
  }

  input,
  textarea {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  input:focus,
  textarea:focus {
    outline-width: 0;
  }

  footer {
    margin-top: 7vh;
    height: 20vh;
    background-color: #211209;
    display: flex;
    flex-direction: column;
  }
  footer p {
    color: #eee;
  }
  .footer-ctn {
    padding-top: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .footer-ctn span {
    font-weight: 500;
  }

  .footer-div {
    width: 20vw;
  }
  .text-left {
    font-weight: 500;
  }
  .text-center {
    margin-bottom: 6px;
  }
  .text-right {
    text-align: right;
  }
  .copyright {
    margin-top: auto;
    align-self: center;
    font-size: 14px;
    margin-bottom: 24px;
  }

  .blackscreen {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #0000008c;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cross-icon-ctn {
    position: absolute;
    border: 0px;
    right: 2px;
    top: 2px;
    padding: 10px;
    background-color: #ffffff00;
    cursor: pointer;
  }
  .item-preview {
    position: relative;
    width: 50%;
    background-color: #fff;
    padding: 24px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    gap: 32px;
    min-height: 300px;
  }

  .item-data-ctn {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .item-preview img {
    width: 40%;
    height: 100%;
    border-radius: 6px;
  }
  .data-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 12px;
    padding-right: 24px;
  }

  .item-preview .name {
    font-size: 1.5em;
    font-weight: 500;
    width: 70%;
  }
  .item-preview .units {
    font-size: 1.5em;
    color: #e17339;
  }
  .item-preview .price {
    font-size: 1.5em;
    color: #e17339;
    margin-top: auto;
    margin-left: auto;
  }
  .item-preview .description {
    margin-top: 24px;
    width: 80%;
  }
</style>
