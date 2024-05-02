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
    
                <img class='ProfileImage' src='${ICONPATH}profile.png'/>
    
            `,''
        );
    
        HOMEPAGEPOSTS();
    
        CLICKED('.Post',()=>{CREATEPOSTPAGE()});
    
        CLICKED('.ProfileImage',()=>{USERACCOUNTPAGE()});

        const ProfileImage=document.querySelector('.ProfileImage');

        CONDITION(data.UserPhoto ,
            ()=>CHECK(data,(result)=>{
                ProfileImage.classList.add('ProfileImager')
                ProfileImage.src=data.UserPhoto
            }),
            ()=>ProfileImage.src=`${ICONPATH}profile.png`
            
        )

            


    

    })



}