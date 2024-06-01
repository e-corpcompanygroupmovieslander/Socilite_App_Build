import { POSTCOMMENT } from "./HomeComment.js";
import { POSTLIKE } from "./HomeLike.js";
import { POSTERSNAME } from "./HomePostName.js";
import { POSTSHARE } from "./PostShare.js";
import { POSTTIME } from "./PostTime.js";
import { POSTEDIMAGE } from "./PostedImage.js";
import { POSTERSIMAGE } from "./PostersImage.js";

export const HOMEPOSTEDDATA=()=>{

    DECLARATION('.Posts',(ELEMENT)=>{
  
        GETINDEXED('Socilite','Posts',(data)=>{

            REDUX(data,(Posts)=>{

                REDUX(Posts.Posts.reverse(),(Element)=>{

                    const HomeDiv=document.createElement('div');

                    HomeDiv.classList.add('PostDivHolder')

                        const PostHeader=document.createElement('header');

                            POSTERSIMAGE(PostHeader,Element);

                            POSTERSNAME(PostHeader,Element);

                            POSTTIME(PostHeader,Element);

                        ADD(HomeDiv,PostHeader);

                        const PostDiv=document.createElement('div');

                            PostDiv.classList.add('PostedImageHolderDiv')

                            POSTEDIMAGE(PostDiv,Element);
                            
                        ADD(HomeDiv,PostDiv);

                        const PostFooter=document.createElement('footer');

                            POSTLIKE(PostFooter,Element);

                            POSTCOMMENT(PostFooter,Element)

                            POSTSHARE(PostFooter,Element)

                        ADD(HomeDiv,PostFooter);

                    ADD(ELEMENT,HomeDiv);

                });

            });

        });

    });

}