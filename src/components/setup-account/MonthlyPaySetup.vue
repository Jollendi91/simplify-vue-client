<template>
    <section class="monthly-pay-container">
        <form class="monthly-pay-form">
            <label for="monthly-salary">What is your monthly take home pay?</label>
            <input
                type="number"
                id="monthly-salary"
                step='0.01'
                min="0.01"
                ariaLabel="What is your monthly take home pay?"
            />
        </form>
    </section>
</template>

<script>
    export default {
        props: {
            updateStep: Function
        }
    }
</script>

<style scoped lang="scss">
    
</style>


