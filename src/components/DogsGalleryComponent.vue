<template>
  <div class="dogs-gallery">
		<DogCard firstname="Pluto" breed="Saint-Hubert" picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRIGF1eudTt1sG59dgMWM8kssiDj-vDk1SA&usqp=CAU"/>
		<DogCard firstname="Rex" breed="Labrador" picture_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU4lqKvezQV7u3tOj5YW7iNbVnvdpBw1Xiw&usqp=CAU"/>
  </div>
</template>

<script>
import DogCard from './DogCardComponent.vue'

export default {
  name: 'DogsGallery',
	components: {
		DogCard
	}
}
</script>

<style></style>