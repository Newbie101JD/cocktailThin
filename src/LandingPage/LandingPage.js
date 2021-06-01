import { Checkbox } from '@material-ui/core'
import React, {useState,useEffect} from 'react'
import "./LandingPage.css"
import {auth,db} from "../firebase"

//or both
import firebase from 'firebase/app';
import 'firebase/functions';

export default function LandingPage() {
    const [password, setPassword]=useState()
    const [checkPassword, setCheckPassword]=useState()
    const [ ageConfirmation, setAgeConfirmation]=useState( false)
    const [email, setEmail]=useState()

    function handle (){
        
        db.collection('rating').doc("d").add({
            "hi":"hi"
          })
        

    
    }
 


 
            




    const signIn = e => {
        e.preventDefault();
        //firebase login
        auth
            .signInWithEmailAndPassword(email,password).
            catch(error => alert(error.message))
    
    }
    
    const register = e=> {
        e.preventDefault();
        
            if(password === checkPassword ){
        
            auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth)=> {
                    console.log(auth);

                })
            .catch(error => alert(error.message))
            }
            else {
                alert(" You need to be 18 years old or over and both passwords should match")
            }
        }
    
    

    return (
        <div className={"login__container"}>

            <div className="card__container">
                Sign In 
                <form className="form__login" >
                    Email Address
                    <input className="login__input" type= "text" value={email} onChange=
                    {e => setEmail(e.target.value)}>
                    </input>
                    Password
                    <input className="login__input" type="password" value={password} onChange=
                    {e => setPassword(e.target.value)}
                    />
               
                    <button className="login__input" onClick={signIn}>
                        Login 
                    </button>

                    
                </form>
                Create an Account
                <form className="form__create">
                    Email Address
                    <input className="login__input" type= "text" value={email} onChange=
                    {e => setEmail(e.target.value)}>
                    </input>
                    Password
                    <input className="login__input"  type="password" value={password} onChange=
                    {e => setPassword(e.target.value)}>
                    </input>
                    Re-enter Password
                    <input className="login__input"type="password" value={checkPassword} onChange=
                    {e => setCheckPassword(e.target.value)}>
                    </input>
                    <p>Users must be 18 years of age or older</p>
                    
  


                    <button className="login__input"  onClick={register} >
                        Create Account 
                    </button>
                    
                </form>
                <button onClick={handle}>
                    firebase test
                </button>

            </div>



            
        </div>
    )
}
