<template> 
    <div class="artwork-card">
        <div>
            <h2 class="title">{{title}}</h2>
        </div>
        <img class="picture" v-bind:src="picture_url">
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
            picture_url: {type: String, default:"https://th.bing.com/th/id/OIP.DZLWFqYqIG4l_yJaqOuJXgHaHa?pid=ImgDet&rs=1"}
        }
    }
</script>

<style>
    .artwork-card {
        display: grid;
        width: 150px;
        text-align:center;
    }

    img {
        border-radius: 10px;
        width: 150px;
    }

    h2 {
        font-size: 20px;
    }
    h3 {
        font-size: 15px;
    }
</style>