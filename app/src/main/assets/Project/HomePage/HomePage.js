import { HOMEPOSTSPAGE } from "../HomePostsPage/HomePostsPage.js";

export const HOMEPAGE=()=>{


    DEJSON('local','UserData',(data)=>{

        HEADERWIDGET(
            `
            
                <img  src='${WHITEICONS}chat.png'/>

                <input type='search' class='HomeSearch' placeholder='Enter Your Search' />

                <img class='ProfilePicture' src='${data.UserPhoto}'/>

            `,
            ``,'HomeDiv'
        );

        HOMEPOSTSPAGE();

    });

}