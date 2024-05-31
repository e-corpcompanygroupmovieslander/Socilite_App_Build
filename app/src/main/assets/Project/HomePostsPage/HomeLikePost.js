import { UPDATEPOSTSAPI } from "../Apis/Apis.js";
import { AUTODOWNLOADPOSTS } from "../AutoLoginPage/AutoDownloadPosts.js";

export const HOMELIKEPOSTS = (MINIDIV, element) => {

    const LIKEICON = document.createElement('img');

    const updateLikeIcon = () => {
        if (element.PeopleLiked.includes(localStorage.getItem('User'))) {
            LIKEICON.src = WHITEICONS + 'heart.png';
        } else {
            LIKEICON.src = WHITEICONS + 'unheart.png';
        }
    };

    updateLikeIcon();

    ADD(MINIDIV, LIKEICON);

    EVENT(LIKEICON, 'click', () => {

        const user = localStorage.getItem('User');

        if (element.PeopleLiked.includes(user)) {
            
            JSONREMOVER(element.PeopleLiked,[user],(data)=>{
                
                const USERS={
                    "UserID":element.UserID,
                    "PeopleLiked":data
                }

                POSTPACKAGE(UPDATEPOSTSAPI, 'no-cors', USERS, (info) => {

                    LIKEICON.src = WHITEICONS + 'unheart.png';

                    AUTODOWNLOADPOSTS();

                })

            })

        } else {

            JSONADDER(element.PeopleLiked,[user],(data)=>{

                const USERS={
                    "UserID":element.UserID,
                    "PeopleLiked":data
                }

                POSTPACKAGE(UPDATEPOSTSAPI, 'no-cors', USERS, (info) => {

                    AUTODOWNLOADPOSTS();

                    LIKEICON.src = WHITEICONS + 'heart.png';

                })

            })
          
        }

    });
};
