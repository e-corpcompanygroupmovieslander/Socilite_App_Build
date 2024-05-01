import { AUTOPOSTS } from "../Project/AutoDownloadData/PostDownload.js"
import { HOMEPAGE } from "../Project/HomePage/HomePage.js"
import { LOGINPAGE } from "../Project/LoginPage/LoginPage.js"

const CONNECTION=()=>{

    AUTOPOSTS();

    CONDITION(!localStorage.getItem('User'),
    ()=>HOMEPAGE(),
    ()=>LOGINPAGE()
    )
    
}

export{CONNECTION}