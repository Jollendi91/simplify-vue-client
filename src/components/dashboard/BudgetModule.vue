<template>
    <section class="budget-container">
        <div class="header-container">
            <h3>{props.category}</h3>
            <p>${(props.amount - currentTransactionsTotal).toFixed(2)} Left</p>
        </div>
        <BudgetBar
            progress={currentTransactionsTotal / props.amount}
            text={`$${currentTransactionsTotal.toFixed()} of $${props.amount}`}
            options={options}
            initialAnimate={true}
            containerStyle={containerStyle}
            containerClassName={'.progressbar'}
        />
        <font-awesome-icon class="fa" icon="angle-right"></font-awesome-icon>
    </section>
</template>

<script>
    import ProgressBar from '../ProgressBar.vue';
    export default {
        components: {
            ProgressBar
        }
    }
</script>

<style scoped lang='scss'>
    .budget-container {
        display: grid;
        grid-template-columns: 95%;
        grid-template-rows: 1fr 1fr;
        padding: 5px 10px 10px;
        border-bottom: 1px solid #ccc;
        position: relative;
    }

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    h3 {
        margin: 0;
        font-size: 1.25em;
    }

    p {
        margin: 0;
    }

    .fa {
        position: absolute;
        right: 7px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5em;
        color: #FC4A1A;
    }
</style>
