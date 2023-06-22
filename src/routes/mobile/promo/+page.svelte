<script>
  import HamburMenu from "../components/hamburMenu.svelte";
  import Content from "./content.svelte";
  import Header from "./header.svelte";
  import { onMount } from 'svelte';
 
 onMount(() => {
  window.document.body.classList.remove("hide-scroll");
 });

</script>



<Header />
<Content/>


<style>

</style>
