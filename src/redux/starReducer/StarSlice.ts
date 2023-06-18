import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Stars {
    name: string
    abilities: [],
    id: number,
    moves: [],
    sprites: {},
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

const initialState: Stars[] = []

export const pokeStars = createSlice({
    name: 'stars',
    initialState: initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Stars>) => {
            return [...state, action.payload]
        }
    }
})

export const {addFavorite} = pokeStars.actions

export default pokeStars.reducer