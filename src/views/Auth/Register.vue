<template>
    <Content>
      <img src="@/assets/logo.png" alt="logo" />
      <form>
        <input v-model="pet.firstName" placeholder="Nome" />
        <input v-model="pet.email" placeholder="Email" />
        <input type="password" v-model="pet.password" placeholder="Senha" />
        <input type="password" v-model="pet.confirmPassword" placeholder="Confirmação de senha">
        <button>Cadastrar</button>
      </form>
      <router-link tag="a" to="/" class="link" >Já possui uma conta? Entre agora</router-link>
    </Content>
</template>

<script>
import { Content } from './styles';
export default {
    name: 'Register',
    components: {
      Content,
    },
    data(){
      return {
        pet: {

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