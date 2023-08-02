export const MarvelChars = async (api) => {
  //TOTAL: 1562
  try {
    //FIRST 20 CHARACTERS max:100
    const firstCharacters = `https://gateway.marvel.com//v1/public/characters?ts=1&apikey=${api}&hash=${
      import.meta.env.VITE_HASH
    }`;
    const charData = await fetch(firstCharacters);
    const data = await charData.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('No se pudieron obtener los datos de los personajes de Marvel.');
  }
};
