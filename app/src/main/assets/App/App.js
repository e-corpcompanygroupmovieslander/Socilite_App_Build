APPMODE('','','#121212');

APPNAME('Socilite');

NETWORKSTATE((data)=>{

    WIDGET(`

        <img class='LaoderIcon' src='${IMAGEPATH}app_icon.png'/>

    `);

    const LaoderIcon=document.querySelector('.LaoderIcon');

    colorChange(LaoderIcon);

    if (data === true) {

        MODULE('../../Connection/Connection.js','CONNECTION',(CONNECTION) => {CONNECTION()});
        
    };

});