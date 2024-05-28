import { CONNECTION } from "../../Connection/Connection.js";
import { USERSAPI } from "../Apis/Apis.js";

export const AUTOUPDATEUSER=()=>{

    GETPACKAGE(USERSAPI,'cors',(data)=>{

        FINDER(data,'UserID',localStorage.getItem('User'),(user)=>{

            CONDITION(user.UserID === localStorage.getItem('User'),

                ()=>JSONIFICATION(user,(mydata)=>{

                    STORE('local','UserData',mydata);  

                }),

                ()=>CHECK(localStorage.getItem('User'),(result)=>{

                    REMOVESTORE('local','User');

                    REMOVESTORE('local','UserData');
                    
                    CONNECTION();
    
                }),

            );

        });

    })

}