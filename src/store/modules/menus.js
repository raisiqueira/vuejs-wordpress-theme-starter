import api from '../../api'
import * as type from '../mutation-types'
import { STORE_FETCHED_CATEGORIES } from '../mutation-types';

// initial state
const state = {
    menu: []
}


// Actions
const actions = {
    getMenu ({ commit }) {
        api.getMenu(menu => {
            commit(STORE_FETCHED_MENUS, { menu })
        })
    }
}

const mutations = {
    [types.STORE_FETCHED_MENUS] (state, { menu }) {
        state.menu = menu
      },
}

export default {
    state,
    actions,
    mutations
}