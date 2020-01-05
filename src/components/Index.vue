<template>
  <div class="hello">
    <div v-if="!loading">
      <div v-for="post in posts" v-bind:key="post._id">
        <router-link :to="{name: 'post', params: {id: post._id}}">
          dis da link
        </router-link>
        <pre>{{ post.title }}</pre>
        <!-- <single-post v-bind:id="post._id"></single-post> -->
      </div>
    </div>
  </div>
</template>

<script>
import {getPosts, getSinglePost} from '../data';
//import SinglePost from './SinglePost'

export default {
  name: "Index",
  components: {
    //'single-post': SinglePost
  },
  data() {
    return {
      loading: true,
      posts: [],
      singlePost: null
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
        this.posts = await getPosts();
        this.loading = false
        this.singlePost = await getSinglePost('0d5a2118-a5b3-4201-a0ba-6b8faecf08b9')
    }
  },
  watch: {
    'fetchData': 'fetchData'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
