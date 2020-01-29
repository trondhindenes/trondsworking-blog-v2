<template>
  <div class="hello">
    <router-link :to="{name: 'index'}">Back</router-link>
    <single-post v-bind:id="id"></single-post>
  </div>
</template>

<script>
import SinglePost from "./SinglePost";

export default {
  name: "Post",
  props: ["id"],
  components: {
    "single-post": SinglePost
  },
  created() {
    this.$log.debug('updateCameFrom', this.id)
    this.$store.commit("updateCameFrom", this.id);
    this.$log.debug('store.state.cameFrom', this.$store.state.cameFrom)
  }
}
</script>