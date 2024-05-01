import { CREATEUSERAPI, GETUSERAPI, UPDATEUSERAPI } from "../../Module/Module.js"

export const CREATEUSER=()=>{

    GETPACKAGE(GETUSERAPI,'cors',(data)=>{

        REDUX(data,(element)=>{

            console.log(element)

        })

       
    })

   const USERDATA={
        "UserActive": "On",
        "UserCode": "",
        "UserCreated": "",
        "UserDate": "",
        "UserDeleted": "",
        "UserDeletedDate": "",
        "UserDeletedMessage": "",
        "UserDevice": "",
        "UserEmail": "",
        "UserFriends": "",
        "UserID": "",
        "UserLastActive": "",
        "UserLocation": "",
        "UserName": "",
        "UserPassword": "",
        "UserPhoto": ""
    }

   

    

}