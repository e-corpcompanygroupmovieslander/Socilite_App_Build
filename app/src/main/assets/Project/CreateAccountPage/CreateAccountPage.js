import { HOMEPAGE } from "../HomePage/HomePage.js"
import { LOGINPAGE } from "../LoginPage/LoginPage.js"

const CREAEACCOUNTPAGE=()=>{

    WIDGET(`

        <img class='AppIcon' src='../Library/Images/app_icon.png'/>

        <h4> Sign Up</h4>

        <input type='' placeholder='Enter  User Name' />
        
        <input type='' placeholder='Enter  User Email' />

        <input type='' placeholder='Enter  User Password' />

        <input type='' placeholder='Enter  User Date' />

        <input type='' placeholder='Enter  User Location' />

        <input type='' placeholder='Enter  User Telephone' />

        <button class='forestgreen'>Create Account</button>

        <button class='blue'>LogIn</button>

    `)

    CLICKED('.blue',()=>{LOGINPAGE()})

    CLICKED('.forestgreen',()=>{HOMEPAGE()})

}

export{CREAEACCOUNTPAGE}