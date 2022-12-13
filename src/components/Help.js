//Import react
import React from 'react'
//Import useState hook
import { useState } from "react";

//Help component shows help instructions to user
const Help = () =>{
    //local state to show and hide help
    const [showHelp,setShowHelp] = useState(false)
    //List items to be shown as help instructions
    const helpItems = ["At the start of the game all the letters are hidden. Hidden letters are masked by underscore character.","Use mouse to enter word on keypad of alphabets.","There are seven (7) chances to make mistake. One every mistake a part of the hangman figure is shown.","If the letter is correct then it appears on top of the screen.","If player chooses all correct letters before making seven mistakens then game is won.","Click on game won or loose notification button to restart the game.",""]
    return (
        <main>
            {/*Help option*/}
            <div onClick={()=>setShowHelp(true)} class="help"><h2>HELP</h2></div>
            {/*Help details - list of instructions shown using map*/}
            {showHelp?<div class="info" onClick={()=>setShowHelp(false)}><ul>{helpItems.map((item)=><li key={item}>{item}</li>)}</ul><p><u>CLICK HERE TO CLOSE HELP</u></p></div>:null}
        </main>
    )
} 
//Export it so it can be used by other components
export default Help