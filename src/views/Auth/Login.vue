<template>
    <Content>
      <img src="@/assets/logo.png" alt="logo" />
      <form >
        <input v-model="pet.email" placeholder="Email" />
        <span class="mb-2">Error</span>
        <input type="password" v-model="pet.password" placeholder="Senha" />
        <span class="mb-2">Error</span>
        <button>Entrar</button>
      </form>
      <router-link tag="a" to="/register" class="link" >Cadastre-se</router-link>
    </Content>
</template>

<script>
import { Content } from './styles';
import http from '../../services/api';
export default {
    name: 'Login',
    components: {
      Content,
    },
    data(){
      return {
        pet: {

        },
      }
    },
    methods: {
      async login(){
        let loader = this.$loading.show();
        try{
          await http.post('/login', this.pet);
        }catch(err){
          window.console.log(err.response.data);
        }finally{
          loader.hide();
        }
      }
    }
}
</script>
<style scoped>
  .link{
    text-decoration: none;
    display: block;
    margin-top: 10px;
  }
</style>
