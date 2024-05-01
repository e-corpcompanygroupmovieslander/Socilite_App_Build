import { CONNECTION } from "../../Connection/Connection.js";
import { GETUSERAPI } from "../../Module/Module.js";

export const  AUTOUSERDATA=()=>{

    GETPACKAGE(GETUSERAPI,'cors',(data)=>{
        FINDER(data,'UserID',localStorage.getItem('User'),(users)=>{
            CONDITION(users.UserID  === localStorage.getItem('User') && !users.UserDeleted,
            ()=>CHECK(users,(result)=>{
                STORE('local','UserData',JSON.stringify(users))
            }),
            ()=>CHECK(users,(result)=>{
                localStorage.clear();
                CONNECTION()
            }),
            )
            
        })
    })

}