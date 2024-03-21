<template>
  <div class="total-value" :style="{ color: checkTotalColor}">Balance: {{ total }}</div>
</template>

<script>
    export default {
        name: "TotalBalance",
        props: {
            total: {
                type: Number,
                default: 0
            }
        },
        computed: {
            checkTotalColor() {
                if (this.total === 0) {
                    return 'black'
                }
                if (this.total < 0) {
                    return 'red'
                }
                return 'green'
            }
        }
    }
</script>

<style scoped>
    .total-value {
        font-size: 26px;
        text-transform: uppercase;
        padding: 20px;
        text-align: center;
    }
</style>