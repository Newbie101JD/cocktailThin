import React from 'react'
import { useStateValue } from '../StateProvider'
import { useHistory } from "react-router-dom";
import "../Body/Body.css"
import "./Card.css"

export default function Cards({drink, difficulty,image,aboutDrink, pushTo, item}) {
    const [state, dispatch]= useStateValue()


    


    const history = useHistory()
    const  changePage = () =>{
        dispatch({
            type:"SET__MAKE__DRINK__PAGE",
            item:item
        }

        )

        history.push("makeDrinks")
    }



    


    return (
        <div className="body__textAndCard" tabIndex={1}  onClick={changePage}>
            <div tabIndex={1} onKeyPress={changePage}  >
                <div className="option__card"  >
                    <div className="card__title">
                        {drink}
                    </div>

                    <div  aria-label={"Cocktail Difficulty Rating",difficulty}>
                        Difficulty:

                            {Array(difficulty)
                                    .fill()
                                    .map((_,i) =>(
                                        <span role="img" alt ='CockTail Glass'>🍸</span>
                                    ))}
                    </div>
                    <div className="card__imageContainer">
                        <img src={image}  alt=""  aria-label={"Image of Godfather cocktail"} className={"card__image"}/>
                    </div>

                </div>
                <div className="body__discription">
                    {aboutDrink}
                </div>
                
            </div>
                    





         
       
        </div>
    )
}
