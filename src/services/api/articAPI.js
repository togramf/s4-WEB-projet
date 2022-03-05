
// let text =
//     '[{"id":45, "name":"Pluto", "breed":"Saint-Hubert",
//     "picture":"https://my-best-kennel.com/pictures/45.png},' +
//     '{"id":46, "name":"Rex", "breed":"Labrador",
//     "picture":"https://my-best-kennel.com/pictures/46.png"}]';
// const dogData = JSON.parse(text);

const getArtworksData =
    async function() {
  // récupération une seule oeuvre
  // const response = await
  // fetch('https://api.artic.edu/api/v1/artworks/129884');

  // récupération 10 oeuvres
  const response =
      await fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=10');
  if (response.status == 200)
    return await response.json();
  else
    return Error(response.statusText)
}

export default getArtworksData