import React, { Component } from "react";
import { Link } from "react-router-dom";
import buck from "../../imgs/default.jpg"
import styles from "./carde.module.css"

export class Carde extends Component {
  render() {
    return (
      <>
        <Link to={`/pokemons/${this.props.id}`} className={styles.pokenames} >
          <h3 className={styles.pokenames}>{this.props.name}</h3>
        </Link>
        <div>
        {this.props.id.length > 4 ? (
        <div>
        <img src={buck} alt="xd"/>
        </div>
        ): (<img src={`${this.props.sprite}`} alt="xd"/>) }
        </div>
        <p className={styles.poketext}>Types: {this.props.types}</p>
      </>
    );
  }
}
