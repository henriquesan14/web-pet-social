<template>
    <Content>
      <img src="@/assets/logo.png" alt="logo" />
      <form @submit.prevent="submit">
        <input v-model="pet.email" placeholder="Email" />
        <span v-if="submitted && $v.pet.email.$invalid" class="mb-2" v-text="getError($v.pet.email)"></span>
        <input type="password" v-model="pet.password" placeholder="Senha" />
        <span v-if="submitted && $v.pet.password.$invalid" class="mb-2" v-text="getError($v.pet.password)"></span>
        <button type="submit">Entrar</button>
      </form>
      <router-link tag="a" to="/register" class="link" >Cadastre-se</router-link>
    </Content>
</template>

<script>
import { Content } from './styles';
import http from '../../services/api';
import { required, email } from "vuelidate/lib/validators";
import { validationMsgs } from '@/utils/validation_msg.js';
export default {
    name: 'Login',
    components: {
      Content,
    },
    data(){
      return {
        submitted: false,
        pet: {

        },
      }
    },
    validations(){
      return {
        pet: {
          email: { required, email },
          password: { required }
        }
      }
    },
    methods: {
      submit() {
        this.submitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        this.submitted = false;
        this.login();
      },
      async login(){
        let loader = this.$loading.show();
        try{
          const res = await http.post('/login', this.pet);
          this.$store.dispatch('SET_AUTH', res.data);
          this.$router.replace({name: 'timeline'});
        }catch(err){
          this.$toasted.global.error({msg: err.response.data.error || 'Error ao se comunicar com servidor'});
        }finally{
          loader.hide();
        }
      },
      getError(value){
        if(value){
          return validationMsgs(value);
        }
      },
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
