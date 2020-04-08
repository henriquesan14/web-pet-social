<template>
  <div class="dashboard-layout">
    <Header></Header>
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