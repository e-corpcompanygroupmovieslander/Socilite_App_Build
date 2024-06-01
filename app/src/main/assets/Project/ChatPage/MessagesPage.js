import { GETMESSAGES, CREATEMESSAGE } from "../../Module/ImagePicker.js"; // Adjust the import path as needed
import { CHATPAGE } from "./ChatPage.js";

export const MESSAGEPAGE = (element) => {
    BACKHEADERWIDGET(() => { CHATPAGE(); },
        `
            <img id='createUserPost' class='Settings' src='${element.UserPhoto || WHITEICONS + 'user.png'}'/>
        `,
        `
            <div class='MessagesDiv'>

                <img id='MessageLoader' class='LoadingIcon' src='${WHITEICONS}loading.png'/>
             
            </div>
            <div class='ChattingOptions'>
                <input type='text' class='ChatMessage'  placeholder='Enter Chat' />
                <button id='SendMessage' class='forestgreen'>Send</button>
            </div>
        `,
        'MessagingDiv'
    );

    const ChatMessage = document.querySelector('.ChatMessage');
    const ChattingOptions = document.querySelector('.ChattingOptions');
    const SendMessage = document.querySelector('#SendMessage');
    const MessagesDiv = document.querySelector('.MessagesDiv');

    setInterval(() => {

        GETPACKAGE(GETMESSAGES, 'cors', (Message) => {
            CLEAR(MessagesDiv);
            REDUX(Message, (chats) => {
                // Check if the message involves the current user (either as sender or receiver)
                if ((chats.Reciver === element.UserID && chats.Sender === localStorage.getItem('User')) ||
                    (chats.Sender === element.UserID && chats.Reciver === localStorage.getItem('User'))) {
                    const CountryDivHolder = document.createElement('div');
                    STYLED(CountryDivHolder, 'width', '70%');
                    STYLED(CountryDivHolder, 'height', 'auto');
                    CountryDivHolder.classList.add('CountryDiv');
                    if (chats.Sender === localStorage.getItem('User')) {
                        STYLED(CountryDivHolder, 'left', '30%');
                        DISPLAY(CountryDivHolder, `<p class='OwnMessage'>${chats.Description}</p>`);
                    } else {
                        STYLED(CountryDivHolder, 'left', '0');
                        DISPLAY(CountryDivHolder, `<p class='OtherMessage'>${chats.Description}</p>`);
                    }
                    
                    ADD(MessagesDiv, CountryDivHolder);
                }
                console.log(chats);
            });
        });
    
        
    }, 5000);


    EVENT(ChatMessage, 'focus', () => {
        STYLED(ChattingOptions, 'margin-bottom', '250px');
    });

    EVENT(ChatMessage, 'blur', () => {
        STYLED(ChattingOptions, 'margin-bottom', '0');
    });

    CLICKED('#SendMessage', () => {
        if (!ChatMessage.value) {
            MESSAGE('Enter a Message');
            return;
        }
        DEJSON('local', 'UserData', (data) => {
            const USERMESSAGE = {
                "Sender": localStorage.getItem('User'),
                "Description": ChatMessage.value,
                "SenderImage": data.UserPhoto,
                "SenderTime": new Date(),
                "Reciver": element.UserID,
                "UserID": Date.now(),
                "RecieversImage": element.Photo
            };
            LOADER(SendMessage);
            POSTPACKAGE(CREATEMESSAGE, 'no-cors', USERMESSAGE, (result) => {

                GETPACKAGE(GETMESSAGES, 'cors', (Message) => {
                    CLEAR(MessagesDiv);
                    REDUX(Message, (chats) => {
                        // Check if the message involves the current user (either as sender or receiver)
                        if ((chats.Reciver === element.UserID && chats.Sender === localStorage.getItem('User')) ||
                            (chats.Sender === element.UserID && chats.Reciver === localStorage.getItem('User'))) {
                            const CountryDivHolder = document.createElement('div');
                            STYLED(CountryDivHolder, 'width', '70%');
                            STYLED(CountryDivHolder, 'height', 'auto');
                            CountryDivHolder.classList.add('CountryDiv');
                            if (chats.Sender === localStorage.getItem('User')) {
                                STYLED(CountryDivHolder, 'left', '30%');
                                DISPLAY(CountryDivHolder, `<p class='OwnMessage'>${chats.Description}</p>`);
                            } else {
                                STYLED(CountryDivHolder, 'left', '0');
                                DISPLAY(CountryDivHolder, `<p class='OtherMessage'>${chats.Description}</p>`);
                            }
                            
                            ADD(MessagesDiv, CountryDivHolder);
                        }
                        console.log(chats);
                    });
                });

                ChatMessage.value = '';

                ORIGIN(SendMessage,'Send')
                
            });
        });
    });
};
