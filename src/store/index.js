import Vue from "vue";
import Vuex from "vuex";
import auth from './modules/auth';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: '_localUser',
  storage: window.localStorage,
  reducer: (state) => ({auth: state.auth})
})

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [vuexPersist.plugin]
});
