<template>
    <div class="gallery">
        <div class="gallery-options">
            <input type="text" v-model="search" placeholder="Search for an artwork or an artist">
            <button id="reset_search_button" v-if="search" @click="cleanSearch">X</button>
            <label for="artworks-sort"> Sort by: </label>
            <select v-model="gallerySortType" id="artworks-sort">
                <option value="title"> By title </option>
                <option value="date_display"> By date </option>
                <option value="artist_display"> By artist </option>
            </select>
            <div v-if="!search" class = "artworks-type-filters"> 
                <label><input type="checkbox" v-model="user.type_1.state" >Painting</label>
                <label><input type="checkbox" v-model="user.type_2.state" >Photograph</label>
                <label><input type="checkbox" v-model="user.type_3.state" >Sculpture</label>
                <label><input type="checkbox" v-model="user.type_5.state" >Textile</label>
                <label><input type="checkbox" v-model="user.type_7.state" >Mask</label>
                <label><input type="checkbox" v-model="user.type_14.state" >Drawing and Watercolor</label>
                <label><input type="checkbox" v-model="user.type_15.state" >Mixed Media</label>
                <label><input type="checkbox" v-model="user.type_18.state" >Print</label>
                <label><input type="checkbox" v-model="user.type_24.state" >Ritual object</label>
                <button @click="cleanCheckboxes"> Uncheck All </button>
            </div>
            
        </div>
        <div class="artwork-gallery"> 
            <div v-for="artwork in artworksOrganizedData" :key="artwork.id">
            <ArtworkCard
            :title="artwork.title" 
            :artist="artwork.artist_display" 
            :date="artwork.date_display" 
            :image_id="artwork.image_id"
            :artwork_type="artwork.artwork_type_title"
            :artwork_type_id="artwork.artwork_type_id"
            :pictureUrl="artwork.image"/>
            </div> 
        </div> 
        <div v-if="!search" class="gallery-footer">
            <button v-if="page>1" @click="changePage(-1)"> Precedent Page </button>
            <div id="display_current_page"/>
            <button @click="changePage(1)"> Next Page </button>
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
                const field = this.gallerySortType 
                let organizedData = this.artworksData

                let type_id_list = []
                for (let type in this.user) {
                    if (this.user[type].state) 
                        type_id_list.push(this.user[type].type_id);
                }

                const search = this.search.length > 0 ? true : false
                const checkbox = type_id_list.length>0 ? true : false 

                const searchFuncTitle = (a) => a.title.toLowerCase().includes(this.search.toLowerCase())
                const searchFuncArtist = (a) => a.artist_display.toLowerCase().includes(this.search.toLowerCase())
                const filterFuncType = (a) => type_id_list.includes(a.artwork_type_id)

                const comparator = (field == "date_display")? (a,b) => {return a.date_start - b.date_start} : (a,b) => a[field].localeCompare(b[field])
                
                if (search)
                    organizedData = organizedData.filter(searchFuncTitle || searchFuncArtist)
                
                if (checkbox)
                    organizedData = organizedData.filter(filterFuncType)

                organizedData = organizedData.sort(comparator)
                return organizedData
            }
        },
        data() {
            return {
                artworksData: [],
                search: "",
                gallerySortType: "title",
                page: 1,
                user : {
                    type_1: {
                        type_id: 1, state : false
                    }, 
                    type_2: {
                        type_id: 2, state : false
                    }, 
                    type_3: {
                        type_id: 3, state : false
                    }, 
                    type_5: {
                        type_id: 5, state : false
                    }, 
                    type_7: {
                        type_id: 7, state : false
                    }, 
                    type_14: {
                        type_id: 14, state : false
                    }, 
                    type_15: {
                        type_id: 15, state : false
                    },
                    type_18: {
                        type_id: 18, state : false
                    }, 
                    type_24: {
                        type_id: 24, state : false
                    },  
                }
            }
        },
        created: function() {
            this.retrieveArtworksData(this.page)
        },
        methods: {
            async retrieveArtworksData(page) {
                this.artworksData = await getArtworksData(page)
            },
            cleanSearch: function() {
                this.search =""
            },
            changePage: function(sens) {
                this.page += sens
                this.retrieveArtworksData(this.page)
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                document.getElementById("display_current_page").innerHTML = "Page "+this.page
            },
            cleanCheckboxes: function() {
                for (let type in this.user) {
                    this.user[type].state = false;
                }
            },
            filterFuncType: function() {
                
            }
        }
    }

    
</script>

<style>
.gallery-options {
    display: flex;
    flex-flow: row;
    align-content: stretch;
    justify-content: space-around;
    align-items: center;
    margin: 2%;
    font-weight: 600;
    color: #888888;
}

.artworks-type-filters {
    font-weight: 400;
    display: flex;
    flex-flow: column;
    justify-content:space-evenly;
    align-items: flex-start;
}

.artwork-gallery {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}

.gallery-footer {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}

input[type="text"] {
    width: fit-content; 
    background-color: rgba(221, 221, 221, 0.479);
    padding: 10px;
    border: 2px solid #888888;
    border-radius: 5%;
}

#reset_search_button {
    font-weight: 600;
    color: #888888;
    border: 2px solid #888888;
    border-radius: 30%;
}

</style>