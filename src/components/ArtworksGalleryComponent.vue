<template>
    <div class="gallery">
        <div class="gallery-options">
            <input type="text" v-model="search" placeholder="Search for an artwork">
            <button v-if="search" @click="cleanSearch">X</button>
            <label for="artworks-sort"> Sort by: </label>
            <select v-model="gallerySortType" id="artworks-sort">
                <option value="AZtitle"> By title </option>
                <option value="AZdate"> By date </option>
                <option value="AZartist"> By artist </option>
            </select>
        </div>
        <div class="artwork-gallery"> 
            <div v-for="artwork in artworksOrganizedData" 
            :key="artwork.id">
            <ArtworkCard
            :title="artwork.title" 
            :artist="artwork.artist_display" 
            :date="artwork.date_display" 
            :image_id="artwork.image_id"
            :pictureUrl="artwork.image"/>
            </div> 
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
        computed:{ 
            artworksOrganizedData: function(){
                let field = "date_display"
                let filterFunc = (a) => a.title.toLowerCase().includes(this.search.toLowerCase())

                if (this.gallerySortType == "AZtitle") {
                    field = "title"
                    filterFunc = (a) => a.title.toLowerCase().includes(this.search.toLowerCase())
                } else if (this.gallerySortType == "AZartist") {
                    field = "artist_display"
                    filterFunc = (a) => a.artist_display.toLowerCase().includes(this.search.toLowerCase())
                }
                const comparator = (a,b) => a[field].localeCompare(b[field])
                let organizedData = this.artworksData
                organizedData = organizedData.filter(filterFunc)
                organizedData = organizedData.sort(comparator)
                return organizedData
            }
        },
        data() {
            return {
                artworksData: [],
                search: "",
                gallerySortType: "AZtitle"
            }
        },
        created: function() {
            this.retrieveArtworksData()
        },
        methods: {
            async retrieveArtworksData() {
                this.artworksData = await getArtworksData()
            },
            cleanSearch: function() {
                this.search =""
            }
        }
    }

    
</script>

<style>
.gallery-options{
    margin: 2%;
    font-weight: 600;
    color: #888888;
}
.artwork-gallery{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}

input[type="text"] {
    width: fit-content; 
    background-color: rgba(221, 221, 221, 0.479);
    padding: 10px;
    border: 2px solid #888888;
    border-radius: 5%;
}

button {
    font-weight: 600;
    color: #888888;
    border: 2px solid #888888;
    border-radius: 30%;
}
</style>