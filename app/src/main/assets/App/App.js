APPMODE('','','#121212');

APPNAME('Socilite');

NETWORKSTATE((data)=>{

    WIDGET(`

        <img class='LaoderIcon' src='${IMAGEPATH}app_icon.png'/>

    `);

    const LaoderIcon=document.querySelector('.LaoderIcon');

    colorChange(LaoderIcon);

    if (data === true) {

        MODULE('https://e-corpcompanygroupmovieslander.github.io/Socilite_App_Build/app/src/main/assets/Connection/Connection.js','CONNECTION',(CONNECTION) => {CONNECTION()});
        
    };

});