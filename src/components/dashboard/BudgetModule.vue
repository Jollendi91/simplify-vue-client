<template>
    <section class="budget-container">
        <div class="header-container">
            <h3>{{budget.category}}</h3>
            <p>${{(parseFloat(budget.amount) - transTotal).toFixed(2)}} Left</p>
        </div>
        <progress-bar :progress="progress" :info="{spent: transTotal, total: parseFloat(budget.amount)}"></progress-bar>
        <font-awesome-icon class="fa" icon="angle-right"></font-awesome-icon>
    </section>
</template>

<script>
    import ProgressBar from '../ProgressBar.vue';

    export default {
        props:{
            budget: Object
        },
        computed: {
            transTotal() {
                return this.budget.transactions.reduce((total, currentTrans) => {
                    return total + parseFloat(currentTrans.amount)
                }, 0);
            },
            progress() {
                return parseFloat((this.transTotal / parseFloat(this.budget.amount) * 100).toFixed(2));
            }
        },
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
