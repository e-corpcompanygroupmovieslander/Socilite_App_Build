import { GETPOSTSAPI } from "../../Module/Module.js";

export const AUTOMYPOSTS = () => {
    GETPACKAGE(GETPOSTSAPI, 'cors', (data) => {
        const user = localStorage.getItem('User');
        const myPosts = [];
        data.forEach(element => {
            if (element.Poster === user) {
                myPosts.push(element);
            }
        });
        STORE('local', 'MyPosts', JSON.stringify(myPosts));
    });
};
