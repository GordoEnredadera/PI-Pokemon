// import axios from "axios"
// export const GET_POKE = "GET_POKE"
// export const GET_POKES = "GET_POKES"

// export const allPoke = () => async (dispatch) => {
//     return fetch("http://localhost:3001/pokemons")
//     .then((res) => {res.json()})
//     .then((res) =>  dispatch ({type: GET_POKES, payload: res} ))
// }

// export const pokemonByName = (name) => async (dispatch) => {
//     return await axios.get(`http://localhost:3001/pokemons?name=${name}`)
//     .then((res) =>  dispatch ({type: GET_POKE, payload: res.data} ))
    
// }
import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_ATTACK = "FILTER_BY_ATTACK";
export const FILTER_BY_API_DB = "FILTER_BY_API_DB";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const POST_CREATE_POKEMON = "POST_CREATE_POKEMON";
export const GET_TYPES = "GET_TYPES";


export const getAllPokemons = () => (dispatch) => {
  return fetch("http://localhost:3001/pokemons")
    .then((res) => res.json())
    .then((json) => dispatch({ type: GET_POKEMONS, payload: json }));
};

export const getPokemonByID = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/pokemons/${id}`)
    .then((res) => res.json())
    .then((json) => dispatch({ type: GET_POKEMON_BY_ID, payload: json }));
};

export const getPokemonByName = (name) => (dispatch) => {
  return fetch(`http://localhost:3001/pokemons/?name=${name}`)
    .then((res) => res.json())
    .then((json) => dispatch({ type: GET_POKEMON_BY_NAME, payload: json }));
};

export const createPokemon = (payload) => async (dispatch) => {
  return await axios
    .post("http://localhost:3001/pokemons", payload)
    .then((res) => {
      dispatch({
        type: POST_CREATE_POKEMON,
        payload: res.data,
      });
    });
};

export const getTypes = () => (dispatch) => {
  return fetch("http://localhost:3001/types")
    .then((res) => res.json())
    .then((json) => dispatch({ type: GET_TYPES, payload: json }))
};

export function filterByTypes(payload) {
  return {
    type: FILTER_BY_TYPES,
    payload: payload,
  };
}

export function filterByName(payload) {
  return {
    type: FILTER_BY_NAME,
    payload: payload,
  };
}

export function filterByApiOrDb(payload) {
  return {
    type: FILTER_BY_API_DB,
    payload: payload,
  };
}

export function filterByAttack(payload) {
  return {
    type: FILTER_BY_ATTACK,
    payload: payload,
  };
}