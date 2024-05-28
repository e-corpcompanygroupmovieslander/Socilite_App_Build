export const HOMEPOSTSPAGE=()=>{

    DECLARATION('.HomeDiv',(ELEMENT)=>{

        CLEAR(ELEMENT);


        GETINDEXED('Socilite','Posts',(data)=>{

            REDUX(data,(Element)=>{
    
                REDUX(Element.Posts.reverse(),(element)=>{
    
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

                    const USERLOCATION=document.createElement('h1');
    
                    USERLOCATION.classList.add('UserLocation');

                    USERLOCATION.innerHTML=element.PostsLocation||'';

                    ADD(DIV,USERLOCATION);

                    TIMER(element.PostTime,(time)=>{
  
                        const USERTIME=document.createElement('h1');
        
                        USERTIME.classList.add('UserTime');

                        USERTIME.innerHTML=time;

                        ADD(DIV,USERTIME);
                    })

                    const MINIDIV=document.createElement('div');
    
                    MINIDIV.classList.add('OptionsDiv');

                    const LIKEICON=document.createElement('img');

                    LIKEICON.src=WHITEICONS+'unheart.png';

                    if (element.PeopleLiked.includes(localStorage.getItem('User'))) {
                       
                        LIKEICON.src=WHITEICONS+'heart.png';
                        
                    }

                    ADD(MINIDIV,LIKEICON);

                    const COMMENTICON=document.createElement('img');
    
                    COMMENTICON.src=WHITEICONS+'comment.png';

                    ADD(MINIDIV,COMMENTICON);

                    const SHAREICON=document.createElement('img');
    
                    SHAREICON.src=WHITEICONS+'save.png';

                    ADD(MINIDIV,SHAREICON);

                    ADD(DIV,MINIDIV);

                    const DESCRIPTION=document.createElement('p');
        
                    DESCRIPTION.classList.add('UserPosterDescription');

                    DESCRIPTION.innerHTML=element.Description||'No Story';

                    ADD(DIV,DESCRIPTION);

                    ADD(ELEMENT,DIV);
    
                    //console.log(element);
    
                });
    
            });

        });

    });

}