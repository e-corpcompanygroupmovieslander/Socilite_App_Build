POSTTIME=(data,DIV)=>{

    TIMER(data.PostTime,(time)=>{

        const TIME=document.createElement('h1');

        DISPLAY(TIME,time||'' );

            STYLED(TIME,'position','absolute');
            STYLED(TIME,'font-size','15px');
            STYLED(TIME,'top','1%');
            STYLED(TIME,'right','5%');
            STYLED(TIME,'border-radius','5px');
            STYLED(TIME,'color','teal');
            STYLED(TIME,'font-family','san-serif');

        ADD(DIV,TIME);
        
    })

}