<template>
    <div class="progress-bar">
        <div class="bar-trail">
            <p class="bar-text">${{ info.total.toFixed(2) }} of ${{ (info.remainingTotal).toFixed(2) }}</p>
            <div class="bar-progress" :style="{width: progress + '%'}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            progress: Number,
            info: Object
        }
    }
</script>

<style scoped lang="scss">
    .progress-bar {
        width: 80%;
        height: 30px;
        margin: auto;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
    }


    .bar-trail {
        width: 100%;
        height: 100%;
        background-color: #DEDCE3;
    }

    .bar-text {
        margin: 0;
        line-height: 30px;
        font-weight: bold;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .bar-progress {
        background-color: #F7B733;
        height: 100%;
        transition: width 1s ease;
    }
</style>
