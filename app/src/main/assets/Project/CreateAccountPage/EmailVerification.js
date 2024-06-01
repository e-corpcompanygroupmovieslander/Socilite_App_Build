import { CREATEACCOUNTAPI, USERSAPI } from "../../Module/ImagePicker.js";
import { AUTOLOGINPAGE } from "../AutoDownloadPage/AutoLoginPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { PROFILEPHOTO } from "./CreateProfilePhoto.js";

export const EMAILVERIFICATION=()=>{

    WIDGET(`

        <h1>Socilite</h1>

        <input class='EmailCode' type='text' placeholder='Enter Verification Code' />

        <button class='forestgreen'>Verify</button>

        <button class='brown'>Cancel</button>

    `);

    CLICKED('.brown',()=>{

        DELETESTORAGE('local','UserData');

        AUTOLOGINPAGE();

    })

    CLICKED('.forestgreen',()=>{

        const forestgreen=document.querySelector('.forestgreen');

        const EmailCode=document.querySelector('.EmailCode');

        DEJSON('local','UserData',(data)=>{

            if (!EmailCode.value) {

                MESSAGE('Enter Verification Code');

                return;
                
            };

            if (!EmailCode.value === data.UserID ) {

                MESSAGE('Wrong Verification Code');

                return;
                
            }

            LOADER(forestgreen)

            GETPACKAGE(USERSAPI,'cors',(info)=>{

                FINDER(info,'UserEmail',data.UserEmail.value,(user)=>{
                    if (user.UserEmail === data.UserEmail.value ) {

                        MESSAGE('USer Email Taken ');

                        ORIGIN(forestgreen,'Verify');

                        return; 
                        
                    } else {

                        POSTPACKAGE(CREATEACCOUNTAPI,'no-cors',data,()=>{

                            STORE('local','User',data.UserID);

                            PROFILEPHOTO();

                        })
 
                    }

                });
            });

        });

    });

}