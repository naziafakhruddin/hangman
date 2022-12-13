//Import react
import React from 'react'
//Import css
import '../App.css';

// Importing the useSelector and useDispatch functions to select the required
// slices of state.
import { useSelector, useDispatch } from "react-redux";

// Importing the action creators we’ve implemented in our counter reducer.
import { updateShownWord,updateMistakeCounter } from "../store/game";

//Keyboard component shows alphbet keys to input letters
const Keyboard = () =>{
    //Define and initialise an array of alphabets (capital letters from A to Z)
    const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));

    // The useSelector function allows us to find the needed slices of state we require.
    const globalState = useSelector((state) => state);
    // Initiating the dispatch variable using the useDispatch function.
    const dispatch = useDispatch();

    //event handler for keyboard
    const userInput = (inputLetter)=>{
        //increment global mistake counter if letter is not found in the selected word
        if(!globalState.game.selectedWord.includes(inputLetter.letter)){
            dispatch(updateMistakeCounter())
        }

        //create a local/temp array of global state array shownWord so it can be changed
        let updatedShownWord = [...globalState.game.shownWord]
        //loop through local/temp array
        globalState.game.selectedWord.map((letter,i)=>{
            //update update temp array if letter is found
            if(letter === inputLetter.letter){
            updatedShownWord[i] = letter
            }
            return 0
        })
        //update global state array shownWord
        dispatch(updateShownWord(updatedShownWord))
    }    

    return (
            <div class="board">
                {/*Use map to display all the keys for user to input letters*/}
                { alphabet.map((letter)=>{return <button class="keys" key={letter} onClick={()=>userInput({letter})}>{letter}</button>})}
            </div>
    )
} 
//Export it so it can be used by other components
export default Keyboard