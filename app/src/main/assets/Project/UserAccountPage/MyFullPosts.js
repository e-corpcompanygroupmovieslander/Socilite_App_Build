import { USERACCOUNTPAGE } from "./UserAccountPage.js";

export const MYFULLPOSTS=()=>{

    DEJSON('','MyCurrentPosts',(data)=>{

        BACKHEADERWIDGET(() => { USERACCOUNTPAGE() },
            `
                

            `,
            `

            <img class='MyPostedImage' src='${data.PostedImage}'/>

            <p>${data.Description}</p>


            `,
        );

    });


};