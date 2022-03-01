<template>
  <div class="dogs-gallery">
    <DogCard :firstname="dogsData[0].name" :breed="dogsData[0].breed" :pictureUrl="dogsData[0].picture"/>
    <DogCard :firstname="dogsData[1].name" :breed="dogsData[1].breed" :pictureUrl="dogsData[1].picture"/>

    <!-- <DogCard firstname="Rex"   breed="Labrador"     picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU4lqKvezQV7u3tOj5YW7iNbVnvdpBw1Xiw&usqp=CAU"/>
    <DogCard firstname="Pluto2" breed="Saint-Hubert" picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRIGF1eudTt1sG59dgMWM8kssiDj-vDk1SA&usqp=CAU"/>
    <DogCard firstname="Pluto3" breed="Saint-Hubert" picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRIGF1eudTt1sG59dgMWM8kssiDj-vDk1SA&usqp=CAU"/> -->
  </div>
</template>

<script>
    import DogCard from './DogCardComponent.vue'
    // import getDogsData from '@/services/api/dogsAPI.js'

    export default {
        name: 'DogsGallery',
            components: {
                DogCard
        },
        data() {
            return {
                dogsData: [{"id":45, "name":"Pluto", "breed":"Saint-Hubert", "picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRIGF1eudTt1sG59dgMWM8kssiDj-vDk1SA&usqp=CAU"},
                           {"id":46, "name":"Rex",   "breed":"Labrador",     "picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU4lqKvezQV7u3tOj5YW7iNbVnvdpBw1Xiw&usqp=CAU"}]
            }
        },
        // methods: {
        //     async retrieveDogsData(){
        //         this.dogsData = await getDogsData()
        //     }
        // }
    }
</script>

<style>
.dogs-gallery{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}
</style>