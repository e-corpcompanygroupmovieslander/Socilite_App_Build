export const HOMEPOSTERSUSERNAME=(DIV,element)=>{

    const USERNAME=document.createElement('h1');
    
    USERNAME.classList.add('UserName');

    USERNAME.innerHTML=element.PostersName;

    ADD(DIV,USERNAME);

}