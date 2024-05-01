import { HOMEPAGE } from "../HomePage/HomePage.js"

export const CREATEPOSTPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
    `
        <h1 class='Sections'>Post</h1>
    
    `,
    `
        <p class='CreatePostSEction'>Post Title</p>

        <input type='' maxlength='50' />

        <p class='CreatePostSEction'>Description</p>

        <textarea></textarea>

        <p class='CreatePostSEction'>Choose Image</p>

        <button class='gray'>Choose Image</button>

        <img class='ImagePreview' src='../Library/Images/app_icon.png'/>

        <button class='forestgreen'>Post</button>

    `,''

    );

}