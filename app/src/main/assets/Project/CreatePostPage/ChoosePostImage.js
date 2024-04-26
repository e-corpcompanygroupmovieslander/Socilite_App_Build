import { CREATEPOSTPAGE } from "./CreatePostPage.js"
import { IMAGEDISPLAY } from "./ImageDisplayPage.js"

const CHOOSEPOSTIMAGE=()=>{

    BACKHEADERWIDGET(()=>{CREATEPOSTPAGE()},
    `

        <h1 class='HeaderOption'>Choose Photo</h1>
    
    `,
    `

        <button class='teal'>Choose Photo</button>

        <img class='ImagePreview'  src='../Library/Images/app_icon.png'/>

        <button class='forestgreen'>Post</button>

    `
    ,''
    )

    CLICKED('.teal',()=>{
        IMAGEDISPLAY()
    })

}

export{CHOOSEPOSTIMAGE}