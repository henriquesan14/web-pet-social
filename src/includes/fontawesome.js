import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserFriends, faComments, faBell, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserFriends)
library.add(faComments)
library.add(faBell)
library.add(faSortDown);

Vue.component('font-awesome-icon', FontAwesomeIcon)