const FILES = (ELEMENT, callback) => {
    EVENT(ELEMENT, 'click', () => {
        CREATEELEMENT('input', '', (INPUT) => {
            INPUT.type = 'file'; // Correct the type to 'file'
            INPUT.accept = 'image/*'; // Optional: restrict to image files
            STYLED(INPUT, 'display', 'none');
            
            ADD('', INPUT); // Assuming this appends the INPUT to the document body
            
            INPUT.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const result = {
                            fileName: file.name,
                            fileType: file.type,
                            base64: e.target.result.split(',')[1] // Extract base64 part
                        };
                        callback(result); // Return the file data as JSON
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            INPUT.click(); // Trigger the file input click event
        });
    });
};


