//Import reduxjs toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedWord:[],
    shownWord:[],
    mistakeCounter:0
}

//Create game slice to handle state of game globally using redix
export const gameSlice = createSlice({
    // This is the name of the slice of state that we will implement in our
    // empty store.
    name: "game",

    // This is the initial state for slice of game. 
    initialState: initialState,

    //The reducer is used to manipulate the initial
    // state or current state.
    reducers: {
        updateSelectedWord: (state,action) => {
            state.selectedWord = action.payload
        },
        updateShownWord: (state,action) => {
            state.shownWord = action.payload
        },
        updateMistakeCounter: (state) => {
            state.mistakeCounter+=1
        },
    },
});

// Action creators are generated for each case reducer function.
export const { updateSelectedWord,updateShownWord,updateMistakeCounter } = gameSlice.actions;

// Exporting the reducer function that needs to be implemented into store.
export default gameSlice.reducer;