import { CREAEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

const LOGINPAGE=()=>{

    WIDGET(`

        <img class='AppIcon' src='../Library/Images/app_icon.png'/>

        <h4> Sign In</h4>
        
        <input type='' placeholder='Enter  User Email' />

        <input type='' placeholder='Enter  User Password' />

        <h1 class='ForgotPassword'>Forgot Password?</h1>

        <button class='forestgreen'>LogIn</button>

        <button class='blue'>Create Account</button>

    `);

    CLICKED('.forestgreen',()=>{HOMEPAGE()})

    CLICKED('.blue',()=>{CREAEACCOUNTPAGE()})

}

export{LOGINPAGE}