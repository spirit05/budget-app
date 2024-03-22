import Vue from 'vue';

const budgetStore = {
    namespaced: true,
    state: {
        list: {}
    },
    getters: {
        budgetList({ list }) {
            return { ...list }
        },
        totalBalance({ list }) {
            return Object.values(list).reduce((acc, { value }) => acc + value, 0)
        }
    },
    mutations: {
        DELETE_ITEM({ list }, id) {
            Vue.delete(list, id);
        },
        ADD_ITEM({ list }, newItem) {
            Vue.set(list, newItem.id, newItem)
        }
    },
    actions: {
        deleteItem({ commit }, id) {
            commit('DELETE_ITEM', id)
        },
        addItem({ commit }, item) {
            const newItem = {
                ...item,
                id: String(Math.random())
            }
            commit('ADD_ITEM', newItem)
        }
    },
}

export default budgetStore;