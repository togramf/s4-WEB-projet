<template>
  <div class="artwork-gallery">
    <ArtworkCard title="Titre"    artist ="Artist" date="Date"     picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU4lqKvezQV7u3tOj5YW7iNbVnvdpBw1Xiw&usqp=CAU"/>
    <ArtworkCard :title="artworksData.data[0].title" :artist="artworksData.data[0].artist_display" :date="artworksData.data[0].date_display" :pictureUrl="artworksData.data[0].image"/>
    <ArtworkCard :title="artworksData.data[1].title" :artist="artworksData.data[1].artist_display" :date="artworksData.data[1].date_display" :pictureUrl="artworksData.data[1].image"/>
    <ArtworkCard :title="artworksData.data[2].title" :artist="artworksData.data[2].artist_display" :date="artworksData.data[2].date_display" :pictureUrl="artworksData.data[2].image"/>

    <!-- <ArtworkCard :title="artworksData[1].title" :date="artworksData[1].date" :pictureUrl="artworksData[1].picture"/> -->

    <!-- <ArtworkCard title="Pluto2" date="Saint-Hubert" picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRIGF1eudTt1sG59dgMWM8kssiDj-vDk1SA&usqp=CAU"/>
    <ArtworkCard title="Pluto3" date="Saint-Hubert" picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRIGF1eudTt1sG59dgMWM8kssiDj-vDk1SA&usqp=CAU"/> -->
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