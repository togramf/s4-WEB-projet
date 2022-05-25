<template>
  <div id="app">
    <header>
      <img class="logo" alt="APIC logo" src="http://api.artic.edu/docs/assets/logo.svg"/>
      <h2 class="page-title"> Chicago Art Institute virtual gallery</h2>
    </header>
    <ArtworksGallery />
    <footer>
      <div class="page-title"> Web project - IMAC 2 - 2021-2022 - Margot Fauchon </div>
    </footer>
  </div>
</template>

<script>
import ArtworksGallery from './components/ArtworksGalleryComponent.vue'

export default {
  name: 'App',
  components: {
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

  header, footer {
    width: 100%;
    background-color: #b10f0f;
    display: flex;
    align-items: center;
  }

  header {
    flex-direction: row;
    margin-bottom: 20px;
  }

  footer {
    height: 5vh;
    margin-top: 20px;
    text-align:center ;
  }

  .logo {
    height: 50px;
    width: 50px;
    border-radius: 0%;
    background-color: aliceblue;
    margin: 2px;
  }

  .page-title {
    color: aliceblue;
    width: 100%;
    text-align: center;
  }

</style>
