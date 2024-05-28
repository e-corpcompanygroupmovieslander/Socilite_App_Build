USERPOSTS=()=>{

    DECLARATION('.PostsDIv',(Element)=>{

        TEXT(Element,'h6','','No Posts','',()=>{});

        STYLED(Element,'background','transparent');
        STYLED(Element,'height','60%');
        STYLED(Element,'bottom','0');
        STYLED(Element,'top','0');

        GETINDEXED('Socilite','Posts',(data)=>{

            CLEAR(Element);

            REDUX(data,(info)=>{

                REDUX(info.UsersPosts.reverse(),(data)=>{

                    if (data.Poster === localStorage.getItem('User') ) {

                        const IMG=document.createElement('img');

                        IMG.src=data.PostedImage||BLACKIMAGEICON;

                        STYLED(IMG,'position','relative');
                        STYLED(IMG,'width','30%');
                        STYLED(IMG,'height','180px');
                        STYLED(IMG,'bottom','0');
                        STYLED(IMG,'border-radius','5px');
                        STYLED(IMG,'margin','1% 1.2%');
                        STYLED(IMG,'display','inline-table');

                        ADD(Element,IMG);
                        
                    };

                });
               
            });

        });

        BREAK(Element);
        
    });

}