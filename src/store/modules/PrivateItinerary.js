import axios from "axios"
import store from ".."

export default {
    namespaced: true,
    state: {
        planList: []
    },
    mutations: {
        setPlanList(state, data) {
            state.planList = data
        }
    },
    actions: {
        async getPlanList(context) {
            const res = await axios({
                url: '/api/getPrivateItinerary',
                method: 'GET',
                parame: {
                    userId: store.state.userInfo.userId
                }
            })
            context.commit('setPlanList', res.data)
        }
    }
}