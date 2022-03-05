<template>
  <div id="app">
    <ArtworksGallery />
    <div id="home">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld  from './components/HelloWorld.vue'
import ArtworksGallery from './components/ArtworksGalleryComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ArtworksGallery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#home {
  visibility: hidden;
}

</style>
