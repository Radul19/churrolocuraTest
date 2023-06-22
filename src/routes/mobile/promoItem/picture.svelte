<script>
    import picture from "../../../public/promimage.jpeg";
    export let item 
    let title = "Locura Sundae";
    let price = "$24.00";
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
      /* border: 2px solid #00000083; */
      outline: 2px solid #00000083;
      outline-offset: -2px;
      box-shadow: 0px 4px 4px rgba(8, 7, 7, 0.25);
    }
  
  
  </style>
  