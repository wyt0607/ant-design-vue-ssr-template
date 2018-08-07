import axios from 'axios'

export default {
    state: {
        data: null
    },
    actions: {
        FETCH_DATA({commit}) {
            /*axios.get(process.env.SERVER_URL + '/menus/all').then(response => {
                let {data} = response.data
                commit("SET_DATA", data)
            })*/
        }
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data
        }
    }
}