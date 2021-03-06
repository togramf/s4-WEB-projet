<template>
    <div class="gallery">
        <div class="gallery-options">
            <div v-if="!search" class = "filters-options"> 
                <div id="checkboxes_list" >
                    <label v-for='artworkType in this.artworkTypesData' :key="artworkType.type_title">
                        <input type="checkbox" v-model="artworkType.state" >{{artworkType.type_title}}
                    </label>
                </div>
                <button id="uncheck_button" @click="cleanCheckboxes"> Uncheck All </button>
            </div>
            <SortingOptions :gallerySortType.sync="gallerySortType"/>
            <SearchBar :search.sync="search"/>
            <label> Number of artworks to display: 
                <input id="input_nb_artworks" type="number" v-model="numberArtworks" min="10" max="100" step="5">
            </label>
        </div>

        <ArtworkDetailsCard id="artwork_details_card" :show.sync="showOverlay" :detailedArtworkData="detailedArtworkData"
            />
        
        <div class="artwork-gallery"> 
            <div v-for="artwork in artworksOrganizedData" :key="artwork.id" @click="moreInformation(artwork.id)">
                <ArtworkCard
                    :title="artwork.title" 
                    :artist="artwork.artist_display" 
                    :date="artwork.date_display" 
                    :imageId="artwork.image_id"
                    :pictureUrl="artwork.image"/>
            </div> 
        </div> 
        
        <div v-if="!search" class="gallery-pagination">
            <Pagination :maxVisibleButtons="4" :currentPage="currentPage" @pagechanged="changePage"/>
        </div>
    </div>
</template>

<script>
    import ArtworkCard from './ArtworkCardComponent.vue'
    import ArtworkDetailsCard from './ArtworkDetailsComponent.vue'
    import getArtworksData from '@/services/api/articAPI.js'
    import SearchBar from './SearchbarComponent.vue'
    import SortingOptions from './SortingOptionsComponent.vue'
    import Pagination from './PaginationComponent.vue'

    export default {
        name: 'ArtworksGallery',
        components: {
            ArtworkCard,
            ArtworkDetailsCard,
            SearchBar,
            SortingOptions,
            Pagination
        },
        computed:{ 
            artworksOrganizedData: function(){
                const field = this.gallerySortType 
                let organizedData = this.artworksData

                let typeTitleList = []
                this.artworkTypesData.forEach(artworkType => {
                    if (artworkType.state == true)
                        typeTitleList.push(artworkType.type_title); 
                });
                
                const search = this.search.length > 0 ? true : false
                const checkbox = typeTitleList.length > 0 ? true : false 

                const searchFuncTitle = (a) => a.title.toLowerCase().includes(this.search.toLowerCase())
                const searchFuncArtist = (a) => a.artist_display.toLowerCase().includes(this.search.toLowerCase())
                const filterFuncType = (a) => typeTitleList.includes(a.artwork_type_title)

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
                artworkTypesData: [],
                search: localStorage.getItem("search") || "",
                gallerySortType: localStorage.getItem("gallerySortType") || "title",
                currentPage: 1,
                numberArtworks: localStorage.getItem("numberArtworks") || 40,
                showOverlay: false,
                detailedArtworkData: []
            }
        },
        created: function() {
            this.retrieveArtworksData(this.currentPage, this.numberArtworks)
        },
        watch: {
            numberArtworks: function(newNumberArtworks) {
                localStorage.setItem("numberArtworks", newNumberArtworks)
                this.retrieveArtworksData(this.currentPage, this.numberArtworks)
            }
        },
        methods: {
            async retrieveArtworksData(page, nb_artworks) {
                this.artworksData = await getArtworksData(page, nb_artworks)
                this.updateArtworkTypesData()
            },
            updateArtworkTypesData: function() {
                this.artworkTypesData = []
                let artworkTypesId = []
                
                for (let index=0; index<this.numberArtworks; index++){
                    let typeId = this.artworksData[index].artwork_type_id           

                    if (!artworkTypesId.includes(typeId)){
                        this.artworkTypesData.push({type_id: typeId, type_title: this.artworksData[index].artwork_type_title, state: false})
                        artworkTypesId.push(typeId)
                    }
                }
            },
            changePage(page) {
                this.currentPage = page;
                this.retrieveArtworksData(this.currentPage, this.numberArtworks)
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            },
            cleanCheckboxes: function() {
                for (let type in this.artworkTypesData) {
                    this.artworkTypesData[type].state = false;
                }
            },
            async moreInformation(artwork_id)  {
                this.detailedArtworkData = await getArtworksData(artwork_id, 1)
                this.showOverlay = true;
            }, 
            print: function (value){
                console.log(value)
            }         
        }
    }
</script>

<style>
.gallery-options {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-around;
    align-items: center;
    margin: 2%;
    font-weight: 600;
    color: #888888;
}

.filters-options {
    background-color: rgba(221, 221, 221, 0.479);
    border: 2px solid #888888;
    padding: .5vw;
    margin: .5vw;
    font-weight: 400;
    display: flex;
    flex-flow: column;
    justify-content:space-evenly;
    align-items: flex-start;
}

#checkboxes_list {
    max-height: 10vh;
    width: 85vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
}

.artwork-gallery {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}

.gallery-pagination {
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

</style>