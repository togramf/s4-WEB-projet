<template> 
    <div class="dog-card">
        <img class="picture" v-bind:src="picture_url">
        <div>
            <h2 class="firstname">{{firstname}}</h2>
            <p class="breed">{{breed}}</p>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'DogCard',
        props: {
            firstname: {type: String, required: true},
            breed: String, 
            picture_url: {type: String, default:"https://my-best-kennel.com/pictures/default.png"}
        }
    }
</script>

<style>
    .dog-card {
        display: flex;
    }

    h2 {
        font-size: 20px;
    }
</style>