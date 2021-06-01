
import React, { useState, useEffect } from 'react';
import {useStateValue} from "./StateProvider"
import './App.css';
import Banner from './Header/Banner';
import Body from './Body/Body';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from './Header/Header';
import MakeDrinksWithInstruction from './MakeDrinks/MakeDrinksWithInstruction/MakeDrinksWithInstruction';
import StarReview from './Components/StarReview';
import LandingPage from "./LandingPage/LandingPage"
import {auth, db} from "./firebase"
import { StateProvider } from './StateProvider';


function App() {
  const[drinkInfo, setDrinkInfo]= useState()
  const [state, dispatch]= useStateValue()
  let drinksPage= {}

  useEffect( ()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS>>",authUser);
      // sends back to read direct
    

      if (authUser){

        // logged in 
        dispatch({ 
          type:"SET_USER",
          user: authUser
        })
       

      }
      else {

        //loggedout

        dispatch({ 
          type:"SET_USER",
          user: null

          
        })
      }
    })
  },[])

  return (
    <Router>
      
      <div className="App">
        <Header/>
        <Switch>
        <Route path="/makedrinks">
          <MakeDrinksWithInstruction/>

          </Route>
          <Route path="/">
            <LandingPage/>

            {/* <HomePage/> */}
          </Route>

          

        </Switch>


      </div>
    </Router>
  );
}

export default App;
