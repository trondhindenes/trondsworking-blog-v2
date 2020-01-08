<template>
  <div class="card" v-if="post">
    <h2>{{ (post.title).toUpperCase() }}</h2>
    <img v-if="post.mainImage" 
        :src="imageUrlFor( post.mainImage ).ignoreImageParams()"
    />
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
      post: null
    };
  },
  methods: {
    async fetchData() {
      this.post = await getSinglePost(this.id);
    },
    imageUrlFor(source) {
      let imageBuilder = imageUrlBuilder(sanity);
      return imageBuilder.image(source);
    }
  },
  async created() {
    await this.fetchData();
  }
};
</script>