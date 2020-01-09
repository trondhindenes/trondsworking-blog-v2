<template>
  <div class="card" v-if="post">
    <h2>{{ (post.title).toUpperCase() }}</h2>
    <img v-if="post.mainImage" :src="imageUrlFor( post.mainImage ).ignoreImageParams().width(calculateImageWidth)" />
    <vue-markdown v-for="blob in post.body" v-bind:key="blob._id">{{ blob.markdown }}</vue-markdown>
  </div>
</template>

<script>
import { getSinglePost } from "../data";
import VueMarkdown from "vue-markdown";
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

export default {
  name: "SinglePost",
  components: {
    VueMarkdown
  },
  props: ["id"],
  data() {
    return {
      post: null,
      window: {
        width: 0,
        height: 0,
        imageWidth: 0
      }
    };
  },
  methods: {
    async fetchData() {
      this.post = await getSinglePost(this.id);
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
  async created() {
    await this.fetchData();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
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