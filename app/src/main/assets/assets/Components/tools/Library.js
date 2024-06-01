const FILES=(ELEMENT,callback)=>{
    document.querySelector(ELEMENT).addEventListener('change', function(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = function(e) {
    const base64Data = e.target.result.split(',')[1];
    const fileType = file.type;
    const fileName = file.name;
    const fileSize = file.size;
    const DATA={
    "Base64":base64Data,
    "Name":fileName,
    "Size":fileSize,
    "Type":fileType
    };
    callback(DATA);
    };
    reader.readAsDataURL(file);
    }
    });
}


let intervalID; 

const colorChange = (ELEMENT) => {
    let index = 0;
    intervalID = setInterval(() => {
        index = (index + 1) % COLOR.length;
        STYLED(ELEMENT, 'border', `1px solid ${COLOR[index].name}`);
        STYLED(ELEMENT, 'background', 'transparent');
    }, 2000);
};

const stopColorChange = (ELEMENT,COLOR) => {
    clearInterval(intervalID);
    STYLED(ELEMENT, 'border', '1px solid forestgreen'); 
    STYLED(ELEMENT, 'background', COLOR);
};