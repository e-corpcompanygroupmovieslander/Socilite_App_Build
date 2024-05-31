export const  HOMEPOSTERSIMAGE=(DIV,element)=>{
    
    const USERIMG=document.createElement('img');
    
    USERIMG.classList.add('PostedImage');

    USERIMG.src=element.PostersImage||BLACKICONS+'image.png';

    ADD(DIV,USERIMG);

}