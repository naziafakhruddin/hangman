//Import react
import React from 'react'
//Import css
import '../App.css';

// Importing the useSelector functions to select the required
// slices of state.
import { useSelector} from "react-redux";

//Stickman component shows the figure that gets updated when user makes mistake
const Stickman = () =>{
    // The useSelector function allows us to find the needed slices of state we require.
    const globalState = useSelector((state) => state);
    return (
        <div class="img">
            {/*Each div shows part of the picture. It gets updated on each mistake*/}
            {globalState.game.mistakeCounter >=1?<div class="first"></div>:null}
            {globalState.game.mistakeCounter >=2?<div class="second"></div>:null}
            {globalState.game.mistakeCounter >=3?<div class="third"></div>:null}
            {globalState.game.mistakeCounter >=4?<div class="fourth"></div>:null}
            {globalState.game.mistakeCounter >=5?<div class="fifth"></div>:null}
            {globalState.game.mistakeCounter >=6?<div class="sixth"></div>:null}
            {globalState.game.mistakeCounter >=7?<div class="seventh"></div>:null}
        </div>
    )
} 
//Export it so it can be used by other components
export default Stickman