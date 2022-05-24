<template>
    <div class="sorting-options">
        <label for="artworks-sort"> Sort by: 
            <select :value="gallerySortType" @input="emitSortType" id="artworks-sort">
                <option value="title"> By title </option>
                <option value="date_display"> By date </option>
                <option value="artist_display"> By artist </option>
            </select>
        </label>
    </div>
</template>

<script>

export default {
    name:'SortingOptions',
    props: {
        gallerySortType: {type: String, required: true}
    },
    methods: {
        emitSortType: function(event) {
            this.$emit("update:gallerySortType", event.target.value)
        }
    }
}
</script>

<style>

</style>