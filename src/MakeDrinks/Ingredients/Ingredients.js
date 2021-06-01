import React, {useState,useEffect} from 'react'
import "./Ingredients.css"
import {useStateValue} from "../../StateProvider"

export default function Ingredients(props) {
    
    const[have, setHave]= useState(false)
    const[firstRender,setFirstRender]=useState(true)
    //^^  Prevents useEffect from running when intial state is set


    const gotIngredient =()=>{
        setHave((have)=> !have)
        if(have=== true ){
            props.setNumberOfAvailableIngredients((amount)=>amount-1)
            setHave(false)
 

        }
        else if(have ===false ){
            props.setNumberOfAvailableIngredients((amount)=>amount+1)
            setHave(true)

        }

    }

    useEffect(() => {
        if (firstRender===true){

            setFirstRender(false)
            console.log("firstRender")
            
        }

        else if(props.selectAll===false ){
            console.log()
            setHave(false)
            console.log("first")





        
        }
        else if (props.selectAll===true){
            setHave(true)
            console.log("second")






        }

        return () => {
        
        }
    }, [props.selectAll])
    

    return (
        <div className="ingredients__card">
            <div  className={"ingredient__units"} onClick={gotIngredient}>
                <div className="card__title">
                {props.ingredient} 
                </div>
                <div>
                {props.measurements}
                {props.unit}
                </div>
            </div>
            <div  className="ingredient__confirmation">


                {have?
                <div  >
                    ✔️
                </div>
                :
                <div>
                    ❌
                </div>
                }
            </div>

        </div>

            
    
    )
}
