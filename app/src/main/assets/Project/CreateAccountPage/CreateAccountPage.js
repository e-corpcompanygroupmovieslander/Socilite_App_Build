CREATEACCOUNTPAGE = () => {

    CLEAR('');

    TEXT('', 'h1', 'AppName', 'Socilite', '', () => {});

    DECLARATION('.AppName', (ELEMENT) => {

        STYLED(ELEMENT, 'font-size', '30px');
        STYLED(ELEMENT, 'margin-top', '30px');
        STYLED(ELEMENT, 'margin-bottom', '30px');

    });

    TEXT('', 'p', 'LoginMessage', 'Create Account To Get Started', '', () => {});

    DECLARATION('.LoginMessage', (ELEMENT) => {

        STYLED(ELEMENT, 'font-size', '15px');
        STYLED(ELEMENT, 'margin-bottom', '10px');

    });

    INPUT('', 'UserName', 'Enter User Name', '');

    INPUT('', 'Email', 'Enter User Email', 'email');

    INPUT('', 'Password', 'Enter User Password', 'password');

    BUTTON('', 'Sign Up', '', 'LoginUser', 'forestgreen', () => {

        const UserName = document.querySelector('.UserName');
        const Email = document.querySelector('.Email');
        const Password = document.querySelector('.Password');

        const ELEMENT = document.querySelector('.LoginUser');

        let intervalID; 
        const colorChange = () => {
            let index = 0;
            intervalID = setInterval(() => {
                index = (index + 1) % COLOR.length;
                STYLED(ELEMENT, 'border', `1px solid ${COLOR[index].name}`);
            }, 2000);
        };

        const stopColorChange = () => {
            clearInterval(intervalID);
            STYLED(ELEMENT, 'border', '1px solid forestgreen'); // Reset to the original color
        };

        CONDITION(UserName.value,
            () => CONDITION(Email.value,
                () => CONDITION(Password.value,
                    () => CHECK(Password.value, (result) => {

                        STYLED(Email, 'border', '1px solid #cdcdcd20');
                        STYLED(Password, 'border', '1px solid #cdcdcd20');

                        CONDITION(localStorage.getItem('NetWork'),
                            () => CHECK(ELEMENT, (result) => {

                                STYLED(ELEMENT, 'background', '#00000080');
                                STYLED(ELEMENT, 'border', '1px solid forestgreen');

                                colorChange(); // Start the color changing interval

                                GETPACKAGE(USERSAPI, 'cors', (data) => {

                                    FINDER(data, 'UserEmail', Email.value, (users) => {

                                        CONDITION(users.UserEmail === Email.value,
                                            () => CHECK(users, (result) => {

                                                PASSWORDDEHASH(result.UserPassword, Password.value, (data) => {

                                                    CONDITION(data === true,
                                                        () => CHECK(users, (result) => {

                                                            CONDITION(users.UserDeleted,
                                                                () => CHECK(Password.value, (result) => {

                                                                    stopColorChange(); // Stop the interval
                                                                    VIBRATION(500);

                                                                    STYLED(Password, 'border', '1px solid red');
                                                                    STYLED(Email, 'border', '1px solid red');

                                                                }),
                                                                () => CHECK(users, (result) => {

                                                                    STORE('local', 'User', users.UserID);

                                                                    JSONIFICATION(users, (info) => {

                                                                        STORE('local', 'UserData', info);

                                                                        EXTERNALJS(FILESPATH + 'HomePage/HomePage.js', () => HOMEPAGE());

                                                                    });

                                                                })
                                                            );

                                                        }),
                                                        () => CHECK(Password.value, (result) => {

                                                            stopColorChange(); 
                                                            VIBRATION(500);

                                                            STYLED(Password, 'border', '1px solid red');

                                                            STYLED(ELEMENT, 'background', 'forestgreen');

                                                        })
                                                    );

                                                });

                                            }),
                                            () => CHECK(Email.value, (result) => {

                                                stopColorChange(); 
                                                VIBRATION(500);
                                                STYLED(Email, 'border', '1px solid red');

                                                STYLED(ELEMENT, 'background', 'forestgreen');

                                            })
                                        );

                                    });

                                });

                            }),
                            () => CHECK(ELEMENT, (result) => {

                                STYLED(ELEMENT, 'background', 'brown');

                                setTimeout(() => {

                                    STYLED(ELEMENT, 'background', 'forestgreen');

                                }, 2000);

                            })
                        );

                    }),
                    () => CHECK(Password.value, (result) => {

                        VIBRATION(500);

                        STYLED(Password, 'border', '1px solid red');

                        setTimeout(() => {

                            STYLED(Password, 'border', '1px solid #cdcdcd20');

                        }, 2000);

                    })
                ),
                () => CHECK(Email.value, (result) => {

                    VIBRATION(500);

                    STYLED(Email, 'border', '1px solid red');

                    setTimeout(() => {

                        STYLED(Email, 'border', '1px solid #cdcdcd20');

                    }, 2000);

                })
            ),
            () => CHECK(UserName.value, (result) => {

                VIBRATION(500);

                STYLED(UserName, 'border', '1px solid red');

                setTimeout(() => {

                    STYLED(UserName, 'border', '1px solid #cdcdcd20');

                }, 2000);

            })
        );

    });

    BUTTON('', 'LogIn', WHITERIGHTBACKICON, '', 'blue', () => {

        EXTERNALJS(FILESPATH + 'LoginPage/LoginPage.js', () => LOGINPAGE());

    });

};
