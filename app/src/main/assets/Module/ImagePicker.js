export const IMAGEPICKER = (ELEMENT, ELEMENT1, callback) => { document.querySelector(ELEMENT).addEventListener('change', function () { var file = this.files[0]; if (!file) return; var reader = new FileReader(); reader.onload = function (event) { var image = new Image(); image.src = event.target.result; image.onload = function () { var maxWidth = 800; var maxHeight = 600; var canvas = document.createElement('canvas'); var ctx = canvas.getContext('2d'); var width = image.width; var height = image.height; if (width > height) { if (width > maxWidth) { height *= maxWidth / width; width = maxWidth; } } else { if (height > maxHeight) { width *= maxHeight / height; height = maxHeight; } } canvas.width = width; canvas.height = height; ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(image, 0, 0, width, height); var base64Data; if (file.type === 'image/png') { base64Data = canvas.toDataURL('image/png'); } else { var quality = 0.7; base64Data = canvas.toDataURL('image/jpeg', quality); while (base64Data.length > 49800 && quality > 0) { quality -= 0.1; base64Data = canvas.toDataURL('image/jpeg', quality); } } if (base64Data.length < 49800) { var outputDiv = document.querySelector(ELEMENT1); outputDiv.src = base64Data; callback(base64Data); } else { MESSAGE('Image Format Error'); } }; };reader.readAsDataURL(file);});};


//SOCILITE API
export const USERSAPI='https://script.googleusercontent.com/macros/echo?user_content_key=vjKugIQc6OUFTtGi0Fpl2gVIz7Tj1GWwJi1AQN2OSlzmRqhXMjrMpVMMyksutYSKaMb5pHisgCpFU0fuFCKI1YaUq7FGX-GBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ-mWp9TCduQVakXikwdblMLe9ysCqiEfC7_rOzkmbjGiO2RlaCbzSTANr_5WlMu2cX89hOZMfZvvrDILC2PLksQktJlpYZCiNz9Jw9Md8uu&lib=M0qwiWmE5VVQcXaWHk0ubd7CC-xC2AC3z';
export const CREATEACCOUNTAPI='https://script.google.com/macros/s/AKfycbzvWYGRGF-MGrORFZeKs2kW8WP1dxM9dDWKAU-8eDzVqsNS4wAnXta-37gWSz5IrmhQlg/exec';
export const UPDATEUSERAPI='https://script.google.com/macros/s/AKfycbwUj242a6U3AHWvWKRkaf2cpyBFSEnFBxCZ3ysC3CSMHOYLhYuJTgDH7-pXbFUyEpjkbw/exec';
export const EMAILUSERSAPI='https://script.google.com/macros/s/AKfycbxL-n5l4qm6D1Z3LhiLKCCm7ltHH1Jck45KeTRXci_H9HUn5Jc8oo4o_XdtHfLjQawPkg/exec';

//POSTS API
export const POSTSAPI='https://script.googleusercontent.com/macros/echo?user_content_key=FQNfLrwo4KLbhJwgRyV5WgplrTPYnvypsulpy8RTHEoBEqsXeDXDc_GSqx9-m0S0EL2cZQm6sCtK_ErkTFxU1eKZZYlvUsuIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN5E8nzERE7Rokp5vqLQbpzvAKkDeZwdhp9bkBeDBjFwaQBxo41YvVgdWxHALyqrQiWjxQGEP7sXsul-uvkWF_hauZ7RxXhPwg&lib=MB4AYjQHul2eLQ1QQM8QVuXLBN-74XPvf';
export const UPDATEPOSTSAPI='https://script.google.com/macros/s/AKfycbxRIRvzpgPFHp3AuOO9tc4fyWHbhs9bcVpiwP1DJNLiDVCIW43dK0VVMGbePAwLQQEF/exec';
export const CREATEPOTSAPI='https://script.google.com/macros/s/AKfycbyQ1oZHumkA9YRv7JeBhps4DtsU78YMdXFj_lXEPsQHDY9wE20Bf2ejysdllxWlhY07/exec';

//CHAT API
export const GETMESSAGES='https://script.google.com/macros/s/AKfycbwwv4a6njPiNeqwMROxomc2xLkLDVIX4cK_WCUx97mcYT7Mj-aRMV7BXYAMi7UaynVk4g/exec';
export const CREATEMESSAGE='https://script.google.com/macros/s/AKfycbxs9AcUI02gZQNJot2wHjgt6jmbxctGBtu1g08K8bygNqkt7yqyJcwGsfZ-MAzmL9Jemw/exec';
export const UPDATEMESSAGE='https://script.google.com/macros/s/AKfycbxlp0Jz7K8kWwFDAUKEy4bzmo1CG_1Z0jo_hu3Vn8Cs-kZnLoUrSk3S5ZDeg4ew7gCv4Q/exec';