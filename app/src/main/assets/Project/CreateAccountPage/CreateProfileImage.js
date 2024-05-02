import { IMAGEUPLOADERAPI, UPDATEUSERAPI } from "../../Module/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const PROFILEPHOTO=()=>{

    DEJSON('local','UserData',(data)=>{

        WIDGET(`

            <img class='AppIcon' src='../Library/Images/app_icon.png'/>

            <h3>Choose Profile Image</h3>
            
            <button class='gray'> choose Image</button>

            <img class='ImagePreview' src='../Library/Images/app_icon.png'/>

            <button class='forestgreen'>Post</button>

            <button class='brown'>Skip</button>

        `);
    
        CLICKED('.brown',()=>{HOMEPAGE()});

        let PICKEDIMAGE='';

        CLICKED('.gray',()=>{
    
            FILES((data)=>{
                const ImagePreview=document.querySelector('.ImagePreview');
    
                ImagePreview.src = 'data:image/png;base64,' + data;
    
                PICKEDIMAGE=data;
            })
            
        })

        CLICKED('.forestgreen',()=>{
    
            DEJSON('local','UserData',(data)=>{
    
                const BUTTON=document.querySelector('.forestgreen');
    
                LOADER(BUTTON);
    
                fetch(IMAGEUPLOADERAPI,{
                    method:"Post",
                    body:JSON.stringify( {base64Data: PICKEDIMAGE})
                })
    
                .then(res =>res.json())
    
                .then(info =>{

                    function getBrowserVersion() { return navigator.appVersion; }

                    let POSTS=++data.UserPosts

                    console.log(POSTS)
    
                    const USERDATA={
                        "UserActive": data.UserActive,
                        "UserCode": data.UserCode,
                        "UserCreated": data.UserCreated,
                        "UserDate": data.UserDate,
                        "UserDeleted": data.UserDeleted,
                        "UserDeletedDate": data.UserDeletedDate,
                        "UserDeletedMessage": data.UserDeletedMessage,
                        "UserDevice":getBrowserVersion() ,
                        "UserEmail":data.UserEmail,
                        "UserFriends": data.UserFriends,
                        "UserID": data.UserID,
                        "UserLastActive": new Date(),
                        "UserLocation": data.UserLocation,
                        "UserTelephone":data.UserTelephone,
                        "UserName": data.UserName,
                        "UserPassword":data.UserPassword,
                        "UserPhoto": info.fileName,
                        "UserPosts":POSTS
                    }
        
                    POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATA,(data)=>{
                        HOMEPAGE();
                    })
    
                } )
    
                .catch(error=>{console.error(error)})
    
            })
    
        })

    })


}