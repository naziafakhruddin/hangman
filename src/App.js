// Importing the useSelector and useDispatch functions to select the required
// slices of state.
import { useSelector, useDispatch } from "react-redux";
// Importing the action creators we’ve implemented in our counter reducer.
import { updateSelectedWord,updateShownWord,updateMistakeCounter } from "./store/game";
//Import css
import './App.css';
//Import list of words
import dictionary from './dictionary.txt'
//Import useState and useEffect hooks
import { useState,useEffect } from "react";
//Import components
import Stickman from './components/Stickman'
import Keyboard from './components/Keyboard'
import Display from './components/Display'
import Help from './components/Help'

//App is parent component that contains all other components
function App() {

  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();

  //With the fetch resolves, it will set local state 
  //This, in turn, will cause component to render so as 
  //to update the DOM with the data.
  useEffect(()=>{
    fetch(dictionary)
    .then(raw => raw.text())
    .then(text => {
      const dictionaryList = text.split(/\n/)
      const random = Math.floor(Math.random() * dictionaryList.length);
      const word = dictionaryList[random].toUpperCase()
      //dispatch selected word to addSelectedWord() in reducer
      dispatch(updateSelectedWord(word.split("")))
      dispatch(updateShownWord(word.split("").fill("_")))
    })
    .catch(error => new Error(error));
  //empty array as dependency to make useEffect run once
  },[])

  //Components used inside App 
  return (
    <div>
      <Help />
      <Display />
      <div class="container">
        <Stickman />
        <Keyboard />
      </div>
    </div>
  );
}
//Export it so it can be used by other components
export default App;
