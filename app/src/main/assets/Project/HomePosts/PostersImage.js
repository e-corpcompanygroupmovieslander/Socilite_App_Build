export const POSTERSIMAGE=(PostHeader,Element)=>{

    const PosterImage=document.createElement('img');

    PosterImage.classList.add('PosterImage');

    PosterImage.src=Element.PostersImage||WHITEICONS+'Profile.png';

    ADD(PostHeader,PosterImage);

}