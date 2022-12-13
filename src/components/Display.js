//Import react
import React from 'react'
//Import css
import '../App.css';

// Importing the useSelector functions to select the required
// slices of state.
import { useSelector} from "react-redux";

//Display component - It displays the letters that user has entered. Hidden letters are displayed as underscore
const Display = () =>{
    // The useSelector function allows us to find the needed slices of state we require.
    const globalState = useSelector((state) => state);
    return (
      <div class="word">
        {/*Dipslay the letters*/}
        <h1>{globalState.game.shownWord.join().replaceAll(","," ")}</h1>
        {/*Dipslay message if game is lost - Gives option to restart game*/}
        {globalState.game.mistakeCounter>=7?<div onClick={()=>window.location.reload(false)} class="notify"><h2>Game Lost - Click here to play again!</h2></div>:null}
        {/*Dipslay message if game is won - Gives option to restart game*/}
        {globalState.game.shownWord.join()===globalState.game.selectedWord.join()?<div class="notify" onClick={()=>window.location.reload(false)} ><h2>Game Won - Click here to play again!</h2></div>:null}
      </div>
    )
} 
//Export to user by other components
export default Display