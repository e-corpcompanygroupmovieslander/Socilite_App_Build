import { HOMEPAGE } from "../HomePage/HomePage.js"
import { MYACCOUNTPAGE } from "./MyAccountPage.js"

const USERACCOUNTPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
    `
        <h1 class='HeaderOption'>My Profile</h1>

    `,
    `
        <div class='View'></div>

        <button class='MyAccount'>Account</button>

        <button>Settings</button>

        <button>Contact Us</button>

        <button>Updates</button>

    `,''
    )

    CLICKED('.MyAccount',()=>{MYACCOUNTPAGE()})

}

export{USERACCOUNTPAGE}