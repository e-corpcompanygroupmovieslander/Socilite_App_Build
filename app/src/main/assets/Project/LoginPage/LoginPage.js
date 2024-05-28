LOGINPAGE = () => {

    CLEAR('');

    TEXT('', 'h1', 'AppName', 'Socilite', '', () => {});

    DECLARATION('.AppName', (ELEMENT) => {

        STYLED(ELEMENT, 'font-size', '30px');
        STYLED(ELEMENT, 'margin-top', '30px');
        STYLED(ELEMENT, 'margin-bottom', '30px');

    });

    TEXT('', 'p', 'LoginMessage', 'Login To Access Your Account', '', () => {});

    DECLARATION('.LoginMessage', (ELEMENT) => {

        STYLED(ELEMENT, 'font-size', '15px');
        STYLED(ELEMENT, 'margin-bottom', '10px');

    });

    INPUT('', 'Email', 'Enter User Email', 'email',);

    INPUT('', 'Password', 'Enter User Password', 'password');

    TEXT('', 'p', 'ForgotPassword', 'Forgot Password?', '', () => {});

    DECLARATION('.ForgotPassword', (ELEMENT) => {

        STYLED(ELEMENT, 'text-align', 'right');
        STYLED(ELEMENT, 'margin-right', '15px');

    });

    BUTTON('', 'Sign In', '', 'LoginUser', 'forestgreen', () => {

        const Email = document.querySelector('.Email');
        const Password = document.querySelector('.Password');
        const ELEMENT = document.querySelector('.LoginUser');



        CONDITION(Email.value,
            () => CONDITION(Password.value,
                () => CHECK(Password.value, (result) => {

                    STYLED(Email, 'border', '1px solid #cdcdcd20');
                    STYLED(Password, 'border', '1px solid #cdcdcd20');

                    CONDITION(localStorage.getItem('NetWork'),
                        () => CHECK(ELEMENT, (result) => {

                            STYLED(ELEMENT, 'background', '#00000080');
                            STYLED(ELEMENT, 'border', '1px solid forestgreen');

                            colorChange();

                            GETPACKAGE(USERSAPI, 'cors', (data) => {

                                FINDER(data, 'UserEmail', Email.value, (users) => {

                                    CONDITION(users.UserEmail === Email.value,
                                        () => CHECK(users, (result) => {

                                            PASSWORDDEHASH(result.UserPassword, Password.value, (data) => {

                                                CONDITION(data === true,
                                                    () => CHECK(users, (result) => {

                                                        CONDITION(users.UserDeleted,
                                                            () => CHECK(Password.value, (result) => {

                                                                stopColorChange(); 
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

                                                        VIBRATION(500);
                                                        STYLED(Password, 'border', '1px solid red');
                                                        stopColorChange(); 
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
        );

    });

    BUTTON('', 'Create Account', WHITERIGHTBACKICON, '', 'blue', () => {

        EXTERNALJS(FILESPATH + 'CreateAccountPage/CreateAccountPage.js', () => CREATEACCOUNTPAGE())

    });

};