<script>
    export let item

</script>

<a class="menu-item" href={"/mobile/item?name="+item.title.replace(" ","+")}>
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
</a>

<style>
  .text {
    margin: 0;
    color: #191919;
  }

  .menu-item {
    /* width: 100%; */
    border-radius: 12px;
    background-color: #f8f8f8;
    box-shadow: 0px 4px 4px rgba(8, 7, 7, 0.25);
    padding: 9px 0px 5px 12px;
    display: flex;
    margin: 12px 0px;
    border-bottom: 4px solid #f8f8f8;
    overflow: hidden;
  }

  .menu-item:active {
    /* background-color: #993905; */
    transform: scale(0.97);
    border-bottom: 4px solid #e17339;
  }

  .item-pic {
    width: 82px;
    height: 82px;
    border-radius: 100%;
  }

  .content-ctn {
    padding: 0px 20px 0px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .title {
    font-size: 16px;
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
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: wrap;
  }
  .price {
    align-self: flex-end;
    font-size: 14px;
    font-weight: 600;
    color: #993905;
  }
</style>
