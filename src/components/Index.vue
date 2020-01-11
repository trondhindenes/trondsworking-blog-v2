<template>
  <div class="hello">
    <div class="header headerbox">
      <h1>{{ $appName }}</h1>
      <h4>{{ $appDescription }}</h4>
      <router-link :to="{name: 'about'}">About</router-link>
    </div>
    <div v-if="!loading">
      <div class="card" v-for="post in posts" v-bind:key="post._id">
        <router-link :to="{name: 'post', params: {id: post._id}}">
          <h2 :id=post._id>{{ (post.title).toUpperCase() }}</h2>
        </router-link>
        <h5>{{ post.publishedAt | moment("YYYY-MM-DD") }}</h5>
        <img
          v-if="post.mainImage"
          :src="imageUrlFor(post.mainImage).ignoreImageParams().width(calculateImageWidth)"
        />
        <br />
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
  props: ["cameFrom"],
  components: {
    //'single-post': SinglePost
  },
  data() {
    return {
      loading: true,
      posts: [],
      singlePost: null,
      window: {
        width: 0,
        height: 0,
        imageWidth: 0
      }
    };
  },
  async created() {
    await this.fetchData();
    if (this.cameFrom) {
      location.hash = this.cameFrom
    }
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.$log.debug('cameFrom', this.cameFrom)
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    async fetchData() {
      this.posts = await getPosts();
      this.loading = false;
    },
    imageUrlFor(source) {
      let imageBuilder = imageUrlBuilder(sanity);
      return imageBuilder.image(source);
    },

    compareSizes(size, ref) {
      //only trigger resize if size diff is big,
      //so we don't do excessive image gets against sanity.io
      if (ref - size > 100) {
        return true;
      }
      if (ref - size < -100) {
        return true;
      }
      return false;
    },

    handleResize() {
      let clientHeight = document.documentElement.clientHeight;
      this.$log.debug("clientHeight", clientHeight);
      if (this.compareSizes(clientHeight, this.window.height)) {
        this.window.height = clientHeight;
      }

      let clientWidth = document.documentElement.clientWidth;
      this.$log.debug("clientWidth", clientWidth);
      if (this.compareSizes(clientWidth, this.window.width)) {
        this.window.width = clientWidth;
      }
    }
  },
  computed: {
    calculateImageWidth: function() {
      let imageWidth = this.window.width;
      if (imageWidth > 700) {
        imageWidth = 700;
      } else {
        imageWidth = imageWidth - 100;
      }
      return imageWidth;
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
