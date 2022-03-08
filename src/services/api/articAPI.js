
// let text =
//     '[{"id":45, "name":"Pluto", "breed":"Saint-Hubert",
//     "picture":"https://my-best-kennel.com/pictures/45.png},' +
//     '{"id":46, "name":"Rex", "breed":"Labrador",
//     "picture":"https://my-best-kennel.com/pictures/46.png"}]';
// const dogData = JSON.parse(text);

// const getArtworkData =
//     async function() {
//   // récupération une seule oeuvre
//   const response = await
//   fetch('https://api.artic.edu/api/v1/artworks/129884'); if (response.status
//   == 200)
//     return await response.json();
//   else
//     return Error(response.statusText)
// }

// récupération 10 oeuvres, seulement les fields intéressants
const getArtworksData =
    async function() {
  const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,image_id&query[term][is_public_domain]=true&page=2&limit=10');
  if (response.status == 200)
    return await response.json();
  else
    return Error(response.statusText)
}

export default getArtworksData