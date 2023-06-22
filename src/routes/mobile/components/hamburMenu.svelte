<script>
  export let menuStatus,clickMenu,menu=false,prom=false,info=false 
  // export let clickMenu
//   const clickMenu = () => {
//     menuStatus = !menuStatus;
//   };
</script>

{#if menuStatus}
  <button class="hamicon-ctn" on:click={clickMenu}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 13.9583C18.3333 13.6133 18.0533 13.3333 17.7083 13.3333H2.29167C1.94667 13.3333 1.66667 13.6133 1.66667 13.9583C1.66667 14.3033 1.94667 14.5833 2.29167 14.5833H17.7083C18.0533 14.5833 18.3333 14.3033 18.3333 13.9583ZM18.3333 9.79167C18.3333 9.44667 18.0533 9.16667 17.7083 9.16667H2.29167C1.94667 9.16667 1.66667 9.44667 1.66667 9.79167C1.66667 10.1367 1.94667 10.4167 2.29167 10.4167H17.7083C18.0533 10.4167 18.3333 10.1367 18.3333 9.79167ZM18.3333 5.625C18.3333 5.28 18.0533 5 17.7083 5H2.29167C1.94667 5 1.66667 5.28 1.66667 5.625C1.66667 5.97 1.94667 6.25 2.29167 6.25H17.7083C18.0533 6.25 18.3333 5.97 18.3333 5.625Z"
        fill="black"
      />
    </svg>
  </button>
{:else}
  <div class="hamicon-ctn-open">
    <button class="cross-icon-ctn" on:click={clickMenu}>
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
    <a class={menu ? "dp-item-active" : 'dropmenu-item'} href="/mobile/home" >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3.13798C6.04133 1.91798 3.056 1.42665 0 1.33331V13.1426C2.62467 13.2226 5.19667 13.5966 7.11133 14.4726C7.67533 14.7313 8.32267 14.7313 8.88933 14.4726C10.804 13.5966 13.3753 13.2226 16 13.1426V1.33331C12.944 1.42665 9.95867 1.91798 8 3.13798ZM1.33333 11.874V2.73798C4.77133 2.99731 6.35133 3.71331 7.33333 4.29398V13.0726C6.31667 12.7086 4.18933 12.0693 1.33333 11.874ZM14.6667 11.874C11.8113 12.0693 9.68333 12.7086 8.66667 13.0733V4.29265C9.63533 3.71865 11.22 2.99798 14.6667 2.73798V11.874Z"
          fill={menu ? "#f8f8f8" : "#1e1e1e"}
        />
      </svg>
      <p class="dropmenu-text white-text">Menu</p>
    </a>
    <a class={prom ? "dp-item-active" : 'dropmenu-item'} href="/mobile/promo">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.88867 4.53666L11.6973 9.40133L2.86 11.55C2.47867 11.6387 2.148 11.772 1.86533 11.9527L1.714 11.6907C2.064 11.4953 2.33333 11.2407 2.532 11.0287L8.88867 4.53666ZM9.11 2.786L1.76933 10.282C1.35867 10.722 0.993333 10.9333 0.531333 10.9333C0.368667 10.9333 0.193333 10.9067 0 10.8553L1.764 13.912C1.936 13.1827 2.30667 12.7733 3.10133 12.5887L13.3333 10.1007L9.11 2.786ZM9.31667 12.0867L9.00533 13.4987C8.94267 13.7507 8.74467 13.948 8.492 14.0127L6.52467 14.5287C6.28133 14.592 6.022 14.5207 5.846 14.342L4.79667 13.2007L5.86667 12.9373L6.29733 13.4507C6.41467 13.5687 6.586 13.616 6.74733 13.5747L7.81267 13.2913C7.98067 13.2487 8.112 13.1173 8.15333 12.95L8.26067 12.346L9.31667 12.0867ZM15.1293 4.57533L13.34 5.65066L12.836 4.80933L14.6267 3.73466L15.1293 4.57533ZM12.1987 3.80133L11.3087 3.39066L12.2033 1.448L13.0933 1.85933L12.1987 3.80133ZM15.9447 7.906L13.81 7.79L13.864 6.81066L16 6.92733L15.9447 7.906Z"
          fill={prom ? "#f8f8f8" : "#1e1e1e"}
        />
      </svg>
      <p class="dropmenu-text white-text">Promotions</p>
    </a>
    <a class={info ? "dp-item-active" : 'dropmenu-item'} href="/mobile/contact" >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00133 1.33667C11.68 1.33667 14.6667 4.32334 14.6667 8.00134C14.6667 11.68 11.68 14.6667 8.00133 14.6667C4.32333 14.6667 1.33667 11.68 1.33667 8.00134C1.33667 4.32334 4.32333 1.33667 8.00133 1.33667ZM8.00133 2.33667C4.87467 2.33667 2.33667 4.87467 2.33667 8.00134C2.33667 11.128 4.87467 13.6667 8.00133 13.6667C11.128 13.6667 13.6667 11.128 13.6667 8.00134C13.6667 4.87467 11.128 2.33667 8.00133 2.33667ZM8.00133 6.67C7.72533 6.67 7.50133 6.894 7.50133 7.17V10.8367C7.50133 11.1127 7.72533 11.3367 8.00133 11.3367C8.27733 11.3367 8.50133 11.1127 8.50133 10.8367V7.17C8.50133 6.894 8.27733 6.67 8.00133 6.67ZM8 4.67C8.368 4.67 8.66667 4.96867 8.66667 5.33667C8.66667 5.70467 8.368 6.00334 8 6.00334C7.632 6.00334 7.33333 5.70467 7.33333 5.33667C7.33333 4.96867 7.632 4.67 8 4.67Z"
          fill={info ? "#f8f8f8" : "#1e1e1e"}
        />`,
      </svg>
      <p class="dropmenu-text white-text">Info</p>
    </a>
  </div>
{/if}

<style>

  .hamicon-ctn {
    border: 0px;
    position: relative;
    background-color: #f8f8f8;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    z-index: 100;
    align-self: center;
    
    box-shadow: 0px 4px 4px rgba(8, 7, 7, 0.25);
    /* top: 20px;
    margin: 0px 20px 0px auto; */
  }

  .hamicon-ctn-open {
    box-sizing: border-box;
    /* top: 20px; */
    width: 250px;
    height: 180px;
    /* margin: 0px 20px 0px auto; */
    position: relative;
    z-index: 100;
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    border-radius: 12px;
    padding-bottom: 10px;
    
    box-shadow: 0px 4px 4px rgba(8, 7, 7, 0.25);
  }
  .dropmenu-item {
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    border: 0px solid;
  }
  .dropmenu-item p {
    color: #191919;
  }

  .dropmenu-item:active {
    background-color: #e17339;
  }

  .dropmenu-item:active p {
    color: #fff;
  }

  .dropmenu-item:active svg {
    filter: invert(99%) sepia(1%) saturate(281%) hue-rotate(325deg)
      brightness(117%) contrast(95%);
  }

  .dp-item-active {
    background-color: #e17339;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    border: 0px solid;
  }

  .dropmenu-text {
    margin: 10px 0px 10px 10px;
  }

  .white-text {
    color: #f8f8f8;
  }
  .cross-icon-ctn {
    /* width: 12px; */
    background-color: #f8f8f8;
    border: 0px;
    padding-top: 4px;
    margin-left: auto;
    margin: 8px 8px 8px auto;
  }
</style>
