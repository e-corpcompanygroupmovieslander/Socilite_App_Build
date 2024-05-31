export const HOMEPOSTIME=(DIV,element)=>{

    TIMER(element.PostTime,(time)=>{
  
        const USERTIME=document.createElement('h1');

        USERTIME.classList.add('UserTime');

        USERTIME.innerHTML=time;

        ADD(DIV,USERTIME);
    })

}