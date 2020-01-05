<template>
  <div class="hello">
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