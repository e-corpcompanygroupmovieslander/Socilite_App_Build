POSTERIMAGE=(data,DIV)=>{

    const USERICON=document.createElement('img');

    USERICON.src=data.PostersImage || WHITEUSERICON ;

        STYLED(USERICON,'position','absolute');
        STYLED(USERICON,'width','40px');
        STYLED(USERICON,'height','40px');
        STYLED(USERICON,'top','0.5%');
        STYLED(USERICON,'left','2%');
        STYLED(USERICON,'border-radius','50px');

    ADD(DIV,USERICON); 

}