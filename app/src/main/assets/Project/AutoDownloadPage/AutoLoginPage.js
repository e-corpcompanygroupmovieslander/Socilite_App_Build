import { EMAILVERIFICATION } from "../CreateAccountPage/EmailVerification.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { LOGINPAGE } from "../LoginPage/LoginPage.js"

export const AUTOLOGINPAGE=()=>{

    if (localStorage.getItem('User')) {

        HOMEPAGE()

        return;
    
    } 


    if (localStorage.getItem('UserData') && !localStorage.getItem('User')) {
        
        EMAILVERIFICATION();

        return;

    } else {
        
        LOGINPAGE();

        return;

    }

}