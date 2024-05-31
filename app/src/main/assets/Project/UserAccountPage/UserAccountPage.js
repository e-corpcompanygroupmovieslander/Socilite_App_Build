import { HOMEPAGE } from "../HomePage/HomePage.js"

export const USERACCOUNTPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        JSONLENGTH(data.UserFriends,(Friends)=>{

            STORE('local','Friends',Friends);
            
        })

        BACKHEADERWIDGET(()=>{HOMEPAGE()},

            `

                <img class='Settings' src='${WHITEICONS}setting.png'/>

            `,
            `
                <img class='UserProfilePhoto' src='${data.UserPhoto||BLACKICON+'image.png'}'/>
                        
                <div class='FriendsDetails'>

                    <h1 class='FriendsName'>${data.UserName}</h1>
                
                    <div class='FriendsOptions'>

                        <div class='FriendsOptionsHolders'>

                            <img src='${WHITEICONS}group-users.png'/>

                            <h1 class='FriendsNumber'>${localStorage.getItem('Friends')}</h1>
                        
                        </div>

                        <div class='FriendsOptionsHolders'>

                            <img src='${WHITEICONS}grid.png'/>

                            <h1 class='FriendsNumber'>${data.UserUploads||'0'}</h1>
                        
                        </div>

                        <div class='FriendsOptionsHolders'>

                            <img src='${WHITEICONS}location.png'/>

                            <h1 class='FriendsNumber'>${data.UserLocation||''}</h1>
                        
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

                    <button id='Connect' class='ConnectionButtons'>Share Profile</button>

                    <button id='Disconnect' class='ConnectionButtons'>Edit Profile</button>
                
                </div>

                <div class='FriendPostsDiv'></div>
            

            `,''

        );

        const UserProfilePhoto=document.querySelector('.UserProfilePhoto');

        colorChange(UserProfilePhoto);

        DECLARATION('.FriendPostsDiv',(ELEMENT)=>{

            CLEAR(ELEMENT)

            GETINDEXED('Socilite','Posts',(data)=>{

                REDUX(data,(Element)=>{

                    REDUX(Element.Posts,(element)=>{

                        if (element.Poster === localStorage.getItem('User') ) {

                            const FreindsPosts=document.createElement('div');
    
                            FreindsPosts.classList.add('FreindsPostsImages')
        
                            DISPLAY(FreindsPosts,`
        
                                <img class='FriendsImages' src='${element.PostedImage||BLACKICONS+'images.png'}'/>
                            
                            `);
        
                            ADD(ELEMENT,FreindsPosts);
                            
                        };

                    });

                });

            });

        });

    });

}