import { IMAGEPICKER } from "../../Module/ImagePicker.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const CREATEPOSTPAGE=()=>{

    sessionStorage.clear();

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
            
            <img src='${WHITEICONS}group-users.png'/>

            <img src='${WHITEICONS}location.png'/>

            <img class='createUserPost' src='${WHITEICONS}upload.png'/>

        `,

        `

            <input type='text' placeholder='Enter Tags' />

            <textarea id='Description' placeholder='Whats On Your Mind'></textarea>

            <input class='ImageSelect' type='file' accept='image/*' />

            <img class='SelectedImage' src='${BLACKICONS}image.png'/>

        `,''

    );

    let IMAGES;

    IMAGEPICKER('.ImageSelect','.SelectedImage',(data)=>{

        STORE('','SelectedImage','On');

        IMAGES=data;

    });

    CLICKED('.createUserPost',()=>{

        const SelectedImage=document.querySelector('.SelectedImage');

        const Description=document.querySelector('#Description');

        if (Description.value || sessionStorage.getItem('SelectedImage')) {

           
            
        } else{

            VIBRATION(500);

            STYLED(Description,'border','1px solid red');
            STYLED(SelectedImage,'border','1px solid red');

            setTimeout(() => {

                STYLED(Description,'border','1px solid #cdcdcd20');
                STYLED(SelectedImage,'border','1px solid #cdcdcd20');
                
            }, 2000);

        };

    });

};