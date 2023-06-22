<!-- <script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->
<script>
    export const prerender = true;
    import { onMount } from "svelte";
    import loading from "../public/loading.gif";
  
    let iw=0;
    let ih=1;
    onMount(() => {
      let desktop = iw > ih && true;
  
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
    <img src={loading} alt="laoding" />
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
  