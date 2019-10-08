<template>

  <div id="app">
 
 

 <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: "app",
  mounted() {
     this.$router.push("/");
  },

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin: 0 auto;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
</style>
