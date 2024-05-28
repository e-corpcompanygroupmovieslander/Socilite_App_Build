import { AUTODOWNLOADPOSTS } from "../AutoLoginPage/AutoDownloadPosts.js";
import { AUTOUPDATEUSER } from "../AutoLoginPage/AutoUpdateUser.js";
import { HOMEPOSTSPAGE } from "../HomePostsPage/HomePostsPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";
import { USERPOSTSPAGE } from "../UserPostsPage/UserPostsPage.js";

export const HOMEPAGE=()=>{

    AUTOUPDATEUSER();

    AUTODOWNLOADPOSTS();

    DEJSON('local','UserData',(data)=>{

        HEADERWIDGET(
            `
            
                <img  src='${WHITEICONS}chat.png'/>

                <input type='search' class='HomeSearch' placeholder='Enter Your Search' />

                <img class='ProfilePicture' src='${data.UserPhoto||WHITEICONS+'profile.png'}'/>

            `,
            `
                <div class='HomeDiv'></div>

                <button class='FloatPost'>

                    <img src='${WHITEICONS}post.png'/>
                
                </button>
            
            `,''
        );

        HOMEPOSTSPAGE();

        CLICKED('.FloatPost',()=>{USERPOSTSPAGE()});

        CLICKED('.ProfilePicture',()=>{USERACCOUNTPAGE()});

    });

}