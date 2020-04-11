import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTimes,
    faUserFriends,
    faComments,
    faBell, faSortDown,
    faHeart,
    faCommentAlt,
    faImage,
    faUser,
    faSignOutAlt,
    faCogs,
    faMars,
    faVenus,
    faUserPlus,
    faUserTimes,
    faUserCheck
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserFriends)
library.add(faComments)
library.add(faBell)
library.add(faSortDown);
library.add(faHeart)
library.add(faCommentAlt)
library.add(faImage)
library.add(faUser)
library.add(faSignOutAlt)
library.add(faCogs)
library.add(faTimes)
library.add(faMars)
library.add(faVenus)
library.add(faUserPlus)
library.add(faUserTimes)
library.add(faUserCheck)



Vue.component('font-awesome-icon', FontAwesomeIcon)