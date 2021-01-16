import Vue from 'vue'
import Vuex from 'vuex'

import state from './state/state'
import apiRequests from './actions/apiRequests'
import commonActions from './actions/commonActions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

Vue.use(Vuex);

const actions = {...commonActions, ...apiRequests}

let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});

export default store;

