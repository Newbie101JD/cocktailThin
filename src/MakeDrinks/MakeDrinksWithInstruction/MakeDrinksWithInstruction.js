import React,{useState} from 'react'
import MakeDrinksTop from "../MakeDrinksTop"
import Instructions from "../Instruction/Instruction"
import "./MakeDrinksWithInstruction"


export default function MakeDrinksWithInstruction() {
    const [renderInstruction,setRenderInstruction]=useState(false)
    return (
        <div className="page__container">
            <div>
                <MakeDrinksTop setRenderInstruction={setRenderInstruction}/>
            </div>
            <div>
                {
                renderInstruction?
                <div>
                    <Instructions/>
                </div>
                :
                <div>

                </div>
                }
            </div>



            
        </div>
    )
}
