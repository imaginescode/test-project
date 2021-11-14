import Vue from 'vue'
import Vuex from 'vuex'
import testStore from './modules/testStore.js'
// import {modulename} from './modules/modulename'
Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    testStore
    // modulename
  }
})
