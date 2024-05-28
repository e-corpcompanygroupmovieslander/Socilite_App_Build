READPOST=(data,DIV)=>{

    const READMORE=document.createElement('h1');

    DISPLAY(READMORE,'Full Post' );

        STYLED(READMORE,'position','absolute');
        STYLED(READMORE,'font-size','15px');
        STYLED(READMORE,'bottom','0');
        STYLED(READMORE,'padding','2%');
        STYLED(READMORE,'right','2%');
        STYLED(READMORE,'background','teal');
        STYLED(READMORE,'border-radius','2px');
        STYLED(READMORE,'color','gainsboro');
        STYLED(READMORE,'font-family','san-serif');

    ADD(DIV,READMORE);

}