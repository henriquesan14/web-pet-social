<template>
  <div class="dashboard-layout">
    <Header>
      <div class="search-bar">
        <img @click="$router.push({name: 'timeline'});" src="../../assets/logo.png" alt="">
        <input type="text" placeholder="Pesquise aqui...">
        <ul>
          <li>
            <font-awesome-icon icon="user-friends" />
          </li>
          <li>
            <font-awesome-icon icon="comments" />
          </li>
          <li>
            <font-awesome-icon icon="bell" />
          </li>
        </ul>
      </div>
      
      <div class="user-dropdown">
        <div class="user-button">
          <span >{{capitalization(userName)}}</span>
          <img
          :src="userAvatar" alt="avatar">
          <font-awesome-icon icon="sort-down" />
        </div>

        <div class="user-dropdown-content">
          <router-link to="/profile">
            <font-awesome-icon icon="user"></font-awesome-icon>
            <span>Perfil</span>
          </router-link>
          <router-link to="/updatepassword">
            <font-awesome-icon icon="cogs"></font-awesome-icon>
            <span>Atualizar senha</span>
          </router-link>
          <a @click.prevent="logout">
            <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
            <span>Sair</span>
          </a>
        </div>

      </div>
    </Header>
    <Content>
      <router-view></router-view>
    </Content>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Header, Content } from "./styles";
export default {
  name: "DashboardLayout",
  components: {
    Header,
    Content
  },
  computed: mapGetters(['auth', 'userAvatar', 'userName']),
  methods: {
    logout(){
      this.$store.dispatch('RESET_AUTH');
      this.$router.replace({ name: 'login'});
    },
    capitalization(value){
      if(value){
        return value.substring(0,1).toUpperCase().concat(value.substring(1));
      }
    },
    getAvatar(){
      this.auth.avatar ? this.auth.avatar.path : '';
    }
  }
};
</script>

<style>
.dashboard-layout {
  display: grid;
  height: 100vh;
  grid-template-rows: 55px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content";
}
</style>