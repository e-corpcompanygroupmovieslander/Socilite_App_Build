import { GETUSERAPI, UPDATEUSERAPI } from "../../Module/Module.js";
import { USERACCOUNTPAGE } from "./UserAccountPage.js";

export const UPDATEUSERDATA=()=>{

    DEJSON('local','UserData',(data)=>{

        console.log(data)

        BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
        `
            <h1 class='Sections'>Biography</h1>
    
        `,
        `
            <p class='UpdatesSections'>UserName</p>

            <input class='UserName' type='text' value='${data.UserName}' />

            <p class='UpdatesSections'>UserLocation</p>

            <input class='UserLocation' type='text' value='${data.UserLocation}' />

            <p class='UpdatesSections'>UserTelephone</p>

            <input class='Telephone' type='text' maxlength='10' value='${data.UserTelephone}' />

            <button class='forestgreen'>Update</button>
           
        `,''
        );
        
        CLICKED('.forestgreen',()=>{

            DECLARATION('.forestgreen',(ELEMENT)=>{

                const  USERNAME=document.querySelector('.UserName');
                const  USERLOCATION=document.querySelector('.UserLocation');
                const  USERTELEPHONE=document.querySelector('.Telephone');

                CONDITION(USERNAME.value,
                    ()=>CONDITION(USERLOCATION.value,
                        ()=>CHECK(USERTELEPHONE.value,(result)=>{

                            LOADER(ELEMENT)

                            function getBrowserVersion() { return navigator.appVersion; }
    
                            const USER={
                                "UserDevice":getBrowserVersion() ,
                                "UserID": data.UserID,
                                "UserLastActive": new Date(),
                                "UserLocation": USERLOCATION.value,
                                "UserTelephone":USERTELEPHONE.value,
                                "UserName": USERNAME.value,
                            }
                
                            POSTPACKAGE(UPDATEUSERAPI,'no-cors',USER,(data)=>{

                                GETPACKAGE(GETUSERAPI,'cors',(data)=>{
                                    FINDER(data,'UserID',localStorage.getItem('User'),(users)=>{
                                        CONDITION(users.UserID  === localStorage.getItem('User') && !users.UserDeleted,
                                        ()=>CHECK(users,(result)=>{
                                            STORE('local','UserData',JSON.stringify(users))
                                            USERACCOUNTPAGE();
                                        }),
                                        ()=>CHECK(users,(result)=>{
                                            localStorage.clear();
                                            CONNECTION()
                                        }),
                                        )
                                        
                                    })
                                })
                            })
                        }),
                        ()=>MESSAGE('Enter User Location')
                    ),
                    ()=>MESSAGE('Enter User Name')
                )
    
            })

        })

    })

}