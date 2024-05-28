import { CREATEPOTSAPI, UPDATEUSERAPI } from "../Apis/Apis.js";
import { AUTODOWNLOADPOSTS } from "../AutoLoginPage/AutoDownloadPosts.js";
import { AUTOUPDATEUSER } from "../AutoLoginPage/AutoUpdateUser.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";

export const USERPOSTSPAGE=()=>{

    REMOVESTORE('','SelectedImage');

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
            <h1 id='CreatePost' class='Post'>Post</h1>

        `
        ,

        `

            <textarea id='Description' placeholder='Whats On Your Mind' ></textarea>

            <input class='Location' type='text' placeholder='location' />

            <input  class='Tags' type='text' placeholder='Tags' />

            <br><br>

            <input class='PostImageSelection' type='file' />

            <br><br>

            <img class='SelectedImage' src='${WHITEICONS}library.png'/>

            <br><br>

        `,''

    );

    const Description=document.querySelector('#Description');
    const Location=document.querySelector('.Location');
    const Tags=document.querySelector('.Tags');

    let IMAGEDATA;

    const SelectedImage=document.querySelector('.SelectedImage');

    FILES('.PostImageSelection',(data)=>{

        STRINGCOMPRESSOR(data.Base64,(info)=>{

            SelectedImage.src=`data:${data.type};base64,${info}`

            IMAGEDATA=`data:${data.type};base64,${info}`;

            STORE('','SelectedImage','ON')

        });

    });

    CLICKED('#CreatePost',()=>{

        DEJSON('local','UserData',(data)=>{

            const USER={
                "Description":Description.value,
                "PostsLocation":Location.value,
                "PostTitle":Tags.value,
                "PostTime":new Date(),
                "Poster":localStorage.getItem('User'),
                "UserID":Date.now(),
                "PostersImage":data.UserPhoto,
                "PostedImage":IMAGEDATA
            };

            const USERDATA={
                "UserID":localStorage.getItem('User'),
                "UserUploads":++data.UserUploads
            }

            CONDITION(Description.value || sessionStorage.getItem('SelectedImage'),

                ()=>CHECK(Description.value,(result)=>{

                    const CreatePost=document.querySelector('#CreatePost');

                    LOADER(CreatePost);

                    POSTPACKAGE(CREATEPOTSAPI,'no-cors',USER,(data)=>{

                        POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATA,(data)=>{

                            AUTODOWNLOADPOSTS();

                            AUTOUPDATEUSER();
    
                            USERACCOUNTPAGE();
    
                        });

                    });

                }),

                ()=>CHECK(Description.value,(result)=>{

                    VIBRATION(500);

                    STYLED(Description,'border','1px solid red');
                    STYLED(SelectedImage,'border','1px solid red');

                    setTimeout(() => {

                        STYLED(Description,'border','1px solid #cdcdcd20');
                        STYLED(SelectedImage,'border','1px solid #cdcdcd20');
                        
                    }, 2000);

                }),
        
            );

        });

    });

};