import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PokemonData {
    name: string
    abilities: [],
    id: number,
    moves: [],
    sprites: {
        backDefault: string,
        frontDefault: string
    },
    forms?: [],
    heldItems?: [],
    isDefault: true,
    locationAreaEncounters?: string,
    order?: number,
    pastTypes?: [],
    species?: {},
    stats?: [],
    types: [],
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