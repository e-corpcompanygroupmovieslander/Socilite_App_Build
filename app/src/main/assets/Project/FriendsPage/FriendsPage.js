import { UPDATEUSERAPI, USERSAPI } from "../../Module/ImagePicker.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"

export const FRIENDSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},

        `

        <input class='FriendsInput' placeholder='Finds Friends' />

        `,
        `
            <div class='FreindsDiv'>

                <img id='Loadericon' class='LoadingIcon'src='${WHITEICONS}loading.png'/>
            
            </div>

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

        GETPACKAGE(USERSAPI,'cors',(data)=>{

            CLEAR(ELEMENT);

            SHUFFLE(data,(info)=>{

                REDUX(info,(element)=>{

                    const CountryDivHolder=document.createElement('div');

                    DISPLAY(CountryDivHolder,`
        
                        <img src='${element.UserPhoto||WHITEICONS+'user.png'}' class='PosterImage'/>

                        <h1 class='PosterNamee' >${element.UserName}</h1>

                        <img class='more' src='${WHITEICONS}back.png'/>

                    `);

                    EVENT(CountryDivHolder,'click',()=>{

                        let FRIENDSNUMBER;

                        JSONLENGTH(element.UserFriends,(Friends)=>{

                            FRIENDSNUMBER=Friends;
                
                        });

                        const LocationDiv=document.querySelector('.LocationDiv');

                        const ChooseLocation=document.querySelector('.ChooseLocation');

                        STYLED(LocationDiv,'display','block');

                        ChooseLocation.innerHTML=element.UserName;

                        const CountriesDiv=document.querySelector('.CountriesDiv');

                        DISPLAY(CountriesDiv,`

                            <img class='FreindsProfileImage' src='${element.UserPhoto}'/>

                            <div class='FriendsDetails'>

                                <h1 class='FriendsName'>${element.UserName}</h1>

                                <div class='FriendsOptions'>

                                    <div class='FriendsOptionsHolders'>

                                        <img src='${WHITEICONS}group-users.png'/>

                                        <h1 class='FriendsNumber'>${FRIENDSNUMBER||0}</h1>
                                    
                                    </div>

                                    <div class='FriendsOptionsHolders'>

                                        <img src='${WHITEICONS}grid.png'/>

                                        <h1 class='FriendsNumber'>${element.UserUploads||0}</h1>
                                    
                                    </div>

                                    <div class='FriendsOptionsHolders'>

                                        <img src='${WHITEICONS}location.png'/>

                                        <h1 class='FriendsNumber'>${element.UserLocation||''}</h1>
                                    
                                    </div>
                                
                                </div>
                            
                            </div>

                            <div class='ChatOptions'>

                                <img src='${WHITEICONS}gmail.png'/>

                                <img src='${WHITEICONS}comment.png'/>

                                <img src='${WHITEICONS}phone.png'/>
                            
                            </div>

                            <p class='FriendsAbout'>${element.UserDescription||''}</p>

                            <div class='ChatOptions'>

                                <button id='Connect' class='ConnectionButtons'>Connect</button>

                                <button id='Disconnect' class='ConnectionButtons'>Disconnect</button>
                            
                            </div>

                            <div class='FriendPostsDiv'></div>

                        `);

                        CLICKED('#Connect',()=>{

                            const Connect=document.querySelector('#Connect');

                            DEJSON('local','UserData',(usersdata)=>{

                                if (usersdata.UserFriends.includes(element.UserID)) {

                                    MESSAGE('Your Already Connected With'+element.UserName);
                                    
                                } else {

                                    LOADER(Connect);

                                    JSONADDER(usersdata.UserFriends,[element.UserID],(FriendsList)=>{

                                        const USERSDATAFRIENDS={
                                            "UserID":localStorage.getItem('User'),
                                            "UserFriends":FriendsList
                                        };

                                        POSTPACKAGE(UPDATEUSERAPI,'no-cors',USERSDATAFRIENDS,(date)=>{

                                            GETPACKAGE(USERSAPI,'cors',(data)=>{

                                                FINDER(data,'UserID',localStorage.getItem('User'),(user)=>{
                                    
                                                    if (user.UserID === localStorage.getItem('User')) {
                                                        
                                                        JSONIFICATION(user,(data)=>{
                                    
                                                            STORE('local','UserData',data);

                                                            MESSAGE('Your Now Connected With'+element.UserName);

                                                            ORIGIN(Connect,'Connect');
                                    
                                                        });
                                                    
                                                    }else{
                                    
                                                        console.log('not a match')
                                    
                                                    };
                                    
                                                });
                                    
                                            });

                                        });

                                    })
                                    
                                }

                            });
                            

                        })

                        const FriendPostsDiv=document.querySelector('.FriendPostsDiv');

                        GETINDEXED('Socilite','Posts',(data)=>{

                            CLEAR(FriendPostsDiv);

                            REDUX(data,(Element)=>{

                                REDUX(Element.Posts,(Information)=>{

                                    if (Information.Poster === element.UserID ) {

                                        const FreindsPosts=document.createElement('div');
        
                                        FreindsPosts.classList.add('FreindsPostsImages');
            
                                        DISPLAY(FreindsPosts,`
            
                                            <img class='FriendsImages' src='${Information.PostedImage||BLACKICONS+'images.png'}'/>
                                        
                                        `);
            
                                        ADD(FriendPostsDiv,FreindsPosts);
                                        
                                    };
        
                                });

                            });

                        });

                        CLICKED('.closeLocation',()=>{

                            STYLED(LocationDiv,'display','none');

                            DELETESTORAGE('','Friends');
                
                        });

                    });

                    CountryDivHolder.classList.add('CountryDiv');

                    ADD(ELEMENT,CountryDivHolder);

                    console.log(element)

                });

            });
            
        });

    });
    
};