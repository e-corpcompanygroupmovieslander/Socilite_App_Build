import { GETUSERAPI, IMAGEUPLOADERAPI, UPDATEUSERAPI } from "../../Module/Module.js";
import { USERACCOUNTPAGE } from "./UserAccountPage.js";

export const UPDATEUSERPROFILE=()=>{

    DEJSON('local','UserData',(data)=>{

        WIDGET(`

            <h3>Choose Profile Image</h3>
            
            <button class='gray'> choose Image</button>

            <img class='ImagePreview' src='../Library/Images/app_icon.png'/>

            <button class='forestgreen'>Update</button>

            <button class='blue'>Remove Profile Photo</button>

            <button class='brown'>Cancel</button>

        `);
    
        CLICKED('.brown',()=>{USERACCOUNTPAGE()});

        let PICKEDIMAGE='';

        CLICKED('.gray',()=>{
    
            FILES((data)=>{
                const ImagePreview=document.querySelector('.ImagePreview');
    
                ImagePreview.src = 'data:image/png;base64,' + data;
    
                PICKEDIMAGE=data;
            })
            
        })

        CLICKED('.blue',()=>{
    
            DEJSON('local','UserData',(data)=>{
    
                const BUTTON=document.querySelector('.blue');
    
                LOADER(BUTTON);
    
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
                    "UserName": data.UserName,
                    "UserPassword":data.UserPassword,
                    "UserPhoto": "",
                    "UserPosts":POSTS
                }
    
                POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATA,(data)=>{
                    GETPACKAGE(GETUSERAPI,'cors',(data)=>{
                        FINDER(data,'UserID',localStorage.getItem('User'),(users)=>{
                            CONDITION(users.UserID  === localStorage.getItem('User') && !users.UserDeleted,
                            ()=>CHECK(users,(result)=>{
                                STORE('local','UserData',JSON.stringify(users))
                                USERACCOUNTPAGE();
                            }),
                            ()=>CHECK(users,(result)=>{
                                localStorage.clear();
                                CONNECTION();
                            }),
                            )
                        })
                    })
                })

    
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
                        "UserName": data.UserName,
                        "UserPassword":data.UserPassword,
                        "UserPhoto": info.fileName,
                        "UserPosts":POSTS
                    }
        
                    POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATA,(data)=>{
                        GETPACKAGE(GETUSERAPI,'cors',(data)=>{
                            FINDER(data,'UserID',localStorage.getItem('User'),(users)=>{
                                CONDITION(users.UserID  === localStorage.getItem('User') && !users.UserDeleted,
                                ()=>CHECK(users,(result)=>{
                                    STORE('local','UserData',JSON.stringify(users))
                                    USERACCOUNTPAGE();
                                }),
                                ()=>CHECK(users,(result)=>{
                                    localStorage.clear();
                                    CONNECTION();
                                }),
                                )
                            })
                        })
                    })
    
                } )
    
                .catch(error=>{console.error(error)})
    
            })
    
        })

    })

}