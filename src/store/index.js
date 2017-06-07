import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// const actions = {
//   maskOnOrOff({commit}){
    
//   }
// }
// const mutations = {
//   maskchange(state) {
    
//   },
//   change(state,index) {
     
//   }
// }
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})