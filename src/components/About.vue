<template>
  <div>
    <router-link :to="{name: 'index'}">Back</router-link>
    <div class="card">
        <h2>About</h2>
        <img src="trond.jpg">
        <p>
            Hi, I'm Trond Hindenes, SRE lead at RiksTV. 
            Fan of Python, drones, cloud and snowboarding. 
            <a href="https://twitter.com/trondhindenes" target="blank">I'm on twitter.</a>
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