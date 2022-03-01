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
            picture_url: {type: String, default:"https://th.bing.com/th/id/OIP.DZLWFqYqIG4l_yJaqOuJXgHaHa?pid=ImgDet&rs=1"}
        }
    }
</script>

<style>
    .dog-card {
        display: grid;
        width: 150px;
        text-align:center;
    }

    img {
        border-radius: 10px;
        width: 150px;
        /* height: auto; */
    }

    h2 {
        font-size: 20px;
    }
</style>