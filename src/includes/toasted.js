import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted);
// Lets Register a Global Error Notification Toast.
Vue.toasted.register('error', payload => payload.msg, {
    type : 'error',
    duration: 3000,
    position: 'top-right'
})


Vue.toasted.register('success', payload => payload.msg, {
  type : 'success',
  duration: 3000,
  position: 'top-right'
})