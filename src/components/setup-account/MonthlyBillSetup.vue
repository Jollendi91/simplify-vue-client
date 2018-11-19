<template>
    <section class="bill-form-container">
        <p class="description">Enter all recurring monthly bills and expenses</p>
        <MonthlyBillsForm />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th colSpan="2">Amount</th>
                </tr>
            </thead>
            <tbody>
               
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th colSpan="2"></th>
                </tr>
            </tfoot>
        </table>
    </section>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .bill-form-container {
        flex-grow: 1;
    }
</style>
