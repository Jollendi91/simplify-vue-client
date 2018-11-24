<template>
    <form className="add-category-form">
        <div class="inputs">
            <div className="form-input-container">
                <label htmlFor="category-name">Category</label>
                <input 
                    type="text"
                    name="category"
                    id="category-name"
                    ariaLabel="budget name"
                />
            </div>
            <div className="form-input-container">
            <label htmlFor="category-amount">Amount</label>
                <input 
                    type="number"
                    name="amount"
                    id="category-amount"
                    min="0.01"
                    :max='max'
                    step="0.01"
                    ariaLabel="budget amount"
                />
            </div>
            <button style="color: #276A73;">Add</button>
        </div >    
    </form>
</template>

<script>
    export default {
        props: {
            max: Number
        }
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
