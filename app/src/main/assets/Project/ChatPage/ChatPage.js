import { USERSAPI } from "../../Module/ImagePicker.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { MESSAGEPAGE } from "./MessagesPage.js";

export const CHATPAGE=()=>{

    DEJSON('local','UserData',(mydata)=>{

        BACKHEADERWIDGET(()=>{HOMEPAGE()},

            `

            <img id='createUserPost' class='Settings' src='${WHITEICONS}group-users.png'/>

            
            `,
            ``,'FreindsDiv'

        );

        DECLARATION('#FreindsDiv',(ELEMENT)=>{

            GETPACKAGE(USERSAPI,'cors',(data)=>{

                CLEAR(ELEMENT);

                REDUX(data,(element)=>{
    
                    if (mydata.UserFriends.includes(element.UserID)) {

                        const CountryDivHolder=document.createElement('div');

                        CountryDivHolder.classList.add('CountryDiv');

                        DISPLAY(CountryDivHolder,`
            
                            <img src='${element.UserPhoto||WHITEICONS+'user.png'}' class='PosterImage'/>

                            <h1 class='PosterNamee' >${element.UserName}</h1>

                            <img class='more' src='${WHITEICONS}back.png'/>

                        `);

                        ADD(ELEMENT,CountryDivHolder);

                        EVENT(CountryDivHolder,'click',()=>{

                            MESSAGEPAGE(element);

                        });
                        
                    };
            
                        
                });
    
            }); 

                    
        });



    });



}