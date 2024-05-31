import { HOMELIKEPOSTS } from "./HomeLikePost.js";
import { HOMEPOSTIME } from "./HomePosTime.js";
import { HOMEPOSTCOMMENT } from "./HomePostComment.js";
import { HOMEPOSTDESCRIPTION } from "./HomePostDescription.js";
import { HOMEPOSTLOCATION } from "./HomePostLocation.js";
import { HOMEPOSTEDIMAGE } from "./HomePostedImage.js";
import { HOMEPOSTERSIMAGE } from "./HomePostersImage.js";
import { HOMEPOSTERSUSERNAME } from "./HomePostersUserName.js";
import { HOMESAVEPOST } from "./HomeSavePost.js";

export const HOMEPOSTSPAGE=()=>{
    
    DECLARATION('.HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        GETINDEXED('Socilite','Posts',(data)=>{

            REDUX(data,(Element)=>{

                REDUX(Element.Posts.reverse(),(element)=>{
    
                    const DIV=document.createElement('div');
    
                    DIV.classList.add('PostDiv');

                    HOMEPOSTEDIMAGE(DIV,element)

                    HOMEPOSTERSIMAGE(DIV,element)

                    HOMEPOSTERSUSERNAME(DIV,element);

                    HOMEPOSTLOCATION(DIV,element);

                    HOMEPOSTIME(DIV,element);

                    const MINIDIV=document.createElement('div');
    
                    MINIDIV.classList.add('OptionsDiv');

                    HOMELIKEPOSTS(MINIDIV,element)

                    HOMEPOSTCOMMENT(MINIDIV,element);

                    HOMESAVEPOST(MINIDIV,element);

                    ADD(DIV,MINIDIV);

                    HOMEPOSTDESCRIPTION(DIV,element);

                    ADD(ELEMENT,DIV);
    
                });
    
            });

        });

    });

}