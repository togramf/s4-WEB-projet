<template> 
    <div class="artwork-card">
        <div>
            <h2 class="title">{{title}}</h2>
        </div>
        <img class="picture" v-bind:src="'https://www.artic.edu/iiif/2/' + image_id +'/full/843,/0/default.jpg'"/>
        <div>
            <h3 class="artist">{{artist}}</h3>
            <p class="date">{{date}}</p>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'ArtworkCard',
        props: {
            title: {type: String, required: true},
            artist: String,
            date: String, 
            image_id: String,
        }
    }
</script>

<style>
    .artwork-card {
        display: grid;
        width: 200px;
        align-items: center;
        background-color: rgba(221, 221, 221, 0.479);
        border-radius: 20px;
        margin-bottom: 20px;
    }

    img {
        border-radius: 10px;
        width: 190px;
        margin: 5px;
    }

    h2 {
        font-size: 20px;
    }
    h3 {
        font-size: 15px;
    }
</style>