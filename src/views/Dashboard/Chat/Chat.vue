<template>
    <div>
        <BoxChat v-if="!loading" :style="{height: (height -80) + 'px'}">
        <div class="bar-conversas">
            <input @keyup="onSearch" v-model="searchConversa" type="text" placeholder="Pesquise por uma conversa...">
            <ul>
                <li
                @click="setConversaSelected(conversa)"
                :style="[{backgroundColor: conversa.id == conversaSelected.id ? '#1250a6': ''}, {color: conversa.id == conversaSelected.id ? '#fff': ''}]" 
                v-for="conversa in conversasFiltered" :key="conversa.id">
                    <img :src="pet(conversa).avatar ? pet(conversa).avatar.path : 'https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png'" alt="">
                    <div>
                        <h5>{{pet(conversa).firstName}}</h5>
                        <span>{{`${conversa.lastMessage} - ${formatDate(conversa.updated_at)}`}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bar-chat">
            <div class="header">
                <img :src="pet(conversaSelected).avatar ? pet(conversaSelected).avatar.path : 'https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png'" alt="">
                <h5>{{pet(conversaSelected).firstName}}</h5>
            </div>
            <div class="messages">
                <div v-for="mensagem in mensagens" :class="{'me': getUser.id == mensagem.pet.id}" :key="mensagem.id" class="message">
                    {{mensagem.message}}
                    <span>{{formatTime(mensagem.created_at)}}</span>
                </div>
            </div>
            <div class="send-message">
                <form @submit.prevent="sendMessage">
                    <input v-model="message" type="text" placeholder="Escreva uma mensagem...">
                    <button type="submit">
                        <font-awesome-icon icon="paper-plane"></font-awesome-icon>
                    </button>
                </form>
            </div>
        </div>
    </BoxChat>
    <Loading :loader="loading" />
    </div>
</template>

<script>
import { BoxChat } from './styles';
import http from '@/services/api';
import Loading from '@/components/Loading.vue';
import { mapGetters } from 'vuex';
import { parseISO, formatRelative, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
export default {
    name: 'Chat',
    components: {
        BoxChat,
        Loading
    },
    computed: mapGetters(['getUser']),
    data(){
        return {
            loading: true,
            height: null,
            conversas: [],
            conversasFiltered: [],
            mensagens: [],
            conversaSelected: {},
            message: '',
            searchConversa: ''
        }
    },
    mounted(){
        this.height = window.innerHeight;
        this.getConversas();
    },
    methods: {
        async getConversas(){
            try{
                const res = await http.get('/conversas');
                this.conversas = res.data;
                this.conversasFiltered = res.data;
                if(res.data.length > 0){
                    this.conversaSelected = res.data[0];
                    this.getMensagens(this.conversaSelected.id);
                }
            }catch(err){
                this.$toasted.global.error({msg: 'Erro ao carregar conversas'});
            }finally{
                this.loading = false;
            }
        },
        async getMensagens(id){
            try{
                const res = await http.get(`/conversas/${id}/mensagens`);
                this.mensagens = res.data.rows;
            }catch(err){
                this.$toasted.global.error({msg: 'Erro carregar mensagens'});
            }
        },
        pet(conversa){
            return this.getUser.id != conversa.pet1.id ? conversa.pet1: conversa.pet2;
        },
        formatDate(value){
            return formatRelative(parseISO(value), new Date(), {
                locale: pt,
                addSufix: true
            });
        },
        formatTime(value){
            const date = parseISO(value);
            return format(date, 'HH:mm');
        },
        setConversaSelected(conversa){
            this.conversaSelected = conversa;
            
            this.getMensagens(this.conversaSelected.id);
        },
        async sendMessage(){
            try{
                const pet = this.getUser.id != this.conversaSelected.pet1.id ? this.conversaSelected.pet1 : this.conversaSelected.pet2;
                await http.post('/mensagens',{
                    message: this.message,
                    pet2_id: pet.id,
                    conversa_id: this.conversaSelected.id
                });
                this.message = '';
                this.getMensagens(this.conversaSelected.id);
            }catch(err){
                this.$toasted.global.error({msg: 'Erro enviar mensagem'});
            }
        },
        onSearch(){
            this.conversasFiltered = this.conversas.filter(c => {
            const pet = this.getUser.id != c.pet1.id ? c.pet1 : c.pet2;
            return pet.firstName.toUpperCase().startsWith(this.searchConversa.toUpperCase());
        });
  }
    }
}
</script>

<style>
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.25);
    }
</style>