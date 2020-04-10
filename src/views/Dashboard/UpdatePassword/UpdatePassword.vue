<template>
  <ContentProfile>
    <form @submit.prevent="submit">
      <h3>Atualização de senha</h3>
      <input v-model="pet.oldPassword" type="password" placeholder="Senha atual" />
      <span
        v-if="submitted && $v.pet.oldPassword.$invalid"
        class="mb-2"
        v-text="getError($v.pet.oldPassword)"
      ></span>
      <input v-model="pet.password" type="password" placeholder="Nova senha" />
      <span
        v-if="submitted && $v.pet.password.$invalid"
        class="mb-2"
        v-text="getError($v.pet.password)"
      ></span>
      <input v-model="pet.confirmPassword" type="password" placeholder="Confirmação de senha" />
      <span
        v-if="submitted && $v.pet.confirmPassword.$invalid"
        class="mb-2"
        v-text="getError($v.pet.confirmPassword)"
      ></span>
      <button type="submit">Atualizar senha</button>
    </form>
  </ContentProfile>
</template>

<script>
import { ContentProfile } from "../Profile/styles";
import { required, sameAs } from "vuelidate/lib/validators";
import { validationMsgs } from "@/utils/validation_msg.js";
import http from "@/services/api";
import { mapGetters } from 'vuex';
export default {
  name: "UpdatePassword",
  components: {
    ContentProfile
  },
  computed: mapGetters(['auth']),
  data() {
    return {
      submitted: false,
      pet: {}
    };
  },
  validations() {
    return {
      pet: {
        oldPassword: { required },
        password: { required },
        confirmPassword: { required, sameAsPassword: sameAs("password") }
      }
    };
  },
  methods: {
    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.submitted = false;
      this.updatePassword();
    },
    getError(value) {
      if (value) {
        return validationMsgs(value);
      }
    },
    async updatePassword() {
        let loader = this.$loading.show();
      try{
          this.pet.email = this.auth.user.email;
          await http.put("/pets", this.pet);
          this.pet = {};
          this.$toasted.global.success({msg: 'Senha atualizada com sucesso'});
      }catch(err){
          console.log(err.response.data);
          this.$toasted.global.error({msg: err.response.data.error || 'Erro ao atualizar senha'});
      }finally{
          loader.hide();
      }
    }
  }
};
</script>

<style>
</style>