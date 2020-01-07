<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
Vue.prototype.$appName = 'Trond\'s Working!'
Vue.prototype.$appDescription = 'Ramblings about computers and such.'
Vue.use(require('vue-moment'));
export default {
  name: 'app'
}
</script>

<style>
/* this is the default vue styling: */
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

* {
  box-sizing: border-box;
  max-width: 1000px;
}

/* Add a gray background color with some padding */
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  font-family: 'Amatic SC', cursive;
  padding: 10px;
  font-size: 40px;
  text-align: center;
  background: #a9dfc7;
}

.div-center {
  text-align: center;
}

.centercolumn {   
  width: 100%;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {   
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
   background-color: white;
   padding: 20px;
   margin-top: 20px;
   
}

.card h2 {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}

.card h5 {
  margin-block-start: 0.5em;
  margin-block-end: 1em;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

a {
  color: #319e6d;
  text-decoration: none;
} */


/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
}

</style>
