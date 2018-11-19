<template>
    <form className="add-bill-form">
        <div class="inputs">
            <div className="form-input-container">
                <label>Bill</label>
                <input 
                    type="text"
                    name="bill"
                    id="bill"
                    ariaLabel="bill name"
                />
            </div>
            <div className="form-input-container">
                <label>Amount</label>
                <input 
                    type="number"
                    name="amount"
                    id="amount"
                    step="0.01"
                    min="0.01"
                    ariaLabel="bill amount"
                />
            </div>
            <button>Add</button>
        </div>
</form>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .inputs {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        max-width: 400px;
        margin: 15px auto;
        padding-bottom: 10px;

        label {
            font-size: 1.1em;
        }

        input {
            margin: 0 5px;
        }
    }
</style>
