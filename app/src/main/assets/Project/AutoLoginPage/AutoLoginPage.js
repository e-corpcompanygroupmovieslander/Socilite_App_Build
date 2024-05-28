import { HOMEPAGE } from "../HomePage/HomePage.js"
import { LOGINPAGE } from "../LoginPage/LoginPage.js"

export const AUTOLOGINPAGE=()=>{

    CONDITION(localStorage.getItem('User'),

        ()=>HOMEPAGE(),

        ()=>LOGINPAGE()

    );

};