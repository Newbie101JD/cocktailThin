import React,{useEffect} from 'react'

import { useHistory } from "react-router-dom";
import Cards from '../Cards/Card'
import { useStateValue } from '../StateProvider';
import "./Body.css"


export default function Body() {
    const [{bodySegmentList},dispatch]=useStateValue()


    useEffect(() => {
        dispatch({
        type:"RESET__CHECKVALUE"
        }
        )
        return () => {
    
        }
    }, [])





    

    return (

        <div className="body__container" >
            <div className="body__text" >
                Pick a cocktail and rate the ones you like

            </div>
            
            {bodySegmentList.map(item => (
            <Cards
              drink={item.drink}
              difficulty={item.difficulty}
              image={item.image}
              aboutDrink={item.aboutDrink}
              pushTo={item.pushTo}
              item ={item}
   
            />
          ))}


        

        </div>

    )
}




































            {/* <div className="body__textAndCard" tabIndex={1}  onClick={changePage}>
                <div tabIndex={1} onKeyPress={changePage}  >
                <div className="option__card"  >
            <div className="card__title">
                 {state.drinks.name}
            </div>

            <div>
            Difficulty:

                {Array(state.drinks.difficulty)
                        .fill()
                        .map((_,i) =>(
                            <span role="img" alt ='CockTail Glass' aria-label={"Cocktail Difficulty Rating",state.drinks.difficulty}>🍸</span>
                        ))}
            </div>
            <div className="card__imageContainer">
                <img src={"https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}  alt=""  aria-label={"Image of Godfather cocktail"} className={"card__image"}/>
            </div>
            





        </div>
                </div>
                <div className="body__discription">
                {state.aboutDrink}
                </div>
                
            </div>

            <div className="body__textAndCard">
                <div  tabIndex={2} onKeyPress={changePage}  >
                <div className="option__card"  >
            <div className="card__title">
                 {state.Mojito.name}
            </div>

            <div>
            Difficulty:

                {Array(state.Mojito.difficulty)
                        .fill()
                        .map((_,i) =>(
                            <span role="img" alt ='CockTail Glass' aria-label={"Cocktail Difficulty Rating",state.drinks.difficulty}>🍸</span>
                        ))}
            </div>
            <div className="card__imageContainer">
                <img src={"https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4021983.jpg&fm=jpg"}  alt="Mojito"  aria-label={"Image of Mojito cocktail"} className={"card__image"}/>
            </div>
            





        </div>
                </div>
                <div className="body__discription">
                {state.aboutMojito}
                </div>
                
            </div>

           */}
