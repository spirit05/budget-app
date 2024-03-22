<template>
  <div class="budget-list-wrapper">
    <ElCard :header="header">
        <template v-if="!isEmpty">
            <div class="filter-group">
                <ElButton 
                    size="mini" 
                    v-for="(n, i) in filters" 
                    @click="changeFilter"
                    :key="i"
                >{{ n.name }}</ElButton>
            </div>
            <div v-for="(item, prop) in filtered" :key="prop">
                <BudgetListItem :comment="item.comment" :value="item.value" :id="item.id" />
            </div>
        </template>
        <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import BudgetListItem from "@/components/BudgetListItem.vue"

    export default {
        name: 'BudgetList',
        components: {
            BudgetListItem,
        },
        data: () => ({
            filters: [
                { name: 'All' },
                { name: 'Income'},
                { name: 'Outcome'},
            ],
            filteredBy: '',
            header: "Budget List",
            emptyTitle: 'Empty List'
        }),
        computed: {
            ...mapGetters('budgets', ['budgetList']),
            isEmpty() {
                return !Object.keys(this.budgetList).length
            },
            filtered() {
                return this.filteredBy && this.filteredBy !== 'ALL'
                    ? Object.values(this.budgetList).filter(({ type }) => type === this.filteredBy)
                    : { ...this.budgetList}
            },
        },
        methods: {
            changeFilter(e) {
                this.filteredBy = e.target.textContent.toUpperCase()
            }
        }
    }
</script>

<style scoped>
    .budget-list-wrapper {
        max-width: 500px;
        margin: auto;
    }
</style>