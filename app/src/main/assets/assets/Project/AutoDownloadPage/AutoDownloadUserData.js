import { USERSAPI } from "../../Module/ImagePicker.js"

export const AUTODOWNLOADUSERDATA=()=>{

    if (localStorage.getItem('NetWork')) {

        GETPACKAGE(USERSAPI,'cors',(data)=>{

            FINDER(data,'UserID',localStorage.getItem('User'),(user)=>{

                if (user.UserID === localStorage.getItem('User')) {
                    
                    JSONIFICATION(user,(data)=>{

                        STORE('local','UserData',data);

                    });
                
                }else{

                    console.log('not a match')

                };

            });

        });

        
    } else {
        
        console.log('Using Back Up')

    }

}