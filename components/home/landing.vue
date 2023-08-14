<template>
  <div class="landing">
    <h1 class="main-header">
      Bring MEME
      <svg width="209" height="41" viewBox="0 0 209 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 35C58.3333 35.8333 145.5 35 203 6.5" stroke="#43E229" stroke-width="11" stroke-linecap="round"
          stroke-linejoin="round" id="tick" />
      </svg>
      <span class="title-text">to practical</span>
      <div class="animate-strong">
        <span>
          <strong class="main-header-strong">shib<br></strong>
          <strong class="main-header-strong">dogecoin<br></strong>
          <strong class="main-header-strong">floki<br></strong>
          <strong class="main-header-strong">pepe<br></strong>
          <strong class="main-header-strong">baby doge<br></strong>
          <strong class="main-header-strong">inus!<br></strong>
          <!-- <strong class="main-header-strong">kishu</strong> -->
        </span>
      </div>
    </h1>
    <h2>MultiPlanetary INUS - The first-ever MMORPG token unifying the top MEME Coin communities.</h2>
    <div class="button-group">
      <NuxtLink to="https://app.uniswap.org/#/swap?outputCurrency=0x39207d2e2feef178fbda8083914554c59d9f8c00&use=V2"
        target="_blank" class="iconified-button buy-button">Buy on Uniswap</NuxtLink>
      <NuxtLink to="https://multiplanetaryinus.io/Multiplanetaryinus-wp-1.pdf" target="_blank"
        class="iconified-button wp-button">Read Whitepaper</NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>
@font-face {
  font-family: 'Inter';
  src: url('~/assets/font/Inter/Inter-Bold-4.otf');
}

@font-face {
  font-family: 'kelvetica';
  src: url('~/assets/font/kelvetica/KelveticaNobis-A5z6.ttf');
}

a {
  text-decoration: none;
  color: #fff;
}

.landing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 12rem 1rem;
  align-items: center;

  // margin-top: -5.75rem;
  .main-header {
    font-size: 5.25rem;
    font-weight: 600;
    line-height: 100%;
    margin: 0 0 0 0.25rem;
    font-family: Inter, serif;
    // font-family: "kelvetica", sans-serif;
    letter-spacing: -.03em;

    svg {
      display: none;
    }

    .title-text {
      font-family: Merriweather, serif;
      font-weight: 300;
    }

    .animate-strong {
      display: flex;
      height: 1.3em;
      justify-content: center;
      line-height: 120%;
      overflow: hidden;
      position: relative;
      text-align: center;
      font-size: 5.25rem;

      .main-header-strong {
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        // background-color: #00bd3c;
        background-color: #00e472;
        background-image: linear-gradient(180deg, #a7d0ff 0, #00e472 60%);
        background-size: 100%;
        color: transparent;
        font-weight: 600;
      }

      // .main-header-strong:nth-child(2) {
      //   line-height: 10px;
      // }

      // .main-header-strong:nth-child(3) {
      //   background-color: red;
      //   padding-top: 6px;
      // }

    }

    .animate-strong>span {
      animation: slide 10s infinite;
      position: absolute;
      top: 0;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: #afb6be;
    font-weight: 400;
    line-break: loose;
    line-height: 125%;
    max-width: 45rem;
    margin: 0 0 1.6rem;
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: center;
    margin: 0 auto 5rem;
    text-align: center;
    font-family: "Inter", sans-serif;

    .iconified-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      font-weight: 600;
      min-height: 3rem;

      background-color: #00e472;
      border-radius: 0.75rem;
      box-shadow: inset 0px -1px 1px rgba(17, 24, 39, .25), 0 0 0 0 transparent;
    }

    .iconified-button:hover {
      filter: brightness(.85);
    }

    .buy-button {
      color: #000;
    }

    .wp-button {
      background: none;
      border: 1px solid #fff;
    }
  }
}

@keyframes slide {

  0%,
  13% {
    top: 0;
  }

  17%,
  30% {
    top: -1.2em;
  }

  33%,
  46% {
    top: -2.4em;
  }

  50%,
  63% {
    top: -3.6em;
  }

  66%,
  79% {
    top: -4.8em;
  }

  83%,
  96% {
    top: -6em;
  }

  100%,
  100% {
    top: -7.2em;
  }

  100% {
    top: 0;
  }
}

@media (max-width: 1280px) {}

@media (max-width: 1024px) {
  .landing {
    .main-header {

      position: relative;

      svg {
        display: block;
        position: absolute;
        // bottom: 515px;
        // left: 140px;
        bottom: 190px;
        left: 270px;
        z-index: -1;
        stroke-dasharray: 210px;
        stroke-dashoffset: 210px;
        animation: 3s tick ease-in-out infinite;
      }

      .title-text {
        display: block;
      }
    }

    h2 {
      font-size: 1.25rem;
    }
  }
}

@media (max-width: 768px) {}

@media (max-width: 640px) {

  .landing {
    .main-header {
      // font-size: 2.25rem;
      font-size: 3rem;
      position: relative;

      svg {
        display: block;
        position: absolute;
        // bottom: 515px;
        // left: 140px;
        bottom: 85px;
        left: 84px;
        z-index: -1;
        stroke-dasharray: 210px;
        stroke-dashoffset: 210px;
        animation: 3s tick ease-in-out infinite;
      }



      .title-text {
        display: block;
        font-size: 2.25rem;
      }

      .animate-strong {
        font-size: 2.25rem;
      }
    }

    h2 {
      font-size: 1.25rem;
    }

    .button-group {
      gap: 0.75rem;

      .iconified-button {
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
      }
    }
  }
}


@keyframes tick {

  0%,
  50% {
    stroke-dashoffset: 210px;
  }

  50%,
  100% {
    stroke-dashoffset: 0px;
  }
}
</style>