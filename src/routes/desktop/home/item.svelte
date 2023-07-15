<script>
    export let item
    export let onClick

    const pressItem = ()=>{
      onClick(item)
    }
</script>

<button class="menu-item" on:click={pressItem}>
  <img src={item.image} alt="cone" class="item-pic" />
  <div class="content-ctn">
    <p class="title text">{item.title}</p>
    <div class="description-box">
      <p class="description text">
        {item.description}
      </p>
    </div>
    <p class="price text">{item.price}</p>
  </div>
</button>

<style>

  button{
    border: 0px;
    cursor: pointer;
    transition: transform .1s;
  }
  button:hover{
    transform: scale(1.03);
  }

  .text {
    margin: 0;
    color: #191919;
    text-align: left;
  }

  .menu-item {
    /* width: 100%; */
    border-radius: 12px;
    background-color: #f8f8f8;
    box-shadow: 0px 4px 4px rgba(8, 7, 7, 0.25);
    padding: 9px 20px 5px 12px;
    display: flex;
    margin: 12px 0px;
    border-bottom: 4px solid #f8f8f8;
    overflow: hidden;
    width: 30em;
    /* align-self: center; */
  }

  .menu-item:active {
    /* background-color: #993905; */
    transform: scale(0.97);
    border-bottom: 4px solid #e17339;
  }

  .item-pic {
    width: 8em;
    height: 8em;
    border-radius: 100%;
  }

  .content-ctn {
    padding: 0px 00px 0px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    /* background-color: red; */
  }

  .title {
    font-size: 1.3em;
    font-weight: 600;
  }
  .description-box {
      /* background-color: red; */
    width: 100%;
    overflow: hidden;
    flex: 1;
  }
  .description {
    margin: 6px 0px 0px;
    font-size: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: wrap;
  }
  .price {
    align-self: flex-end;
    font-size: 1.2em;
    font-weight: 600;
    color: #993905;
  }
</style>
