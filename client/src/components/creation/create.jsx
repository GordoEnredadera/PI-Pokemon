import React, { useState, useEffect } from "react";
import { createPokemon, getTypes } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "../creation/create.module.css"
import background from "../../imgs/vapovapo.gif"
import Nav from "../nav/nav";

export const Create = () => {
    const typess = useSelector((state)=> state.types)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTypes())
    }, [dispatch])
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        img: "",
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
      });

      const constantinopla = () =>{
        let erore = {}
        if(!input.name){
            erore.name = "Ponele nombre"
        }
        if(input.health>255){
            erore.health = "fua re tanque el wachin"
        }
        if(input.attack>255){
            erore.attack = "no te zarpes"
        }
        if(input.defense>255){
            erore.defense = "... es joda?"
        }
        if(input.speed>255){
            erore.speed = "gotta go fast!! xdxd"
        }
        if(input.height>255){
            erore.height = "no."
        }
        if(input.weight>255){
            erore.weight = "se muere a los 40"
        }
        if(input.types.length>2){
            erore.types = "arceus?"
        }
        return erore
      }

      const miaumiau = (e)=>{
        if (input.types.length < 2) {
            setInput({
              ...input,
              types: [...input.types, e.target.value],
            });
          } else {
            alert("arceus?");
          }
      }

      const del = (e) =>{
        setInput({
            ...input,
            types: input.types.filter((type) => type !== e),
          });
      }

    const poopityscoop = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
          });
        setErrors(
            constantinopla({
            ...input,
            [e.target.name]: e.target.value
        })
        )
    }

    const submitcreation = (e) =>{
        e.preventDefault();
    if (Object.values(errors).length > 0 || input.name === "") {
      alert("Please fill the required Fields!");
    } else {
      dispatch(createPokemon(input));
      alert("Pokemon Created!!");
      setInput({
        name: "",
        health: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      });
    }
 }





    return (
        <>
        
        <Nav/>
        <form>
          <label>Name: </label>
          <input type="text"
                 value={input.name}
                 placeholder="Completar Campo"
                 name="name"
                 onChange={(xd)=>poopityscoop(xd)}/>
                 {errors.name && <p>{errors.name}</p>}
          <label>Health: </label>
          <input type="number"
                 value={input.health}
                 placeholder="Completar Campo"
                 name="health"
                 onChange={(xd)=>poopityscoop(xd)}/>
                 {errors.health && <p>{errors.health}</p>}
          <label>Attack: </label>
          <input type="number"
                 value={input.attack}
                 placeholder="Completar Campo"
                 name="attack"
                 onChange={(xd)=>poopityscoop(xd)}/>
                 {errors.attack && <p>{errors.attack}</p>}
          <label>Defense: </label>
          <input type="number"
                 value={input.defense}
                 placeholder="Completar Campo"
                 name="defense"
                 onChange={(xd)=>poopityscoop(xd)}/>
                 {errors.defense && <p>{errors.defense}</p>}
          <label>Speed: </label>
          <input type="number"
                 value={input.speed}
                 placeholder="Completar Campo"
                 name="speed"
                 onChange={(xd)=>poopityscoop(xd)}/>
                 {errors.speed && <p>{errors.speed}</p>}
          <label>Height: </label>
          <input type="number"
                 value={input.height}
                 placeholder="Completar Campo"
                 name="height"
                 onChange={(xd)=>poopityscoop(xd)}/>
                 {errors.height && <p>{errors.height}</p>}
          <label>Weight: </label>
          <input type="number"
                 value={input.weight}
                 placeholder="Completar Campo"
                 name="weight"
                 onChange={(xd)=>poopityscoop(xd)}/>
                 {errors.weight && <p>{errors.weight}</p>}
          <label>Select Types: </label>
          <div>
            {typess.length > 0? (
                <select name="Type" onChange={(e)=> miaumiau(e)}>
               
            {typess.map((x)=>{
            return (
                  <option value={x}>{x}</option>
            )    
          })}
          {errors.name && <p>{errors.name}</p>}
          </select>
          ): <option value="cancer"></option> }
          </div>
          <div>
            {input.types.map((e)=>{
                return(
                    <div>
                        <h3>{e}</h3>
                        <button
                        onClick={()=>del(e)}
                        />
                    </div>
                )
            })}
          </div>
          <button type="submit"
          onClick={(e)=> submitcreation(e)}
          >Create</button>
        </form>
        <img src={background} alt="lole"/>
        
        </>
      );
         
}