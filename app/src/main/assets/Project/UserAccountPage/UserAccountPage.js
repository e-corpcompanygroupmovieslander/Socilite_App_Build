USERACCOUNT=()=>{

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

        ICON(ELEMENT,WHITESETTINGICON,'UserIcon',()=>{

            
        });

        DECLARATION('.UserIcon',(Element)=>{

            STYLED(Element,'margin-right','1rem');
            STYLED(Element,'width','30px');
            STYLED(Element,'height','30px');
            STYLED(Element,'border-radius','50px');
            STYLED(Element,'background','transparent');

        });

    });

    FULLVIEW('','FullDiv');    
        
    DECLARATION('.FullDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'top','55px');
        STYLED(ELEMENT,'bottom','0');
        STYLED(ELEMENT,'background','transparent');

        VIEW(ELEMENT,'UserAccountDiv');

        EXTERNALJS(FILESPATH+'UserAccountPage/UserDetails.js',()=>{USERDETAILS()})

        FULLVIEW(ELEMENT,'PostsDIv');

       EXTERNALJS(FILESPATH+'UserAccountPage/UserPosts.js',()=>{USERPOSTS()})

    });

};