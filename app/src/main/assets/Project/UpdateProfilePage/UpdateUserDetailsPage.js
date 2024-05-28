USERUPDATEDETAILS=()=>{

    CLEAR('');

    HEADER('','HomeHeader');

    DECLARATION('.HomeHeader',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,'MesageIcon',()=>{

            EXTERNALJS(FILESPATH+'UserAccountPage/UserAccountPage.js',()=>USERACCOUNT());

        });

        DECLARATION('.MesageIcon',(Element)=>{

            STYLED(Element,'margin-left','1rem');
            STYLED(Element,'width','25px');
            STYLED(Element,'height','25px');
            STYLED(Element,'background','transparent');

        });

        BUTTON(ELEMENT,'Update','','Post','forestgreen',()=>{

        })

        DECLARATION('.Post',(Element)=>{

            STYLED(Element,'position','relative');
            STYLED(Element,'margin-right','1rem');
            STYLED(Element,'width','100px');
            STYLED(Element,'height','35px');

        });

    });

    FULLVIEW('','FullDiv');    
        
    DECLARATION('.FullDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'top','55px');
        STYLED(ELEMENT,'bottom','0%');
        STYLED(ELEMENT,'background','transparent');

        INPUT(ELEMENT,'','User Name','');

        INPUT(ELEMENT,'','Real Name','');

        INPUT(ELEMENT,'','Enter Date Of Birth ','');

        INPUT(ELEMENT,'','Current City ','');

        INPUT(ELEMENT,'','Occupation','');

        INPUT(ELEMENT,'','Hobbies','');

        INPUT(ELEMENT,'','Relationship Status','');

        TEXTAREA(ELEMENT,'Description','Tell Us Who You Are!','');

        DECLARATION('.Description',(ELEMENT)=>{

            EVENT(ELEMENT,'focus',()=>{
                STYLED(ELEMENT, 'margin-bottom', '350px');  
            });

            EVENT(ELEMENT,'blur',()=>{
                STORE('','KeyBoard','On')
                STYLED(ELEMENT, 'margin-bottom', '0px');  
            });

        })

        BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
       
    });

}