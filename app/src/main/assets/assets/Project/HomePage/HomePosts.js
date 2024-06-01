import { HOMEPOSTEDDATA } from "../HomePosts/HomePosts.js";
import { CREATEPOSTPAGE } from "../PostsPage/PostPage.js";

export const HOMEPOSTS=()=>{

    DECLARATION('#HomeDiv',(ELEMENT)=>{

        DISPLAY(ELEMENT,`


            <div class='Posts'></div>

            <button class='FloatButton'>

                <img src='${WHITEICONS}post.png'/>
            
            </button>

        `);

    })

    HOMEPOSTEDDATA();

    CLICKED('.FloatButton',()=>{CREATEPOSTPAGE()})

}