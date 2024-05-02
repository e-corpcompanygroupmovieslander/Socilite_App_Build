import { HOMEPAGE } from "../HomePage/HomePage.js"
import { DISPLAYMYPOSTS } from "./DisplayMyPosts.js";
import { UPDATEUSERDATA } from "./UpdatePage.js";
import { UPDATEUSERPROFILE } from "./UpdateUserProfile.js";

export const USERACCOUNTPAGE=()=>{

    

    DEJSON('local','UserData',(data)=>{

        //console.log(data)

        BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
            <h1 class='Sections'>Settings</h1>
    
        `,
        `
            <div class='View'>
    
                <img class='ProfilePhotoDisplay' src='${data.UserPhoto || "../Library/Images/app_icon.png"}'/>
            
                <div class='MyData'>

                    <h1 class='UserData'>${data.UserName}</h1>

                    <div class='AccountHolder'>

                        <h1 id='PostsNumber' class='AccountSections'>${data.UserPosts}</h1>

                        <h1 class='AccountSections'>Friends</h1>

                        <h1 id='Update' class='AccountSections'>Update</h1>
                    
                    </div>
                
                </div>

            </div>

            <div class='MyPosts'></div>
            
        `,''
        );

        DISPLAYMYPOSTS();

        const ProfileImage=document.querySelector('.ProfilePhotoDisplay');

        CLICKED('.ProfilePhotoDisplay',()=>{UPDATEUSERPROFILE()});

        CLICKED('#Update',()=>{UPDATEUSERDATA()});

    })

}