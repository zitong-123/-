import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },         
  getters
})     //vuex模块化  app  折叠展开  setting logo头部 user 用户信息  getting 快速访问

export default store
