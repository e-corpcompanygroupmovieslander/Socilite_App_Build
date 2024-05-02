import { HOMEPAGE } from "../HomePage/HomePage.js"
import { UPDATEUSERPROFILE } from "./UpdateUserProfile.js";

export const USERACCOUNTPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        //console.log(data)

        BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
            <h1 class='Sections'>Account</h1>
    
        `,
        `
            <div class='View'>
    
                <img class='ProfilePhotoDisplay' src='../Library/Images/app_icon.png'/>
            
                <div class='MyData'>

                    <h1 class='UserData'>${data.UserName}</h1>

                    <div class='AccountHolder'>

                        <h1 id='PostsNumber' class='AccountSections'>${data.UserPosts}</h1>

                        <h1 class='AccountSections'>Friends</h1>

                        <h1 class='AccountSections'>Update</h1>
                    
                    </div>
                
                </div>

            </div>

            <div class='MyPosts'></div>
            
        `,''
        );

        const ProfileImage=document.querySelector('.ProfilePhotoDisplay');

        CLICKED('.ProfilePhotoDisplay',()=>{UPDATEUSERPROFILE()})

        const MyPosts=document.querySelector('.MyPosts')

        CONDITION(data.UserPhoto ,
            ()=>CHECK(data,(result)=>{
                ProfileImage.classList.add('ProfileImager')
                ProfileImage.src=data.UserPhoto
            }),
            ()=>ProfileImage.src=`../Library/Images/app_icon.png`
        )

        DEJSON('local','MyPosts',(posts)=>{

            REVERSE(posts,(data)=>{

                REDUX(data,(element)=>{
    
                    CREATEELEMENT('div','MyPostsDiv',(ELEMENT)=>{
    
                        DISPLAY(ELEMENT,`
    
                            <img class='PostImage' src='${element.PostedImage }'/>
                        
                        `)
    
                        ADD(MyPosts,ELEMENT);
                    })
    
                })

            })

        })

    })

}