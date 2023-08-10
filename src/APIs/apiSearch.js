export const MarvelHeroes = async (name) => {
  //TOTAL: 1562
  try {
    //FIRST 20 CHARACTERS max:100
    const fetchHero = `https://gateway.marvel.com//v1/public/characters?nameStartsWith=${name}&ts=1&apikey=${
      import.meta.env.VITE_APIKEYMARVEL
    }&hash=${import.meta.env.VITE_HASH}&limit=50`;
    const heroData = await fetch(fetchHero);
    const data = await heroData.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`No se pudieron obtener los datos del personaje ${name} de Marvel.`);
  }
};
