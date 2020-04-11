<template>
  <Autocomplete id="autocomplete-bar">
    <input v-model="nome" @keyup="onChangePet" type="search" placeholder="Pesquise aqui..." />   
    <ul v-if="dropdownVisible">
      <li @click="navigateToPet(pet.id)" v-for="pet in pets" :key="pet.id">
        <img
          :src="pet.avatar ? pet.avatar.path :'https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png'"
          alt
        />
        <span>{{`${pet.firstName} ${(pet.lastName || '')}`}}</span>
      </li>
      <span v-if="pets.length <= 0">Nenhum resultado...</span>
    </ul>
  </Autocomplete>
</template>

<script>
import { Autocomplete } from './styles';
import http from '../../services/api';
export default {
    name: 'BarSearchPet',
    components: {
        Autocomplete
    },
    mounted(){
      this.$nextTick(() => {
        window.addEventListener("click", e => {
          const elements = e.path.map(e => e.id);
          if (elements.includes("autocomplete-bar")) {
            return;
          }
          this.dropdownVisible = false;
        });
      });
    },
    data(){
        return {
            dropdownVisible: false,
            pets: [],
            nome: ''
        }
    },
    methods: {
      onChangePet(){
        if(this.nome){
          this.dropdownVisible = true;
          this.getUsers();
          return;
        }
        this.dropdownVisible = false;
      },
      async getUsers(){
        try{
          const res = await http.get(`/pets?nome=${this.nome}`)
          this.pets = res.data.rows;
        }catch(err){
          console.log(err.response)
        }
      },
      navigateToPet(id){
        this.dropdownVisible = false;
        this.$router.push({name: 'profile-pet', params: {
          id
        }});
      }
    }
};
</script>

<style>
</style>