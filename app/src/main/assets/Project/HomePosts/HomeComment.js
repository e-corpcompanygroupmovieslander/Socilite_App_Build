export const POSTCOMMENT=(PostFooter,Element)=>{

    console.log(Element)
 
    const PosterImage=document.createElement('img');

    PosterImage.src=WHITEICONS+'comment.png';

    ADD(PostFooter,PosterImage);
 
}