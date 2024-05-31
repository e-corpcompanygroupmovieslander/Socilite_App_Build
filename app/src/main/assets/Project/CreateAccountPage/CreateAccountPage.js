import { EMAILUSERSAPI } from "../Apis/Apis.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";
import { EMAILVERFICATIONPAGE } from "./EmailVerificationPage.js";

export const CREATEACCOUNTPAGE=()=>{

    WIDGET(`

        <h2>Socilite</h2>

        <input type='text' class='Name' placeholder='Enter User Name' />

        <input type='email' class='Email' placeholder='Enter User Email' />

        <input type='password' class='Password'  placeholder='Enter User Password' />

        <button class='forestgreen'>Sign Up</button>

        <button class='blue'>LogIn</button>

    `);


    const Name=document.querySelector('.Name');
    const Email=document.querySelector('.Email');
    const Password=document.querySelector('.Password');
    const Button=document.querySelector('.forestgreen');

    CLICKED('.forestgreen',()=>{

        CONDITION(Name.value,

            ()=>CONDITION(Email.value,

                ()=>CONDITION(Password.value,

                    ()=>CHECK(Button,(result)=>{

                        LOADER(Button);

                        PASSWORDHASH(Password.value,(data)=>{

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
                            const birthYear = Email.value.slice(-4);
                            const randomStringLength = 11 - 1 - 4;
                            const randomString = generateRandomString(randomStringLength);
                            const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);
                        
                            const USER={
                                "UserActive":"TRUE",
                                "UserName":Name.value,
                                "UserEmail":Email.value,
                                "UserCode":Password.value,
                                "UserPassword":data,
                                "UserID":secretCode,
                                "UserCreated":new Date(),
                                "UserDevice":getBrowserVersion()
                            }

                            var EMAILDATA = {
                                recipientEmail: Email.value,
                                subject: "Socilite Account Registration",
                                body: `Dear ${Name.value},\n\nThank you for using Socilite. To complete your registration, please use the following verification code:\n\nVerification Code: ${secretCode}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, Socilite Team\n\n https://www.e-corpcompanygroup.com`
                            }; 
                            
                            POSTPACKAGE(EMAILUSERSAPI,'no-cors',EMAILDATA,(data)=>{
                                
                                JSONIFICATION(USER,(data)=>{

                                    STORE('local','UserData',data);

                                    EMAILVERFICATIONPAGE();

                                });
                                
                            });

                        });

                    }),
        
                    ()=>CHECK(Password,(result)=>{
        
                        VIBRATION(500);
                        
                        STYLED(Password,'border-bottom','1px solid red');
        
                        setTimeout(() => {
        
                            STYLED(Password,'border-bottom','1px solid #cdcdcd20');
                            
                        }, 2000);
        
                    })
        
                ),
    
                ()=>CHECK(Name,(result)=>{
    
                    VIBRATION(500);
                    
                    STYLED(Email,'border-bottom','1px solid red');
    
                    setTimeout(() => {
    
                        STYLED(Email,'border-bottom','1px solid #cdcdcd20');
                        
                    }, 2000);
    
                })
    
            ),

            ()=>CHECK(Name,(result)=>{

                VIBRATION(500);
                
                STYLED(Name,'border-bottom','1px solid red');

                setTimeout(() => {

                    STYLED(Name,'border-bottom','1px solid #cdcdcd20');
                    
                }, 2000);

            })

        );

    })

    CLICKED('.blue',()=>{LOGINPAGE()});

}