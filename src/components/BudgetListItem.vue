<template>
    <div class="list-item" >
        <i :class="chooseTopBottomIcon" :style="{ color: chooseColor }"></i>
        <span class="budget-comment">{{ comment }}</span>
        <span class="budget-value" :style="{ color: chooseColor }">{{ value }}</span>
        <ElButton type="danger" size="mini" @click="onDeleteItem(id)">Delete</ElButton>
    </div>
</template>

<script>
    export default {
        name: "BudgetListItem",
        props: {
            comment: {
                type: String,
                default: ''
            },
            value: {
                type: Number,
                default: 0
            },
            id: {
                type: String,
                required: true
            }
        },
        data: () => ({
            iconTop: 'el-icon-top',
            iconBottom: 'el-icon-bottom',
            activeColor: "green"
        }),
        computed: {
            chooseTopBottomIcon() {
                if (this.value > 0) {
                    return this.iconTop
                }
                return this.iconBottom
            },
            chooseColor() {
                if (this.value > 0) {
                    return 'green'
                }
                return 'red'
            }
        },
        methods: {
            onDeleteItem(id) {
                this.$emit("deleteItem", id)
            }
        }
    }
</script>

<style scoped>
    .list-item {
        display: flex;
        align-items: center;
        padding: 10px 15px;
    }
    .budget-value {
        font-weight: bold;
        margin-left: auto;
        margin-right: 20px;
    }
</style>