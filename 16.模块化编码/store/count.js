export default {
    namespaced: true,
    actions: {
        increOdd(content, value) {
            if (content.state.sum % 2)
                content.commit("Incre", value)
        },
        increWait(content, value) {
            setTimeout(() => {
                content.commit("Incre", value)
            }, 500);
        }
    },
    mutations: {
        Incre(state, value) {
            state.sum += value
        },
        Decre(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}