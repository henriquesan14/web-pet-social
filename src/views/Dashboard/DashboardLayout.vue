<template>
  <div class="dashboard-layout">
    <Header>
      <div class="search-bar">
        <img src="../../assets/logo.png" alt="">
        <input type="text" placeholder="Pesquise aqui...">
        <ul>
          <li>
            Solicitações
          </li>
          <li>
            Amizades
          </li>
          <li>
            Conversas
          </li>
        </ul>
      </div>
      
      <div class="profile-bar">
        <span>Garfield</span>
        <img src="https://statig1.akamaized.net/bancodeimagens/71/n7/7f/71n77fjiwo437zctuazsc6ob0.jpg" alt="avatar">
      </div>
    </Header>
    <router-view></router-view>
  </div>
</template>

<script>
import { Header } from "./styles";
export default {
  name: "DashboardLayout",
  components: {
    Header
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