import { CREATEPOTSAPI, IMAGEPICKER, POSTSAPI, UPDATEUSERAPI, USERSAPI } from "../../Module/ImagePicker.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";

export const PROFILEPHOTO=()=>{

    sessionStorage.clear();

    DEJSON('local','UserData',(data)=>{

        BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
            `
                
                <img id='createUserPost' class='Settings' src='${WHITEICONS}upload.png'/>

            `,

            `
                <h3>Add Profile Photo</h3>

                <input class='ImageSelect' type='file' accept='image/*' />

                <img class='SelectedImage' src='${data.UserPhoto||BLACKICONS+'image.png'}'/>

                <button class='teal'>Skip</button>

            `,'PostCreationDIv'

        );

        let IMAGES;

        IMAGEPICKER('.ImageSelect','.SelectedImage',(data)=>{

            STORE('','SelectedImage','On');

            IMAGES=data;

        });

        CLICKED('#createUserPost',()=>{

            const SelectedImage=document.querySelector('.SelectedImage');
    
            const createUserPost=document.querySelector('#createUserPost');
    
            if (sessionStorage.getItem('SelectedImage')) {
    
                DEJSON('local','UserData',(data)=>{
                    
                    const POSTEDDATA={
                        "Description":`${data.UserName} has Created first Post On Socilite`,
                        "Device":"",
                        "PostTime":new Date(),
                        "PostTitle":"Profile Photo",
                        "PostedImage":IMAGES,
                        "Poster":data.UserID,
                        "PostersEmail":data.UserEmail,
                        "PosterName":data.UserName,
                        "UserID":Date.now(),
                        "PostsLocation":data.UserLocation,
                        "PostersImage":IMAGES
                    }
    
                    const USERDATA={
                        "UserID":data.UserID,
                        "UserUploads":++data.UserUploads,
                        "UserPhoto":IMAGES
                    }
    
                    colorChange(createUserPost);
    
                    STYLED(createUserPost,'padding','1%');
                    STYLED(createUserPost,'border-radius','50px');
    
    
                    POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATA,()=>{
    
                        GETPACKAGE(USERSAPI,'cors',(data)=>{
    
                            FINDER(data,'UserID',localStorage.getItem('User'),(user)=>{
                
                                if (user.UserID === localStorage.getItem('User')) {
                                    
                                    JSONIFICATION(user,(data)=>{
                
                                        STORE('local','UserData',data);
                
                                    });
                                
                                }else{
                
                                    localStorage.clear();
    
                                    LOGINPAGE();
                
                                };
                
                            });
                
                        });
    
                    })
    
                    POSTPACKAGE(CREATEPOTSAPI,'no-cors',POSTEDDATA,(info)=>{
                        
                        GETPACKAGE(POSTSAPI,'cors',(result)=>{
    
                            const USERDATA={
                                "Name":"Posts",
                                "Posts":result
                            }
    
                            UPDATEINDEXED('Socilite','Posts',USERDATA);
    
                            HOMEPAGE();
    
                        })
    
                    });
    
                });
    
            } else{
    
                VIBRATION(500);
    
                STYLED(SelectedImage,'border','1px solid red');
    
                setTimeout(() => {
    
                    STYLED(SelectedImage,'border','1px solid #cdcdcd20');
                    
                }, 2000);
    
            };
    
        });

        CLICKED('.teal',()=>{

            HOMEPAGE()
            
        })
    });

};