const state = {
    auth: null
  }
  
  const mutations = {
    RECEIVE_AUTH(state, auth) {
        state.auth = auth
    },
    RECEIVE_USER(state, user) {
      state.auth.user = user
    }
  }
  
  const actions = {
    SET_AUTH({ commit }, auth) {
        commit('RECEIVE_AUTH', auth);
    },
    SET_USER({ commit }, user){
      commit('RECEIVE_USER', user)
    },
    RESET_AUTH({ commit }) {
        commit('RECEIVE_AUTH', null);
    },
  },
  
    getters = {
      auth: state => state.auth,
      token: state => state.auth.token,
      getUser: state => state.auth.user,
      userName: state => !state.auth || !state.auth.user ? '' :  state.auth.user.firstName,
      userAvatar: state => state.auth && state.auth.user.avatar ? state.auth.user.avatar.path : 'https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png'
    }
  
  export default {
    state,
    mutations,
    actions,
    getters,
  }