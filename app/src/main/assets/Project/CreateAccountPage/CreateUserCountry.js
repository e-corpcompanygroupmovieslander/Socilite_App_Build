export const CREATEUSERCOUNTRY=()=>{

    DECLARATION('.UserCountryDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'display','block');
        
        DISPLAY(ELEMENT,`

        <button class='brown'>Cancel</button>

        <div class='DisplayCountries'></div>
        
        `);

        CLICKED('.brown',()=>{ STYLED(ELEMENT,'display','none');});

        const COUNTRYDISPLAY=document.querySelector('.DisplayCountries');

        REDUX(COUNTRYDATA,(element)=>{

            CREATEELEMENT('button','Button',(HOLDER)=>{

                DISPLAY(HOLDER,`

                    <h1 class='CountryName'>${element.name}</h1>
                    <h1 class='CountryCode'>${element.phoneCode}</h1>
                
                `)

                ADD(COUNTRYDISPLAY,HOLDER);

                EVENT(HOLDER,'click',()=>{

                    STYLED(ELEMENT,'display','none');

                    const UserLocation=document.querySelector('.UserLocation');

                    UserLocation.value=element.name;

                    const CodeDisplay=document.querySelector('.CodeDisplay');

                    DISPLAY(CodeDisplay,element.phoneCode);

                    STORE('','Code',element.phoneCode);

                })

            })
            
        })

    })

}