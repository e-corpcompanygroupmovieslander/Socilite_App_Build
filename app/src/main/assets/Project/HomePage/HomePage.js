import { APPS } from "../../Module/DataBase.js";

export const HOMEPAGE=()=>{

    HEADERWIDGET(
        `

            <h1 class='AppName'>Socilite</h1>

            <img class='Profile' src='${WHITEICONS}user.png'/>

        `,
        ``,'HomeDiv'
    );

    DECLARATION('#HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        REDUX(APPS,(element)=>{

            const APPHOLDERDIV=document.createElement('Div');

            APPHOLDERDIV.classList.add('AppHolderDIv')

            DISPLAY(APPHOLDERDIV,`

                <img class='AppIcon' src='${element.Image||WHITEICONS+'app.png'}'/>

                <h1 class='AppNAme'>${element.Name}</h1>
            
            `);

            ADD(ELEMENT,APPHOLDERDIV);

            EVENT(APPHOLDERDIV,'click',()=>{

                open('https://e-corpcompanygroupmovieslander.github.io/Socilite_App_Build/app/src/main/assets/DataBase/Android/'+element.Link)

            })

            //console.log(element);

        });

    });

}