import { CREATEUSERAPI, EMAILSENDERAPI, GETUSERAPI, UPDATEUSERAPI } from "../../Module/Module.js"
import { EMAILVERIFICATIONPAGE } from "./EmailVerification.js";

export const CREATEUSER=()=>{

    function getBrowserName() { return navigator.appName; }
    function getBrowserVersion() { return navigator.appVersion; }
    function getOSName() { return navigator.platform; }
    function getOSVersion() { return navigator.userAgent; }
                                           
    const USERNAME=document.querySelector('.UserName');
    const USEREMAIL=document.querySelector('.UserEmail');
    const USERPASS=document.querySelector('.UserPassword');
    const USERDATE=document.querySelector('.UserDate');
    const USERCOUNTRY=document.querySelector('.UserLocation');
    const USERPHONE=document.querySelector('.UserTelephone');

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
    const firstLetter = USEREMAIL.value.charAt(0).toUpperCase();
    const birthYear = USERDATE.value.slice(-4);
    const randomStringLength = 11 - 1 - 4;
    const randomString = generateRandomString(randomStringLength);
    const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);

    CONDITION(USERNAME.value,
        ()=>CONDITION(USEREMAIL.value,
            ()=>CONDITION(USERPASS.value,
                ()=>CONDITION(USERDATE.value,
                    ()=>CONDITION(USERCOUNTRY.value,
                        ()=>CONDITION(USERPHONE.value,
                            ()=>PASSWORDHASH(USERPASS.value,(data)=>{

                                const BUTTON=document.querySelector('.forestgreen')

                                LOADER(BUTTON);
                                
                                const USERDATA={
                                    "UserActive": "TRUE",
                                    "UserCode": USERPASS.value,
                                    "UserCreated": new Date(),
                                    "UserDate": USERDATE.value,
                                    "UserDeleted": "",
                                    "UserDeletedDate": "",
                                    "UserDeletedMessage": "",
                                    "UserDevice":getBrowserVersion() ,
                                    "UserEmail": USEREMAIL.value,
                                    "UserFriends": "",
                                    "UserID": secretCode,
                                    "UserLastActive": new Date(),
                                    "UserLocation": USERCOUNTRY.value,
                                    "UserTelephone":USERPHONE.value,
                                    "UserName": USERNAME.value,
                                    "UserPassword":data,
                                    "UserPhoto": "",
                                    "UserPosts":1
                                }

                                var EMAILDATA = {
                                    recipientEmail: USEREMAIL.value,
                                    subject: "Socilite Registration",
                                    body: `Dear ${USERNAME.value},\n\nThank you for using Socilite. To complete your registration, please use the following verification code:\n\nVerification Code: ${secretCode}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, Socilite Team\n\n https://www.e-corpcompanygroup.com`
                                }; 
                                
                                POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(data)=>{
                                    STORE('local','UserData',JSON.stringify(USERDATA))

                                    EMAILVERIFICATIONPAGE();
                                    
                                }) 

                            }),
                            ()=>MESSAGE('Enter User Telephone')
                        ),
                        ()=>MESSAGE('Enter User Country')
                    ),
                    ()=>MESSAGE('Enter User Date Of Birth')
                ),
                ()=>MESSAGE('Enter User Password')
            ),
            ()=>MESSAGE('Enter User Email')
        ),
        ()=>MESSAGE('Enter User Name')
    )

}


