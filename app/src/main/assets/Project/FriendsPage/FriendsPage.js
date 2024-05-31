import { HOMEPAGE } from "../HomePage/HomePage.js"

export const FRIENDSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},

        `

        <input class='FriendsInput' placeholder='Finds Friends' />

        `,
        `
            <div class='FreindsDiv'></div>

            <div class='LocationDiv'>

                <header>

                    <h1 class='ChooseLocation'></h1>

                    <img class='closeLocation' src='${WHITEICONS}close.png'/>
                    
                </header>

                <div class='CountriesDiv' ></div>
            
            </div>

        `,''

    )

    DECLARATION('.FreindsDiv',(ELEMENT)=>{

        GETINDEXED('Socilite','Posts',(data)=>{

            REDUX(data,(Element)=>{

                REDUX(Element.Posts,(element)=>{

                    const CountryDivHolder=document.createElement('div');

                    DISPLAY(CountryDivHolder,`
        
                        <img src='${element.PostersImage||WHITEICONS+'user.png'}' class='PosterImage'/>

                        <h1 class='PosterName' >${element.PosterName}</h1>
    
                    `)
        
                    CountryDivHolder.classList.add('CountryDiv')
        
                    EVENT(CountryDivHolder,'click',()=>{
        
                        const LocationDiv=document.querySelector('.LocationDiv');

                        const ChooseLocation=document.querySelector('.ChooseLocation');

                        STYLED(LocationDiv,'display','block');

                        ChooseLocation.innerHTML=element.PosterName;
                        
                        const CountriesDiv=document.querySelector('.CountriesDiv');

                        DISPLAY(CountriesDiv,`

                            <img class='FreindsProfileImage' src='${element.PostedImage}'/>
                        
                            <div class='FriendsDetails'>

                                <h1 class='FriendsName'>${element.PosterName}</h1>
                            
                                <div class='FriendsOptions'>

                                    <div class='FriendsOptionsHolders'>

                                        <img src='${WHITEICONS}group-users.png'/>

                                        <h1 class='FriendsNumber'>0</h1>
                                    
                                    </div>

                                    <div class='FriendsOptionsHolders'>

                                        <img src='${WHITEICONS}grid.png'/>

                                        <h1 class='FriendsNumber'>0</h1>
                                    
                                    </div>

                                    <div class='FriendsOptionsHolders'>

                                        <img src='${WHITEICONS}location.png'/>

                                        <h1 class='FriendsNumber'>Mbale</h1>
                                    
                                    </div>

                                </div>

                            </div>

                            <div class='ChatOptions'>

                                <img src='${WHITEICONS}gmail.png'/>

                                <img src='${WHITEICONS}comment.png'/>

                                <img src='${WHITEICONS}phone.png'/>
                            
                            </div>

                            <p class='FriendsAbout'>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit earum nostrum reprehenderit quia sequi nemo tempore dignissimos rem blanditiis beatae, incidunt reiciendis temporibus, ut ad dicta dolore sapiente tempora?

                            </p>

                            <div class='ChatOptions'>

                                <button id='Connect' class='ConnectionButtons'>Connect</button>

                                <button id='Disconnect' class='ConnectionButtons'>Disconnect</button>
                            
                            </div>

                            <div class='FriendPostsDiv'></div>

                        `);

                        const FriendPostsDiv=document.querySelector('.FriendPostsDiv');

                        CLEAR(FriendPostsDiv);

                        REDUX(Element.Posts,(element)=>{

                            const FreindsPosts=document.createElement('div');

                            FreindsPosts.classList.add('FreindsPostsImages')

                            DISPLAY(FreindsPosts,`

                                <img class='FriendsImages' src='${element.PostedImage||BLACKICONS+'images.png'}'/>
                            
                            `);

                            ADD(FriendPostsDiv,FreindsPosts);

                        })

                        CLICKED('.closeLocation',()=>{

                            STYLED(LocationDiv,'display','none');
                
                        });
                        
                    })
        
                    ADD(ELEMENT,CountryDivHolder)

                    console.log(element);

                });

            });

        });

    });
    
};