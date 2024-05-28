UPDATEUSERDATA=(callback)=>{

    CONDITION(localStorage.getItem('NetWork'),

        ()=>   GETPACKAGE(USERSAPI,'cors',(data)=>{

            FINDER(data,'UserID',localStorage.getItem('User'),(user)=>{
    
                CONDITION(user.UserID === localStorage.getItem('User'),
    
                    ()=>CHECK(localStorage.getItem('User'),(result)=>{
    
                        JSONIFICATION(user,(info)=>{
    
                            STORE('local','UserData',info);
    
                            callback();
                            
                        });
    
                    }),
    
                    ()=>CHECK(localStorage.getItem('User'),(result)=>{
    
                        alert('No User Found')
    
                    })
            
                );
    
            });
    
        }),

        ()=>console.log('Using Back Up Copy')
    
    );
 
};