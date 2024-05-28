POSTERNAME=(data,DIV)=>{

    const NAME=document.createElement('h1');

    DISPLAY(NAME,data.PostersName);

        STYLED(NAME,'position','absolute');
        STYLED(NAME,'font-size','15px');
        STYLED(NAME,'top','0.5%');
        STYLED(NAME,'left','16%');
        STYLED(NAME,'border-radius','5px');
        STYLED(NAME,'color','gainsboro');
        STYLED(NAME,'font-family','san-serif');

    ADD(DIV,NAME);

}