import { AUTODOWNLOADUSERDATA } from "../AutoDownloadPage/AutoDownloadUserData.js";
import { CHATPAGE } from "../ChatPage/ChatPage.js";
import { FRIENDSPAGE } from "../FriendsPage/FriendsPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";
import { HOMEPOSTS } from "./HomePosts.js";

export const HOMEPAGE=()=>{

    AUTODOWNLOADUSERDATA();

    DEJSON('local','UserData',(data)=>{

        HEADERWIDGET(
            `
                <img class='HomeReload' src='${WHITEICONS}home.png'/>
    
                <img class='Chat' src='${WHITEICONS}comment.png'/>
    
                <img class='Friends' src='${WHITEICONS}group-users.png'/>
    
                <img class='UserIcon' src='${WHITEICONS}user.png'/>
    
            `,``,'HomeDiv'
        );
    
        HOMEPOSTS();
    
        CLICKED('.HomeReload',()=>{HOMEPAGE()});

        CLICKED('.Friends',()=>FRIENDSPAGE());

        CLICKED('.Chat',()=>CHATPAGE());

        DECLARATION('.UserIcon',(ELEMENT)=>{
 
            if (data.UserPhoto) {

                ELEMENT.src=data.UserPhoto

                STYLED(ELEMENT,'border-radius','100px');
                STYLED(ELEMENT,'width','35px');
                STYLED(ELEMENT,'height','35px');
                STYLED(ELEMENT,'border','1px solid whitesmoke');
                STYLED(ELEMENT,'object-fit','cover');
                STYLED(ELEMENT,'padding','1px');

            } ;

            EVENT(ELEMENT,'click',()=>{USERACCOUNTPAGE()});

        });

    });

}