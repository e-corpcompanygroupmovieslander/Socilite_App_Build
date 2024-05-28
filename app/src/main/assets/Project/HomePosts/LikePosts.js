POSTSLIKE=(data,OPTIONHOLDER)=>{

    if (data.PeopleLiked.includes(localStorage.getItem('User'))) {

        const UNLIKED=document.createElement('img');
    
            UNLIKED.src=WHITEHEARTICON;
    
            STYLED(UNLIKED,'position','relative');
            STYLED(UNLIKED,'width','30px');
            STYLED(UNLIKED,'margin','10px');
    
        ADD(OPTIONHOLDER,UNLIKED);
    
        EVENT(UNLIKED,'click',()=>{
    
            UNLIKED.src=WHITEUNHEARTICON;   
    
            JSONREMOVER(data.PeopleLiked,[localStorage.getItem('User')],(likes)=>{
    
                const LIKEDDATA={
                    "UserID":data.UserID,
                    "PeopleLiked":likes
                }
    
                POSTPACKAGE(UPDATEPOSTSAPI,'no-cors',LIKEDDATA,(response)=>{

                    GETPACKAGE(POSTSAPI,'cors',(info)=>{

                        UserData={
                            "Name":"UsersPosts",
                            "UsersPosts":info
                        }
                
                        CONDITION(localStorage.getItem('User'),
                
                            ()=>UPDATEINDEXED('Socilite','Posts',UserData),
                
                            ()=>STOREINDEXED('Socilite','Posts',UserData)
                
                        );

                        POSTSLIKE(data,OPTIONHOLDER);

                    });
    
                });
    
            });
    
        });
            
    } else {
        
        const LIKED=document.createElement('img');
    
        LIKED.classList.add('Liked');
            
        LIKED.src=WHITEUNHEARTICON;
    
            STYLED(LIKED,'position','relative');
            STYLED(LIKED,'width','30px');
            STYLED(LIKED,'margin','10px');
    
        ADD(OPTIONHOLDER,LIKED);
    
        EVENT(LIKED,'click',()=>{
    
            LIKED.src=WHITEHEARTICON;   
    
            JSONADDER(data.PeopleLiked,[localStorage.getItem('User')],(likes)=>{
    
                const LIKEDDATA={
                    "UserID":data.UserID,
                    "PeopleLiked":likes
                }
    
                POSTPACKAGE(UPDATEPOSTSAPI,'no-cors',LIKEDDATA,(response)=>{

                    GETPACKAGE(POSTSAPI,'cors',(info)=>{

                        UserData={
                            "Name":"UsersPosts",
                            "UsersPosts":info
                        }
                
                        CONDITION(localStorage.getItem('User'),
                
                            ()=>UPDATEINDEXED('Socilite','Posts',UserData),
                
                            ()=>STOREINDEXED('Socilite','Posts',UserData)
                
                        );

                        POSTSLIKE(data,OPTIONHOLDER);

                    });
    
                });
    
            });
    
        });
    
    };

}
