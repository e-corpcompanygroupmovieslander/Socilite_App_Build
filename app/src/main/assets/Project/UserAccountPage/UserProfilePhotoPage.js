import { USERACCOUNTPAGE } from "./UserAccountPage.js";
import { CREATEPOTSAPI, UPDATEUSERAPI } from "../Apis/Apis.js";
import { AUTODOWNLOADPOSTS } from "../AutoLoginPage/AutoDownloadPosts.js";
import { AUTOUPDATEUSER } from "../AutoLoginPage/AutoUpdateUser.js";
import { IMAGEPICKER } from "../AppModules/FilesPicker.js";

export const USERPROFILEPHOTOPAGE=()=>{

    REMOVESTORE('','SelectedImage');

    DEJSON('local','UserData',(data)=>{

        BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
            `
                <h1 class='Sections'>Profile Photo</h1>

            `
            ,

            `

                <input class='PostImageSelection' type='file' accept='image/*' />

                <br><br>

                <img class='SelectedImage' src='${data.UserPhoto||BLACKICONS+'image.png'}'/>

                <button class='forestgreen'>Update</button>

                <button class='brown'>Remove</button>
                

            `,''

        );

        let IMAGEDATA;

        IMAGEPICKER('.PostImageSelection','.SelectedImage',(data)=>{

            STORE('','SelectedImage','ON');
    
            IMAGEDATA=data;
    
        });

        const SelectedImage=document.querySelector('.SelectedImage');
    
        CLICKED('.forestgreen',()=>{
    
            DEJSON('local','UserData',(data)=>{
    
                const USER={
                    "PostersName":data.UserName,
                    "PostersEmail":data.UserEmail,
                    "Description":`${data.UserName} has Updated Their Profile Photo`,
                    "PostsLocation":data.UserLocation,
                    "PostTitle":"Profile Photo",
                    "PostTime":new Date(),
                    "Poster":localStorage.getItem('User'),
                    "UserID":Date.now(),
                    "PostersImage":IMAGEDATA,
                    "PostedImage":IMAGEDATA
                };
    
                const USERDATA={
                    "UserID":localStorage.getItem('User'),
                    "UserUploads":++data.UserUploads,
                    "UserPhoto":IMAGEDATA
                }
    
                CONDITION(sessionStorage.getItem('SelectedImage'),
    
                    ()=>CHECK(sessionStorage.getItem('SelectedImage'),(result)=>{
    
                        const CreatePost=document.querySelector('.forestgreen');
    
                        LOADER(CreatePost);
    
                        POSTPACKAGE(CREATEPOTSAPI,'no-cors',USER,(data)=>{
    
                            POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATA,(data)=>{
    
                                AUTODOWNLOADPOSTS();
    
                                AUTOUPDATEUSER();
    
                                USERACCOUNTPAGE();
            
                            });
    
                        });
    
                    }),
    
                    ()=>CHECK(sessionStorage.getItem('SelectedImage'),(result)=>{
    
                        VIBRATION(500);
    
                        STYLED(SelectedImage,'border','1px solid red');
    
                        setTimeout(() => {
    
                            STYLED(SelectedImage,'border','1px solid #cdcdcd20');
                            
                        }, 2000);
    
                    }),
            
                );
    
            });
    
        });
    
        CLICKED('.brown',()=>{

            const CreatePost=document.querySelector('.brown');
    
            LOADER(CreatePost);

            const USERDATA={
                "UserID":localStorage.getItem('User'),
                "UserPhoto":''
            }
    
            POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATA,(data)=>{
    
                AUTODOWNLOADPOSTS();

                AUTOUPDATEUSER();

                USERACCOUNTPAGE();

            });
            
    
        });

    })



}