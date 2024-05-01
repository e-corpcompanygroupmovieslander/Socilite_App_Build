import { GETUSERAPI } from "../../Module/Module.js";
import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINPAGE=()=>{

    WIDGET(`

        <img class='AppIcon' src='../Library/Images/app_icon.png'/>

        <h2>Sign In</h2>

        <input class='LoginEmail' type='email' placeholder='Enter User Email' />

        <input class='LoginPassword' type='password' placeholder='Enter User Password' />

        <h1 class='ForgotPassword'>Forgot Password?</h1>

        <button class='forestgreen'>Login</button>

        <button class='blue'>Create Account</button>

    `);

    CLICKED('.blue',()=>{CREATEACCOUNTPAGE()});

    CLICKED('.forestgreen',()=>{

        const LoginEmail=document.querySelector('.LoginEmail');

        const LoginPassword=document.querySelector('.LoginPassword');

        CONDITION(LoginEmail.value,
            ()=>CONDITION(LoginPassword.value,
                ()=>DECLARATION('.forestgreen',(ELEMENT)=>{
                    
                    LOADER(ELEMENT);

                    GETPACKAGE(GETUSERAPI,'cors',(data)=>{
                        FINDER(data,'UserEmail',LoginEmail.value,(users)=>{
                            CONDITION(users.UserEmail === LoginEmail.value,
                                ()=>CONDITION(users.UserCode === LoginPassword.value,
                                    ()=>CONDITION(users.UserDeleted,
                                        ()=>CHECK(users,(result)=>{
                                            MESSAGE('Something Went Wrong');
                                            ORIGIN(ELEMENT,'LogIn');
                                        }),
                                        ()=>CHECK(users,(result)=>{
                                            STORE('local','User',users.UserID);
                                            STORE('local','UserData',JSON.stringify(users));
                                            HOMEPAGE();
                                        })
                                    ),
                                    ()=>CHECK(users,(result)=>{
                                        MESSAGE('Wrong User Password');
                                        ORIGIN(ELEMENT,'LogIn');
                                    })
                                ),
                                ()=>CHECK(users,(result)=>{
                                    MESSAGE('Wrong User Email');
                                    ORIGIN(ELEMENT,'LogIn');
                                })
                            )
                        })
                    })

                }),
                ()=>MESSAGE('Enter User Password')
            ),
            ()=>MESSAGE('Enter User Email')
        )

    });


}