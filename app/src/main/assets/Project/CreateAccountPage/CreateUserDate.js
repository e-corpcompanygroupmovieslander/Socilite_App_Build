export const CREATEUSERDATA=()=>{

    DECLARATION('.UserDateDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'display','block');

        DISPLAY(ELEMENT,`

            <img class='AppIcon' src='../Library/Images/app_icon.png'/>

            <h2>Enter Date Of Birth</h2>

            <input  class='Day' type='tel' maxlength='2' placeholder='Enter  Day Of Birth'  />

            <input class='Month'  type='tel' maxlength='2' placeholder='Enter Month Of Birth'  />

            <input class='Year'  type='tel' maxlength='4' placeholder='Enter Year Of Birth'  />

            <button id='SaveDate' class='forestgreen'>Save</button>

            <button class='brown'>Cancel</button>
        
        `);

        CLICKED('.brown',()=>{ STYLED(ELEMENT,'display','none');});

        CLICKED('#SaveDate',()=>{ 
            
            const DAY=document.querySelector('.Day');
            const MONTH=document.querySelector('.Month');
            const YEAR=document.querySelector('.Year');

            CONDITION(DAY.value,
                ()=>CONDITION(DAY.value <= 31,
                    ()=>CONDITION(MONTH.value,
                        ()=>CONDITION(MONTH.value <= 12,
                            ()=> CONDITION(YEAR.value,
                                ()=>CHECK(YEAR.value,(result)=>{

                                    const AGE = Math.floor((new Date() - new Date(YEAR.value)) / (365 * 24 * 60 * 60 * 1000)); 
                                    
                                    CONDITION(AGE <=13,
                                        ()=>MESSAGE('User Must be 13 years and Above'),
                                        ()=>CHECK(AGE,(result)=>{

                                            STYLED(ELEMENT,'display','none');

                                            const UserDate=document.querySelector('.UserDate');

                                            UserDate.value=`${DAY.value}-${MONTH.value}-${YEAR.value}`;
                                            
                                        })
                                    )

                                }),
                                ()=>MESSAGE('Enter Year OF Birth')
                            ),
                            ()=>MESSAGE('Invalid Month OF Birth')
                        ),
                        ()=>MESSAGE('Enter Month OF Birth')
                    ),
                    ()=>MESSAGE('invalid Day OF Birth')
                ),
                ()=>MESSAGE('Enter Day OF Birth')
            )

        });
        
    })
   
}