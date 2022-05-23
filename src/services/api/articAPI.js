
// Récupération 1 seule oeuvre, tous les champs
const fetchArtwork =  async function(id) {
  const response = await fetch('https://api.artic.edu/api/v1/artworks/' + id);
  if (response.status == 200)
    return await response.json();
  else
    return Error(response.statusText)
}

// Récupération n oeuvres, seulement les champs intéressants
const fetchArtworks = async function(page, nb_artworks) {
  const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_start,date_display,image_id,artwork_type_title,artwork_type_id&query[term][is_public_domain]=true&page=' +
      page + '&limit=' + nb_artworks);
  if (response.status == 200)
    return await response.json();
  else
    return Error(response.statusText)
}

const getArtworksData = async function(page_or_id, nb_artworks) {
  if (nb_artworks > 1) {
    const artworks = await fetchArtworks(page_or_id, nb_artworks)
    return artworks.data;
  } else {
    const artwork = await fetchArtwork(page_or_id)
    return artwork.data;
  }
}

export default getArtworksData