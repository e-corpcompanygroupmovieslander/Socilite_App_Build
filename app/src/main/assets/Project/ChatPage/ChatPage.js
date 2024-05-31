import { HOMEPAGE } from "../HomePage/HomePage.js"

export const CHATPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},

        `

            <input class='FriendsInput' placeholder='Finds Friends' />

        `,
        `
            <div class='FreindsDiv'></div>

            <div class='LocationDiv'>

                <header>

                    <h1 class='ChooseLocation'></h1>

                    <img class='closeLocation' src='${WHITEICONS}close.png'/>
                    
                </header>

                <div class='CountriesDiv' ></div>
            
            </div>

        `,''

    )

}