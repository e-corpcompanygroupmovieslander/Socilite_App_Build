const IMAGEDISPLAY=()=>{
    DECLARATION('.ImagePreview',(ELEMENT)=>{
        FILES((data)=>{
            ELEMENT.src='data:image/jpeg;base64,'+data;
        })
    })
}

export{IMAGEDISPLAY}