import { EMAILVERFICATIONPAGE } from "../CreateAccountPage/EmailVerificationPage.js";
import { USERPROFILEPHOTO } from "../CreateAccountPage/ProfilePhoto.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { LOGINPAGE } from "../LoginPage/LoginPage.js"

export const AUTOLOGINPAGE=()=>{

    CONDITION(localStorage.getItem('User'),

        ()=>HOMEPAGE(),

        ()=>CONDITION(!localStorage.getItem('User') && localStorage.getItem('UserData') ,

            ()=>EMAILVERFICATIONPAGE(),

            ()=>USERPROFILEPHOTO()

        ),

    );

};