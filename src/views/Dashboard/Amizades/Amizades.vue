<template>
  <Amizades>
    <div v-if="!loading">
      <div class="mb-5">
        <h5>Solicitações</h5>
        <ul>
          <li v-for="solicitacao in solicitacoes" :key="solicitacao.id">
            <div class="bar-desc">
              <img
                :src="solicitacao.pet.avatar ? solicitacao.pet.avatar.path : 'https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png'"
                alt
              />
              <h5>{{`${solicitacao.pet.firstName} ${solicitacao.pet.lastName || ''}`}}</h5>
            </div>
            <div class="bar-btns">
              <button @click="confirmSolicitacao(solicitacao.id)" class="confirm">
                <font-awesome-icon icon="user-check"></font-awesome-icon>Confirmar
              </button>
              <button @click="removeSolicitacao(solicitacao.id)" class="remove">
                <font-awesome-icon icon="user-times"></font-awesome-icon>Excluir
              </button>
            </div>
          </li>
        </ul>
        <span v-if="solicitacoes.length <= 0">Nenhuma solicitação...</span>
      </div>
      <hr>
      <div>
        <h5>Amizades</h5>
        <ul>
          <li v-for="amizade in amizades" :key="amizade.id">
            <div class="bar-desc">
              <img
                :src="amizade.amizade.avatar ? amizade.amizade.avatar.path : 'https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png'"
                alt
              />
              <h5>{{`${amizade.amizade.firstName} ${amizade.amizade.lastName || ''}`}}</h5>
            </div>
            <div class="bar-btns">
              {{formatDate(amizade.updated_at)}}
              <button @click="removeAmizade(amizade.id)" class="remove ml-2">
                <font-awesome-icon icon="user-times"></font-awesome-icon>Desfazer amizade
              </button>
            </div>
          </li>
        </ul>
        <span v-if="amizades.length <=0">Nenhuma amizade...</span>
      </div>
    </div>
    <Loading :loader="loading" />
  </Amizades>
</template>

<script>
import { Amizades } from "./styles";
import Loading from '@/components/Loading';
import http from '@/services/api';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
export default {
  name: "Solicitacoes",
  components: {
    Amizades,
    Loading
  },
  data(){
    return {
      loading: true,
      solicitacoes: [],
      amizades: []
    }
  },
  mounted(){
    this.getPromisses();
  },
  methods: {
    async getSolicitacoes(){
      return await http.get('/solicitacoes');
    },
    async getAmizades(){
      return await http.get('/amizades');
    },
    async getPromisses(){
      try{
      const [res, res2] =await Promise.all(
        [
          this.getSolicitacoes(),
          this.getAmizades()
        ]
      );
        this.solicitacoes = res.data;
        this.amizades = res2.data;
      }catch(err){
        this.$toasted.global.error({msg: 'Erro ao carregar solicitações/amizades'});
      }finally{
        this.loading = false;
      }
    },
    formatDate(value){
      return formatRelative(parseISO(value), new Date(), {
        locale: pt,
        addSufix: true
      });
    },
    async confirmSolicitacao(id){
      try{
        await http.put(`/solicitacoes/${id}`, {});
        this.$toasted.global.success({msg: 'Solicitação aceita'});
        this.getPromisses();
      }catch(err){
        this.$toasted.global.error({msg: err.response.data || 'Erro ao confirmar solicitação'});
      }
    },
    async removeSolicitacao(id){
      try{
        await http.delete(`/solicitacoes/${id}`);
        this.$toasted.global.success({msg: 'Solicitação excluida'});
        this.getPromisses();
      }catch(err){
        this.$toasted.global.error({msg: err.response.data || 'Erro ao excluir solicitação'});
      }
    },
    async removeAmizade(id){
      try{
        await http.delete(`/amizades/${id}`);
        this.$toasted.global.success({msg: 'Amizade desfeita'});
        this.getPromisses();
      }catch(err){
        this.$toasted.global.error({msg: err.response.data || 'Erro ao desfazer amizade'});
      }
    }
  }
};
</script>

<style>
</style>