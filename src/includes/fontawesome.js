import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserFriends, faComments, faBell, faSortDown, faHeart, faCommentAlt, faImage} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserFriends)
library.add(faComments)
library.add(faBell)
library.add(faSortDown);
library.add(faHeart)
library.add(faCommentAlt)
library.add(faImage)

Vue.component('font-awesome-icon', FontAwesomeIcon)