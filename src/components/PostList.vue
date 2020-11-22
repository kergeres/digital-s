
<template>
  <div class="create">
    <h1>Create</h1>
    <form class="grid-container">
      <input
        type="text"
        class="grid-item"
        v-model="post.title"
        placeholder="Title"
      />
      <input
        type="text"
        class="grid-item"
        v-model="post.description"
        placeholder="description"
      />
      <input
        type="text"
        class="grid-item"
        v-model="post.img"
        id="img-id"
        placeholder="Instert IMG URL"
      />

      <button type="button" class="grid-item buttonn" v-on:click="createPost">
        Create post
      </button>
    </form>
    <div class="containerke">
      <article v-for="post in posts" :key="post.id" class="smallcont">
        <img :src="post.img" class="kep" />
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
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
        title: ''
      },
      posts: []
    }
    
  },
  methods: {
    editt(id)
    {
      console.log(id);
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


<style>
input {
  height: 40px;
  width: 350px;
  padding-left: 10px;
  margin: 5px auto;
}
.de {
  width: 90px;
  height: 20px;
  display: block;
  background-color: #434534;
  color: #f1f1f1;
  margin: 10px auto;
  border: none;
  cursor: pointer;
}
.new {
  width: 180px;
  border: 1px solid black;
}
.buttonn {
  height: 45px;
  width: 355px;
  background-color: #434534;
  color: #f1f1f1;
  margin: 5px auto;
  border: none;
  cursor: pointer;
}
.buttonn:hover {
  background-color: #abad9a;
}
.kep {
  width: 90px;
  margin-bottom: 30px;
}
.containerke {
  width: 80%;
  height: 80%;
  padding: 20px;
  margin: auto;
  display: flex;
}
.smallcont {
  margin: 20px;
  width: 250px;
  height: 250px;
}

.item3 {
  padding: 15px;
  background-color: rgb(245, 100, 197);
  color: #fff;
  border: 0px solid #fff;
  font-size: 18px;
  width: 330px;
  align-content: center;
  margin: auto;
}

.item2 {
  margin: auto;
  padding: 5px;
  color: rgb(59, 59, 59);
  border: 0px solid #fff;
  font-size: 18px;
  width: 300px;
  align-content: center;
  margin: auto;
}

.item4 {
  margin: auto;
  padding: 15px;
  background-color: rgb(245, 100, 197);
  color: #fff;
  border: 0px solid #fff;
  font-size: 18px;
  width: 300px;
  align-content: center;
  margin: auto;
}

.grid-container {
  display: grid;
  grid-gap: 10px;
  padding: 50px;
}
</style>