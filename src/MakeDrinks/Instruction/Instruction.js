import React,{useState,useEffect} from 'react'
import "./Instruction.css"
import {useStateValue} from "../../StateProvider"
import InstructionCard from '../../Components/InstructionCard'

import StarReview from "../../Components/StarReview"

export default function Instruction() {
    const [state,dispatch]=useStateValue()
    const [renderReviewComponent,setRenderReviewComponent]= useState(true)
    const triggerRenderReview = state.makeDrinksPage.drinksInstructionsList.length


    useEffect(() => {
        dispatch({
            type: "RESET__CHECKVALUE"
        }
        )

        return () => {

        }
    }, [])
    // every done action pushes the e
    useEffect(() => {
        console.log("State",state.makeDrinksPageexpectNextCompletedId,"length", triggerRenderReview)
        if(state.makeDrinksPageexpectNextCompletedId === triggerRenderReview){
            setRenderReviewComponent((renderReviewComponent)=>true)
        
        }
        return () => {
       
        }
    }, [state.expectNextCompletedId])
    




    return (
        <div>
            <div className="instruction__container" >
                {state.makeDrinksPage.drinksInstructionsList.map( (item)=> (
                < InstructionCard item={item} />))

                }

            </div>
            <div className={"review__component"}>
                {renderReviewComponent?
                <div  >
                    <StarReview/>
              
                </div>
                :
                <div>
                 
                </div>
                }

            </div>
        </div>
    )
}
