import { CREATEPOTSAPI, IMAGEPICKER, POSTSAPI } from "../../Module/ImagePicker.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const CREATEPOSTPAGE=()=>{

    sessionStorage.clear();

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
            
            <img src='${WHITEICONS}group-users.png'/>

            <img class='location' src='${WHITEICONS}location.png'/>

            <img class='createUserPost' src='${WHITEICONS}upload.png'/>

        `,

        `

            <input class='Tags' type='text' placeholder='Enter Tags' />

            <textarea id='Description' placeholder='Whats On Your Mind'></textarea>

            <input class='ImageSelect' type='file' accept='image/*' />

            <img class='SelectedImage' src='${BLACKICONS}image.png'/>

            <div class='LocationDiv'>

                <header>

                    <h1 class='ChooseLocation'>Choose Country</h1>

                    <img class='closeLocation' src='${WHITEICONS}close.png'/>
                    
                </header>

                <div class='CountriesDiv' ></div>
            
            </div>

        `,'PostCreationDIv'

    );

    CLICKED('.location',()=>{

        const LocationDiv=document.querySelector('.LocationDiv');

        STYLED(LocationDiv,'display','block');

        const Locations=document.querySelector('.CountriesDiv');

        CLEAR(Locations);

        REDUX(COUNTRYDATA,(data)=>{

            const CountryDivHolder=document.createElement('div');

            DISPLAY(CountryDivHolder,`

                <h1 class='CountryName'>${data.name}</h1>

                <img class='LocationIcon' src='${WHITEICONS}location.png'/>
            
            `)

            CountryDivHolder.classList.add('CountryDiv')

            EVENT(CountryDivHolder,'click',()=>{

                STORE('','location',data.name);

                STYLED(LocationDiv,'display','none');

            })

            ADD(Locations,CountryDivHolder)
            
        })

        CLICKED('.closeLocation',()=>{

            STYLED(LocationDiv,'display','none');

        });

    })

    let IMAGES;

    IMAGEPICKER('.ImageSelect','.SelectedImage',(data)=>{

        STORE('','SelectedImage','On');

        IMAGES=data;

    });

    CLICKED('.createUserPost',()=>{

        const SelectedImage=document.querySelector('.SelectedImage');
        const Tags=document.querySelector('.Tags');
        const Description=document.querySelector('#Description');

        if (Description.value || sessionStorage.getItem('SelectedImage')) {

            DEJSON('local','UserData',(data)=>{
                
                const POSTEDDATA={
                    "Description":Description.value,
                    "Device":"",
                    "PostTime":new Date(),
                    "PostTitle":Tags.value,
                    "PostedImage":IMAGES,
                    "Poster":data.UserID,
                    "PostersEmail":data.UserEmail,
                    "PosterName":data.UserName,
                    "UserID":Date.now(),
                    "PostsLocation":sessionStorage.getItem('location'),
                    "PostersImage":data.UserPhoto
                }

                POSTPACKAGE(CREATEPOTSAPI,'no-cors',POSTEDDATA,(info)=>{
                    
                    GETPACKAGE(POSTSAPI,'cors',(result)=>{

                        const USERDATA={
                            "Name":"Posts",
                            "Posts":result
                        }

                        UPDATEINDEXED('Socilite','Posts',USERDATA);

                        HOMEPAGE();

                        console.log(result);

                    })

                });

            });

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