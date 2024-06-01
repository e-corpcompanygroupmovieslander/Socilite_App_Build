export const POSTSHARE=(PostFooter,Element)=>{

    console.log(Element)
 
    const PosterImage=document.createElement('img');

    PosterImage.src=WHITEICONS+'send.png';

    ADD(PostFooter,PosterImage);
 
}