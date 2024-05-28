export const HOMEPOSTSPAGE=()=>{

    DECLARATION('#HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);

        GETINDEXED('Socilite','Posts',(data)=>{

            REDUX(data,(Element)=>{
    
                REDUX(Element.Posts,(element)=>{
    
                    const DIV=document.createElement('div');
    
                    DIV.classList.add('PostDiv');

                    const IMG=document.createElement('img');
    
                    IMG.classList.add('PostImage');

                    IMG.src=element.PostedImage||WHITEICONS+'profile.png';

                    ADD(DIV,IMG);

                    const USERIMG=document.createElement('img');
    
                    USERIMG.classList.add('PostedImage');

                    USERIMG.src=element.PostersImage||WHITEICONS+'profile.png';

                    ADD(DIV,USERIMG);

                    const USERNAME=document.createElement('h1');
    
                    USERNAME.classList.add('UserName');

                    USERNAME.innerHTML=element.PostersName;

                    ADD(DIV,USERNAME);

                    ADD(ELEMENT,DIV);
    
                    console.log(element);
    
                });
    
            });
    
        });

    });

}