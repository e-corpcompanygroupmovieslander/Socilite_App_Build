import { UPDATEPOSTSAPI } from "../Apis/Apis.js";
import { AUTODOWNLOADPOSTS } from "../AutoLoginPage/AutoDownloadPosts.js";

export const HOMELIKEPOSTS = (MINIDIV, element) => {
    const LIKEICON = document.createElement('img');

    // Initialize PeopleLiked as an array if it isn't already
    if (!Array.isArray(element.PeopleLiked)) {
        element.PeopleLiked = [];
    }

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
            // Remove user from PeopleLiked array
            element.PeopleLiked = element.PeopleLiked.filter(u => u !== user);
        } else {
            // Add user to PeopleLiked array
            element.PeopleLiked.push(user);
        }

        // Save the updated post data to session storage
        sessionStorage.setItem('CurrentPosts', JSON.stringify(element));

        DEJSON('', 'CurrentPosts', (data) => {

            POSTPACKAGE(UPDATEPOSTSAPI, 'no-cors', data, (info) => {
                AUTODOWNLOADPOSTS();
            });
        });

        // Update the icon
        updateLikeIcon();
    });
};
