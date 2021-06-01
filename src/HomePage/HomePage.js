import React ,{useEffect, useState} from 'react'
import Body from '../Body/Body'
import {useStateValue} from "../StateProvider"

import Banner from '../Header/Banner'
import "./HomePage.css"

export default function HomePage() {
    const [state, setState]=useStateValue()





    return(
        <div className={"home__container"}>

            <div className={"header__header"} >
                <Banner/>
            </div>
            <div className={"home__body"}>
                <Body/>
            </div>
        </div>
    )
}
