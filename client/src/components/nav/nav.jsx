import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchbar"
import poketto from "../../imgs/poketto.png"
import styles from "./nav.module.css"
// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
class Nav extends Component {
  render() {
    return (
      <>
        <Link to="/home"><img src={poketto} className={styles.home} alt="xd" /></Link>
        <br />
        <SearchBar/>
        <br />
        <Link to="/pokemons/create" className={styles.poketexts}>Create Pokemon</Link>
        <br />
      </>
    );
  }
}

export default Nav;