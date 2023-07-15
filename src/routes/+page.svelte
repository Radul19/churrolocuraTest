<script>
    import { onMount } from "svelte";
    import loading from "../public/loading.gif";
  
      import { browser } from "$app/environment";
    let iw;
    let ih;
    onMount(() => {
      let desktop = iw > ih;
  
      if (desktop) {
        window.location.href = "/desktop/home";
      } else {
        window.location.href = "/mobile/home";
      }
    });
  </script>
  
  <svelte:window bind:innerWidth={iw} bind:innerHeight={ih} />
  <div class="">
      <!-- <p>Visit <a href="/mobile/home">Mobile folder</a> to read the documentation</p> -->
    <!-- <p>Loading...</p> -->
    <!-- <img src={loading} alt="laoding" /> -->
  </div>
  
  
  <style>
    div {
      height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    /* p{
          margin: 0px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
      } */
    img {
      /* width: 100%; */
      max-width: 320px;
    }
  </style>
  