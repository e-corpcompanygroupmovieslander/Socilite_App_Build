import { POSTSAPI } from "../../Module/ImagePicker.js";

export const  AUTODOWNLOADPOSTS=()=>{

    GETPACKAGE(POSTSAPI,'cors',(result)=>{

        const USERDATA={
            "Name":"Posts",
            "Posts":result
        }

        if (localStorage.getItem('User')) {

            UPDATEINDEXED('Socilite','Posts',USERDATA);
            
        } else {
            
            STOREINDEXED('Socilite','Posts',USERDATA);
        }

    });

}