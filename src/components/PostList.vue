
<template>
  <div class="create">
    <h1>Create new post page</h1>
    <form class="grid-container">
      <input
        type="text"
        class="grid-item item1"
        v-model="post.title"
        placeholder="Type a description here"
      />
      <input
        type="file"
        class="grid-item item2"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button
        class="grid-item item3"
        type="button"
        v-on:click="triggerChooseImg"
      >
        Choose Image
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button type="button" class="grid-item item4" v-on:click="createPost">
        Create post
      </button>
      <div class="containerke">
        <article v-for="post in posts" :key="post.id" class="smallcont">
          <img :src="post.img" class="kep" />
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <button v-on:click="deletee(post.id)">delet</button>
        </article>
      </div>
    </form>
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
    triggerChooseImg(){
      this.$refs.fileInput.click()
    },
    deletee(id)
    {
      postRef.doc(id).delete();
      console.log(id);
    },
    previewImage(){
      const imageFile = this.$refs.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.post.image = event.target.result
      }
    fileReader.readAsDataURL(imageFile)
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
  height: 30px;
  margin: 5px auto;
}
.new {
  width: 180px;
  border: 1px solid black;
}

.kep {
  width: 90px;
}
.containerke {
  width: 80%;
  height: 80%;
  padding: 20px;
  border: 1px solid black;
  margin: auto;
  display: flex;
}
.smallcont {
  margin: 20px;
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

.item1 {
  padding: 15px;
  width: 300px;
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
  padding: 100px;
}
</style>