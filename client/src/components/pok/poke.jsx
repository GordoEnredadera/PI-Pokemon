import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPokemonByID } from "../../redux/actions"
import { Link, useParams } from "react-router-dom"
import loading from "../../imgs/vapovapo.gif"
import styles from "../pok/poke.module.css"
import buck from "../../imgs/default.jpg"
import home from "../../imgs/poketto.png"

export const PokeDetail = () => {
    const pokeID = useSelector((state)=> state.pokemon)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(()=>{
        dispatch(getPokemonByID(id))
    }, [dispatch, id])
    console.log(pokeID)
    return (
       <div>
      <div>
         { pokeID.length > 0 ? (
          <><div>
            <Link to="/home">
              <img src={home} className={styles.home} alt="lole" />
            </Link>
          </div><div>
              {pokeID[0].id.length > 4 ? (
                <div>
                  <img src={buck} alt="xd" />
                </div>
              ) : (<img className={styles.pokeimage} src={`${pokeID[0].sprite}`} alt="xd" />)}
              <h3>
              ID:{" "}
              {pokeID[0].id.length > 5
                ? pokeID[0].id.slice(0, 3)
                : pokeID[0].id}
            </h3>
              <p>Name: {pokeID[0].name}</p>
              <p>Health: {pokeID[0].life}</p>
              <p>Attack: {pokeID[0].attack}</p>
              <p>Defense: {pokeID[0].defense}</p>
              <p>Speed: {pokeID[0].speed}</p>
              <p>Height: {pokeID[0].height}</p>
              <p>Weight: {pokeID[0].weight}</p>
              <h3>
              Types:{" "}
              {pokeID[0].id.length > 5
                ? pokeID[0].types.map((type) => type + " ")
                : pokeID[0].types + " "}
            </h3>
            </div></>
        ) : (<img src={loading} className={styles.poke} alt="xd"/>)}
      </div>
      </div>
     
    );
  };