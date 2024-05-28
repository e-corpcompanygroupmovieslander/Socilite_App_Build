UPDATESPOSTS=(callback)=>{

    CONDITION(localStorage.getItem('NetWork'),

        ()=>GETPACKAGE(POSTSAPI,'cors',(data)=>{

            UserData={
                "Name":"UsersPosts",
                "UsersPosts":data
            }
    
            CONDITION(localStorage.getItem('User'),
    
                ()=>CHECK(localStorage.getItem('User'),(result)=>{
    
                    UPDATEINDEXED('Socilite','Posts',UserData)
    
                    callback();
    
                }),
    
                ()=>STOREINDEXED('Socilite','Posts',UserData)
    
            );
    
        }),

        ()=>console.log('Using Local Copy')

    );



};