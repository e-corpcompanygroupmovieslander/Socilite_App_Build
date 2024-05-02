import { ICONPATH } from "../../Module/Module.js"
import { AUTOMYPOSTS } from "../AutoDownloadData/AutoMyPosts.js";
import { CREATEPOSTPAGE } from "../CreatePostPage/CreatePostPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";
import { HOMEPAGEPOSTS } from "./HomePagePosts.js";

export const HOMEPAGE=()=>{

    AUTOMYPOSTS();

    DEJSON('local','UserData',(data)=>{

        ROUNDFOOTERWIDGET(
            `
                <div id='HomeDiv'></div>
            
            `,
            `
                <img src='${ICONPATH}chat.png'/>
    
                <img class='Post' src='${ICONPATH}post.png'/>
    
                <img class='ProfileImager' src='${data.UserPhoto || ICONPATH +'profile.png'}'/>
    
            `,''
        );
    
        HOMEPAGEPOSTS();
    
        CLICKED('.Post',()=>{CREATEPOSTPAGE()});
    
        CLICKED('.ProfileImager',()=>{USERACCOUNTPAGE()});

    })



}