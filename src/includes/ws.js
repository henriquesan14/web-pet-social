import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
 

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3333/',
    options: {
      transports: ['websocket', 'polling']  // <-- here
   } 
}))