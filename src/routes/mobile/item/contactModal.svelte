<script>
  export let show;
  export let openModal;
</script>

<div class="blackScreen" style={`display:${show}`}>
  <div class="social-media-ctn">
    <!-- cross -->
    <button class="cross" on:click={openModal}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="#1E1E1E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#1E1E1E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <p class="subtitle">Envianos en nuestras redes sociales</p>
    <div class="buttons-ctn">
      <a class="whatsapp-ctn btn" href="https://api.whatsapp.com/send?phone=+584146382366" >
        <!-- icon -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_85_156)">
            <path
              d="M2.04749 22L3.45332 16.8642C2.58582 15.3608 2.12999 13.6567 2.13082 11.9092C2.13332 6.44583 6.57915 2 12.0417 2C14.6925 2.00083 17.1808 3.03333 19.0525 4.90667C20.9233 6.78 21.9533 9.27 21.9525 11.9183C21.95 17.3825 17.5042 21.8283 12.0417 21.8283C10.3833 21.8275 8.74915 21.4117 7.30165 20.6217L2.04749 22ZM7.54498 18.8275C8.94165 19.6567 10.275 20.1533 12.0383 20.1542C16.5783 20.1542 20.2767 16.4592 20.2792 11.9167C20.2808 7.365 16.6 3.675 12.045 3.67333C7.50165 3.67333 3.80582 7.36833 3.80415 11.91C3.80332 13.7642 4.34665 15.1525 5.25915 16.605L4.42665 19.645L7.54498 18.8275ZM17.0342 14.2742C16.9725 14.1708 16.8075 14.1092 16.5592 13.985C16.3117 13.8608 15.0942 13.2617 14.8667 13.1792C14.64 13.0967 14.475 13.055 14.3092 13.3033C14.1442 13.5508 13.6692 14.1092 13.525 14.2742C13.3808 14.4392 13.2358 14.46 12.9883 14.3358C12.7408 14.2117 11.9425 13.9508 10.9967 13.1067C10.2608 12.45 9.76332 11.6392 9.61915 11.3908C9.47498 11.1433 9.60415 11.0092 9.72748 10.8858C9.83915 10.775 9.97498 10.5967 10.0992 10.4517C10.225 10.3083 10.2658 10.205 10.3492 10.0392C10.4317 9.87417 10.3908 9.72917 10.3283 9.605C10.2658 9.48167 9.77082 8.2625 9.56499 7.76667C9.36332 7.28417 9.15915 7.34917 9.00749 7.34167L8.53249 7.33333C8.36749 7.33333 8.09915 7.395 7.87249 7.64333C7.64582 7.89167 7.00582 8.49 7.00582 9.70917C7.00582 10.9283 7.89332 12.1058 8.01665 12.2708C8.14082 12.4358 9.76248 14.9375 12.2467 16.01C12.8375 16.265 13.2992 16.4175 13.6583 16.5317C14.2517 16.72 14.7917 16.6933 15.2183 16.63C15.6942 16.5592 16.6833 16.0308 16.89 15.4525C17.0967 14.8733 17.0967 14.3775 17.0342 14.2742Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_85_156">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(2 2)"
              />
            </clipPath>
          </defs>
        </svg>

        <p>Whatsapp</p>
      </a>
      <a class="facebook-ctn btn" href="https://www.facebook.com/churromania.ve/" target="_blank" >
        <!-- icon -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.128 14.706V24H13.869V14.707H16.989L17.456 11.085H13.869V8.772C13.869 7.724 14.16 7.009 15.664 7.009L17.582 7.008V3.768C17.25 3.724 16.112 3.625 14.787 3.625C12.021 3.625 10.128 5.313 10.128 8.413V11.084H6.99997V14.706H10.128Z"
            fill="white"
          />
        </svg>

        <p>Facebook</p>
      </a>
      <a class="twitter-ctn btn" href="https://twitter.com/Mortdog" target="_blank" >
        <!-- icon -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3622 8.24023C18.5713 12.8577 15.1277 18.0055 9.03122 18.0055C7.17737 18.0055 5.45268 17.4615 4 16.53C5.74184 16.7357 7.48025 16.2511 8.85978 15.171C7.42424 15.1447 6.21159 14.1949 5.79213 12.8908C6.30759 12.9891 6.81506 12.9606 7.27566 12.8348C5.69726 12.5171 4.6069 11.0953 4.64233 9.57404C5.08579 9.81977 5.59097 9.96721 6.12929 9.98436C4.66748 9.00714 4.25373 7.07672 5.11322 5.60119C6.73162 7.58761 9.15122 8.89399 11.8794 9.03114C11.4005 6.97843 12.9584 5 15.0785 5C16.0214 5 16.8752 5.39889 17.4741 6.03665C18.2216 5.89035 18.9256 5.61604 19.5588 5.24002C19.3131 6.00693 18.7931 6.64926 18.1153 7.05615C18.7793 6.97614 19.4125 6.80013 20 6.5384C19.5611 7.19901 19.0056 7.77734 18.3622 8.24023Z"
            fill="white"
          />
        </svg>

        <p>Twitter</p>
      </a>
      <a class="instagram-ctn btn" href="http://instagram.com/_u/iam_seori/">
        <!-- icon -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_85_163)">
            <path
              d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_85_163">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p>Instagram</p>
      </a>
    </div>
  </div>
</div>

<style>
  p {
    margin: 0px;
    /* font-family: 'Poppins'; */
  }
  .blackScreen {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background-color: #1919197a;
    display: flex;
    padding: 0px 12px 0px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }

  .social-media-ctn {
    background-color: #fff;
    width: 80%;
    border-radius: 12px;
    padding: 16px 0px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    /* align-self: center; */
  }

  .cross {
    margin-left: auto;
    padding: 4px 4px 2px 4px;
    border-radius: 6px;
    background-color: #fff;
    border: 0px;
    margin-right: 6px;
    margin-top: -6px;
  }
  .cross:active {
    background: #eee;
  }

  .subtitle {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: 80%;
    align-self: center;
    margin-bottom: 24px;
  }
  .buttons-ctn {
    display: flex;
    flex-direction: column;
    padding: 0px 24px;
  }
  .btn {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 12px 24px;
    border-radius: 16px;
    justify-content: center;
    margin-bottom: 24px;
    cursor: pointer;
  }
  .btn svg {
    position: absolute;
    left: 24px;
  }
  .btn p {
    color: #fff;
    font-size: 16px;
  }
  .whatsapp-ctn {
    background-color: #25d366;
  }
  .facebook-ctn {
    background-color: #4267b2;
  }
  .twitter-ctn {
    background-color: #1da1f2;
  }
  .instagram-ctn {
    background-image: url("../../../public/ig-back.png");
    background-position: center;
    background-size: cover;
  }
</style>
