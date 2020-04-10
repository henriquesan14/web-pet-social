<template>
  <div class="dashboard-layout">
    <Header>
      <div class="search-bar">
        <img src="../../assets/logo.png" alt="">
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
          <span>{{capitalization(userName)}}</span>
          <img src="https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png" alt="avatar">
          <font-awesome-icon icon="sort-down" />
        </div>

        <div class="user-dropdown-content">
          <router-link to="/dashboard/usuarios">
            <i class="fa fa-cogs"></i>Perfil
          </router-link>
          <a @click.prevent="logout">
            <i class="fa fa-sign-out"></i>Sair
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
  computed: mapGetters(['userName']),
  methods: {
    logout(){
      this.$store.dispatch('RESET_AUTH');
      this.$router.replace({ name: 'login'});
    },
    capitalization(value){
      if(value){
        return value.substring(0,1).toUpperCase().concat(value.substring(1));
      }
    }
  }
};
</script>

<style>
.dashboard-layout {
  display: grid;
  grid-template-rows: 55px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content";
}
</style>