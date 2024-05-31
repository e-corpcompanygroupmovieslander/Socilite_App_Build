export const HOMEPOSTLOCATION=(DIV,element)=>{

    const USERLOCATION=document.createElement('h1');
    
    USERLOCATION.classList.add('UserLocation');

    USERLOCATION.innerHTML=element.PostsLocation||'';

    ADD(DIV,USERLOCATION);

}