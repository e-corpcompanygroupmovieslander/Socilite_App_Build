APPMODE('#121212','','#121212')

const APPSTART=()=>{

    NETWORKSTATE((data)=>{
        CONDITION(data === true ,
            ()=>CHECK(data,(result)=>{

                WIDGET(`

                    <img class='AppIcon' src='../Library/Images/app_icon.png'/>

                    <img id='loadingOnline' class='LoadingIcon' src='${LOADERICON}'/>

                    <p>Please Wait</p>

                `);

                MODULE("../Connection/Connection.js", "CONNECTION", (CONNECTION) => {CONNECTION();});

            }),
  
            ()=>DECLARATION('body',(ELEMENT)=>{
    
                WIDGET(`
    
                    <img class='AppIcon' src='../Library/Images/app_icon.png'/>
    
                    <img class='OfflineImage' src='../Library/Icons/no-wifi.png'/>
    
                    <h2>Your OffLine</h2>
                    <button id='OfflineButton' class='forestgreen'>
    
                        <h1 class='Offline'>Retry</h1>
                        
                        <img class='reload' src='../Library/Icons/reload.png'/>
                    
                    </button>
                
                `)

                CLICKED('.forestgreen',()=>{APPSTART()})
    
            })
        )
    })

}

APPSTART();

