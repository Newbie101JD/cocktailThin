import React,{useState,useEffect} from 'react'
import { useHistory} from "react-router-dom";
import "./MakeDrinksTop.css"

import {useStateValue} from "../StateProvider"
import Ingredients from './Ingredients/Ingredients'

export default function MakeDrinksTop(props) {
    const [state,dispatch]=useStateValue()
    const[servings, setServings]=useState(1)
    const [numberOfAvailableIngredients, setNumberOfAvailableIngredients]=useState(0)

    const [selectAll, setSelectAll]=useState(false)
    const history = useHistory()
    let totalRecipeIngredients=""
    try{
    totalRecipeIngredients= state.makeDrinksPage.ingredientList.length
    }
    catch{

        history.push("/")
    }

    // logic for multipying servings 
    // reset number of available ingredients to zero
    const addServing = ()=> {
        setServings(()=>servings +1)
        setNumberOfAvailableIngredients(0)
    }

    const minusServing = ()=> {
        if(servings >1){
        setServings(()=> servings -1)
        setNumberOfAvailableIngredients(0)
        }
    }
    // logic for the select all button 
    function overRideIndividualCounter (){
        if(selectAll===true){
            setNumberOfAvailableIngredients(0)
            setSelectAll(false)


        }
        else if (selectAll===false ){
            setNumberOfAvailableIngredients(totalRecipeIngredients)
            setSelectAll(true)
 
        }
    }





    // logs when all ingredients are de-selected or selected and changes  select all
    // functionality  to select all or de-select all accordingly. Meaning I only need the one button
    // rather multiple. 
    useEffect(() => {
        if(numberOfAvailableIngredients===totalRecipeIngredients){
            setSelectAll(true)
        }
        else if(numberOfAvailableIngredients===0){
            setSelectAll(false)


        }
        return () => {
 
        }
    }, [numberOfAvailableIngredients])


    // changes bool to render cocktail instructions when the user attests  
    //to having all the ingredients Either through indivudal selection or select all

    useEffect(() => {
        if(totalRecipeIngredients=== numberOfAvailableIngredients){
            props.setRenderInstruction(true)

        }
        else if(totalRecipeIngredients!== numberOfAvailableIngredients){
            props.setRenderInstruction(false)
        }
        return () => {
            
        }
    }, [numberOfAvailableIngredients])

    useEffect(() => {
        if(state.makeDrinksPage.drink ===""){
            history.push("/")
        }
        return () => {
           
        }
    }, [])
    return (
        <div
        className="recipe__container">
            <div className={"recipe__image"}>
                <img src={state.makeDrinksPage.drink}  alt=""  aria-label={"Image of Godfather cocktail"} className={"card__image"}/>
            </div>
            <div className={"recipe__ingredients"}>
    
                <div className={"recipe__header"}>
                    Good choice lets make { state.makeDrinksPage.drink} {numberOfAvailableIngredients}
                </div>

                <div className={"recipe__amount"}>
                    
                    <div className={"recipe__servings"}>
                        Number of Servings {servings}
                    </div>
                    <button className={"recipe__button"} onClick={addServing}>
                        +
                    </button>

                    <button className="recipe__button" onClick={minusServing}>
                        -

                    </button>
                </div>
                <div className={"intro__text"}>
                    Click the ingredients you have. Remeber unless you have all the ingredients you can't make the cocktail
                </div>

            
                <div className={"recipe__list"}>
                    <button onClick={overRideIndividualCounter} className={"recipe__button recipe__selectall"}>
                        Select/Deselect All
                    </button>
                    
                    {state.makeDrinksPage.ingredientList.map(item => (
                < Ingredients
                ingredient={item.ingredient}
                measurements={item.amount * servings}
                unit={item.unit}
                id={item.id}
                setNumberOfAvailableIngredients={setNumberOfAvailableIngredients}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                
    
                />
            ))}

                        

                    </div>


        

            
            </div>
        </div>
    )

}
