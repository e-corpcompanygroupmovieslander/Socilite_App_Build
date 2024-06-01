export const POSTLIKE=(PostFooter,Element)=>{

    console.log(Element)
 
     const PosterImage=document.createElement('img');


     if (Element.PeopleLiked.includes(localStorage.getItem('User'))) {

        PosterImage.src=WHITEICONS+'heart.png';
        
     } 

    PosterImage.src=WHITEICONS+'unheart.png';

    ADD(PostFooter,PosterImage);
 
}