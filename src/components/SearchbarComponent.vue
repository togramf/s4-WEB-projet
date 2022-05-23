<template>
    <div>
        <input type="text" :value="search" @input="emitSearchState" placeholder="Search for an artwork or an artist">
        <button id="reset_search_button" v-if="search" @click="cleanSearch">X</button>
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        props: {
            search: {type: String, required: true}
        },
        methods: {
            cleanSearch: function() {
                this.$emit("update:search", "")  
            },
            emitSearchState: function(event) {
                this.$emit("update:search", event.target.value)         
            }
        }

    }
</script>

<style>
    #reset_search_button {
        font-weight: 600;
        color: #888888;
        border: 2px solid #888888;
        border-radius: 30%;
    }
</style>