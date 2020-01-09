<template>
  <div class="hello">
    <router-link :to="{name: 'index', params: {cameFrom: id}}">Back</router-link>
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
  }
}
</script>