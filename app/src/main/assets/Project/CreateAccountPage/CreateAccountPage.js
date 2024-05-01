import { LOGINPAGE } from "../LoginPage/LoginPage.js";
import { CREATEUSER } from "./CreateUser.js";
import { CREATEUSERCOUNTRY } from "./CreateUserCountry.js";
import { CREATEUSERDATA } from "./CreateUserDate.js";

export const CREATEACCOUNTPAGE=()=>{

    WIDGET(`

        <img class='AppIcon' src='../Library/Images/app_icon.png'/>

        <h2>Sign Up</h2>

        <input type='text' placeholder='Enter User Name' />

        <input type='email' placeholder='Enter User Email' />

        <input type='password' placeholder='Enter User Password' />

        <input class='UserDate' type='text' placeholder='Enter Date Of Birth' readonly />

        <input class='UserLocation' type='text' placeholder='Enter User Location' readonly />

        <h1 class='CodeDisplay'>+</h1>

        <input  class='UserTelephone' type='tel' maxlength='10' placeholder='Enter User Telephone' />

        <button class='forestgreen'>Create Account</button>

        <button class='blue'>Login</button>

        <div class='UserDateDiv'></div>

        <div class='UserCountryDiv'></div>

        
    `);

    CLICKED('.blue',()=>{LOGINPAGE()});

    CLICKED('.UserDate',()=>{CREATEUSERDATA()});

    CLICKED('.forestgreen',()=>{CREATEUSER()});

    CLICKED('.UserLocation',()=>{CREATEUSERCOUNTRY()})

   
}