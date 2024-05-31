import { HOMEPOSTS } from "./HomePosts.js";

export const HOMEPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        HEADERWIDGET(
            `
                <img class='HomeReload' src='${WHITEICONS}home.png'/>
    
                <img src='${WHITEICONS}comment.png'/>
    
                <img src='${WHITEICONS}group-users.png'/>
    
                <img class='UserIcon' src='${WHITEICONS}user.png'/>
    
            `,``,'HomeDiv'
        );
    
        HOMEPOSTS();
    
        CLICKED('.HomeReload',()=>{HOMEPAGE()});

        DECLARATION('.UserIcon',(ELEMENT)=>{
 
            if (data.UserPhoto) {

                ELEMENT.src=data.UserPhoto

                STYLED(ELEMENT,'border-radius','100px');
                STYLED(ELEMENT,'width','35px');
                STYLED(ELEMENT,'height','35px');
                STYLED(ELEMENT,'border','1px solid whitesmoke');
                STYLED(ELEMENT,'object-fit','cover');
                STYLED(ELEMENT,'padding','1px');

            } ;

        });

    });

}