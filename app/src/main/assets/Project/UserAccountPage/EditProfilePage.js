import { UPDATEUSERAPI, USERSAPI } from "../../Module/ImagePicker.js";
import { USERACCOUNTPAGE } from "./UserAccountPage.js";

export const EDITUSERPAGE=()=>{

    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},

        `

            <img id='location' class='Settings' src='${WHITEICONS}location.png'/>

            <img class='Settings' src='${WHITEICONS}upload.png'/>

        `,
        `
                
            <textarea placeholder='About Me' ></textarea>

            <input type='tel' max-length='10' placeholder='My Contact' />

            <div class='LocationDiv'>

                <header>

                    <h1 class='ChooseLocation'>Choose Country</h1>

                    <img class='closeLocation' src='${WHITEICONS}close.png'/>
                        
                </header>

                <div class='CountriesDiv' ></div>
                
            </div>
            
        `,''

    );

    CLICKED('#location',()=>{

        const LocationDiv=document.querySelector('.LocationDiv');

        STYLED(LocationDiv,'display','block');

        const Locations=document.querySelector('.CountriesDiv');

        CLEAR(Locations);

        REDUX(COUNTRYDATA,(data)=>{

            const CountryDivHolder=document.createElement('div');

            DISPLAY(CountryDivHolder,`

                <h1 class='CountryName'>${data.name}</h1>

                <img class='LocationIcon' src='${WHITEICONS}location.png'/>
            
            `)

            CountryDivHolder.classList.add('CountryDiv')

            EVENT(CountryDivHolder,'click',()=>{

                const USERS={
                    "UserID":localStorage.getItem('User'),
                    "UserLocation":data.name
                }

                colorChange(CountryDivHolder);

                POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERS,(data)=>{

                    GETPACKAGE(USERSAPI,'cors',(data)=>{

                        FINDER(data,'UserID',localStorage.getItem('User'),(user)=>{
            
                            if (user.UserID === localStorage.getItem('User')) {
                                
                                JSONIFICATION(user,(data)=>{
            
                                    STORE('local','UserData',data);

                                    STYLED(LocationDiv,'display','none');
            
                                });
                            
                            }else{
            
                                console.log('not a match')
            
                            };
            
                        });
            
                    });

                })
        
            })

            ADD(Locations,CountryDivHolder)
            
        })

        CLICKED('.closeLocation',()=>{

            STYLED(LocationDiv,'display','none');

        });

    })

}