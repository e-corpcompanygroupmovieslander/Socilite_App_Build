import { UPDATEUSERAPI, USERSAPI } from "../../Module/ImagePicker.js";
import { USERACCOUNTPAGE } from "./UserAccountPage.js";

export const EDITUSERPAGE=()=>{

    sessionStorage.clear();

    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},

        `

            <img id='location' class='Settings' src='${WHITEICONS}location.png'/>

            <img id='Upload' class='Settings' src='${WHITEICONS}upload.png'/>

        `,
        `
                
            <textarea class='AboutMe' placeholder='About Me' ></textarea>

            <input class='Telephone' type='tel' max-length='10' placeholder='Enter Contact With Country Code First' />

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

    const AboutMe=document.querySelector('.AboutMe');

    EVENT(AboutMe,'input',()=>{

        STORE('','UserDescription',AboutMe.value);
        
    })

    const Telephone=document.querySelector('.Telephone');

    EVENT(Telephone,'input',()=>{

        STORE('','UserTelephone',Telephone.value);
        
    })

    CLICKED('#Upload',()=>{

        const Upload=document.querySelector('#Upload');

        if (sessionStorage.getItem('UserTelephone')||sessionStorage.getItem('UserDescription')) {

            DEJSON('local','UserData',(data)=>{

                const USERS={
                    "UserID":localStorage.getItem('User'),
                    "UserTelephone":sessionStorage.getItem('UserTelephone')||data.UserTelephone,
                    "UserDescription":sessionStorage.getItem('UserDescription')||data.UserDescription,
                }
    
                STYLED(Upload,'padding','1%');
                STYLED(Upload,'border-radius','50px');

                colorChange(Upload);

                POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERS,(data)=>{
    
                    GETPACKAGE(USERSAPI,'cors',(data)=>{
    
                        FINDER(data,'UserID',localStorage.getItem('User'),(user)=>{
            
                            if (user.UserID === localStorage.getItem('User')) {
                                
                                JSONIFICATION(user,(data)=>{
            
                                    STORE('local','UserData',data);
    
                                    USERACCOUNTPAGE();
            
                                });
                            
                            }else{
            
                                console.log('not a match')
            
                            };
            
                        });
            
                    });
    
                }) ;  

            });

        }else{

            VIBRATION(500);

            STYLED(AboutMe,'border','1px solid red');
            STYLED(Telephone,'border-bottom','1px solid red');

            setTimeout(() => {

                STYLED(AboutMe,'border','1px solid #cdcdcd20');
                STYLED(Telephone,'border-bottom','1px solid #cdcdcd20');
                
            }, 2000);


        }


    })

}