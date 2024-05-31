export const HOMEPOSTDESCRIPTION=(DIV,element)=>{

    const DESCRIPTION=document.createElement('p');
        
    DESCRIPTION.classList.add('UserPosterDescription');

    DESCRIPTION.innerHTML=element.Description||'No Story';

    ADD(DIV,DESCRIPTION);

}