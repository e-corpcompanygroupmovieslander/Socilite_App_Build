HOMEPAGE=()=>{

    EXTERNALJS(FILESPATH+'AppAutoRuns/UpdateUserData.js',()=>UPDATEUSERDATA(()=>{

    }));

    CLEAR('');

    DEJSON('local','UserData',(data)=>{
        
        HEADER('','HomeHeader');

        DECLARATION('.HomeHeader',(ELEMENT)=>{

            ICON(ELEMENT,WHITECHATICON,'MesageIcon',()=>{

            });

            DECLARATION('.MesageIcon',(Element)=>{

                STYLED(Element,'margin-left','1rem');
                STYLED(Element,'width','30px');
                STYLED(Element,'height','30px');
                STYLED(Element,'background','transparent');

            });

            INPUT(ELEMENT,'Search','Search','search');

            DECLARATION('.Search',(Element)=>{

                STYLED(Element,'width','60%');
                STYLED(Element,'left','0');
                STYLED(Element,'margin-left','auto');
                STYLED(Element,'margin-right','auto');
                STYLED(Element,'margin-top','auto');
                STYLED(Element,'margin-bottom','auto');
                
            });

            ICON(ELEMENT,data.UserPhoto||WHITEUSERICON,'UserIcon',()=>{

                EXTERNALJS(FILESPATH+'UserAccountPage/UserAccountPage.js',()=>USERACCOUNT());

            });

            DECLARATION('.UserIcon',(Element)=>{

                STYLED(Element,'margin-right','1rem');
                STYLED(Element,'width','40px');
                STYLED(Element,'height','40px');
                STYLED(Element,'border-radius','50px');
                STYLED(Element,'background','transparent');

            });

        });

        FULLVIEW('','FullDiv');
        
        EXTERNALJS(FILESPATH+'HomePage/HomePosts.js',()=>{HOMEPOSTS()});
    
        FLOATINGBUTTON('','','forestgreen',WHITEPOSTICON,()=>{

            EXTERNALJS(FILESPATH+'UserPostPage/UserPostsPage.js',()=>{USERPOSTSPAGE()});  

        });

    });

};