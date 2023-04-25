async function getPokemon(pokemonId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    try {
        const pokemon = await fetch(apiUrl)
        return await pokemon.json()
    } catch (error) {
        //handle error
    }
}

module.exports = getPokemon;
