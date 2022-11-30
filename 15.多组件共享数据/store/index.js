import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const actions = {
    increOdd(content, value) {
        if (content.state.sum % 2)
            content.commit("Incre", value)
    },
    increWait(content, value) {
        setTimeout(() => {
            content.commit("Incre", value)
        }, 500);
    }
}
const mutations = {
    Incre(state, value) {
        state.sum += value
    },
    Decre(state, value) {
        state.sum -= value
    },
    AddPerson(state, value) {
        state.personList.unshift(value)
    }
}
const state = {
    sum: 0,
    personList: [{
        id: 1,
        name: '张平'
    }]
}
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})