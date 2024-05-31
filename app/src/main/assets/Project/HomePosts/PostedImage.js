export const POSTEDIMAGE=(PostDiv,Element)=>{

    console.log(Element)

    const PosterImage=document.createElement('img');

    PosterImage.classList.add('PostedImage');

    PosterImage.src=Element.PostedImage||BLACKICONS+'image.png';

    ADD(PostDiv,PosterImage);


}