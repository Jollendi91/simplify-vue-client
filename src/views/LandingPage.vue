<template>
    <main class="landing-container">
            <header class="hero-container">
                <div>
                    <h2><span><StyledIcon fontSize="1.8em" color="#4ABDAC" icon="dollar-sign"/></span>implify</h2>
                    <h2>your</h2>
                    <h2>Finances</h2>
                </div>
                <div class="learn-more">
                    <p>Learn more</p>
                    <FontAwesomeIcon icon="chevron-down"/>
                </div>
            </header>
             <section class="main-section">
                <section class="landing-section">
                    <header>
                        <StyledIcon color="#276A73" icon="money-bill-wave" />
                        <h2>Budgeting Simplified</h2>
                    </header>
                    <p>Simplify focuses on one fundamental idea: to know how much money you have, and where it is going. Knowing is the first step in taking control of your finances</p>
                </section>
                <section class="landing-section">
                    <header>
                        <StyledIcon color="#F7B733" icon="chart-line" />
                        <h2>Track your Progress</h2>
                    </header>
                    <p>Spent too much on groceries? Like to cut back on eating out? Simplify can help. Setup flexible budgets so you know exactly how much you are spending in each category each month</p>
                </section>
                <section class="landing-section">
                    <header>
                        <StyledIcon color="#FC4A1A" icon="calculator"/>
                        <h2>Flexible for You</h2>
                    </header>
                    <p>Simplify was inspired by a Zero-Based Budgeting system. While this form of budgeting is extremely helpful, it may not be for everyone. Simplify is flexible enough to be used how you see fit</p>
                </section>
            </section>
            <section class="steps-section">
                <h1>As Simple as 1, 2, 3...</h1>
                <ol>
                    <li className="step-1 step">
                        <div>
                            <h2>Take Home Pay</h2>
                            <p>Enter the amount of money you take home after taxes each month. This gives you your starting point.</p>
                        </div>
                    </li>
                    <li className="step-2 step">
                        <div>
                            <h2>Monthly Bills</h2>
                            <p>Add all of your monthly bills and expenses. This gives you an overview of how much money you have going out and helps us figure out how much you have left to work with.</p>
                        </div>
                    </li>
                    <li className="step-3 step">
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

<style>

</style>
