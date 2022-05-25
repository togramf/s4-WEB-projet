<template> 
    <div v-if="show" class="artwork-details-card" @click="quitOverlay">
        <div>
            <h2 class="title">{{detailedArtworkData.title}}</h2>
        </div>
        <img class="picture-details" v-bind:src="'https://www.artic.edu/iiif/2/' + detailedArtworkData.image_id +'/full/843,/0/default.jpg'"/>
        <div>
            <h3 class="artist">Artist: {{detailedArtworkData.artist_title}}</h3>
            <p class="date">Dates: {{detailedArtworkData.date_display}}</p>
            <p class="artwork-type">Type: {{detailedArtworkData.artwork_type_title}}</p>
            <p class="dimensions">Dimensions: {{detailedArtworkData.dimensions}}</p>
            <p class="medium-display">Medium: {{detailedArtworkData.medium_display}}</p>
            <div class="category-title"> Category : 
                <p v-for="category in detailedArtworkData.category_titles" :key="category"> {{category}} </p>
                
            </div>
            <p class="place_of_origin">Origin: {{detailedArtworkData.place_of_origin}}</p>            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArtworkDetailsCard',
        props: {
            show: {type: Boolean, required: true},
            detailedArtworkData: []
        },
        methods: {
            quitOverlay: function(){
                this.$emit("update:show", false)
            }
        }
    }
</script>

<style>
    .artwork-details-card {
        position:fixed;
        top:  2vh;
        left: 50%;
        transform: translateX(-50%);
        
        display: grid;
        width: 40vw;
        background-color: rgba(221, 221, 221, 0.826);
        border-radius: 5vw;
        margin-bottom: 5vh;

        line-height: 1;
    }

    .artwork-details-card:hover {
        box-shadow: 2px 2px 10px rgb(117, 117, 117);
    }

    .picture-details {
        max-width: 39vw;
        max-height: 40vh;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    .category-title {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-around;
    }

    @media screen and (max-width: 1150px) {
        .artwork-details-card {
            width: 60vw;
        }
        .picture-details {
            max-width: 59vw;
        }
    }

</style>