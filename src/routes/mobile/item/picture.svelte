<script>
  // import picture from "../../../public/item2.png";
  // import {data} from '../components/menu.js'
  // import picture from "../../../public/itemPic.png";
  export let item 
  let title = "Barquilla Sencilla";
  let price = "$4.00";
</script>


<div class="image-ctn">
  <div class="image-top">
    <p class="title">{item[0].title}</p>
    <p class="price">{item[0].price}</p>
  </div>
  <img src={item[0].image} alt="cone" class="item-pic" />
</div>

<style>
  .image-ctn {
    display: flex;
    flex-direction: column;
    padding: 0px 24px 17px;
  }
  .image-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .title {
    font-weight: 500;
    font-size: 20px;
  }
  .price {
    font-weight: 500;
    font-size: 20px;
    color: #e17339;
  }

  .item-pic{
    border-radius: 12px;
  }


</style>
