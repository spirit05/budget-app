<template>
  <div class="total-value" :style="{ color: checkTotalColor}">Balance: {{ totalBalance }}</div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "TotalBalance",
        computed: {
            ...mapGetters('budgets', ['totalBalance']),
            checkTotalColor() {
                if (this.totalBalance === 0) {
                    return 'black'
                }
                if (this.totalBalance < 0) {
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