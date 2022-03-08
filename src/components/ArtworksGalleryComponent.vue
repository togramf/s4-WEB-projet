<template>
  <div class="artwork-gallery">
      <div v-for="artwork in artworksData.data" 
            :key="artwork.id">
            <ArtworkCard 
            :title="artwork.title" 
            :artist="artwork.artist_display" 
            :date="artwork.date_display" 
            :image_id="artwork.image_id"
            :pictureUrl="artwork.image"/>
        
        </div>
        
  </div>
</template>

<script>
    import ArtworkCard from './ArtworkCardComponent.vue'
    import getArtworksData from '@/services/api/articAPI.js'

    export default {
        name: 'ArtworksGallery',
        components: {
            ArtworkCard
        },
        data() {
            return {
                artworksData: []
            }
        },
        created: function() {
            this.retrieveArtworksData()
        },
        methods: {
            async retrieveArtworksData() {
                this.artworksData = await getArtworksData()
            }
        }
    }

    
</script>

<style>
.artwork-gallery{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}
</style>