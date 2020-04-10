import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


Vue.use(Loading, {
    color: '#1250a6',
    loader: 'bars',
    width: 60,
    height: 60
  },{
    // slots
  })