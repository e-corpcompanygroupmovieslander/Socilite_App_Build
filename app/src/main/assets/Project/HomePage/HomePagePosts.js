import { ICONPATH, MOVIESPATH } from "../../Module/Module.js";

export const HOMEPAGEPOSTS=()=>{

    DECLARATION('#HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        DEJSON('local','Posts',(data)=>{

            SHUFFLE(data,(data)=>{
        
                REDUX(data,(element)=>{

                    CREATEELEMENT('div','PostHolder',(POSTHOLDER)=>{

                        const today = new Date();
                        const options = { weekday: 'long' };
                        // <h1 class='Time'>${today.toLocaleDateString('en-US', options)}</h1>
                        DISPLAY(POSTHOLDER,`

                        <div class='OptionsHeader'>

                            <img class='UserImage' src='${ICONPATH}user.png'/>

                            <h1 class='PostersName'>${element.MovieName}</h1>

                           <button id='Follow' class='forestgreen'>Follow</button>

                        </div>
                        
                        <div  class='ImageHolder'>
                        
                            <img class='PostImage' src='${MOVIESPATH + element.MovieImage }'/>

                        </div>
                        
                        <div class='OptionsFooter'>

                            <img class='Options' src='${ICONPATH}heart.png'/>

                            <img class='Options' src='${ICONPATH}chat.png'/>
                
                            <img class='Options' src='${ICONPATH}info.png'/>
                        
                        </div>

                        `)

                        ADD(ELEMENT,POSTHOLDER);
        
                    })

                })

            })

        })

    })

    
}