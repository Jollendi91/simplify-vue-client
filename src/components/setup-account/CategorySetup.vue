<template>
    <section class="cat-form-container">
        <p class="description">Set up some budgets that you would like to track, such as spending, savings, or debts.</p>
        <div class="progress-container">
            <p class="amount-remaining">${{ remainingAmount.toFixed(2)}} Left</p>
            <progress-bar :progress="progress" :info="{
                total: budgetsTotal,
                remainingTotal: salary - billsTotal}"></progress-bar>
        </div>
        <category-form :max="remainingAmount.toFixed(2)"></category-form>
        <table>
            <colgroup>
                <col>
                <col>
                <col class="percent">
                <col class="btns">
            </colgroup>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <category-row v-for="budget in budgets" :key="budget.id" :budget="budget"></category-row>
            </tbody>
        </table>
    </section>
</template>

<script>
    import CategoryForm from './CategoryForm.vue';
    import CategoryRow from './CatRow.vue';
    import ProgressBar from '../ProgressBar.vue';

    export default {
        computed: {
            salary() {
                return this.$store.state.user.monthlySalary;
            },
            budgets() {
                return this.$store.state.user.categories;
            },
            budgetsTotal() {
                return this.budgets.reduce((total, currentCat) => {
                    return total + parseFloat(currentCat.amount)
                }, 0);
            },
            billsTotal() {
                return this.$store.state.user.bills.reduce((total, currentBill) => {
                    return total + parseFloat(currentBill.amount);
                }, 0);
            },
            remainingAmount() {
                return (this.salary - this.billsTotal) - this.budgetsTotal;
            },
            progress() {
                return parseFloat((this.budgetsTotal / (this.salary - this.billsTotal) * 100).toFixed(2));
            }
        },
        components: {
            CategoryForm,
            CategoryRow,
            ProgressBar
        }
    }
</script>

<style scoped lang='scss'>
    .cat-form-container {
        flex-grow: 1;
    }

    .progress-container {
        margin: 25px 0;
    }

    .amount-remaining {
        width: 80%;
        text-align: right;
        margin: auto;
    }

    th {
        width: 24%;
    }

    .percent, .btns {
        width: 20%;
    }
</style>
