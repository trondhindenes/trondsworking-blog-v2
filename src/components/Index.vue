<template>
  <div class="hello">
    <div class="header">
      <h2>{{ $appName }}</h2>
    </div>
    <div v-if="!loading">
      <div class="card" v-for="post in posts" v-bind:key="post._id">
        <router-link :to="{name: 'post', params: {id: post._id}}">
          <h2>{{ (post.title).toUpperCase() }}</h2>
        </router-link>
        <h5>{{ post.publishedAt | moment("YYYY-MM-DD") }}</h5>
        <img
          v-if="post.mainImage"
          :src="imageUrlFor(post.mainImage).ignoreImageParams().height(200)"
        />
        <strong v-if="post.shortIntro">{{ post.shortIntro }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint no-unused-vars: "off" */
import { getPosts, getSinglePost } from "../data";
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

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
      this.loading = false;
      this.singlePost = await getSinglePost(
        "0d5a2118-a5b3-4201-a0ba-6b8faecf08b9"
      );
    },
    imageUrlFor(source) {
      let imageBuilder = imageUrlBuilder(sanity);
      return imageBuilder.image(source);
    }
  },
  watch: {
    fetchData: "fetchData"
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* this is the default vue styling: */
/* h3 {
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
} */
</style>
