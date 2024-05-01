import { AUTOPOSTS } from "../Project/AutoDownloadData/PostDownload.js"
import { EMAILVERIFICATIONPAGE } from "../Project/CreateAccountPage/EmailVerification.js";
import { HOMEPAGE } from "../Project/HomePage/HomePage.js"
import { LOGINPAGE } from "../Project/LoginPage/LoginPage.js"

export const CONNECTION=()=>{

    AUTOPOSTS();

    CONDITION(localStorage.getItem('User'),
    ()=>HOMEPAGE(),
    ()=>CONDITION(!localStorage.getItem('User') && localStorage.getItem('UserData') ,
        ()=>EMAILVERIFICATIONPAGE(),
        ()=>LOGINPAGE()
        )
    )
    
}
