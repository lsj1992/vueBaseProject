import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import vuexTest from './modules/vuexTest'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    vuexTest
  }
})

export default store
