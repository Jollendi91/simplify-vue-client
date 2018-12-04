<template>
    <div>
      <article class="dash-container">
            <section class="dash-card">
                <h2>Summary</h2>
                <section class="portfolio-data">
                    <pie-chart :chartData="chartData" :options="chartOptions"></pie-chart>
                    <!-- <StyledPieChart
                        data={data} 
                        clickHandler={
                            (d) => this.setState({
                            dataDisplay:
                            `${d.data.key} Budget: $${d.value.toFixed(2)}/Month`
                            })
                        }
                    />
                    <Legend 
                        horizontal 
                        data={data} 
                        dataId={'key'} 
                        config={config} 
                        styles={customStyle}
                    /> -->
                </section>
                <!-- <GraphText>
                    {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a segment to show the value'}
                </GraphText> -->
            </section>
            <section class="dash-card">
                <h2>Budgets</h2>
                <budget-module v-for="budget in budgets" :budget="budget" :key="budget.id"></budget-module>
            </section>
        </article > 
    </div>
</template>

<script>
    import PieChart from '../components/dashboard/PieChart.vue';
    import BudgetModule from '../components/dashboard/BudgetModule.vue';

    export default {
        data() {
            return {
                router: this.$route.path,
                chartOptions: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 30,
                            fontSize: 16,
                            fontFamily: 'Cabin'
                        },
                        onClick: function(e, legendItem) {
                            return
                        }
                    },
                    tooltips: {
                        bodyFontSize: 14,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                let label = `${data.labels[tooltipItem.index]} - $${parseFloat(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]).toFixed(2)}`;

                                return label;
                            }
                        }
                    },
                    layout: {
                        padding: 20
                    }
                }
            }
        },
        computed: {
            chartData() {
               const data = {
                   datasets: [{
                       backgroundColor: ['#276A73', '#4ABDAC', '#FC4A1A', '#F7B733', '#DEDCE3', '#98df8a', '#d62728', '#ff9896', '#9467bd'],
                       data: [this.billsTotal, this.remainingAmount]
                    }],
                    labels: ['Bills', 'Remaining']
               };

               this.$store.state.user.categories.map(budget => {
                   data.datasets[0].data.unshift(parseFloat(budget.amount));
                   data.labels.unshift(budget.category);
               });

               return data;
            },
            budgets() {
                return this.$store.state.user.categories;
            },
            billsTotal() {
                return this.$store.state.user.bills.reduce((total, currentBill) => {
                    return total + parseFloat(currentBill.amount);
                }, 0);
            },
            budgetsTotal() {
                return this.$store.state.user.categories.reduce((total, currentCat) => {
                    return total + parseFloat(currentCat.amount)
                }, 0);
            },
            remainingAmount() {
                return (this.$store.state.user.monthlySalary - this.billsTotal) - this.budgetsTotal;
            }
        },
        components: {
            PieChart,
            BudgetModule
        }
    }
</script>

<style scoped lang="scss">
    .dash-container {
        width: 100%;
        max-width: 600px;
        margin: auto;
        border-radius: 5px;
        position: relative;
        top: 70px;

        @media screen and (min-width: 800px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1000px;
            padding: 0 10px;
        }
    }

    .dash-card {
        background-color: white;
        border-radius: 5px;
        margin: 10px;
        min-width: 350px;
    }

    h2 {
        color: white;
        background-color: #276A73;
        margin: 0;
        border-radius: 5px 5px 0 0;
    }

    .portfolio-data {
        width: 100%;
    }
</style>
