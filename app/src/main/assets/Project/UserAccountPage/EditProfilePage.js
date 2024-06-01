import { UPDATEUSERAPI, USERSAPI } from "../../Module/ImagePicker.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";
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

            <input class='Hobbies' type='text' placeholder='Enter Hobbies' />
            
            <input class='UserRealName' type='text'  placeholder='Enter Real Names' />

            <input class='UserCurrentCity' type='text'  placeholder='Enter Current City' />

            <input class='UserOccupation' type='text'  placeholder='Enter Occupation' />

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

                                    USERACCOUNTPAGE();
            
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
        
    });

    const Telephone=document.querySelector('.Telephone');

    EVENT(Telephone,'input',()=>{

        STORE('','UserTelephone',Telephone.value);
        
    });

    const Hobbies=document.querySelector('.Hobbies');

    EVENT(Hobbies,'input',()=>{

        STORE('','Hobbies',Hobbies.value);
        
    });

    const UserRealName=document.querySelector('.UserRealName');

    EVENT(UserRealName,'input',()=>{

        STORE('','UserRealName',UserRealName.value);
        
    });

    const UserOccupation=document.querySelector('.UserOccupation');

    EVENT(UserOccupation,'input',()=>{

        STORE('','UserOccupation',UserOccupation.value);
        
    });

    const UserCurrentCity=document.querySelector('.UserCurrentCity');

    EVENT(UserCurrentCity,'input',()=>{

        STORE('','UserCurrentCity',UserCurrentCity.value);
        
    });

    CLICKED('#Upload',()=>{

        const Upload=document.querySelector('#Upload');

        if (sessionStorage.getItem('UserTelephone')||sessionStorage.getItem('UserDescription')||sessionStorage.getItem('Hobbies')||sessionStorage.getItem('UserOccupation')||sessionStorage.getItem('UserCurrentCity')||sessionStorage.getItem('UserRealName')) {

            DEJSON('local','UserData',(data)=>{

                const USERS={
                    "UserID":localStorage.getItem('User'),
                    "UserTelephone":sessionStorage.getItem('UserTelephone')||data.UserTelephone,
                    "UserDescription":sessionStorage.getItem('UserDescription')||data.UserDescription,
                    "Hobbies":sessionStorage.getItem('Hobbies')||data.Hobbies,
                    "UserOccupation":sessionStorage.getItem('UserOccupation')||data.UserOccupation,
                    "UserCurrentCity":sessionStorage.getItem('UserCurrentCity')||data.UserCurrentCity,
                    "UserRealName":sessionStorage.getItem('UserRealName')||data.UserRealName
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
            
                                localStorage.clear();

                                LOGINPAGE();
            
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