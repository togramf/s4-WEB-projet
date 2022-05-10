<template>
    <div class="gallery">
        <div class="gallery-options">
            <input type="text" v-model="search" placeholder="Search for an artwork or an artist">
            <button id="reset_search_button" v-if="search" @click="cleanSearch">X</button>
            <label for="artworks-sort"> Sort by: 
                <select v-model="gallerySortType" id="artworks-sort">
                    <option value="title"> By title </option>
                    <option value="date_display"> By date </option>
                    <option value="artist_display"> By artist </option>
                </select>
            </label>
            <label> Number of artworks to display: 
                <input id="input_nb_artworks" type="number" value="40" min="10" max="100" step="5" @change="changeNumberArtworks">
            </label>
            <div v-if="!search" class = "artworks-type-filters"> 
                <div id="checkboxes_list" >
                    <label v-for='artwork_type in this.artworkTypesData' :key="artwork_type.type_title"><input type="checkbox" v-model="artwork_type.state" >{{artwork_type.type_title}}</label>
                </div>
                <button id="uncheck_button" @click="cleanCheckboxes"> Uncheck All </button>
                <button id="print_types" @click="printCheckboxes"> Print State </button>
                
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

                let type_title_list = []
                for (let artwork_type in this.artworkTypesData) {
                    if (this.artworkTypesData[artwork_type].state == true) {
                        type_title_list.push(this.artworkTypesData[artwork_type].type_title);
                    }    
                }

                const search = this.search.length > 0 ? true : false
                const checkbox = type_title_list.length > 0 ? true : false 

                const searchFuncTitle = (a) => a.title.toLowerCase().includes(this.search.toLowerCase())
                const searchFuncArtist = (a) => a.artist_display.toLowerCase().includes(this.search.toLowerCase())
                const filterFuncType = (a) => type_title_list.includes(a.artwork_type_title)

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
                artworkTypesData: {},
                search: "",
                gallerySortType: "title",
                page: 1,
                numberArtworks: 40
            }
        },
        created: function() {
            this.retrieveArtworksData(this.page, this.numberArtworks)
        },
        methods: {
            async retrieveArtworksData(page, nb_Artworks) {
                this.artworksData = await getArtworksData(page, nb_Artworks)
                this.updateArtworkTypesData()
            },
            updateArtworkTypesData: function() {
                this.artworkTypesData = {}
                
                for (let index=0; index<this.numberArtworks; index++){
                    let type_id = this.artworksData[index].artwork_type_id
                    let type_is_in_list = false
                    for (let type in this.artworkTypesData){
                        if (type == type_id)
                            type_is_in_list = true
                    }

                    if (!type_is_in_list)
                        this.artworkTypesData[type_id]=({type_title: this.artworksData[index].artwork_type_title, state: false})
                }
            },
            cleanSearch: function() {
                this.search =""
            },
            changeNumberArtworks: function(){
                // this.numberArtworks = localStorage.setItem("numberArtworks", document.getElementById("input_nb_artworks").value) 
                this.numberArtworks = document.getElementById("input_nb_artworks").value
                this.retrieveArtworksData(this.page, this.numberArtworks)
            },
            changePage: function(sens) {
                this.page += sens
                this.retrieveArtworksData(this.page, this.numberArtworks)
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                document.getElementById("display_current_page").innerHTML = "Page "+this.page
            },
            cleanCheckboxes: function() {
                for (let type in this.artworkTypesData) {
                    this.artworkTypesData[type].state = false;
                }
            },
            printCheckboxes: function(){
                console.log(this.artworkTypesData)
                for (let artwork_type in this.artworkTypesData) {
                    // console.log(artwork_type)
                    if (this.artworkTypesData[artwork_type].state == true) {
                        console.log(artwork_type);
                    }    
                }
            }
                
        
        }
        // watch: {
        //     numberArtworks: function(newNumber) {
        //         localStorage.setItem("numberArtworks", newNumber)
        //     }
        // }
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

input[type=number]::-webkit-inner-spin-button {
    opacity: 1;
    background-color: rgba(221, 221, 221, 0.479);
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