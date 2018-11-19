<template>
    <article class="setup-step">
        <h1>Account Setup - Salary</h1>
        <component :is="currentStep"></component>
        <div class="btn-container">
            <button 
                v-if="setupStep !== 1" 
                class="btn-primary back-btn" 
                @click="updateStep(-1)">
                    Back</button>
            <button 
                v-if="setupStep !== 3" 
                class='next-btn' 
                @click="updateStep(1)">
                    Next</button>
            <p>Step {{ setupStep }} / 3</p>
        </div>
    </article>
</template>

<script>
    import MonthlyPaySetup from '../components/setup-account/MonthlyPaySetup.vue';
    import MonthlyBillSetup from '../components/setup-account/MonthlyBillSetup.vue';

    export default {
        data() {
            return {
                setupStep: 1,
            }
        },
        computed: {
            currentStep() {
                if (this.setupStep === 1) {
                    return 'pay-setup';
                } else if (this.setupStep === 2) {
                    return 'bill-setup';
                } else if (this.setupStep === 3) {
                    return 'budget-setup';
                }
            }
        },
        methods: {
            updateStep(step) {
                this.setupStep += step;
            }
        },
        components: {
            paySetup: MonthlyPaySetup,
            billSetup: MonthlyBillSetup
        }
    }
</script>

<style scoped lang="scss">
    .setup-step {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 600px;
        min-height: calc(100vh - 66px);
        margin: auto;
        padding: 0;
        border-radius: 5px;
        position: relative;
        top: 66px;
        background-color: white;

        @media screen and (min-width: 800px) {
            min-height: 600px;
            margin: 15px auto;
        }
    }

    h1 {
        font-size: 1.5em;
        color: white;
        margin: 0;
        padding: .3em 0;
        background: #276A73;
    }

    /deep/ label {
        font-size: 1.3em;
        padding: 10px;
    }

    /deep/ input {
        display: block;
        max-width: 300px;
        text-align: center;
        margin: auto;
        margin-top: 5px;
        padding: 3px;
        border: 0;
        border-bottom: 1px solid #aaa;
        font-size: 18px;
        
    }

    /deep/ button {
        padding: .2em 2em;
        font-size: 1em;
        margin: .75em 5px 0;
        background-color: white;
        border: 2px solid#276A73;
        color: #276A73;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-primary {
        background-color: #276A73;
        color: white;
    }

    /deep/ .description {
        font-size: 1.1em;
        margin: 10px 0;
        padding: 0 10px;
    }

    /deep/ table {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0;
        border: 1px solid #ccc;

        th {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            text-align: left;
            padding: 4px 12px;
            width: 33%;
        }

        tr:nth-child(even) {
        background-color: #eee;
        }

        tr:nth-child(odd) {
            background-color: #ddd;
        }
    }
 
</style>
