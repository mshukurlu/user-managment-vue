import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import state from './state'

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state
})