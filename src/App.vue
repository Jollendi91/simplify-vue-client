<template>
  <div>
      <app-header></app-header>
      <router-view class="router-view"></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header,
    }
  }
</script>


<style>
  .router-view {
    padding-top: 100px;
  }
</style>
