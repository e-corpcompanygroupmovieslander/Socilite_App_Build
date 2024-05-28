export const USERPROFILEDETAILS=()=>{

    DEJSON('local','UserData',(data)=>{

        BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
            `
                <h1 class='Sections'>Edit</h1>

            `
            ,

            `

                <input type='text' placeholder='Real Names ' />

                <input type='text' placeholder='UserName' />

                <input type='tel' placeholder='Telephone ' />

                <input type='text' placeholder='Relation Status ' />

                <input type='text' placeholder='Current City ' />

                <input type='text' placeholder='UserRelationShip ' />

                <input type='text' placeholder='UserOccupation ' />

                <textarea placeholder='About You' ></textarea>

                <button class='forestgreen'>Update</button>
 

            `,''

        );

    });

}