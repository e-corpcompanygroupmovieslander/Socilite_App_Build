export const USERPOSTS=()=>{

    DECLARATION('.MyPostsDiv',(ELEMENT)=>{

        GETINDEXED('Socilite','Posts',(data)=>{

            REDUX(data,(Element)=>{

                CLEAR(ELEMENT)

                REDUX(Element.Posts.reverse(),(element)=>{

                    if (element.Poster === localStorage.getItem('User') ) {
                        
                        const IMG=document.createElement('img');
    
                        IMG.classList.add('PosterMyImage');
    
                        IMG.src=element.PostedImage||WHITEICONS+'profile.png';
    
                        ADD(ELEMENT,IMG); 
    

                    }

                });

            });

        });

    });
    
};