import React,{useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider'
import "./InstructionCard.css"



export default function InstructionCard({item}) {

    const[state, dispatch]=useStateValue()
    const [completed, setCompleted]=useState(false)


    const handleComplete=()=>{

        dispatch({
        
            type: "CHECK__VALUE",
            item: item
    

        })


    }
    useEffect(() => {
        if(state.expectNextCompletedId > item.id){
            setCompleted(true)
        }
        
        return () => {
           
        }
    }, [state.expectNextCompletedId])


    






    

 


    return (
        <div className="instructioncard__Container">
            <div className="card__inner">
                <div className={"card__instruction"}>
                    <div className={"card__instruction"}>
                    {item.instruction}
         
                    
                    </div>
                    {(completed===false)?
                    <button onClick={handleComplete} >
                        Done
                    </button>
                    :
                    <div>
                    </div>
                    }
                </div>
            </div>
        
            
        </div>
    )
}
