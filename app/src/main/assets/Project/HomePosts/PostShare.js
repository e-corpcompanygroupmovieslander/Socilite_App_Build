POSTSHARE=(data,OPTIONHOLDER)=>{

    const SHAREICON=document.createElement('img');

    SHAREICON.src=WHITESHAREICON;

        STYLED(SHAREICON,'position','relative');
        STYLED(SHAREICON,'width','30px');
        STYLED(SHAREICON,'margin','10px');
        STYLED(SHAREICON,'transform','rotate(320deg)');

    ADD(OPTIONHOLDER,SHAREICON);

}