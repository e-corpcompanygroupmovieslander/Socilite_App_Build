# ADVANCE-NATIVE
# BUILT BY E-CORP COMPANY GROUP .
# ITS A FRAME WORK FOR BUILDING NATIVE ANDROID APPLICATIONS USING HTML,CSS AND JAVASCRIPT.
# A DEVELOPER DOESNOT NEED TO INSTALL EXTRA STUFF TO DEVELOP ANDROID APPS THAT ARE SCALABLE ,UPDATABLE AND EASE OF USAGE.
# ADVANCE-NATIVE COMES WITH VARIOUS PLUGINS,FUNCTIONS,AND COMPONENTS THATS ARE PREBUILT TO MAKE THE FRAMEWORK AND DEVELOPER EXPERIENCE BETTER.
# ADVANCE-NATIVE COMES WITH PRESTYLED CSS STYLES FOR MOST BASIC COMPONENTS AND IT ALSO COMES WITH A GROUP OF CLASSES USED FOR CSS STYLING TO ENABLE DEVELOPERS WRITE LESS CODE AND FOCUS ON WHAT MATTERS THE MOST.
# ADVANCE-NATIVE IS A CORE PACKAGE OF BUILDING TOOLS USE TO DEVELOP NATIVE ANDROID APPS THATS ARE FAST AND FULLY FUNCTIONG.


const  BACKHEADERGALLERYWIDGET=(e, A, n,callback)=> {
    // Display header and navigator div
    DISPLAY("", `<header class='Header'><img class='BackIcon' src='${WHITEBACKICON}' alt="Back"><div class='AppHeader'></div></header><div id='${n}' class='NavigatorDiv'></div>`);
    
    // Handle click event on back icon
    CLICKED(".BackIcon", () => {
        e();
    });
    
    // Handle app header content
    DECLARATION(".AppHeader", (element) => {
        if (A) {
            DISPLAY(element, A);
        } else {
            DISPLAY(element, "");
        }
    });

    IMAGES((data)=>{

        // Handle navigator div content
        DECLARATION(".NavigatorDiv", (element) => {

            if (data) {
                
                REDUX(data,(elements)=>{
    
                    CREATEELEMENT('img','userImage',(IMG)=>{

                        IMG.src=elements.path;
                        
                        IMG.loading ='lazy';

                        ADD(element,IMG);

                        EVENT(IMG,'click',()=>{

                            READFILE(elements.path,(data)=>{

                                callback(data);

                            })

                        })

                    })    

                })

            } else {
                LOADER(element, "HomeLoader");
            }
        });

    })
    

}
