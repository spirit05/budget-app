<template>
  <div class="budget-list-wrapper">
    <ElCard :header="header">
        <template v-if="!isEmpty">
            <!-- <FilterGroup @showAll="showAll" @showIncome="onShowIncome" @showOutcome="onShowOutcome"/> -->
            
            <FilterGroup @filter="filteredListHandler"/>
            <div v-for="(item, prop) in filteredList" :key="prop">
                <BudgetListItem @deleteItem="onDeleteItem" :comment="item.comment" :value="item.value" :id="item.id" />
            </div>
        </template>
        <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
    import BudgetListItem from "@/components/BudgetListItem.vue"
    import FilterGroup from "@/components/FilterGroup.vue"

    export default {
        name: 'BudgetList',
        components: {
            FilterGroup,
            BudgetListItem,
        },
        props: {
            list: {
                type: Object,
                default: () => ({})
            }
        },
        data: () => ({
            filtered: [],
            header: "Budget List",
            emptyTitle: 'Empty List'
        }),
        computed: {
            isEmpty() {
                return !Object.keys(this.list).length
            },
            filteredList: {
                get() {
                    if (!this.filtered.length) return this.list
                    return this.filtered
                },
                set(value) {
                    this.filtered = value
                }
            }
        },
        methods: {
            onDeleteItem(id) {
                this.$emit("deleteItem", id)
            },
            filteredListHandler(sortBy) {
                if (sortBy === 'in') {
                    this.filteredList = Object.values(this.list).filter(item => item.type === "INCOME")
                    return
                } 
                if (sortBy === 'out') {
                    this.filteredList = Object.values(this.list).filter(item => item.type === "OUTCOME")
                    return
                } 
                this.filteredList = this.list
            },
        },
    }
</script>

<style scoped>
    .budget-list-wrapper {
        max-width: 500px;
        margin: auto;
    }
</style>