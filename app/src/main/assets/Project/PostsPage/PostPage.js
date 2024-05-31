import { HOMEPAGE } from "../HomePage/HomePage.js";

export const CREATEPOSTPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
    `
        
        <img src='${WHITEICONS}g.png'/>
        
        <img src='${WHITEICONS}group-users.png'/>

        <img src='${WHITEICONS}upload.png'/>

    `,

    `
        <textarea  placeholder='Whats On Your Mind'></textarea>

        <input type='text' placeholder='Enter Tags' />

        <input type='text' placeholder='Enter Location'/>

        <input type='file' accept='image/*' />

        <img class='SelectedImage' src='${BLACKICONS}image.png'/>

    `,''

    );

}