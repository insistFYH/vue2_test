import { nanoid } from 'nanoid'
import axios from 'axios'
export default {
    namespaced: true,
    actions: {
        getServerName(content) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    content.commit('AddPerson', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {

        AddPerson(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{
            id: 1,
            name: '张平'
        }]
    },
    getters: {
        getFirstName(state) {
            return state.personList[0].name
        }
    }
}