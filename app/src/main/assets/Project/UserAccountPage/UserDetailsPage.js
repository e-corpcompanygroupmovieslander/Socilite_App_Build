import { UPDATEUSERAPI } from "../Apis/Apis.js";
import { AUTOUPDATEUSER } from "../AutoLoginPage/AutoUpdateUser.js";
import { USERACCOUNTPAGE } from "./UserAccountPage.js";

export const USERPROFILEDETAILS = () => {

    DEJSON('local', 'UserData', (data) => {

        BACKHEADERWIDGET(() => { USERACCOUNTPAGE() },
            `
                <h1 class='Sections'>Edit</h1>
            `,
            `
                <input type='text' class='RealName' placeholder='Real Names ' />
                <input type='text' class='UseName' placeholder='Hobbies' />
                <input type='tel' class='Telephone' placeholder='Telephone ' />
                <input type='text' class='Status' placeholder='Relation Status ' />
                <input type='text' class='City' placeholder='Current City ' />
                <input type='text' class='RelationShip' placeholder='UserRelationShip ' />
                <input type='text' class='Occupation' placeholder='UserOccupation ' />
                <textarea id='AboutMe' placeholder='About You'></textarea>
                <button class='forestgreen'>Update</button>
            `,
            ''
        );

        const RealName = document.querySelector('.RealName');
        const UserName = document.querySelector('.UseName');
        const Telephone = document.querySelector('.Telephone');
        const Status = document.querySelector('.Status');
        const City = document.querySelector('.City');
        const RelationShip = document.querySelector('.RelationShip');
        const Occupation = document.querySelector('.Occupation');
        const ABOUTME = document.querySelector('#AboutMe');
        const Button = document.querySelector('.forestgreen');

        EVENT(ABOUTME, 'focus', () => {
            STYLED(ABOUTME, 'margin-bottom', '250px');
        });

        EVENT(ABOUTME, 'blur', () => {
            STYLED(ABOUTME, 'margin-bottom', '0.5rem');
        });

        CLICKED('.forestgreen', () => {

            let updatedFields = {};

            // Check each field and add it to the update object if it has a value
            if (RealName.value) updatedFields.UserRealName = RealName.value;
            if (UserName.value) updatedFields.Hobbies = UserName.value;
            if (Telephone.value) updatedFields.UserTelephone = Telephone.value;
            if (Status.value) updatedFields.UserStatus = Status.value;
            if (City.value) updatedFields.UserCurrentCity = City.value;
            if (RelationShip.value) updatedFields.UserRelationShip = RelationShip.value;
            if (Occupation.value) updatedFields.UserOccupation = Occupation.value;
            if (ABOUTME.value) updatedFields.UserDescription = ABOUTME.value;

            // Check if any field has a value to update
            if (Object.keys(updatedFields).length > 0) {
                LOADER(Button);

                const USERS = {
                    "UserID": localStorage.getItem('User'),
                    ...data, // Add existing data
                    ...updatedFields // Merge updated fields
                };

                POSTPACKAGE(UPDATEUSERAPI, 'no-cors', USERS, (data) => {
                    AUTOUPDATEUSER();
                    USERACCOUNTPAGE();
                });
            } else {
                    
                VIBRATION(500); 
   
                STYLED(RealName,'border-bottom','1px solid red');
                STYLED(UserName,'border-bottom','1px solid red');
                STYLED(Telephone,'border-bottom','1px solid red');
                STYLED(Status,'border-bottom','1px solid red');
                STYLED(City,'border-bottom','1px solid red');
                STYLED(RelationShip,'border-bottom','1px solid red');
                STYLED(Occupation,'border-bottom','1px solid red');
                STYLED(ABOUTME,'border','1px solid red');

                setTimeout(() => {

                    STYLED(RealName,'border-bottom','1px solid #cdcdcd20');
                    STYLED(UserName,'border-bottom','1px solid #cdcdcd20');
                    STYLED(Telephone,'border-bottom','1px solid #cdcdcd20');
                    STYLED(Status,'border-bottom','1px solid #cdcdcd20');
                    STYLED(City,'border-bottom','1px solid #cdcdcd20');
                    STYLED(RelationShip,'border-bottom','1px solid #cdcdcd20');
                    STYLED(Occupation,'border-bottom','1px solid #cdcdcd20');
                    STYLED(ABOUTME,'border','1px solid #cdcdcd20');
  
                }, 2000);
    
            }

        });
    });
};
