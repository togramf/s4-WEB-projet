<template>
  <div id="app">
    <div id="header">
      <img class="logo" alt="APIC logo" src="http://api.artic.edu/docs/assets/logo.svg"/>
      <h2 class="page-title"> Chicago Art Institute virtual gallery</h2>
    </div>
    <div v-if="exist" id="home">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <ArtworksGallery />
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
    color: #313131;
  }

  #header {
    background-color: #b10f0f;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }

  .logo {
    height: 50px;
    width: 50px;
    border-radius: 0%;
    background-color: aliceblue;
  }

  .page-title {
    color: aliceblue;
    width: 90%;
    text-align: center;
  }

</style>
