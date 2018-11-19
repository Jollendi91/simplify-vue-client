<template>
  <div>
      <app-header></app-header>
      <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue';

  export default {
    components: {
      appHeader: Header,
    }
  }
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Cabin|Roboto+Condensed:700');

  * {
      box-sizing: border-box;
      font-family: 'Cabin'
  }

  body, html {
      height: 100%;
      margin: 0;
  }

  body {
      min-height: 100vh;
      height: 100%;
      font-family: sans-serif;
      font-size: 1em;
      text-align: center;
      line-height: 1.5;
      background: linear-gradient(to bottom, rgba(242,242,242,1) 0%, rgba(184,184,184,1) 60%, rgba(122,122,122,1) 100%);
      background-size: cover;
      background-attachment: fixed;
  }

  h1, h2, h3, h4, h5, h6 {
      margin: 10px 0;
  }

  h1, h2, h3, h4, h5, h6, th, button {
      font-family: 'Roboto Condensed';
  }

  @media screen and (min-width: 800px) {
      body {
          font-size: 18px;
      }
  }
</style>
