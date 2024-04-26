import { ICONPATH } from "../../Module/Module.js"
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { CHOOSEPOSTIMAGE } from "./ChoosePostImage.js"

const CREATEPOSTPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
    `

        <h1 class='HeaderOption'>Create Post</h1>
    
    `,
    `

        <input type='' maxlength='50' placeholder='Enter Post Title' />

        <textarea class='' placeholder='Write Your Story'></textarea>

        <input type='' placeholder='Enter Tags '/>

        <button class='slate'>choose Location</button>

        <button class='slate'>choose Activity</button>

        <button class='slate'>Link Friends</button>

        <button class='forestgreen'>Continue</button>


    `
    ,''
    )

    CLICKED('.forestgreen',()=>{CHOOSEPOSTIMAGE()})

}

export{CREATEPOSTPAGE}