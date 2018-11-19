<template>
    <main class="landing-container">
            <header class="hero-container">
                <div>
                    <h2 class="header"><span><font-awesome-icon class="fa" style="color: #4ABDAC; fontSize: 1.8em;" icon="dollar-sign"/></span>implify</h2>
                    <h2 class="header">your</h2>
                    <h2 class="header">Finances</h2>
                </div>
            </header>
             <section class="main-section">
                <section class="landing-section">
                    <header>
                        <font-awesome-icon class="fa" style="color: #276A73;" icon="money-bill-wave"/>
                        <h2>Budgeting Simplified</h2>
                    </header>
                    <p>Simplify focuses on one fundamental idea: to know how much money you have, and where it is going. Knowing is the first step in taking control of your finances</p>
                </section>
                <section class="landing-section">
                    <header>
                        <font-awesome-icon class="fa" style="color: #F7B733;" icon="chart-line" />
                        <h2>Track your Progress</h2>
                    </header>
                    <p>Spent too much on groceries? Like to cut back on eating out? Simplify can help. Setup flexible budgets so you know exactly how much you are spending in each category each month</p>
                </section>
                <section class="landing-section">
                    <header>
                        <font-awesome-icon class="fa" style="color: #FC4A1A" icon="calculator"/>
                        <h2>Flexible for You</h2>
                    </header>
                    <p>Simplify was inspired by a Zero-Based Budgeting system. While this form of budgeting is extremely helpful, it may not be for everyone. Simplify is flexible enough to be used how you see fit</p>
                </section>
            </section>
            <section class="steps-container">
                <h1>As Simple as 1, 2, 3...</h1>
                <ol>
                    <li class="step-1 step">
                        <div>
                            <h2>Take Home Pay</h2>
                            <p>Enter the amount of money you take home after taxes each month. This gives you your starting point.</p>
                        </div>
                    </li>
                    <li class="step-2 step">
                        <div>
                            <h2>Monthly Bills</h2>
                            <p>Add all of your monthly bills and expenses. This gives you an overview of how much money you have going out and helps us figure out how much you have left to work with.</p>
                        </div>
                    </li>
                    <li class="step-3 step">
                        <div>
                            <h2>Create Budgets</h2>
                            <p>Creat budgets to track your money in areas of your choosing. These can be as general or as specific as you would like. When money is transfered or a purchase is made, enter the transaction into your budget.</p>
                        </div>
                    </li>
                </ol>
            </section>
            <footer>
                <p>2018 &copy; Created by Joshua Ollendick</p>
            </footer>
        </main>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .landing-container {
        background-color: white;
        position: relative;
        top: 66px;
    }

    .hero-container {
        padding: 40px 15px;
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 90%, rgba(255,255,255,1) 100%), linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%), url('../assets/piggy-bank-compressor.jpg');
        background-size: cover;
        height: calc(100vh - 66px);
        background-position: center 75%;
        background-repeat: no-repeat;
        position: relative;

        @media screen and (min-width: 545px) {
            padding: 15px;
        }
    }

    .header {
        color: white;
        text-align: left;
        font-size: 4.5em;
        text-transform: uppercase;
        display: flex;
        align-items: flex-end;

        @media screen and (min-width: 545px) {
            font-size: 5.5em;
            margin-left: 14%;
        }
    }

    .main-section {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 1200px;
        margin: auto;

        @media screen and (min-width: 800px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    .landing-section, .step {
        min-height: 200px;
        max-width: 400px;
        padding: 40px 20px;  
        margin: auto;

        @media screen and (min-width: 800px) {
            margin: 0 15px;
        }
    }

    .steps-container {
        background: linear-gradient(to top, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 90%,rgba(255,255,255,1) 100%), linear-gradient(to top, rgba(0,0,0,0.85) 0%,rgba(0,0,0,.25) 100%), url('../assets/simplify-compressor.jpg');
        background-size: cover;
        background-position: center center;
    }

    ol {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 1200px;
        margin: auto;
        padding: 0;
        counter-reset: counter;
        list-style: none;

        li {
            counter-increment: counter;
            position: relative;
        }

        li:nth-child(1) {
            color: rgba(39,106,115,0.5);
        }

        li:nth-child(2) {
            color: rgba(252, 74, 26, 0.5);
        }

        li:nth-child(3) {
            
            color: rgba(247, 183, 51, 0.5);
        }

        li::before {
            content: counter(counter);
            font-size: 12em;
            font-weight: bold;
            position: absolute;
            left: 13%;
            top: -93px;
            text-align: center;
            z-index: 0;
        }

        h2, p {
            position: relative;
            color: #DEDCE3;
        }

        @media screen and (min-width: 800px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: repeat(7, 75px);

            h1 {
                grid-column: 1 / 4;
            }
            .step-1 {
                grid-column: 1;
                grid-row: 2 / 5;
            }

            .step-2 {
                grid-column: 2;
                grid-row: 3 / 6;
            }

            .step-3 {
                grid-column: 3;
                grid-row: 4 / 7
            }

        }
    }

    .fa {
        font-size: 2.25em;
    }

    h1 {
        font-size: 2em;
    }
</style>
