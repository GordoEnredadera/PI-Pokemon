const { Router } = require('express');
const { Types, Pokemon } = require("../db.js");
const axios = require("axios");
const { where } = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokeID = async (id) =>{
    try {
        const pokeById = await addNiggas();
        const pokancer = pokeById.filter((pika)=> {
            if(pika.id==id){
                return true
            }
            return false
        })

        console.log(pokancer)
        return pokancer
    } catch (error) {
        return "no anda"
    }
}

const bringPoke = async () =>{
    try {
        const PokeApixdd = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=251");
        const pikapika = PokeApixdd.data.results.map((lole)=>{
            return lole.url
        });

        const carlitos = await axios.all(pikapika.map((xd)=>axios.get(xd)));

        const lopokemone = carlitos.map((miau)=>{
            return{
                id: miau.data.id,
                name: miau.data.name,
                life: miau.data.stats[0].base_stat,
                attack: miau.data.stats[1].base_stat,
                defense: miau.data.stats[2].base_stat,
                speed: miau.data.stats[5].base_stat,
                height: miau.data.height,
                weight: miau.data.weight,
                sprite: miau.data.sprites.other["official-artwork"].front_default,
                types: miau.data.types.length < 2
                ? [miau.data.types[0].type.name]
                : [miau.data.types[0].type.name, miau.data.types[1].type.name]
            }
        })
        return lopokemone
    } catch (error) {
        return "lpm"
    }
}

const findRetard = async (name) => {
    try {
        const pokeByName = await addNiggas();
        const pokancer = pokeByName.filter((pika)=> {
            if(pika.name==name){
                return true
            }
            return false
        })

        console.log(pokancer)
        return pokancer
    } catch (error) {
        return "no anda"
    }
}

const getTypes = async () => {
    const tip = await axios.get("https://pokeapi.co/api/v2/type");
    const xd = tip.data.results.map((t)=>{
        return t.name
    })
    xd.map((types)=>
    Types.findOrCreate({
        where:{
            types: types,
        }}
    ))
}

const getTaips = async () =>{
    const getTypes = await Types.findAll()
    
    const miau = getTypes.map((t)=>{
        return t.types
            
        
    })
    return miau

  
}


const createTard = async (name, life, attack, defense, speed, height, weight, types) => {
    try {
        const pika = await Pokemon.create({name, life, attack, defense, speed, height, weight, types})
        const getTypes = await Types.findAll({where:{types:types,},})
        await pika.addTypes(getTypes)
    } catch (error) {
        return "no"
    }
}

const alldbdata = async()=>{
    try {
      return await Pokemon.findAll({
        include:{
        model:Types,
        props:["name"],
        through:{
          props:[],
        }
      },
    });
    } catch (error) {
      return error
    }
  }

// const findTard2 = async(name)=>{
//     const xd = await alldbdata()
//     const moew = xd.filter(meow=>{
//         if(meow.name===name){
//           return meow
//         }
//     })
//     let xdxd=[]
//     return moew.map((x)=>{
//         x.types.map(x=>{if(x.types) xdxd.push(x.types)})
//         return {
//             id: x.id,
//             name: x.name,
//             life: x.life,
//             attack: x.attack,
//             defense: x.defense,
//             speed: x.speed,
//             height: x.height,
//             weight: x.weight,
//             types: xdxd
//         }
//     })
// }

const addNiggas = async()=>{
    const niggas = await bringPoke()
    const bitches = await alldbdata()
    const cancer = bitches.map((x)=>{
        return {
            id: x.id,
            name: x.name,
            life: x.life,
            attack: x.attack,
            defense: x.defense,
            speed: x.speed,
            height: x.height,
            weight: x.weight,
            types: x.types.length < 2
            ? [x.types[0].types]
            : [x.types[0].types, x.types[1].types]
            
        }
    })
    
    const res = [...niggas, ...cancer]
    return res
}


const router = Router();

router.get("/pokemons", async (req, res)=>{
    try {
        if(req.query.name){
            const NiggaSearch = await findRetard(req.query.name)
            if(!NiggaSearch[0]){
                return res.status(400).send({error:"No esta el bicho"})
            }else{
                return res.status(200).send(NiggaSearch)
            }
        }
        return res.status(200).send(await addNiggas())
        }
     catch (error) {
        return res.status(400).send(error)
    }
})

router.get("/types", async (req, res)=>{
    try {
        res.status(200).send(await getTaips())
    } catch (error) {
        
    }
})

router.get("/pokemons/:id", async (req, res) => {
    try {
      return res.status(200).send(await pokeID(req.params.id));
    } catch (error) {
      return error;
    }
  })
getTypes()
  router.post("/pokemons", async (req, res) =>{
    try {
        const {name, life, attack, defense, speed, height, weight, types} = req.body
        return res.status(201).send(createTard(name, life, attack, defense, speed, height, weight, types))
    } catch (error) {
        
    }
  })

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
