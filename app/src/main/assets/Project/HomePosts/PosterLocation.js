POSTERLOCATION=(data,DIV)=>{

    const LOCATION=document.createElement('h1');

    DISPLAY(LOCATION,data.PostsLocation||'' );

        STYLED(LOCATION,'position','absolute');
        STYLED(LOCATION,'font-size','15px');
        STYLED(LOCATION,'top','4%');
        STYLED(LOCATION,'left','16%');
        STYLED(LOCATION,'border-radius','5px');
        STYLED(LOCATION,'color','brown');
        STYLED(LOCATION,'font-family','san-serif');

    ADD(DIV,LOCATION);

}