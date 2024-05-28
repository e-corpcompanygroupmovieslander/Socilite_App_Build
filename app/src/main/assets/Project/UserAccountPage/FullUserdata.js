import { UPDATEUSERAPI } from "../Apis/Apis.js";
import { AUTOUPDATEUSER } from "../AutoLoginPage/AutoUpdateUser.js";
import { USERACCOUNTPAGE } from "./UserAccountPage.js";


export const FULLUSERDATA=()=>{

    DEJSON('local','UserData',(data)=>{

        BACKHEADERWIDGET(() => { USERACCOUNTPAGE() },
            `
                <h1 class='Sections'>Biography</h1>
            `,
            `
                <img  class='UserFullPhoto' src='${data.UserPhoto||BLACKICONS+'image.png'}'/>

                <input class='UsersName' type='text' value='${data.UserName}' />
                
            `,
            ''
        );

        const UsersName=document.querySelector('.UsersName');

        EVENT(UsersName,'input',()=>{

            if (UsersName.value) {

                STORE('','UserName',UsersName.value)
                
            } else {
               
                STYLED(UsersName,'border-bottom','1px solid red');

                REMOVESTORE('','UserName');
                
            }

        });

        EVENT(UsersName,'blur',()=>{

            if (sessionStorage.getItem('UserName')) {

                const USERS={
                    "UserName":sessionStorage.getItem('UserName'),
                    "UserID":localStorage.getItem('User')
                }

                POSTPACKAGE(UPDATEUSERAPI, 'no-cors', USERS, (data) => {
                    AUTOUPDATEUSER();
                });
                
            }
            
        })

    });

};