import "../../CSS/contact.css"
import { toast } from 'react-toastify';
import React from 'react'

export const Contact = () => {


    const sendMessage=()=>{
        toast('Your Response Send To Company')
    }
    return (
        <div className='contact'>

           
            <form id="box" className='box1' action="https://api.web3forms.com/submit" method="POST"> {/* This help to send a message to your enter email-id */}
                
                <h2 className='h1'>CONTACT</h2>
                <input type="hidden" name="access_key" value="a928533a-4b25-4bac-ac65-e1e5c46894ef" />
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" required placeholder='Enter your name' />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required placeholder='Enter your email' />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" required placeholder='Enter your message...'></textarea>
                </div>

                <div>
                    <label>Feedback:</label>
                    <textarea name="feedback" required maxLength={200} placeholder='Enter your feedback...'></textarea>
                </div>

                <button type="submit"onClick={sendMessage}>SEND</button>
            </form>
        </div>
    );
}