//import redux toolkit
import { configureStore } from "@reduxjs/toolkit";
//import task reducer
import gameReducer from "./game";
// The configureStore function to setup store with relevent settings
const store =  configureStore({
    reducer: {
        game: gameReducer,
    },
});
//export store to be used in index.js
export default store