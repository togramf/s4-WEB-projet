
// Récupération 1 seule oeuvre
// const getArtworkData =
//     async function() {
//   const response = await
//   fetch('https://api.artic.edu/api/v1/artworks/129884'); if (response.status
//   == 200)
//     return await response.json();
//   else
//     return Error(response.statusText)
// }

// Récupération n oeuvres, seulement les fields intéressants
const getArtworks =
    async function(page) {
  const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_start,date_display,image_id,artwork_type_title,artwork_type_id&query[term][is_public_domain]=true&page='+page+'&limit=40');
  if (response.status == 200)
    return await response.json();
  else
    return Error(response.statusText)
}

const getArtworksData =
    async function(page) {
  const artworks = await getArtworks(page)
  return artworks.data;
}

export default getArtworksData