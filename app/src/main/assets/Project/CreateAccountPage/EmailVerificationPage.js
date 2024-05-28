import { CREATEACCOUNTPAGE } from "./CreateAccountPage.js";

export const EMAILVERFICATIONPAGE=()=>{

    WIDGET(`

        <h2>Socilite</h2>

        <input type='text' class='Email' placeholder='Enter Verification Code' />

        <h1 class='ForgotPassword'>Forgot Password?</h1>

        <button class='forestgreen'>Verify</button>

        <button class='brown'>Cancel</button>

    `);

    CLICKED('.brown',()=>{

        REMOVESTORE('local','UserData');

        CREATEACCOUNTPAGE();

    })

}