import { LOGINPAGE } from "../LoginPage/LoginPage.js";

export const CREATEACCOUNTPAGE=()=>{

    WIDGET(`

        <h1>Socilite</h1>

        <input class='UserName' type='text' placeholder='Enter User Name' />

        <input class='Email' type='email' placeholder='Enter User Email' />

        <input class='Password' type='password' placeholder='Enter User Password' />

        <button class='forestgreen'>Sign Up</button>

        <button class='blue'>LogIn</button>

    `);

    CLICKED('.blue',()=>{LOGINPAGE()})

}