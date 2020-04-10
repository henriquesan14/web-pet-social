<template>
    <ContentProfile>
        <form @submit.prevent="submit">
            <img @click="selectFile" :src="url || userAvatar" alt="">
            <button v-if="image" @click="image = null;url = null" type="button" id="btn-times">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </button>
            <input @change="onFileChange"
              accept="image/jpeg, image/png" ref="inputFile" type="file" hidden>
            <input v-model="pet.firstName" type="text" placeholder="Nome do pet">
            <span v-if="submitted && $v.pet.firstName.$invalid" class="mb-2" v-text="getError($v.pet.firstName)"></span>
            <input v-model="pet.lastName" type="text" placeholder="Sobrenome do pet">
            <input v-model="pet.email" type="text" placeholder="Email">
            <span v-if="submitted && $v.pet.email.$invalid" class="mb-2" v-text="getError($v.pet.email)"></span>
            <input v-model="pet.tipo" type="text" placeholder="Tipo de pet ex: cachorro, gato...">
            <span v-if="submitted && $v.pet.tipo.$invalid" class="mb-2" v-text="getError($v.pet.tipo)"></span>
            <select v-model="pet.sexo" type="text" placeholder="Sexo do pet">
                <option :value="null" disabled>Sexo do pet...</option>
                <option value="M">Macho</option>
                <option value="F">Fêmea</option>
            </select>
            <input v-model="pet.raca" type="text" placeholder="Raça do pet">
            <h5>Endereço</h5>
            <input v-model="pet.cidade" type="text" placeholder="Cidade">
            <input v-model="pet.estado" type="text" placeholder="Estado">
            <button type="submit">Atualizar perfil</button>
        </form> 
    </ContentProfile>
</template>

<script>
import { ContentProfile } from './styles';
import { required, email } from "vuelidate/lib/validators";
import { validationMsgs } from '@/utils/validation_msg.js';
import http from '@/services/api';
import { mapGetters } from 'vuex';
export default { 
    name: 'Profile',
    components: {
        ContentProfile
    },
    computed: mapGetters(['getUser', 'userAvatar']),
    mounted(){
        this.pet = this.getUser;
    },
    data(){
        return {
            submitted: false,
            pet: {
                sexo: null
            },
            url: null,
            image: null
        }
    },
    validations(){
      return {
        pet: {
          firstName: { required },
          email: { required, email },
          tipo: { required }
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
            this.uploadImage();
        },
        getError(value){
            if(value){
            return validationMsgs(value);
            }
        },
        selectFile(){
            this.$refs.inputFile.click();
        },
        onFileChange(e) {
            this.image = e.target.files[0];
            this.url = URL.createObjectURL(this.image);
        },
        async uploadImage(){
            let loader = this.$loading.show();
            if(this.image){
                const fd = new FormData();
                fd.append("file", this.image);
                try {
                    const res = await http.post('/files', fd, {});
                    this.pet.avatar_id = res.data.id;
                    await this.updateProfile();
                } catch (err) {
                    this.$toasted.global.error({msg: err.response.data.error || 'Erro ao fazer upload da imagem'});
                } finally {
                    loader.hide();
                }
            }else{
                await this.updateProfile();
                loader.hide();
            }
            
        },
        async updateProfile(){
            try{
                const res = await http.put('/pets', this.pet);
                this.$store.dispatch('SET_USER', res.data);
                this.$toasted.global.success({msg: 'Perfil atualizado com sucesso'});
            }catch(err){
                this.$toasted.global.error({msg: err.response.data.error || 'Error ao atualizar Perfil'});
            }
        }
    }
}
</script>

<style>

</style>