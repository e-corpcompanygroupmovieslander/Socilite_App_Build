export const HOMEPOSTEDIMAGE=(DIV,element)=>{

    const IMG=document.createElement('img');
    
    IMG.classList.add('PostImage');

    IMG.src=element.PostedImage||BLACKICONS+'image.png';

    ADD(DIV,IMG);

}