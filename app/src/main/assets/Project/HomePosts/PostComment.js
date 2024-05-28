POSTSCOMMENT=(data,OPTIONHOLDER)=>{

    const COMMENTICON=document.createElement('img');

    COMMENTICON.src=WHITECOMMENTICON;

        STYLED(COMMENTICON,'position','relative');
        STYLED(COMMENTICON,'width','30px');
        STYLED(COMMENTICON,'margin','10px');

    ADD(OPTIONHOLDER,COMMENTICON);

    EVENT(COMMENTICON,'click',()=>{

        CREATEELEMENT('div','',(COMMENTDIV)=>{

            STYLED(COMMENTDIV,'position','absolute');
            STYLED(COMMENTDIV,'width','100%');
            STYLED(COMMENTDIV,'height','auto');
            STYLED(COMMENTDIV,'top','0');
            STYLED(COMMENTDIV,'bottom','0');
            STYLED(COMMENTDIV,'left','0');
            STYLED(COMMENTDIV,'background','#121212');
            STYLED(COMMENTDIV,'display','block');

            ADD('',COMMENTDIV);
    
            INPUT(COMMENTDIV,'Comment','Your Comment','');

            DECLARATION('.Comment', (ELEMENT) => {

                STYLED(ELEMENT, 'position', 'absolute');
                STYLED(ELEMENT, 'bottom', '0');

                EVENT(ELEMENT,'focus',()=>{
                    STYLED(ELEMENT, 'bottom', '250px');  
                });

                EVENT(ELEMENT,'blur',()=>{
                    STORE('','KeyBoard','On')
                    STYLED(ELEMENT, 'bottom', '0px');  
                });
        
            });

            ICON(COMMENTDIV,WHITEBACKICON,'BackComment',()=>{

                STYLED(COMMENTDIV,'height','0');

                CLEAR(COMMENTDIV);
 
            });
    
            DECLARATION('.BackComment',(Back)=>{
    
                STYLED(Back,'margin-left','0rem');
                STYLED(Back,'width','25px');
                STYLED(Back,'height','25px');
                STYLED(Back,'background','transparent');
                STYLED(Back,'border','1px solid #cdcdcd20');
                STYLED(Back,'border-radius','50px');
                STYLED(Back,'padding','2%');
    
            });

        });

    });

}