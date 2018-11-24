<template>
    <tr>
        <td>{{ budget.category }}</td>
        <td>${{ parseFloat(budget.amount).toFixed(2) }}</td>
        <td class="percentage">{{Math.round( parseFloat(budget.amount) / (salary - billTotal) * 10000)/100}}%</td>
        <td class="edit-buttons">
            <button 
                aria-label="edit budget" 
                class="edit-button icon-btn"
            >
                <font-awesome-icon class="fa" :icon="['far', 'edit']" style='color: #4ABDAC;'></font-awesome-icon>
            </button>
            <button 
                aria-label="delete budget" 
                class="delete-button icon-btn"
                >
                <font-awesome-icon class="fa" :icon="['far', 'trash-alt']" style='color: #FC4A1A;'></font-awesome-icon>
            </button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: {
            budget: Object
        },
        computed: {
            salary() {
                return this.$store.state.user.monthlySalary;
            },
            billTotal() {
                return this.$store.state.user.bills.reduce((total, currentBill) => total + parseFloat(currentBill.amount), 0);
            }
        }
    }
</script>

<style scoped lang='scss'>
    td {
        border-top: 0;
        border-bottom: 1px solid #ccc;
        text-align: left;
        padding: 4px 12px;
        width: 33%;
        font-weight: normal;
        padding: 6px 10px;

        &.percentage {
            min-width: 20%;
        }

        &.edit-buttons {
            min-width: 20%;
        }
    }

    button.icon-btn {
        border: none;
        padding: 2px;
        background-color: transparent;
    }

    .fa {
        margin: 0 8px;
        cursor: pointer;
    }
</style>
