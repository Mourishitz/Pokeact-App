import axios from "axios"
import Core from "../Core";
import * as React from 'react'
import { useState, useEffect } from "react"
import {Skeletons} from "../../components/Skeletons";
import {Grid} from "@mui/material";
import PokemonCard from "../../components/PokemonCard";


export default function Home() {
    const [pokemons, setPokemons] = useState<any[]>([])

    useEffect(()=>{
            getPokemons()
        }, []
    )

    const getPokemons = () => {
        let endpoints = []
        for (let i = 1; i < 100; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoints) => axios.get(endpoints))).then((res: any[]) => {
            setPokemons(res);
        })
    }

    return (
        <Core>
            <Grid container spacing={0}>
            {pokemons.length === 0 ? (
                <Skeletons />
            ) : (
                pokemons.map((pokemon, key) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={key} className="cardDisplay">
                        <PokemonCard
                            name={pokemon.data.name}
                            image={pokemon.data.sprites.front_default}
                            types={pokemon.data.types}
                            id={pokemon.data.id}/>
                    </Grid>
                ))
            )}
            </Grid>
        </Core>
    )
}
