import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PokemonData {
    name?: string
    abilities?: [],
    id?: number,
    moves?: [],
    sprites?: {
        back_default?: string,
        back_female?: string,
        back_shiny?: string,
        back_shiny_female?: string,
        front_default?: string,
        front_female?: string,
        front_shiny?: string,
        front_shiny_female?: string,
    },
    forms?: [],
    heldItems?: [],
    isDefault?: boolean,
    locationAreaEncounters?: string,
    order?: number,
    pastTypes?: [],
    species?: {},
    stats?: [{}],
    types?: [{}],
    height?: number,
    weight?: number,

}

const initialState: PokemonData[] = []

export const pokeStars = createSlice({
    name: 'stars',
    initialState: initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<PokemonData>) => {
            return [...state, action.payload]
        }
    }
})

export const {addFavorite} = pokeStars.actions

export default pokeStars.reducer