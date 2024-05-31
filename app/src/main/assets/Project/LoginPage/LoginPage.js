import { USERSAPI } from "../../Module/ImagePicker.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINPAGE=()=>{

    WIDGET(`

        <h1>Socilite</h1>

        <input class='Email' type='email' placeholder='Enter User Email' />

        <input class='Password' type='password' placeholder='Enter User Password' />

        <h1 class='ForgotPassword'>Forgot Password?</h1>

        <button class='forestgreen'>Sign In</button>

        <button class='blue'>Create Account</button>
    
    `);

    CLICKED('.forestgreen',()=>{

        const Email=document.querySelector('.Email');
        const Password=document.querySelector('.Password');

        const forestgreen=document.querySelector('.forestgreen');

        if (!Email.value) {

            MESSAGE('Enter User Email');

            return;

        };

        
        if (!Password.value) {

            MESSAGE('Enter User Password');

            return;

        };

        if (Email.value && Password.value ) {

            LOADER(forestgreen);

            GETPACKAGE(USERSAPI,'cors',(data)=>{

                FINDER(data,'UserEmail',Email.value,(user)=>{
                    if (user.UserEmail === Email.value ) {

                        PASSWORDDEHASH(user.UserPassword,Password.value,(data)=>{

                            if (data === true ) {

                                STORE('local','User',user.UserID);

                                JSONIFICATION(user,(data)=>{

                                    STORE('local','UserData',data);

                                    HOMEPAGE();
                                })
                                
                            } else {
                                
                                MESSAGE('Wrong User Password');

                                ORIGIN(forestgreen,'Sign In');

                                return;  

                            }

                        })
                        
                        
                    } else {

                        MESSAGE('Wrong User Email');

                        ORIGIN(forestgreen,'Sign In');

                        return;  

                    }

                });

            });
           
            
        } else {

            MESSAGE('Fill All Parts');

            return;
            
        }
        

    })

}