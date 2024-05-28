export const CREATEACCOUNTPAGE=()=>{

    WIDGET(`

        <h2>Socilite</h2>

        <input type='text' class='Name' placeholder='Enter User Name' />

        <input type='email' class='Email' placeholder='Enter User Email' />

        <input type='password' class='Password'  placeholder='Enter User Password' />

        <button class='forestgreen'>Sign Up</button>

        <button class='blue'>LogIn</button>

    `);


    const Name=document.querySelector('.Name');
    const Email=document.querySelector('.Email');
    const Password=document.querySelector('.Password');
    const Button=document.querySelector('.forestgreen');

    CLICKED('.forestgreen',()=>{

        CONDITION(Name.value,

            ()=>CONDITION(Email.value,

                ()=>CONDITION(Password.value,

                    ()=>alert(''),
        
                    ()=>CHECK(Password,(result)=>{
        
                        VIBRATION(500);
                        
                        STYLED(Password,'border-bottom','1px solid red');
        
                        setTimeout(() => {
        
                            STYLED(Password,'border-bottom','1px solid #cdcdcd20');
                            
                        }, 2000);
        
                    })
        
                ),
    
                ()=>CHECK(Name,(result)=>{
    
                    VIBRATION(500);
                    
                    STYLED(Email,'border-bottom','1px solid red');
    
                    setTimeout(() => {
    
                        STYLED(Email,'border-bottom','1px solid #cdcdcd20');
                        
                    }, 2000);
    
                })
    
            ),

            ()=>CHECK(Name,(result)=>{

                VIBRATION(500);
                
                STYLED(Name,'border-bottom','1px solid red');

                setTimeout(() => {

                    STYLED(Name,'border-bottom','1px solid #cdcdcd20');
                    
                }, 2000);

            })

        );

    })

}