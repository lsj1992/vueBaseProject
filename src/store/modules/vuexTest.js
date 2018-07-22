import { getData } from "@/api/testApi";
const vuexTest = {
  namespaced: true,
  state: {
    testState: '测试',
    testAge: 18,
    msgData: {},
    testComputed: '通过computed中获取该值'
  },
  getters: {
    getTestState: state => state.testState,
    getTestAge: state => {
      return state.testAge * 2
    },
    getMsgData: state => {
      return state.msgData
    }
  },
  mutations: {
    set_test_state: (state, params) => {
      state.testState = params.testState
    },
    change_test_age: (state, newAge) => {
      state.testAge = newAge + 2
    },
    get_ajax_data: (state, newData) => {
      state.msgData = newData
    }
  },
  actions: {
    setTestState({ commit }, params) {
      commit('set_test_state', params)
    },
    changeTestAge({ commit }, newAge) {
      commit('change_test_age', newAge)
    },
    getAjaxData({ commit }, params) {
      return new Promise((resolve, reject) => {
        getData(params).then(response => {
          const data = response.data
          commit('get_ajax_data', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default vuexTest
