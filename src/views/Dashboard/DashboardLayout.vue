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
      
      <div class="profile-bar">
        <span>{{userName}}</span>
        <img src="https://statig1.akamaized.net/bancodeimagens/71/n7/7f/71n77fjiwo437zctuazsc6ob0.jpg" alt="avatar">
        <font-awesome-icon icon="sort-down" />
      </div>
    </Header>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Header } from "./styles";
export default {
  name: "DashboardLayout",
  components: {
    Header
  },
  computed: mapGetters(['userName'])
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