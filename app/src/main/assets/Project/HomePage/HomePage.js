import { ICONPATH } from "../../Module/Module.js"
import { CREATEPOSTPAGE } from "../CreatePostPage/CreatePostPage.js"
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";

const HOMEPAGE=()=>{

    ROUNDFOOTERWIDGET(
    ``,
    `
        <img src='${ICONPATH}chat.png'/>

        <img class='PostPage' src='${ICONPATH}post.png'/>

        <img  class='AccountPage' src='${ICONPATH}profile.png'/>

    `)

    CLICKED('.PostPage',()=>{CREATEPOSTPAGE()});

    CLICKED('.AccountPage',()=>{USERACCOUNTPAGE()});
    

}

export{HOMEPAGE}