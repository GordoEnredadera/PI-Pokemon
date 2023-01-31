import React from "react"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Nav from "../nav/nav"
import { getTypes,
  getAllPokemons,
  filterByApiOrDb,
  filterByAttack,
  filterByName,
  filterByTypes, } from "../../redux/actions"
import { Carde } from "../carde/carde"
import loading from "../../imgs/loading.gif"
import styles from "../home/home.module.css"
import Pagination from "../pg/pagination"

export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const types = useSelector((state) => state.types);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const [renderPage, setRenderPage] = useState();
    const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const currentPokemon = allPokemons.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );
  
    //-------------UseEffect---------------//
  
    useEffect(() => {
      dispatch(getTypes())
      dispatch(getAllPokemons());

    }, [dispatch]);
    
  const handleFilterByAttack = (e) => {
    e.preventDefault();
    dispatch(filterByAttack(e.target.value));
    setRenderPage(e.target.value);
  }

  const handleFilterByName = (e) => {
    e.preventDefault();
    console.log(allPokemons);
    dispatch(filterByName(e.target.value));
    console.log(allPokemons);
    setRenderPage(e.target.value);
  }
  const handleFilterByTypes = (e) => {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
    setRenderPage(e.target.value);
  }

  const handleFilterByApiOrDb = (e) => {
    e.preventDefault();
    dispatch(filterByApiOrDb(e.target.value));
    setRenderPage(e.target.value);
  }

  const filtersOff = (e)=>{
    e.preventDefault()
    dispatch(getAllPokemons())
    setRenderPage(e.target.value)
  }

  

    return (
      <body className={styles.wall}>
        
      
      <div >
        <Nav/>
        <div>
        <select  
        id="valueFiltersAZ"
        onChange={(e) => handleFilterByName(e)}>
          <option value="default" hidden>
            -Alphabetic Selection-
          </option>
          <option value="A-Z"> A-Z </option>
          <option value="Z-A"> Z-A </option>
        </select>
        <div>
        <select  
        id="valueFiltersType"
        autoComplete="off"
        onChange={(e) => handleFilterByTypes(e)}>
          <option defaultValue="Seleccion de tipos" hidden>-Select Types-</option>
          <option value="Todos">All </option>
           {types &&
              types.map((poketypes) => (
            <option value={poketypes} key={poketypes}>
            {poketypes}
            </option>
        ))}
        </select>
        </div>
        <div>
          <select 
          id="valueFiltersAt"
          autoComplete="off"
          onChange={(e) => handleFilterByAttack(e)}>
            <option 
            defaultValue="-Mayor/Menor Ataque-"
            value="default"
            hidden>
              -Sort by Attack-
            </option>
            <option value="ascendente"> Highest ATK </option>
            <option value="descendente"> Lowest ATK </option>
          </select>
        </div>
        <div>
          <select
          id="valueFiltersADB"
          autoComplete="off"
          onChange={(e) => handleFilterByApiOrDb(e)}>
            <option 
            defaultValue="-Existentes/Creados-"
            value="default"
            hidden>
              -API or DB-
            </option>
            <option value="Todos"> All </option>
            <option value="API"> API </option>
            <option value="Database"> DB </option>
          </select>
        </div>
        <div>
              <button onClick={(e)=>filtersOff(e)}>
                Turn off Filters
              </button>
        </div>

        </div>

        <Pagination
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons?.length}
        pagination={pagination}
        />
        {allPokemons && allPokemons !== "NO POKEMONS" ? (
          <div className="Container">
            <div>
            </div>
            <br />
            <br />
            <div>
              {currentPokemon?.map((p) => {
                return (
                   <Carde {...p}/> 
                );
              })}
            </div>
          </div>
        ) : (
            <img src={loading} className={styles.poke} alt="xd"/>
        )}
      </div>
      </body>
    );
  }






// export default Home