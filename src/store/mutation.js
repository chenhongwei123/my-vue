import * as types from './mutation-types'

const mutations = {
   [types.SET_LISTS](state,lists){
       state.lists = lists
   }
}

export default mutations