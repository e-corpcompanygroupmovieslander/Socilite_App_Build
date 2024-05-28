POSTEDIMAGE=(data,DIV)=>{

    const IMG=document.createElement('img');

    IMG.src=data.PostedImage|| BLACKIMAGEICON ;

        STYLED(IMG,'position','absolute');
        STYLED(IMG,'width','80%');
        STYLED(IMG,'height','75%');
        STYLED(IMG,'top','10%');
        STYLED(IMG,'left','2%');
        STYLED(IMG,'border-radius','5px');

    ADD(DIV,IMG);

}