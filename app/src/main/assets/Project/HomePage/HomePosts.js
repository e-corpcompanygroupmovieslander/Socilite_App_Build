HOMEPOSTS=()=>{

    DECLARATION('.FullDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'top','55px');
        STYLED(ELEMENT,'height','92%');
        STYLED(ELEMENT,'bottom','0');
        STYLED(ELEMENT,'background','transparent');

        GETINDEXED('Socilite','Posts',(data)=>{

            REDUX(data,(info)=>{

                REDUX(info.UsersPosts.reverse(),(data)=>{

                    const DIV=document.createElement('div');

                        STYLED(DIV,'position','relative');
                        STYLED(DIV,'width','95%');
                        STYLED(DIV,'height','80%');
                        STYLED(DIV,'background','transparent');
                        STYLED(DIV,'border','1px solid #cdcdcd10');
                        STYLED(DIV,'margin','2% 2%');
                        STYLED(DIV,'border-radius','10px');

                        EXTERNALJS(FILESPATH+'HomePosts/PostedImage.js',()=>{POSTEDIMAGE(data,DIV)})

                        EXTERNALJS(FILESPATH+'HomePosts/PostersImage.js',()=>{POSTERIMAGE(data,DIV)})

                        EXTERNALJS(FILESPATH+'HomePosts/PostersName.js',()=>{POSTERNAME(data,DIV)})

                        EXTERNALJS(FILESPATH+'HomePosts/PosterLocation.js',()=>{POSTERLOCATION(data,DIV)})

                        EXTERNALJS(FILESPATH+'HomePosts/PostTime.js',()=>{POSTTIME(data,DIV)})

                        EXTERNALJS(FILESPATH+'HomePosts/ReadPost.js',()=>{READPOST(data,DIV)})

                        EXTERNALJS(FILESPATH+'HomePosts/PostShortStory.js',()=>{POSTSHORTSTORY(data,DIV)})

                    const OPTIONHOLDER=document.createElement('div');

                        EXTERNALJS(FILESPATH+'HomePosts/LikePosts.js',()=>{POSTSLIKE(data,OPTIONHOLDER)});

                        EXTERNALJS(FILESPATH+'HomePosts/PostComment.js',()=>{POSTSCOMMENT(data,OPTIONHOLDER)});

                        EXTERNALJS(FILESPATH+'HomePosts/PostShare.js',()=>{POSTSHARE(data,OPTIONHOLDER)});    

                        STYLED(OPTIONHOLDER,'position','absolute');
                        STYLED(OPTIONHOLDER,'right','1%');
                        STYLED(OPTIONHOLDER,'border','1px solid #cdcdcd10');
                        STYLED(OPTIONHOLDER,'width','50px');
                        STYLED(OPTIONHOLDER,'height','75%');
                        STYLED(OPTIONHOLDER,'top','50px');
                        STYLED(OPTIONHOLDER,'border-radius','10px');

                    ADD(DIV,OPTIONHOLDER);

                    ADD(ELEMENT,DIV);

                });
               
            });

        });

    });

};