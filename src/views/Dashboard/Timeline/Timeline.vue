<template>
    <div class="timeline">
        <NewPost>
            <div class="bar-legenda">
                <img src="https://statig1.akamaized.net/bancodeimagens/71/n7/7f/71n77fjiwo437zctuazsc6ob0.jpg" alt="">
                <input v-model="newPost.legenda" placeholder="Escreva uma legenda...">
            </div>
            <hr>
            <div id="image-selected">
                <img v-if="url" :src="url" alt="">
            </div>
            <div class="bar-file" @click="selectFile">
                <font-awesome-icon icon="image" />
                <span>Foto/Imagem</span>
                <input @change="onFileChange"
              accept="image/jpeg, image/png" ref="inputFile" type="file" hidden>
            </div>
            <button @click="uploadImage" :disabled="!newPost.legenda || !image">Publicar</button>
        </NewPost>
        <div v-if="!loading">
            <CardPost :post="post" v-for="post in posts" :key="post.id"></CardPost>
        </div>
        <h5 v-if="posts.length <= 0" class="text-center">Nenhuma publicação...</h5>
        <Loading :loader="loading"/>
    </div>
</template>

<script>
import { NewPost } from './styles';
import CardPost from './CardPost';
import http from '../../../services/api';
import Loading from '@/components/Loading.vue';
export default {
    name: 'Timeline',
    components: {
        NewPost,
        CardPost,
        Loading
    },
    data(){
        return {
            loading: true,
            newPost: { 
            },
            url: null,
            image: null,
            posts: [
                
            ]
        }
    },
    async mounted(){
        this.getPosts();
    },
    methods: {
        selectFile(){
            this.$refs.inputFile.click();
        },
        onFileChange(e) {
            this.image = e.target.files[0];
            this.url = URL.createObjectURL(this.image);
        },
        async getPosts(){
            try{
                const res = await http.get('/posts');
                this.posts = res.data.rows;
            }catch(err){
                this.$toasted.global.error({msg: 'Erro ao carregar posts'});
            }finally{
                this.loading = false;
            }
        },
        async uploadImage(){
            if (this.image && this.newPost.legenda) {
                let loader = this.$loading.show();
                const fd = new FormData();
                fd.append("file", this.image);
                try {
                    const res = await http.post('/files', fd, {});
                    this.newPost.image_id = res.data.id;
                    await this.savePost();
                } catch (err) {
                    this.$toasted.global.error({msg: err.response.data.error || 'Erro ao fazer upload da imagem'});
                } finally {
                    loader.hide();
                }
            }
        },
        async savePost(){
            try{
                await http.post('/posts', this.newPost);
                this.getPosts();
                this.$toasted.global.success({msg: 'Post publicado'});
            }catch(err){
                this.$toasted.global.error({msg: err.response.data.error || 'Error ao publicar post'});
            }
        }
    }
}
</script>

<style>
    .timeline{
        width: 700px;
        display: flex;
        flex-direction: column;
    }
</style>