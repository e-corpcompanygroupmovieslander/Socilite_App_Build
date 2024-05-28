UPDATEUSERLOCATION = () => {

    REMOVESTORE('', 'Country');

    CLEAR('');

    HEADER('', 'HomeHeader');

    DECLARATION('.HomeHeader', (ELEMENT) => {

        ICON(ELEMENT, WHITEBACKICON, 'MesageIcon', () => {

            EXTERNALJS(FILESPATH + 'UserAccountPage/UserAccountPage.js', () => USERACCOUNT());

        });

        DECLARATION('.MesageIcon', (Element) => {

            STYLED(Element, 'margin-left', '1rem');
            STYLED(Element, 'width', '25px');
            STYLED(Element, 'height', '25px');
            STYLED(Element, 'background', 'transparent');

        });

        BUTTON(ELEMENT, 'Update', '', 'Post', 'forestgreen', () => {

            CONDITION(sessionStorage.getItem('Country'),
                () => CHECK(localStorage.getItem('User'), (result) => {

                    DECLARATION('.Post', (ELEMENT) => {

                        let intervalID; // Declare intervalID here

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

                        STYLED(ELEMENT, 'background', '#00000080');
                        STYLED(ELEMENT, 'border', '1px solid forestgreen');

                        colorChange(); // Start the color changing interval

                        const USER = {
                            "UserID": localStorage.getItem('User'),
                            "UserLocation": sessionStorage.getItem('Country')
                        };

                        POSTPACKAGE(UPDATEUSERAPI, 'no-cors', USER, (Country) => {

                            stopColorChange(); // Stop the interval once the API call is done

                            EXTERNALJS(FILESPATH + 'AppAutoRuns/UpdateUserData.js', () => UPDATEUSERDATA(() => {

                                EXTERNALJS(FILESPATH + 'UserAccountPage/UserAccountPage.js', () => USERACCOUNT());

                            }));

                        });

                    });

                }),
                () => alert('Choose Country')
            );

        });

        DECLARATION('.Post', (Element) => {

            STYLED(Element, 'position', 'relative');
            STYLED(Element, 'margin-right', '1rem');
            STYLED(Element, 'width', '100px');
            STYLED(Element, 'height', '35px');

        });

    });

    FULLVIEW('', 'FullDiv');

    DECLARATION('.FullDiv', (ELEMENT) => {

        STYLED(ELEMENT, 'top', '55px');
        STYLED(ELEMENT, 'bottom', '0');
        STYLED(ELEMENT, 'background', 'transparent');

        DEJSON('local', 'UserData', (data) => {

            REDUX(COUNTRYDATA, (element) => {

                const DIV = document.createElement('div');

                STYLED(DIV, 'width', '95%');
                STYLED(DIV, 'height', '50px');
                STYLED(DIV, 'margin', '2%');
                STYLED(DIV, 'border', '1px solid #cdcdcd20');
                STYLED(DIV, 'display', 'inline-flex');

                const COUNTIRES = document.createElement('h1');

                DISPLAY(COUNTIRES, element.name);

                STYLED(COUNTIRES, 'margin-top', 'auto');
                STYLED(COUNTIRES, 'margin-bottom', 'auto');
                STYLED(COUNTIRES, 'margin-left', '1rem');
                STYLED(COUNTIRES, 'margin-right', 'auto');
                STYLED(COUNTIRES, 'font-size', '16px');
                STYLED(COUNTIRES, 'color', 'teal');

                ADD(DIV, COUNTIRES);

                ADD(ELEMENT, DIV);

                EVENT(DIV, 'click', () => {

                    STORE('', 'Country', element.name);

                    CLEAR(ELEMENT);

                    ADD(ELEMENT, DIV);

                    STYLED(DIV, 'border', '1px solid teal');

                });

            });

        });

        BREAK(ELEMENT); BREAK(ELEMENT); BREAK(ELEMENT); BREAK(ELEMENT);

    });

};
