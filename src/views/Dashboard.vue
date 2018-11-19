<template>
    <div>
      <h1>Dashboard component</h1>
        <p>{{ $route.path }}</p>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
                router: this.$route.path
            }
        }
    }
</script>

<style>

</style>
