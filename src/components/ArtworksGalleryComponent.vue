<template>
  <div class="artwork-gallery">
        <ArtworkCard title="Example - Title"    artist ="Artist" date="Date"     picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU4lqKvezQV7u3tOj5YW7iNbVnvdpBw1Xiw&usqp=CAU"/>
        <ArtworkCard v-for="artwork in artworksData.data" 
            :key="artwork.id"
            :title="artwork.title" 
            :artist="artwork.artist_display" 
            :date="artwork.date_display" 
            :image_id="artwork.image_id"
            :pictureUrl="artwork.image"/>

        <ArtworkCard title="Pluto2" date="Saint-Hubert" picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRIGF1eudTt1sG59dgMWM8kssiDj-vDk1SA&usqp=CAU"/>
        <ArtworkCard title="Pluto3" date="Saint-Hubert" picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRIGF1eudTt1sG59dgMWM8kssiDj-vDk1SA&usqp=CAU"/>
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
        mounted: function(){
            this.displayArtworksData()
        },
        methods: {
            async retrieveArtworksData() {
                this.artworksData = await getArtworksData()
                // console.log(await this.artworksData.data.thumbnail.lqip)
            },
            async displayArtworksData(){
                
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