import store from '../../store/index';

const isLogged = () => {
    if (store.getters.auth && store.getters.token) {
        return true;
    }
    return false;
}

export const authGuard = (to, from, next) => {
    if (isLogged()) {
      next('/timeline')
      return;
    }
    next()
}

export const noAuthGuard = (to, from, next) => {
    if (isLogged()) {
      next()
      return;
    }
    next('/')
}