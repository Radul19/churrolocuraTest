<script>
  import ShareModal from "./shareModal.svelte";
  export let backRef,picture,item

  let showShare = false;
  const openShare = () => {
    window.document.body.classList.toggle('hide-scroll')
    showShare = !showShare
  };
</script>

{#if showShare}
  <ShareModal show={openShare} {picture} {item} />
{/if}

<div class="header">
  <a class="icon-ctn" href={backRef}>
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1L2 7L8 13" stroke="black" stroke-width="2" />
    </svg>
  </a>

  <button class="share-icon" on:click={openShare} >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5_243)">
        <path
          d="M4.16667 5.83333C6.4675 5.83333 8.33333 7.69917 8.33333 10C8.33333 12.3008 6.4675 14.1667 4.16667 14.1667C1.86583 14.1667 0 12.3008 0 10C0 7.69917 1.86583 5.83333 4.16667 5.83333ZM13.435 15.8875C13.3742 16.1383 13.3333 16.3967 13.3333 16.6667C13.3333 18.5075 14.8258 20 16.6667 20C18.5075 20 20 18.5075 20 16.6667C20 14.8258 18.5075 13.3333 16.6667 13.3333C15.6958 13.3333 14.83 13.755 14.2208 14.4175L9.6475 11.9783C9.45583 12.5083 9.19 13.0025 8.86167 13.4483L13.435 15.8875ZM20 3.33333C20 1.4925 18.5075 0 16.6667 0C14.8258 0 13.3333 1.4925 13.3333 3.33333C13.3333 3.60333 13.3742 3.86167 13.435 4.1125L8.86167 6.55167C9.19083 6.9975 9.45583 7.49083 9.6475 8.02167L14.2208 5.5825C14.83 6.245 15.6958 6.66667 16.6667 6.66667C18.5075 6.66667 20 5.17417 20 3.33333Z"
          fill="#E17339"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_243">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </button>
</div>

<style>
  .header {
    display: flex;
    flex-direction: row;
    padding: 24px 24px 12px;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
  }
  .icon-ctn {
    display: flex;
    cursor: pointer;
    padding: 10px 13px;
    border-radius: 12px;
    justify-items: center;
    background-color: #f8f8f8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .icon-ctn:active {
    transform: scale(0.97);
    background-color: #eee;
  }

  .share-icon {
    cursor: pointer;
    border: 0px solid;
    padding: 6px;
    background-color: #19191900;
  }
</style>
