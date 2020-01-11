<template>
  <div>
    <router-link :to="{name: 'index'}">Back</router-link>
    <div class="card">
      <h2>About</h2>
      <img src="trond.jpg" />
      <p>
        Hi, I'm Trond Hindenes, SRE lead at RiksTV.
        Fan of Python, drones, cloud and snowboarding.
        <a
          href="https://twitter.com/trondhindenes"
          target="blank"
        >I'm on twitter.</a><br>
        This blog is written in Vue.js using the Sanity.io headless CMS for content.
        You can find the source code at
        <a
          href="https://github.com/trondhindenes/trondsworking-blog-v2"
          target="blank"
        >https://github.com/trondhindenes/trondsworking-blog-v2.</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
</style>