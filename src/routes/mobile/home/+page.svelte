<script>
  import Header from "./header.svelte";
  import Menu from "./menu.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    window.document.body.classList.remove("hide-scroll");
  });
</script>

<main>
  <Header />
  <Menu />
</main>
