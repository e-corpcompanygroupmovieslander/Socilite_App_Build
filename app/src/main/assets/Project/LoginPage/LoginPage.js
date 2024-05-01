import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINPAGE=()=>{

    WIDGET(`

        <img class='AppIcon' src='../Library/Images/app_icon.png'/>

        <h2>Sign In</h2>

        <input type='email' placeholder='Enter User Email' />

        <input type='password' placeholder='Enter User Password' />

        <h1 class='ForgotPassword'>Forgot Password?</h1>

        <button class='forestgreen'>Login</button>

        <button class='blue'>Create Account</button>

    `);

    CLICKED('.blue',()=>{CREATEACCOUNTPAGE()});

    CLICKED('.forestgreen',()=>{HOMEPAGE()});


}