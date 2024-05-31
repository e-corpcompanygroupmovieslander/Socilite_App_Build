export const HOMELIKEPOSTS=(MINIDIV,element)=>{

    const LIKEICON=document.createElement('img');

    CONDITION(element.PeopleLiked.includes(localStorage.getItem('User')),

        ()=>LIKEICON.src=WHITEICONS+'heart.png',

        ()=>LIKEICON.src=WHITEICONS+'unheart.png'

    );

    
    ADD(MINIDIV,LIKEICON);

    EVENT(LIKEICON,'click',()=>{

        alert('')

    });
   
}