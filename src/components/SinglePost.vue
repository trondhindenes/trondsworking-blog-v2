<template>
  <div class="hello">
    <h1>{{ post.title }}</h1>
    <pre>{{ JSON.stringify(post) }}</pre>
    <img v-if="post.mainImage" 
        :src="imageUrlFor( post.mainImage ).ignoreImageParams().width(500)"
    />
    <vue-markdown v-for="blob in post.body" v-bind:key="blob._id">{{ blob.markdown }}</vue-markdown>
  </div>
</template>

<script>
import { getSinglePost } from "../data";
import VueMarkdown from "vue-markdown";
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

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
      return imageBuilder.image(source);
    },
  },
  async created() {
    await this.fetchData();
  }
};
</script>