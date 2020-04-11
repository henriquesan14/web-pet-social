<template>
  <Profile>
    <div v-if="!loading">
      <div class="infos">
        <div class="bar-avatar">
          <img
            :src="avatar(pet)"
            alt
          />
          <h4>{{`${pet.firstName} ${pet.lastName || ''}`}}</h4>
        </div>

        <div class="bar-infos">
          <ul>
            <li>
              <strong>Tipo</strong>
              <span>{{pet.tipo}}</span>
            </li>
            <li>
              <strong>Raça</strong>
              <span>{{pet.raca || 'N/A'}}</span>
            </li>
            <li>
              <strong>Sexo</strong>
              <span>
                <span v-if="!pet.sexo">N/A</span>
                <font-awesome-icon id="venus" v-if="pet.sexo && pet.sexo == 'F'" icon="venus"></font-awesome-icon>
                <font-awesome-icon id="mars" v-if="pet.sexo && pet.sexo == 'M'" icon="mars"></font-awesome-icon>
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Telefone</strong>
              <span>{{pet.telefone || 'N/A'}}</span>
            </li>
            <li>
              <strong>Cidade</strong>
              <span>{{pet.cidade || 'N/A'}}</span>
            </li>
            <li>
              <strong>Estado</strong>
              <span>{{pet.estado.toUpperCase() || 'N/A'}}</span>
            </li>
          </ul>
          <div class="bar-btns">
            <button class="add" @click="sendSolicitacao" v-if="!pet.isFriend && !pet.isSolicited">
              <font-awesome-icon icon="user-plus"></font-awesome-icon>
              Solicitar Amizade
            </button>
            <button class="remove" @click="removeAmizade" v-if="pet.isFriend" >
              <font-awesome-icon icon="user-times"></font-awesome-icon>
              Excluir Amizade
            </button>
            <button class="remove" @click="removeSolicitacao" v-if="!pet.isFriend && pet.isSolicited">
              <font-awesome-icon icon="user-times"></font-awesome-icon>
              Excluir solicitação
            </button>
          </div>
        </div>
      </div>
      <hr />
      <h4>Publicações</h4>
      <CardPost v-for="post in posts" :key="post.id" :post="post"></CardPost>
      <h5 v-if="posts.length <=0">Este pet não possui nenhuma publicação...</h5>
    </div>
    <Loading :loader="loading" />
  </Profile>
</template>

<script>
import { Profile } from "./styles";
import CardPost from "../Timeline/CardPost";
import http from "@/services/api";
import Loading from '@/components/Loading';
export default {
  name: "ProfilePet",
  components: {
    Profile,
    CardPost,
    Loading
  },
  mounted() {
    this.getPet();
  },
  watch: {
    '$route.params.id': function () {
      this.getPet()
    }
  },
  data() {
    return {
      loading: true,
      pet: {},
      posts: []
    };
  },
  methods: {
    async getPet() {
      try {
        const [resPet, resPosts] = await Promise.all(
          [
            http.get(`/pets/${this.$route.params.id}`),
            http.get(`/pets/${this.$route.params.id}/posts`)
          ]
        );
        this.pet = resPet.data;
        this.posts = resPosts.data.rows;
      } catch (err) {
        this.$toasted.global.error({ msg: "Erro ao carregar pet" });
      } finally {
        this.loading = false;
      }
    },
    avatar(pet){
      if(!pet.avatar){
        return 'https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png'
      }
      return pet.avatar.path;
    },
    async sendSolicitacao(){
      try{
        await http.post('/solicitacoes', {
          pet2_id: this.$route.params.id
        });
        this.$toasted.global.success({ msg: 'Solicitação enviada' });
        this.getPet();
      }catch(err){
        this.$toasted.global.error({ msg: err.response.data.error || "Erro ao enviar solicitação" });
      }
    },
    async removeAmizade(){

    },
    async removeSolicitacao(){

    }
  }
};
</script>

<style>
</style>