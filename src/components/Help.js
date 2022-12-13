//Import react
import React from 'react'
//Import useState hook
import { useState } from "react";

//Help component shows help instructions to user
const Help = () =>{
    //local state to show and hide help
    const [showHelp,setShowHelp] = useState(false)
    //List items to be shown as help instructions
    const helpItems = ["Click on letters to guess the hidden word","Seven mistakes can be made","Find meaning of words to win more."]
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