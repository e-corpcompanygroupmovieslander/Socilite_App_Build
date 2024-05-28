import { USERSAPI } from "../Apis/Apis.js";
import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINPAGE=()=>{

    WIDGET(`

        <h2>Socilite</h2>

        <input type='email' class='Email' placeholder='Enter User Email' />

        <input type='password' class='Password'  placeholder='Enter User Password' />

        <button class='forestgreen'>Sign In</button>
    
        <button class='blue'>Create Account </button>

    `);
    
    const Email=document.querySelector('.Email');
    const Password=document.querySelector('.Password');
    const Button=document.querySelector('.forestgreen');
    

    CLICKED('.forestgreen',()=>{

        CONDITION(Email.value,

            ()=>CONDITION(Password.value,
        
                ()=>CHECK(Password.value,(result)=>{

                    LOADER(Button);

                    GETPACKAGE(USERSAPI,'cors',(data)=>{

                        FINDER(data,'UserEmail',Email.value,(user)=>{
    
                            CONDITION(user.UserEmail === Email.value,
    
                                ()=>PASSWORDDEHASH(user.UserPassword,Password.value,(data)=>{
    
                                    CONDITION(data === true,
    
                                        ()=>CHECK(Button,(result)=>{

                                            STORE('local','User',user.UserID);

                                            JSONIFICATION(user,(mydata)=>{

                                                STORE('local','UserData',mydata);  

                                                HOMEPAGE();

                                            });

                                        }),
    
                                        ()=>CHECK(Password,(result)=>{
            
                                            VIBRATION(500);
                                                
                                            STYLED(Password,'border-bottom','1px solid red');

                                            ORIGIN(Button,'Sign In');
                                
                                        }),
                                
                                    );
    
                                }),
    
                                ()=>CHECK(Email,(result)=>{
    
                                    VIBRATION(500);
                                    
                                    STYLED(Email,'border-bottom','1px solid red');

                                    ORIGIN(Button,'Sign In');
                    
                                }),
    
                            );
    
                        });
    
                    })

                }),
        
                ()=>CHECK(Password,(result)=>{
        
                    VIBRATION(500);
                        
                    STYLED(Password,'border-bottom','1px solid red');
        
                    setTimeout(() => {
        
                        STYLED(Password,'border-bottom','1px solid #cdcdcd20');
                            
                    }, 2000);
        
                }),
        
            ),

            ()=>CHECK(Email,(result)=>{

                VIBRATION(500);
                
                STYLED(Email,'border-bottom','1px solid red');

                setTimeout(() => {

                    STYLED(Email,'border-bottom','1px solid #cdcdcd20');
                    
                }, 2000);

            })

        );

    });
    
    CLICKED('.blue',()=>{CREATEACCOUNTPAGE()})
}