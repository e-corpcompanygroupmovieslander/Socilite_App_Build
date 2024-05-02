import { ICONPATH, MOVIESPATH } from "../../Module/Module.js";
import { AUTOUSERDATA } from "../AutoDownloadData/AutoUserData.js";
import { AUTOPOSTS } from "../AutoDownloadData/PostDownload.js";

export const HOMEPAGEPOSTS=()=>{

    AUTOUSERDATA();

    AUTOPOSTS();

    DECLARATION('#HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        DEJSON('local','Posts',(data)=>{

            SHUFFLE(data,(data)=>{
        
                REDUX(data,(element)=>{

                    console.log(element)

                    CREATEELEMENT('div','PostHolder',(POSTHOLDER)=>{

                        const today = new Date();
                        const options = { weekday: 'long' };
                        // <h1 class='Time'>${today.toLocaleDateString('en-US', options)}</h1>
                        DISPLAY(POSTHOLDER,`

                        <div class='OptionsHeader'>

                            <img class='UserImage' src=''/>

                            <h1 class='PostersName'>${element.PostersName}</h1>

                           <button id='Follow' class='forestgreen'>Follow</button>

                        </div>
                        
                        <div  class='ImageHolder'>
                        
                            <img class='PostImage' src='${element.PostedImage }'/>

                        </div>
                        
                        <div class='OptionsFooter'>

                            <img id='Counter' class='Options' src='${ICONPATH}heart.png'/>

                            <img class='Options' src='${ICONPATH}chat.png'/>
                
                            <img class='Options' src='${ICONPATH}info.png'/>
                        
                        </div>

                        `)
                        
                        
                        ADD(ELEMENT,POSTHOLDER);

                        DECLARATION('.UserImage',(ELEMENT)=>{

                            CONDITION(element.PostersImage,
                                ()=>ELEMENT.src=element.PostersImage,
                                ()=>ELEMENT.src=ICONPATH+'user.png'
                            )
                        })

                        DECLARATION('#Counter',(ELEMENT)=>{

                            EVENT(ELEMENT,'click',()=>{
                                alert('')
                            })
                        })

                        
                    })

                })

            })

        })

    })

    
}