export const HOMEPOSTLOCATION=(DIV,element)=>{

    const USERLOCATION=document.createElement('h1');
    
    USERLOCATION.classList.add('UserLocation');

    TIMER(element.PostTime,(time)=>{

        USERLOCATION.innerHTML=time;

    })

    ADD(DIV,USERLOCATION);

}