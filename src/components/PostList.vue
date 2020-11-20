<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <!-- <img :src="post.image" /> -->
      <h3>{{ post.testone }}</h3>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: []
    };
  },
  firestore: {
    posts: postRef
  }
};
</script>