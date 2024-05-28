import { CREATEACCOUNTAPI, USERSAPI } from "../Apis/Apis.js";
import { CREATEACCOUNTPAGE } from "./CreateAccountPage.js";
import { USERPROFILEPHOTO } from "./ProfilePhoto.js";

export const EMAILVERFICATIONPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        WIDGET(`

            <h2>Socilite</h2>

            <input type='text' class='Email' placeholder='Enter Verification Code' />

            <button class='forestgreen'>Verify</button>

            <button class='brown'>Cancel</button>

        `);

        const Email=document.querySelector('.Email');

        const Button=document.querySelector('.forestgreen');

        CLICKED('.forestgreen',()=>{

            CONDITION(Email.value ,
    
                ()=>CONDITION(Email.value === data.UserID ,
    
                    ()=>CHECK(Email,(result)=>{

                        LOADER(Button);
                    
                        GETPACKAGE(USERSAPI,'cors',(info)=>{
                    
                            FINDER(info,'UserEmail',data.UserEmail,(users)=>{
                    
                                CONDITION(users.UserEmail === data.UserEmail,
                    
                                    ()=>CHECK(Email,(result)=>{
                    
                                        ORIGIN(Button,'Verify');
                    
                                        MESSAGE('Email Taken');
                    
                                    }),
                    
                                    ()=>CHECK(Email,(result)=>{
                    
                                        POSTPACKAGE(CREATEACCOUNTAPI,'no-cors',data,(create)=>{
                    
                                            USERPROFILEPHOTO();
                    
                                        });
                    
                                    }),
                    
                                );
                    
                            });
                    
                        });
                    
                    }),
        
                    ()=>CHECK(Email,(result)=>{
        
                        VIBRATION(500);
                        
                        STYLED(Email,'border-bottom','1px solid red');
        
                        setTimeout(() => {
        
                            STYLED(Email,'border-bottom','1px solid #cdcdcd20');
                            
                        }, 2000);
        
                    })
        
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
    
        CLICKED('.brown',()=>{
    
            REMOVESTORE('local','UserData');
    
            CREATEACCOUNTPAGE();
    
        });

    });

}

