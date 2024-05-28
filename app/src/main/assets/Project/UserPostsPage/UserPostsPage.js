import { HOMEPAGE } from "../HomePage/HomePage.js"

export const USERPOSTSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
            <h1 class='Post'>Post</h1>

        `
        ,

        `

            <textarea placeholder='Whats On Your Mind' ></textarea>

            <input type='text' placeholder='location' />

            <input type='text' placeholder='Tags' />

            <br><br>

            <input class='PostImageSelection' type='file' />

            <br><br>

            <img class='SelectedImage' src='${WHITEICONS}library.png'/>

            <br><br>

        `,''

    );

    const SelectedImage=document.querySelector('.SelectedImage');

    FILES('.PostImageSelection',(data)=>{

        STRINGCOMPRESSOR(data.Base64,(info)=>{

            SelectedImage.src=`data:${data.type};base64,${info}`

        });

    });

};