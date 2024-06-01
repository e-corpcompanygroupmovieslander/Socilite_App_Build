import { EMAILUSERSAPI } from "../../Module/ImagePicker.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";
import { EMAILVERIFICATION } from "./EmailVerification.js";

export const CREATEACCOUNTPAGE=()=>{

    WIDGET(`

        <h1>Socilite</h1>

        <input class='UserName' type='text' placeholder='Enter User Name' />

        <input class='Email' type='email' placeholder='Enter User Email' />

        <input class='Password' type='password' placeholder='Enter User Password' />

        <button class='forestgreen'>Sign Up</button>

        <button class='blue'>LogIn</button>

    `);

    CLICKED('.blue',()=>{LOGINPAGE()});

    CLICKED('.forestgreen',()=>{

        const UserName=document.querySelector('.UserName');
        const Email=document.querySelector('.Email');
        const Password=document.querySelector('.Password');

        const forestgreen=document.querySelector('.forestgreen');

        if (!Email.value) {

            MESSAGE('Enter User Email');

            return;

        };

        if (!UserName.value) {

            MESSAGE('Enter User Name');

            return;

        };

        
        if (!Password.value) {

            MESSAGE('Enter User Password');

            return;

        };

        if (Email.value && Password.value ) {

            LOADER(forestgreen);

            function generateRandomString(length) {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    result += characters.charAt(randomIndex);
                }
                return result;
            }
        
            function getBrowserVersion() { return navigator.appVersion; }
        
            const firstLetter = Email.value.charAt(0).toUpperCase();
            const birthYear = Password.value.slice(-4);
            const randomStringLength = 11 - 1 - 4;
            const randomString = generateRandomString(randomStringLength);
            const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);
        

            PASSWORDHASH(Password.value,(data)=>{

                const USERDATA={
                    "UserActive":"TRUE",
                    "UserCode":Password.value,
                    "UserCreated":new Date(),
                    "UserDevice":getBrowserVersion(),
                    "UserEmail":Email.value,
                    "UserID":secretCode,
                    "UserName":UserName.value,
                    "UserPassword":data,
                }

                var EMAILDATA = {
                    recipientEmail: Email.value,
                    subject: "Socilite Account Registration",
                    body: `Dear ${UserName.value},\n\nThank you for using Socilite. To complete your registration, please use the following verification code:\n\nVerification Code: ${secretCode}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, Socilite Team\n\n https://www.e-corpcompanygroup.com`
                }; 
                
                POSTPACKAGE(EMAILUSERSAPI,'no-cors',EMAILDATA,(data)=>{
                    
                    JSONIFICATION(USERDATA,(data)=>{

                        STORE('local','UserData',data);

                        EMAILVERIFICATION();
                       
                    })
                    
                })

            })


           
            
        } else {

            MESSAGE('Fill All Parts');

            return;
            
        }
        
    });


}