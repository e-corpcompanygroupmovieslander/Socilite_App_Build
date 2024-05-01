import { ICONPATH } from "../../Module/Module.js"
import { CREATEPOSTPAGE } from "../CreatePostPage/CreatePostPage.js";
import { HOMEPAGEPOSTS } from "./HomePagePosts.js";

export const HOMEPAGE=()=>{

    ROUNDFOOTERWIDGET(
        `
            <div id='HomeDiv'></div>
        
        `,
        `
            <img src='${ICONPATH}chat.png'/>

            <img class='Post' src='${ICONPATH}post.png'/>

            <img src='${ICONPATH}profile.png'/>

        `,''
    );

    HOMEPAGEPOSTS();

    CLICKED('.Post',()=>{CREATEPOSTPAGE()});

}