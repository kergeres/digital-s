
<template>
  <div class="create">
    <h1>Delete/Edit</h1>
    <form class="grid-container">
      <div class="key"></div>
      <input
        id="title"
        type="text"
        class="grid-item"
        v-model="post.title"
        placeholder="Title"
      />
      <input
        id="desc"
        type="text"
        class="grid-item"
        v-model="post.description"
        placeholder="description"
      />
      <input
        id="immg"
        type="text"
        class="grid-item"
        v-model="post.img"
        placeholder="Instert IMG URL"
      />

      <button
        type="button"
        class="grid-item buttonn"
        v-on:click="updatePostR(post.id)"
      >
        Update post
      </button>
    </form>
    <div class="containerke">
      <article v-for="post in posts" :key="post.id" class="smallcont">
        <img :src="post.img" class="kep" />
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <button class="de" @click="deletee(post.id)">Delete</button>
        <button
          class="de"
          @click="editt(post.img, post.title, post.description, post.id)"
        >
          Edit
        </button>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
  name: 'Create',
  data () {
    return {
      post: {
        title: '',
        image: null
      },
      posts: []
    }
    
  },
  methods: {
      editt(img, title, description, id)
    {
      
      document.querySelector("#title").value = title;
      document.querySelector("#desc").value = description;
      document.querySelector("#immg").value = img;
      document.querySelector(".key").innerHTML = id;
    },

    
    updatePostR() {
      postRef.doc(this.post.title).set({
        title: this.post.title,
        description: this.post.description,
        img: this.post.img

      });

    },
    updatePostD(id) {
    
    postRef.doc(id).delete();

    },
  
    deletee(id)
    {
      postRef.doc(id).delete();
      
      
    },
     
    createPost () {
      postRef.add(this.post)
      this.$router.push('/')
    }
    },
    firestore: {
    posts: postRef
  }
  }
  

</script>

