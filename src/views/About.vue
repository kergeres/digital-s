<template>
  <div class="about">
    <PostNist></PostNist>
  </div>
</template>

<script>
// @ is an alias to /src

import PostNist from "@/components/PostNist.vue";


export default {
  name: "about",
  components: {
    PostNist
  }
  
};
</script>
