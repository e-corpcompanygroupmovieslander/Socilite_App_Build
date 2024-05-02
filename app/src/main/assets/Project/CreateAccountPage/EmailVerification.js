import { CREATEUSERAPI, GETUSERAPI } from "../../Module/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { CREATEACCOUNTPAGE } from "./CreateAccountPage.js";
import { PROFILEPHOTO } from "./CreateProfileImage.js";

export const EMAILVERIFICATIONPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        WIDGET(`

            <img class='AppIcon' src='../Library/Images/app_icon.png'/>

            <h2>Verification Code Sent To </h2>
            <p>${data.UserEmail}</p>

            <input  class='Day' type='text' placeholder='Enter Verification Code' />

            <h1 class='ForgotPassword'>Resend Code?</h1>

            <button id='SaveDate' class='forestgreen'>Verify</button>

            <button class='brown'>Cancel</button>

        `);

        CLICKED('.brown',()=>{REMOVESTORE('local','UserData'),CREATEACCOUNTPAGE()});

        CLICKED('.forestgreen',()=>{

            const Day=document.querySelector('.Day');

            CONDITION(Day.value,
                ()=>CONDITION(Day.value === data.UserID ,
                    ()=>DECLARATION('.forestgreen',(ELEMENT)=>{

                        LOADER(ELEMENT);

                        GETPACKAGE(GETUSERAPI,'cors',(user)=>{
                            FINDER(user,'UserEmail',data.UserEmail,(users)=>{

                                CONDITION(data.UserEmail === users.UserEmail,
                                    ()=>CHECK(users,(resut)=>{
                                        MESSAGE('User Email Taken');
                                        ORIGIN(ELEMENT,'Verify');
                                    }),
                                    ()=>CHECK(users,(result)=>{

                                        POSTPACKAGE(CREATEUSERAPI,'no-cors',data,(User)=>{

                                            STORE('local','User',data.UserID);

                                            PROFILEPHOTO();

                                        })

                                    })
                                )
                            })
                        })

                    }),
                    ()=>MESSAGE('invalid Verification Code')
                ),
                ()=>MESSAGE('Enter Verification Code')
            )

        })

    })

}