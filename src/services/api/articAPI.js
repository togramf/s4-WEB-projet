
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

// Récupération 10 oeuvres, seulement les fields intéressants
const getArtworksData =
    async function() {
  const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,image_id&query[term][is_public_domain]=true&page=2&limit=40');
  if (response.status == 200)
    return await response.json();
  else
    return Error(response.statusText)
}

export default getArtworksData