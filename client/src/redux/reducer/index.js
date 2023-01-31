import {
    GET_POKEMONS,
    GET_POKEMON_BY_ID,
    GET_POKEMON_BY_NAME,
    POST_CREATE_POKEMON,
    GET_TYPES,
    FILTER_BY_API_DB,
    FILTER_BY_ATTACK,
    FILTER_BY_NAME,
    FILTER_BY_TYPES,
  } from "../actions";
  
  
  const initialState = {
    allPokemons: [],
    pokemon: {},
    pokemons: [],
    types: [],
    filter: [],
    newPokemon: [],
  };
  
  const reducer = (state = initialState, action) => {
    const pokeCopy = state.allPokemons;
    switch (action.type) {
      case GET_POKEMONS: //get all pokemons
        return {
          ...state,
          allPokemons: action.payload,
          pokemons: action.payload,
          pokemon: {},
        };
      case GET_POKEMON_BY_ID: //get by id
  
  
        return {
          ...state,
          pokemon: action.payload,
        };
      case GET_POKEMON_BY_NAME: //get by names
        return {
          ...state,
          pokemons: action.payload,
          pokemon: action.payload, //CONFIRMAR???
        };
  
      case GET_TYPES: //get types
      const typess = action.payload.map((pok)=> pok)
        return {
          ...state,
          types: typess,
        };
      case POST_CREATE_POKEMON: //create pokemon
        return {
          ...state,
          newPokemon: action.payload,
        };
      case FILTER_BY_TYPES:
        if (!state.filter[0]) {
          let pokemons = pokeCopy;
          const typePokemons =
            action.payload === "Todos"
              ? pokemons
              : pokemons.filter(
                  (e) =>
                    e.types.map((type) => type)[0] === action.payload ||
                    e.types.map((type) => type)[1] === action.payload
                );
  
          return {
            ...state,
            pokemons: typePokemons,
          };
        } else {
          // let pokemons = pokeCopy;
          let pokemonsFilterDb = state.filter;
          const typePokemonsDb =
            action.payload === "Todos"
              ? pokemonsFilterDb
              : pokemonsFilterDb.filter(
                  (e) =>
                    e.types.map((type) => type)[0] === action.payload ||
                    e.types.map((type) => type)[1] === action.payload
                );
          return {
            ...state,
            pokemons: typePokemonsDb,
          };
        }
      case FILTER_BY_NAME:
        const PokemonFilteredByName =
          action.payload === "A-Z"
            ? state.pokemons.sort((a, z) => {
                if (a.name.toLowerCase() > z.name.toLowerCase()) return 1;
                if (z.name.toLowerCase() > a.name.toLowerCase()) return -1;
                return 0;
              })
            : state.pokemons.sort((a, z) => {
                if (a.name.toLowerCase() > z.name.toLowerCase()) return -1;
                if (z.name.toLowerCase() > a.name.toLowerCase()) return 1;
                return 0;
              });
  
        return {
          ...state,
          pokemons: PokemonFilteredByName,
        };
      case FILTER_BY_ATTACK:
        const PokemonsFilteredByAttack =
          action.payload === "ascendente"
            ? state.pokemons.sort((h, l) => {
                if (h.attack > l.attack) return -1;
                if (l.attack > h.attack) return 1;
                return 0;
              })
            : state.pokemons.sort((h, l) => {
                if (h.attack > l.attack) return 1;
                if (l.attack > h.attack) return -1;
                return 0;
              });
  
        return {
          ...state,
          pokemons: PokemonsFilteredByAttack,
        };
      case FILTER_BY_API_DB:
        const filtrado =
          action.payload === "Database"
            ? state.allPokemons.filter((el) => typeof el.id !== "number")
            : state.allPokemons.filter((el) => typeof el.id === "number");
        const filterDb =
          action.payload === "Todos" ? state.allPokemons : filtrado;
        console.log("Que tiene adentro filter?", filterDb);
        return {
          ...state,
          pokemons: action.payload === "Todos" ? state.allPokemons : filtrado,
          filter: filterDb,
        };
      default:
        return state;
    }
  };
  
  export default reducer;