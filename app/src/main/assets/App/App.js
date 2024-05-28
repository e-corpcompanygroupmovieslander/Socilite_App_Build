APPMODE('','','#121212');

APPNAME('Advance-Native');

CONDITION(localStorage.getItem('User'),

    ()=>EXTERNALJS(FILESPATH+'HomePage/HomePage.js',()=>HOMEPAGE()),

    ()=>EXTERNALJS(FILESPATH+'LoginPage/LoginPage.js',()=>LOGINPAGE()),

);




CONDITION(localStorage.getItem('NetWork'),

    ()=>GETPACKAGE(POSTSAPI,'cors',(data)=>{

        UserData={
            "Name":"UsersPosts",
            "UsersPosts":data
        }

        CONDITION(localStorage.getItem('User'),

            ()=>UPDATEINDEXED('Socilite','Posts',UserData),

            ()=>STOREINDEXED('Socilite','Posts',UserData)

        );

    }),

    ()=>console.log('Using Back Up')

)