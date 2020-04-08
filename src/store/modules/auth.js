const state = {
    auth: null
  }
  
  const mutations = {
    RECEIVE_AUTH(state, auth) {
        state.auth = auth
    }
  }
  
  const actions = {
    SET_AUTH({ commit }, auth) {
        commit('RECEIVE_AUTH', auth);
    },
    RESET_AUTH({ commit }) {
        commit('RECEIVE_AUTH', null);
    },
  },
  
    getters = {
      auth: state => state.auth,
      token: state => state.auth.token,
      userName: state => state.auth.user.firstName
    }
  
  export default {
    state,
    mutations,
    actions,
    getters,
  }