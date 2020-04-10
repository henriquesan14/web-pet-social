<template>
  <Post>
    <div class="header">
      <div class="desc-user">
        <img
          :src="avatar(post)"
          alt
        />
        <h5>{{post.pet.firstName}}</h5>
      </div>
      <h5>{{formatDate(post.created_at)}}</h5>
    </div>
    <div class="content">
      <img
        :src="post.image.path"
        alt="post"
      />
    </div>
    <div class="footer">
      <span>{{post.legenda}}</span>
      <ul>
        <li>
          <font-awesome-icon icon="heart" />
        </li>
        <li>
          <font-awesome-icon icon="comment-alt" />
        </li>
      </ul>
    </div>
  </Post>
</template>

<script>
import { Post } from './styles';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt'
export default {
  name: "CardPost",
  components: {
      Post
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(value){
      return formatRelative(parseISO(value), new Date(), {
        locale: pt,
        addSufix: true
      });
    },
    avatar(post){
      if(!post.pet.avatar){
        return 'https://avatars-provider.s3-sa-east-1.amazonaws.com/files-pet-social/logo_bg_blue.png'
      }
      return post.pet.avatar.path;
    }
  }
};
</script>

<style>
</style>