UPDATEUSERPROFILE=()=>{

    REMOVESTORE('','ImageChoosen');

    let IMAGEDATA;

    CLEAR('');

    HEADER('','HomeHeader');

    DECLARATION('.HomeHeader',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,'MesageIcon',()=>{

            EXTERNALJS(FILESPATH+'UserAccountPage/UserAccountPage.js',()=>USERACCOUNT());

        });

        DECLARATION('.MesageIcon',(Element)=>{

            STYLED(Element,'margin-left','1rem');
            STYLED(Element,'width','25px');
            STYLED(Element,'height','25px');
            STYLED(Element,'background','transparent');

        });

        BUTTON(ELEMENT,'Remove','','Remove','brown',()=>{

            const REMOVE=document.querySelector('.Remove');

            let intervalID; 
    
            const colorChange = () => {
                let index = 0;
                intervalID = setInterval(() => {
                    index = (index + 1) % COLOR.length;
                    STYLED(REMOVE, 'border', `1px solid ${COLOR[index].name}`);
                    STYLED(REMOVE,'background','#00000080');
                }, 2000);
            };

            colorChange();

            const USERSDATA={
                "UserID":localStorage.getItem('User'),
                "UserPhoto":''
            }

            POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERSDATA,(stuff)=>{

                EXTERNALJS(FILESPATH+'AppAutoRuns/UpdatePosts.js',()=>UPDATESPOSTS(()=>{

                    EXTERNALJS(FILESPATH+'AppAutoRuns/UpdateUserData.js',()=>UPDATEUSERDATA(()=>{

                        EXTERNALJS(FILESPATH+'UserAccountPage/UserAccountPage.js',()=>USERACCOUNT());

                    }));

                }));

            });

        });

        DECLARATION('.Remove',(Element)=>{

            STYLED(Element,'position','relative');
            STYLED(Element,'margin-right','1rem');
            STYLED(Element,'width','100px');
            STYLED(Element,'height','35px');

        });

    });

    FULLVIEW('','FullDiv');    
        
    DECLARATION('.FullDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'top','55px');
        STYLED(ELEMENT,'bottom','0');
        STYLED(ELEMENT,'background','transparent');

        DEJSON('local','UserData',(data)=>{

            TEXT(ELEMENT,'p','','Click Image To Choose Image','teal',()=>{});

            IMAGE(ELEMENT,'ProfileImage',data.UserPhoto||BLACKIMAGEICON,()=>{

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

                STYLED(ELEMENT,'margin-top','1rem');
                STYLED(ELEMENT,'width','95%');
                STYLED(ELEMENT,'border-radius','10px');
                STYLED(ELEMENT,'left','2%');

            });

            BUTTON(ELEMENT,'Post',WHITECHECKICON,'Post','forestgreen',()=>{

                const ProfileImage=document.querySelector('.ProfileImage');
                const POSTEDBUTTON=document.querySelector('.Post');
               
                CONDITION(sessionStorage.getItem('ImageChoosen'),
    
                    ()=>CHECK(ELEMENT,(result)=>{
    
                        DEJSON('local','UserData',(data)=>{
    
                            const POSTEDDATA={
                                "Description":`${data.UserName}has Updated Their Profile Photo`,
                                "PostTitle":"Profile Photo",
                                "PostedImage":IMAGEDATA,
                                "PostersImage":IMAGEDATA,
                                "PostTime":new Date(),
                                "PostersEmail":data.UserEmail,
                                "UserID":Date.now(),
                                "Poster":localStorage.getItem('User'),
                                "PostsLocation":data.UserLocation,
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
                                "UserPhoto":IMAGEDATA
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

                        STYLED(ProfileImage, 'border', '1px solid red');
        
                        setTimeout(() => {
    
                            STYLED(ProfileImage, 'border', '1px solid #cdcdcd20');
        
                        }, 2000);
    
                    })
    
                );
    
            })

        });

    });

};