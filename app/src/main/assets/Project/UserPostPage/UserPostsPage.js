USERPOSTSPAGE=()=>{

    REMOVESTORE('','ImageChoosen');

    let IMAGEDATA;

    CLEAR('');

    HEADER('','HomeHeader');

    DECLARATION('.HomeHeader',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,'MesageIcon',()=>{

            EXTERNALJS(FILESPATH+'HomePage/HomePage.js',()=>HOMEPAGE());

        });

        DECLARATION('.MesageIcon',(Element)=>{

            STYLED(Element,'margin-left','1rem');
            STYLED(Element,'width','25px');
            STYLED(Element,'height','25px');
            STYLED(Element,'background','transparent');

        });

        BUTTON(ELEMENT,'Post','','Post','forestgreen',()=>{

            const Description=document.querySelector('.Description');
            const  Tags=document.querySelector('.Tags');
            const  Links=document.querySelector('.Links');
            const  Location=document.querySelector('.Location');
            const ProfileImage=document.querySelector('.ProfileImage');
            const POSTEDBUTTON=document.querySelector('.Post');

            CONDITION(localStorage.getItem('NetWork'),

                ()=> CONDITION(Description.value || sessionStorage.getItem('ImageChoosen'),

                    ()=>CHECK(ELEMENT,(result)=>{

                        DEJSON('local','UserData',(data)=>{

                            const POSTEDDATA={
                                "Description":Description.value,
                                "PostTitle":Tags.value,
                                "PostedImage":IMAGEDATA,
                                "PostersImage":data.UserPhoto,
                                "PostTime":new Date(),
                                "PostersEmail":data.UserEmail,
                                "UserID":Date.now(),
                                "Poster":localStorage.getItem('User'),
                                "PostsLocation":Location.value,
                                "PostersName":data.UserName,
                            }

                            let intervalID; 

                            const colorChange = () => {
                                let index = 0;
                                intervalID = setInterval(() => {
                                    index = (index + 1) % COLOR.length;
                                    STYLED(POSTEDBUTTON, 'border', `1px solid ${COLOR[index].name}`);
                                    STYLED(POSTEDBUTTON,'background','#00000080');
                                }, 2000);
                            };

                            colorChange();

                            POSTPACKAGE(CREATEPOTSAPI,'no-cors',POSTEDDATA,(info)=>{

                            });

                            const USERSDATA={
                                "UserID":localStorage.getItem('User'),
                                "UserUploads":++data.UserUploads,
                            }

                            POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERSDATA,(stuff)=>{

                                EXTERNALJS(FILESPATH+'AppAutoRuns/UpdatePosts.js',()=>UPDATESPOSTS(()=>{

                                    EXTERNALJS(FILESPATH+'AppAutoRuns/UpdateUserData.js',()=>UPDATEUSERDATA(()=>{

                                        EXTERNALJS(FILESPATH+'UserAccountPage/UserAccountPage.js',()=>USERACCOUNT());
        
                                    }));

                                }));

                            });

                        });

                    }),

                    ()=>CHECK(ELEMENT,(result)=>{

                        VIBRATION(500);
                        STYLED(Description, 'border', '1px solid red');
                        STYLED(Tags, 'border', '1px solid red');
                        STYLED(Links, 'border', '1px solid red');
                        STYLED(Location, 'border', '1px solid red');
                        STYLED(ProfileImage, 'border', '1px solid red');
        
                        setTimeout(() => {
        
                            STYLED(Description, 'border', '1px solid #cdcdcd20');
                            STYLED(Tags, 'border', '1px solid #cdcdcd20');
                            STYLED(Links, 'border', '1px solid #cdcdcd20');
                            STYLED(Location, 'border', '1px solid #cdcdcd20');
                            STYLED(ProfileImage, 'border', '1px solid #cdcdcd20');
        
                        }, 2000);

                    })

                ),

                ()=>CHECK(localStorage.getItem('User'),(result)=>{

                    STYLED(POSTEDBUTTON, 'background', 'brown');

                    setTimeout(() => {

                        STYLED(POSTEDBUTTON, 'background', 'forestgreen');

                    }, 2000);

                })

            );
           
        });

        DECLARATION('.Post',(Element)=>{

            STYLED(Element,'position','relative');
            STYLED(Element,'margin-right','1rem');
            STYLED(Element,'width','100px');
            STYLED(Element,'height','35px');

        });

    });

    FULLVIEW('','FullDiv');    
        
    DECLARATION('.FullDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'top','55px');
        STYLED(ELEMENT,'bottom','0%');
        STYLED(ELEMENT,'background','transparent');

        TEXTAREA(ELEMENT,'Description','Tell Us Your Mind','');

        INPUT(ELEMENT,'Tags','Enter Tags','');

        INPUT(ELEMENT,'Links','Enter Link','');

        INPUT(ELEMENT,'Location','Enter Location','');

        TEXT(ELEMENT,'p','','Click Image To Choose Image','teal',()=>{});

        IMAGE(ELEMENT,'ProfileImage',BLACKIMAGEICON,()=>{

            const ProfileImage=document.querySelector('.ProfileImage');

            FILES(ProfileImage,(data)=>{
                
                STRINGCOMPRESSOR(data.base64,(info)=>{

                    ProfileImage.src=`data:${data.fileType};base64,${info}`;

                    STORE('','ImageChoosen','On');

                    IMAGEDATA=`data:${data.fileType};base64,${info}`;

                });

            });
            
        });

        DECLARATION('.ProfileImage',(ELEMENT)=>{

            STYLED(ELEMENT,'width','95%');
            STYLED(ELEMENT,'border-radius','5px');
            STYLED(ELEMENT,'border','1px solid #cdcdcd20');
            STYLED(ELEMENT,'left','2%');

        });

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       
    });

}