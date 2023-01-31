import React from "react"
import { Link } from "react-router-dom"
import landing from "../../imgs/landing.jpg"
import butt from "../../imgs/buttonhome.gif"
import styles from "./landing.module.css"



const LandingPage = () => {
    return(
        <div>
            <img src={landing} alt="balls" className={styles.poke}/>
            <div>
                <Link to="/home">
                    <img src={butt} alt="xd"  className={styles.ball}/>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage