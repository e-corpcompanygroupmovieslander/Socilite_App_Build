POSTSHORTSTORY=(data,DIV)=>{

    const SHORTSTORY=document.createElement('h1');

    DISPLAY(SHORTSTORY,data.Description||'');

        STYLED(SHORTSTORY,'position','absolute');
        STYLED(SHORTSTORY,'font-size','15px');
        STYLED(SHORTSTORY,'width','70%');
        STYLED(SHORTSTORY,'bottom','0');
        STYLED(SHORTSTORY,'padding','2%');
        STYLED(SHORTSTORY,'left','2%');
        STYLED(SHORTSTORY,'background','transparent');
        STYLED(SHORTSTORY,'border-radius','2px');
        STYLED(SHORTSTORY,'border','1px solid #cdcdcd10');
        STYLED(SHORTSTORY,'color','gainsboro');
        STYLED(SHORTSTORY,'font-family','san-serif');

    ADD(DIV,SHORTSTORY);

}