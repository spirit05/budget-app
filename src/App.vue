<template>
  <div id="app">
    <FormItem />
    <TotalBalance />
    <BudgetList />
  </div>
</template>

<script>
import TotalBalance from '@/components/TotalBalance'
import BudgetList from '@/components/BudgetList'
import FormItem from '@/components/Form'

export default {
  name: 'App',
  components: {
    FormItem,
    TotalBalance,
    BudgetList
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
