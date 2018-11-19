<template>
    <tr>
        <template>
            <td>{{ bill.bill }}</td>
            <td>{{parseFloat(bill.amount).toFixed(2)}}</td>
            <td class="edit-buttons">
                <button aria-label="edit bill" class="icon-btn edit-button">
                    <font-awesome-icon class="fa" :icon="['far', 'edit']" style='color: #4ABDAC;'/>
                </button>
                <button aria-label="delete bill" class="icon-btn  delete-button">
                    <font-awesome-icon class="fa" :icon="['far','trash-alt']" style='color: #FC4A1A;'></font-awesome-icon>
                </button>
            </td>
        </template>
    </tr>  
</template>

<script>
    export default {
        props: ['bill']
    }
</script>

<style scoped lang="scss">
    td {
        border-top: 0;
        border-bottom: 1px solid #ccc;
        text-align: left;
        padding: 4px 12px;
        width: 33%;
        font-weight: normal;
        padding: 6px 10px;

        &.percentage {
            width: 20%;
        }

        &.edit-buttons {
            width: 20%;
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
        font-size: 1.1em;
    }
</style>
