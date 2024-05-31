import { UPDATEPOSTSAPI } from "../Apis/Apis.js";
import { AUTODOWNLOADPOSTS } from "../AutoLoginPage/AutoDownloadPosts.js";

export const HOMELIKEPOSTS = (MINIDIV, element) => {
    const LIKEICON = document.createElement('img');

    // Initialize PeopleLiked as an array if it isn't already
    if (!Array.isArray(element.PeopleLiked)) {
        element.PeopleLiked = [];
    }

    // Retrieve liked users from session storage or initialize as an empty array
    let likedUsers = JSON.parse(sessionStorage.getItem('LikedUsers')) || [];

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
            // Remove user from likedUsers array
            likedUsers = likedUsers.filter(likedUser => likedUser !== user);
        } else {
            // Add user to PeopleLiked array
            element.PeopleLiked.push(user);
            // Add user to likedUsers array
            likedUsers.push(user);
        }

        // Save the liked users array to session storage
        sessionStorage.setItem('LikedUsers', JSON.stringify(likedUsers));

        // Save the updated post data to session storage (if needed)
        sessionStorage.setItem('CurrentPosts', JSON.stringify(element));

        DEJSON('', 'CurrentPosts', (data) => {
            const USERS = {
                "UserID": data.UserID,
                "PeopleLiked": data.PeopleLiked
            };

            POSTPACKAGE(UPDATEPOSTSAPI, 'no-cors', USERS, (info) => {
                AUTODOWNLOADPOSTS();
            });
        });

        // Update the icon
        updateLikeIcon();
    });
};
