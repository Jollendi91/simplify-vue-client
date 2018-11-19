<template>
    <section class="bill-form-container">
        <p class="description">Enter all recurring monthly bills and expenses</p>
        <bill-form></bill-form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th colSpan="2">Amount</th>
                </tr>
            </thead>
            <tbody>
               <bill-row v-for="bill in bills" :bill="bill" :key="bill.id"></bill-row>
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th colSpan="2">{{ billsTotal.toFixed(2) }}</th>
                </tr>
            </tfoot>
        </table>
    </section>
</template>

<script>
    import BillForm from './BillForm.vue';
    import BillRow from './BillRow.vue';

    export default {
        computed: {
            bills() {
                return this.$store.state.user.bills;
            },
            billsTotal() {
              return  this.bills.reduce((total, currentBill) => {
                    return total + parseFloat(currentBill.amount)
                  }, 0);
            }
        },
        components: {
            BillForm,
            BillRow
        }
    }
</script>

<style scoped lang="scss">
    .bill-form-container {
        flex-grow: 1;
    }
</style>
