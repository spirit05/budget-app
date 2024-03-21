<template>
  <div>
      <ElButton size="mini" @click="showAllHandler">All</ElButton>
      <ElButton size="mini" @click="showIncomeHandler">Income</ElButton>
      <ElButton size="mini" @click="showOutcomeHandler">Outcome</ElButton>
  </div>
</template>

<script>
export default {
    name: 'FiterGroup',
    methods: {
      filterHandler(sortBy) {
        this.$emit('filter', sortBy)
      },
      showAllHandler() {
        this.filterHandler('all')
      },
      showIncomeHandler() {
        this.filterHandler('in')
      },
      showOutcomeHandler() {
        this.filterHandler('out')
      }
    }
};
</script>

<style scoped>

</style>