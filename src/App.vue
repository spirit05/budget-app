<template>
  <div id="app">
    <FormItem @submitForm="onSubmitForm"/>
    <TotalBalance :total="totalBalance"/>
    <BudgetList :list="list" @deleteItem="onDeleteItem"/>
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
  data: () => ({
    list: {
      j: {
        type: 'INCOME',
        comment: 'Some comment',
        value: 100,
        id: "j"
      },
      o: {
        type: 'OUTCOME',
        comment: 'Another comment',
        value: -50,
        id: "o"
      }
    }
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0)
    }
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id)
    },
    onSubmitForm(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      }
      this.$set(this.list, newObj.id, newObj)
    }
  }
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
