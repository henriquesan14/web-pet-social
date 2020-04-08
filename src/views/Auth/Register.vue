<template>
    <Content>
      <img src="@/assets/logo.png" alt="logo" />
      <form @submit.prevent="submit">
        <input v-model="pet.firstName" placeholder="Nome do pet" />
        <span v-if="submitted && $v.pet.firstName.$invalid" class="mb-2" v-text="getError($v.pet.firstName)"></span>
        <input v-model="pet.tipo" placeholder="Tipo de pet ex: cachorro, gato..." />
        <span v-if="submitted && $v.pet.tipo.$invalid" class="mb-2" v-text="getError($v.pet.tipo)"></span>
        <input v-model="pet.email" placeholder="Email" />
        <span v-if="submitted && $v.pet.email.$invalid" class="mb-2" v-text="getError($v.pet.email)"></span>
        <input type="password" v-model="pet.password" placeholder="Senha" />
        <span v-if="submitted && $v.pet.password.$invalid" class="mb-2" v-text="getError($v.pet.password)"></span>
        <input type="password" v-model="pet.confirmPassword" placeholder="Confirmação de senha">
        <span v-if="submitted && $v.pet.confirmPassword.$invalid" class="mb-2" v-text="getError($v.pet.confirmPassword)"></span>
        <button type="submit">Cadastrar</button>
      </form>
      <router-link tag="a" to="/" class="link" >Já possui uma conta? Entre agora</router-link>
    </Content>
</template>

<script>
import { Content } from './styles';
import http from '../../services/api';
import { required, email, sameAs } from "vuelidate/lib/validators";
import { validationMsgs } from '@/utils/validation_msg.js';
export default {
    name: 'Register',
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
          firstName: { required },
          email: { required, email },
          password: { required },
          tipo: { required },
          confirmPassword: { required, sameAsPassword: sameAs("password") }
        }
      }
    },
    methods: {
      getError(value){
        if(value){
          return validationMsgs(value);
        }
      },
      submit() {
        this.submitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        this.submitted = false;
        this.register();
      },
      async register(){
        let loader = this.$loading.show();
        try{
          await http.post('/pets', this.pet);
          this.$toasted.global.success({msg: 'Pet cadastrado com sucesso'});
          this.$router.push({name: 'login'});
        }catch(err){
          this.$toasted.global.error({msg: err.response.data.error || 'Error ao se comunicar com servidor'});
        }finally{
          loader.hide();
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