export const POSTERSNAME=(PostHeader,Element)=>{

    const PosterImage=document.createElement('h1');

    PosterImage.classList.add('PosterName');

    PosterImage.innerHTML=Element.PosterName;

    ADD(PostHeader,PosterImage);

}