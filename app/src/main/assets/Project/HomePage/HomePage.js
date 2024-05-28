import { HOMEPOSTSPAGE } from "../HomePostsPage/HomePostsPage.js";

export const HOMEPAGE=()=>{


    DEJSON('local','UserData',(data)=>{

        HEADERWIDGET(
            `
            
                <img  src='${WHITEICONS}chat.png'/>

                <input type='search' class='HomeSearch' placeholder='Enter Your Search' />

                <img class='ProfilePicture' src='${data.UserPhoto}'/>

            `,
            `
                <div class='HomeDiv'></div>

                <button class='FloatPost'>

                    <img  src='${WHITEICONS}post.png'/>
                
                </button>
            
            `,''
        );

        HOMEPOSTSPAGE();

    });

}