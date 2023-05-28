const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));
  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons()
    .sort(() => Math.random() - 0.5)
    .splice(0, 4);

  const namesList = await getPokemonsName(mixedPokemons);
  return namesList;
};

interface ArrPokemonNames {
  name: string;
  id: number;
}
const getPokemonsName = async (pokemons: number[] = []) => {
  const nameList: Promise<ArrPokemonNames>[] = await pokemons.map(
    async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const jsonData = await response.json();
      return { name: jsonData.name, id: jsonData.id };
    }
  );

  return await Promise.all(nameList);
};

export default getPokemonOptions;
