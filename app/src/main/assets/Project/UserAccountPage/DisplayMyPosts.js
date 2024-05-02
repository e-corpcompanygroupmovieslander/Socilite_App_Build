import { USERACCOUNTPAGE } from "./UserAccountPage.js"

export const DISPLAYMYPOSTS=()=>{

    const MyPosts=document.querySelector('.MyPosts')

    DEJSON('local','MyPosts',(posts)=>{

        REVERSE(posts,(data)=>{

            REDUX(data,(element)=>{

                CREATEELEMENT('div','MyPostsDiv',(ELEMENT)=>{

                    DISPLAY(ELEMENT,`

                        <img class='PostImage' src='${element.PostedImage }'/>
                    
                    `)

                    EVENT(ELEMENT,'click',()=>{

                        console.log(element)

                        BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
                        `
                        <h1 class="Sections" >${element.PostersName}</h1>
                        
                        `,
                        `
                            <img class='PostedImage' src='${element.PostedImage }'/>

                            <p class='DescriptionPost'>${element.Description}</p>

                            <button class='forestgreen'>Update Post</button>

                            <button class='brown'>Delete Post</button>
                        
                        `
                        ,''
                        )

                    })

                    ADD(MyPosts,ELEMENT);
                })

            })

        })

    })

}