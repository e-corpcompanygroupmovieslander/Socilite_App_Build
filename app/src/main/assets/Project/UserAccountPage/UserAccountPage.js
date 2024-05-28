import { HOMEPAGE } from "../HomePage/HomePage.js"
import { USERPOSTS } from "./UserPosts.js";

export const USERACCOUNTPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        BACKHEADERWIDGET(()=>{HOMEPAGE()},
            `
                <h1 class='Sections'>ProFile</h1>

            `
            ,

            `

                <div class='View'>

                    <img class='UserPhoto' src='${data.UserPhoto}'/>

                    <div class='UserDetailsDiv'>

                        <h1 class='UserName'>${data.UserName}</h1>

                        <h1 class='UserEmail'>${data.UserEmail}</h1>

                        <div class='UserOptionsDiv'>

                            <img src='${WHITEICONS}user.png'/>

                            <img src='${WHITEICONS}review.png'/>

                            <img src='${WHITEICONS}location.png'/>
                            
                        </div>

                        <div class='UsedOptionsDiv'>

                            <h1 class='Friends'>Posts  <br> ${data.UserUploads||0}</h1>
                        
                            <h1 class='Friends'>Friends  <br> ${data.UserFriends.length||0}</h1>
                        
                        </div>
                    
                    </div>
                
                </div>

                <div class='MyPostsDiv'>

                    <h1 class='NoPosts'>No User Posts</h1>
                
                </div>

            `,''

        );

    })

    USERPOSTS();

};