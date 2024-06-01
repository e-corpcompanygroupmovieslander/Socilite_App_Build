import { CREATEPOTSAPI, IMAGEPICKER, POSTSAPI, UPDATEUSERAPI, USERSAPI } from "../../Module/ImagePicker.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";

export const PROFILEUPFATEPAGE=()=>{

    sessionStorage.clear();

    DEJSON('local','UserData',(data)=>{

        BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
            `
                
                <img id='Delete' class='Settings' src='${WHITEICONS}delete.png'/>

                <img id='createUserPost' class='Settings' src='${WHITEICONS}upload.png'/>

            `,

            `
                <input class='ImageSelect' type='file' accept='image/*' />

                <img class='SelectedImage' src='${data.UserPhoto||BLACKICONS+'image.png'}'/>

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
                        "Description":`${data.UserName} has Updated Their Profile Photo`,
                        "Device":"",
                        "PostTime":new Date(),
                        "PostTitle":"Profile Photo",
                        "PostedImage":IMAGES,
                        "Poster":data.UserID,
                        "PostersEmail":data.UserEmail,
                        "PosterName":data.UserName,
                        "UserID":Date.now(),
                        "PostsLocation":data.UserLocation,
                        "PostersImage":data.UserPhoto
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
    
                            USERACCOUNTPAGE();
    
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

        CLICKED('#Delete',()=>{

            const createUserPost=document.querySelector('#Delete');

            DEJSON('local','UserData',(data)=>{

                const USERDATAT={
                    "UserID":data.UserID,
                    "UserPhoto":""
                }

                colorChange(createUserPost);

                STYLED(createUserPost,'padding','1%');
                STYLED(createUserPost,'border-radius','50px');


                POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERDATAT,()=>{

                    GETPACKAGE(USERSAPI,'cors',(data)=>{

                        FINDER(data,'UserID',localStorage.getItem('User'),(user)=>{
            
                            if (user.UserID === localStorage.getItem('User')) {
                                
                                JSONIFICATION(user,(data)=>{
            
                                    STORE('local','UserData',data);

                                    USERACCOUNTPAGE();
            
                                });
                            
                            }else{
            
                                localStorage.clear();

                                LOGINPAGE();
            
                            };
            
                        });
            
                    });

                })

            })

        })
    });

};