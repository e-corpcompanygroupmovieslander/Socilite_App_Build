export const POSTTIME=(PostHeader,Element)=>{

    TIMER(Element.PostTime,(data)=>{

        const PosterImage=document.createElement('h1');

        PosterImage.classList.add('PosterTime');
    
        PosterImage.innerHTML=data;
    
        ADD(PostHeader,PosterImage);
        
    })

 
}