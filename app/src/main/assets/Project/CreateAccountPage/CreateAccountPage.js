import { LOGINPAGE } from "../LoginPage/LoginPage.js";

export const CREATEACCOUNTPAGE=()=>{

    WIDGET(`

        <img class='AppIcon' src='../Library/Images/app_icon.png'/>

        <h2>Sign Up</h2>

        <input type='text' placeholder='Enter User Name' />

        <input type='email' placeholder='Enter User Email' />

        <input type='password' placeholder='Enter User Password' />

        <input type='email' placeholder='Enter Date OF Birth' />

        <input type='text' placeholder='Enter User Location' />

        <input type='tel' placeholder='Enter User Telephone' />

        <button class='forestgreen'>Create Account</button>

        <button class='blue'>Login</button>

    `);

    CLICKED('.blue',()=>{LOGINPAGE()});

   
}