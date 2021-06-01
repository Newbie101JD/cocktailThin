import React,{useState} from  'react'
import {db} from "../firebase";
import "./StarReview.css"

export default function StarReview() {
    

    const [star2, setStar2]=useState(false)
    const [star3, setStar3]=useState(false)
    const [star4, setStar4]=useState(false)
    const [star5, setStar5]=useState(false)
    const [linkedStars, setLinkedStars]=useState(false)
    // COULD NOT THINK OF A WAY OF DOING THIS WITHOUT MULTIPLE IF STATEMENTS
    // THIS WAS THE CLEANEST WHY I COULD THINK OF 

    function changeStars(stars){
        if(stars >= 2){setStar2((star2)=>true)}
        if(stars >= 3){setStar3((star2)=>true)}
        if(stars >= 4){setStar4((star2)=>true)}
        if(stars >= 5){setStar5((star2)=>true)}

        if(stars < 2){setStar2((star2)=>false)}
        if(stars < 3){setStar3((star2)=>false)}
        if(stars < 4){setStar4((star2)=>false)}
        if(stars < 5){setStar5((star2)=>false)}


        
        
    }
    function saveReview(){

    }







    return (
        <div>
            <div  className="star__container" >
                <div  >

                    <div  className="star__active" onClick={()=>changeStars(1)}  tabindex={1} onKeyPress={()=>changeStars(1)}>
                        ⭐
                    </div>

                </div>
                <div  onClick={()=>changeStars(2)}  tabindex={2}  onKeyPress={()=>changeStars(2)} >
                    {star2?
                    <div>
                        ⭐
                    </div>
                    :
                        <div>
                        ☆
                    </div>
                    }
                </div>
                <div  onClick={()=>changeStars(3)}   tabindex={3}  onKeyPress={()=>changeStars(3)}   >
                    {star3?
                    <div>
                        ⭐
                    </div>
                    :
                        <div>
                        ☆
                    </div>
                    }
                </div>
                <div onClick={()=>changeStars(4)}     tabindex={4}   onKeyPress={()=>changeStars(4)}  >
                    {star4?
                    <div>
                        ⭐
                    </div>
                    :
                        <div>
                        ☆
                    </div>
                    }
                </div>
                <div  onClick={()=>changeStars(5)}    tabindex={5}  onKeyPress={()=>changeStars(5)} >
                    {star5?
                    <div>
                        ⭐
                    </div>
                    :
                    <div>
                        ☆
                    </div>
                    }
                </div>

            </div>
            <button onClick={saveReview} >
                    Save your Review to view later
            </button>
            
        </div>
    )
}
