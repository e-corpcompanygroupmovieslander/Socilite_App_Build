import { CREATEPOTSAPI, UPDATEUSERAPI } from "../Apis/Apis.js";
import { AUTODOWNLOADPOSTS } from "../AutoLoginPage/AutoDownloadPosts.js";
import { AUTOUPDATEUSER } from "../AutoLoginPage/AutoUpdateUser.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"


export const USERPROFILEPHOTO=()=>{

    REMOVESTORE('','SelectedImage');

    WIDGET(`

        <h2>Add Profile Photo</h2>

        <input class='PostImageSelection' type='file' accept='image/*' />

        <img class='SelectedImage' src='${WHITEICONS}library.png'/>

        <button class='forestgreen'> Update </button>

        <button class='brown'> Skip </button>

    `);

    let IMAGEDATA;

    const SelectedImage=document.querySelector('.SelectedImage');

    FILES('.PostImageSelection',(data)=>{

        STRINGCOMPRESSOR(data.Base64,(info)=>{

            SelectedImage.src=`data:${data.Type};base64,${info}`

            IMAGEDATA=`data:${data.Type};base64,${info}`;

            STORE('','SelectedImage','ON')

        });

    });

    CLICKED('.forestgreen',()=>{

        DEJSON('local','UserData',(data)=>{

            const USER={
                "PostersName":data.UserName,
                "PostersEmail":data.UserEmail,
                "Description":`${data.UserName} has Created Their First post On Socilite`,
                "PostsLocation":"",
                "PostTitle":"Profile Photo",
                "PostTime":new Date(),
                "Poster":localStorage.getItem('User'),
                "UserID":Date.now(),
                "PostersImage":IMAGEDATA,
                "PostedImage":IMAGEDATA
            };

            const USERDATA={
                "UserID":localStorage.getItem('User'),
                "UserUploads":"1",
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

                            HOMEPAGE();
        
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

        HOMEPAGE();

    });

};