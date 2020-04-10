<template>
    <div class="timeline">
        <NewPost>
            <div class="bar-legenda">
                <img src="https://statig1.akamaized.net/bancodeimagens/71/n7/7f/71n77fjiwo437zctuazsc6ob0.jpg" alt="">
                <input v-model="post.legenda" placeholder="Escreva uma legenda...">
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
            <button @click="uploadImage" :disabled="!post.legenda || !image">Publicar</button>
        </NewPost>
        <div class="card-post">
            <div class="header">
                <div class="desc-user">
                    <img src="https://statig1.akamaized.net/bancodeimagens/71/n7/7f/71n77fjiwo437zctuazsc6ob0.jpg" alt="">
                    <h5>Garfield</h5>
                </div>
                <h5>Hoje</h5>
            </div>
            <div class="content">
                <img src="https://www.decorestock.com.br/img/products/papel-de-parede-adesivo-paisagem-natureza-praia-barco-p15_1_1200.jpg" alt="">
            </div>
            <div class="footer">
                <span>Bora cumpadii</span>
                <ul>
                    <li>
                        <font-awesome-icon icon="heart" />
                    </li>
                    <li>
                         <font-awesome-icon icon="comment-alt" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { NewPost } from './styles';
import http from '../../../services/api';
export default {
    name: 'Timeline',
    components: {
        NewPost
    },
    data(){
        return {
            post: { 
            },
            url: null,
            image: null
        }
    },
    methods: {
        selectFile(){
            this.$refs.inputFile.click();
        },
        onFileChange(e) {
            this.image = e.target.files[0];
            this.url = URL.createObjectURL(this.image);
        },
        async uploadImage(){
            if (this.image && this.post.legenda) {
                let loader = this.$loading.show();
                const fd = new FormData();
                fd.append("file", this.image);
                try {
                    const res = await http.post('/files', fd, {});
                    this.post.image_id = res.data.id;
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
                await http.post('/posts', this.post);
                this.$toasted.global.success({msg: 'Post publicado'});
            }catch(err){
                console.log(err.response.data)
                this.$toasted.global.error({msg: err.response.data.error || 'Error ao publicar post'});
            }
        }
    }
}
</script>

<style>
    .timeline{
        display: flex;
        flex-direction: column;
    }
    .card-post{
        width: 600px;
        border: 1px solid #c2c2c2;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 10px;
    }

    .header h5{
        font-size: 16px;
    }

    .header img{
        width: 40px;
        height: 40px;
        border-radius: 25px;
        margin-right: 10px;
        border: 2px solid #1250a6;
    }

    .desc-user {
        display:flex;
        align-items:center
    }

    .content{
        display: flex;
    }

    .content img{
        width: 100%;
    }

    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px; 
    }

    .footer span{
        margin-bottom: 5px;
    }

    .footer ul {
        display: flex;
        align-items: center;
    }

    .footer ul li:first-child {
        margin-right: 30px;
    }

    .footer ul li svg{
        cursor: pointer;
        font-size: 30px;
    }
</style>