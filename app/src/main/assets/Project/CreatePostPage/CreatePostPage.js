import { CREATEPOSTAPI, IMAGEUPLOADERAPI } from "../../Module/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"

export const CREATEPOSTPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
    `
        <h1 class='Sections'>Post</h1>
    
    `,
    `
        <p class='CreatePostSEction'>Post Title</p>

        <input class='Title' type='' maxlength='50' />

        <p class='CreatePostSEction'>Description</p>

        <textarea class='Description'></textarea>

        <p class='CreatePostSEction'>Choose Image</p>

        <button class='gray'>Choose Image</button>

        <img class='ImagePreview' src='../Library/Images/app_icon.png'/>

        <button class='forestgreen'>Post</button>

    `,''

    );

    let PICKEDIMAGE='';

    CLICKED('.gray',()=>{

        FILES((data)=>{
            const ImagePreview=document.querySelector('.ImagePreview');

            ImagePreview.src = 'data:image/png;base64,' + data;

            PICKEDIMAGE=data;
        })
        
    })

    CLICKED('.forestgreen',()=>{

        const POSTTITLE=document.querySelector('.Title');
        const Description=document.querySelector('.Description');

        DEJSON('local','UserData',(data)=>{

            const BUTTON=document.querySelector('.forestgreen');

            LOADER(BUTTON);

            fetch(IMAGEUPLOADERAPI,{
                method:"Post",
                body:JSON.stringify( {base64Data: PICKEDIMAGE})
            })

            .then(res =>res.json())

            .then(info =>{

                const USERDATA={
                    "PostersName":data.UserName,
                    "PostersEmail":data.UserEmail,
                    "Poster":data.UserID,
                    "PostersImage":data.UserPhoto,
                    "PostTime":new Date(),
                    "PostTitle":POSTTITLE.value,
                    "Description":Description.value,
                    "PostsLikes":"",
                    "UserID":data.UserID+Date.now(),
                    "PostsLocation":data.UserLocation,
                    "PeopleLiked":"",
                    "PostComments":"",
                    "PostedImage":info.fileName
                }
    
                POSTPACKAGE(CREATEPOSTAPI,'no-cors',USERDATA,(data)=>{
                    HOMEPAGE();
                })

            } )

            .catch(error=>{console.error(error)})

        })

    })

}