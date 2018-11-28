<template>
    <div>
      <article class="dash-container">
            <section class="dash-card">
                <h2>Summary</h2>
                <section class="portfolio-data">
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
            <section class="dash-card" style="min-width: 0;">
                <h2>Budgets</h2>
                <!-- {categories} -->
            </section>
        </article > 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                router: this.$route.path
            }
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
    }

    h2 {
        color: white;
        background-color: #276A73;
        margin: 0;
        border-radius: 5px 5px 0 0;
    }

    .portfolio-data {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 15px;
    }
</style>
