<template>
    <div class="auth-layout">
        <zoom-center-transition
            :duration="pageTransitionDuration"
            mode="out-in"
          >
        <router-view></router-view>
        </zoom-center-transition>
    </div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions';
export default {
    name: 'AuthLayout',
    components: {
        ZoomCenterTransition
    },
    data(){
        return {
            pageTransitionDuration: 200,
        }
    }
}
</script>

<style>
.auth-layout{
    height: 100vh;
    background: linear-gradient(-90deg, #1250a6, #1250a6);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>