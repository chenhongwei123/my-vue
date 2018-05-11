import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import start from "./state"
import mutations from "./mutation"
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
   actions,
   getters,
   start,
   mutations,
   strict: debug,
   plugins: debug ? [createLogger()] : [] 
})