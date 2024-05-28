import { POSTSAPI } from "../Apis/Apis.js"

export const AUTODOWNLOADPOSTS=()=>{

    GETPACKAGE(POSTSAPI,'cors',(data)=>{

        const USER={
            "Name":"Post",
            "Posts":data
        }

        CONDITION(localStorage.getItem('User'),

            ()=>UPDATEINDEXED('Socilite','Posts',USER),

            ()=>STOREINDEXED('Socilite','Posts',USER),
    
        );

    });

}