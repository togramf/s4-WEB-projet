let text = '[{"id":45, "name":"Pluto", "breed":"Saint-Hubert", "picture":"https://my-best-kennel.com/pictures/45.png},'+
    '{"id":46, "name":"Rex", "breed":"Labrador", "picture":"https://my-best-kennel.com/pictures/46.png"}]';

const dogData = JSON.parse(text); 

export default {
    methods: { 
        getDogsData() {
            return dogData
        }
    }
}