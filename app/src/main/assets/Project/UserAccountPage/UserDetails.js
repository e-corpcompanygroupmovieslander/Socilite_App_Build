USERDETAILS=()=>{

    DEJSON('local','UserData',(data)=>{

        DECLARATION('.UserAccountDiv',(ELEMENT)=>{

            TEXT(ELEMENT,'p','UserName',data.UserName,'teal',()=>{});

            DECLARATION('.UserName',(USERPHOTO)=>{
    
                STYLED(USERPHOTO,'position','absolute');
                STYLED(USERPHOTO,'right','3%');
                STYLED(USERPHOTO,'padding','3%');
                STYLED(USERPHOTO,'font-size','16px');
                STYLED(USERPHOTO,'border-bottom','1px solid #cdcdcd20');
    
            });

            CREATEELEMENT('div','',(USERDATA)=>{

                STYLED(USERDATA,'position','absolute');
                STYLED(USERDATA,'right','3%');
                STYLED(USERDATA,'width','50%');
                STYLED(USERDATA,'top','26%');
                STYLED(USERDATA,'height','50px');
                STYLED(USERDATA,'border-radius','10px');
                STYLED(USERDATA,'border','1px solid #cdcdcd20');
                STYLED(USERDATA,'display','inline-flex');

                ADD(ELEMENT,USERDATA);

                
                TEXT(USERDATA,'p','UserPosts',`Posts<br>${data.UserUploads||0}`,'teal',()=>{});

                DECLARATION('.UserPosts',(Posts)=>{
        
                    STYLED(Posts,'position','realative');
                    STYLED(Posts,'width','50%');
                    STYLED(Posts,'margin-top','auto');
                    STYLED(Posts,'margin-bottom','auto');
                    STYLED(Posts,'margin-left','auto');
                    STYLED(Posts,'margin-right','auto');
                    STYLED(Posts,'font-size','12px');
        
                });

                JSONLENGTH(data.UserFriends,(data)=>{

                    TEXT(USERDATA,'p','Posts',`Friends<br>${data||0}`,'teal',()=>{});

                    DECLARATION('.Posts',(Posts)=>{
            
                        STYLED(Posts,'position','realative');
                        STYLED(Posts,'width','50%');
                        STYLED(Posts,'margin-top','auto');
                        STYLED(Posts,'margin-bottom','auto');
                        STYLED(Posts,'margin-left','auto');
                        STYLED(Posts,'margin-right','auto');
                        STYLED(Posts,'font-size','12px');
            
                    });

                });

            });

            BUTTON(ELEMENT,data.UserLocation||'Location',WHITELOCATIONICON,'UserLocation','green',()=>{

                EXTERNALJS(FILESPATH+'UpdateProfilePage/UpdateUserLocation.js',()=>{UPDATEUSERLOCATION()})

            });

            DECLARATION('.UserLocation',(USERPHOTO)=>{
    
                STYLED(USERPHOTO,'position','absolute');
                STYLED(USERPHOTO,'width','180px');
                STYLED(USERPHOTO,'height','40px');
                STYLED(USERPHOTO,'border-radius','5px');
                STYLED(USERPHOTO,'left','auto');
                STYLED(USERPHOTO,'right','2%');
                STYLED(USERPHOTO,'bottom','0');
    
            });

            ICON(ELEMENT,WHITEWRITINGICON,'UpdatesIcon',()=>{

                EXTERNALJS(FILESPATH+'UpdateProfilePage/UpdateUserDetailsPage.js',()=>USERUPDATEDETAILS());
            
            });
    
            DECLARATION('.UpdatesIcon',(Element)=>{
    
                STYLED(Element,'position','absolute');
                STYLED(Element,'right','1rem');
                STYLED(Element,'width','25px');
                STYLED(Element,'height','25px');
                STYLED(Element,'bottom','30%');
    
            });

            ICON(ELEMENT,WHITEPHONEICON,'UpdatesContacts',()=>{

                EXTERNALJS(FILESPATH+'HomePage/HomePage.js',()=>HOMEPAGE());
    
            });
    
            DECLARATION('.UpdatesContacts',(Element)=>{
    
                STYLED(Element,'position','absolute');
                STYLED(Element,'right','6rem');
                STYLED(Element,'width','25px');
                STYLED(Element,'height','25px');
                STYLED(Element,'bottom','30%');
    
            });

            ICON(ELEMENT,WHITEUSERICON,'UpdatesLinks',()=>{

                EXTERNALJS(FILESPATH+'HomePage/HomePage.js',()=>HOMEPAGE());
    
            });
    
            DECLARATION('.UpdatesLinks',(Element)=>{
    
                STYLED(Element,'position','absolute');
                STYLED(Element,'right','10rem');
                STYLED(Element,'width','25px');
                STYLED(Element,'height','25px');
                STYLED(Element,'bottom','30%');
    
            });

            IMAGE(ELEMENT,'UserPhoto',data.UserPhoto||BLACKIMAGEICON,()=>{
                
                EXTERNALJS(FILESPATH+'UpdateUserProfilePage/UpdateUserProfile.js',()=>{UPDATEUSERPROFILE()})

            });
    
            DECLARATION('.UserPhoto',(USERPHOTO)=>{
    
                STYLED(USERPHOTO,'width','150px');
                STYLED(USERPHOTO,'height','100%');
                STYLED(USERPHOTO,'border-radius','10px');
    
            });

        });

    });

}