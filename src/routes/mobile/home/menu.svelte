<script>
  import Item from "./item.svelte";
  import { data } from "../components/menu.js";

  let filter = "Todos";
</script>

<div class="menu-ctn">
  <p class="menu-title">Menú</p>
  <div class="menu-list">
    <button
      class="menu-btn"
      on:click={() => {
        filter = "Todos";
      }}
    >
      <p class="listname" active={filter === "Todos" ? "true" : "false"}>
        Todos
      </p>
    </button>
    <button
      class="menu-btn"
      on:click={() => {
        filter = "Barquillas";
      }}
    >
      <p class="listname" active={filter === "Barquillas" ? "true" : "false"}>
        Barquillas
      </p>
    </button>
    <button
      class="menu-btn"
      on:click={() => {
        filter = "Churros";
      }}
    >
      <p class="listname" active={filter === "Churros" ? "true" : "false"}>
        Churros
      </p>
    </button>
    <button
      class="menu-btn"
      on:click={() => {
        filter = "Pancakes";
      }}
    >
      <p class="listname" active={filter === "Pancakes" ? "true" : "false"}>
        Pancakes
      </p>
    </button>
    <!-- <p class='listname' >Salad</p>
        <p class='listname' >Pancakes</p>
        <p class='listname' >Muffins</p>
        <p class='listname' >Frappes</p>
        <p class='listname' >Cakes</p> -->
  </div>

  <div class="menu-items-ctn">
    {#each $data as item}
      {#if item.category === filter || filter === 'Todos'}
        <Item {item} />
      {/if}
    {/each}
  </div>
</div>

<style>
  button {
    border: 0px;
    background-color: #00000000;
    padding: 0px;
  }
  .menu-ctn {
    padding: 20px 0px 20px 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

  .menu-title {
    margin: 0px;
    font-size: 24px;
    font-weight: 600;
    color: #c05318;
  }

  .menu-list {
    overflow: auto;
    white-space: nowrap;
    display: flex;
    padding-bottom: 12px;
  }

  .listname {
    margin: 12px 12px 0px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .listname[active="true"] {
    color: #c05318;
  }

  .menu-items-ctn {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  }
</style>
