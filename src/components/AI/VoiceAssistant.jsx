import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/voice.css'


export const VoiceAssistant = () => {
    const navigate = useNavigate();
    const recognitionRef = useRef(null);
    const synth = window.speechSynthesis;
    const [listening, setListening] = useState(false);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;

            recognition.lang = 'en-US';
            recognition.interimResults = false;

            recognition.onstart = () => setListening(true);
            recognition.onend = () => setListening(false);




            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                handleCommand(transcript);
            };

            recognitionRef.current = recognition;

        } else {
            alert("Your browser does not support speech recognition.");
        }
    }, []);

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    };

    const handleCommand = (command) => {
        console.log("Recognized:", command);

        if (command.includes("go to home") || command.includes("open home")) {
            navigate("/Home");
            speak("Opening home page.");
        } else if (command.includes("open collection")) {
            navigate("/Collection");
            speak("Here's the collection.");
        } else if (command.includes("open best seller")) {
            navigate("/Home"); // Assuming it's part of home
            speak("Showing best sellers.");
        } else if (command.includes("open contact")) {
            navigate("/Contact");
            speak("Navigating to contact page.");
        }

        else if (command.includes("open about")) {
            navigate("/About");
            speak("Navigating to about page.");
        }

        else if (command.includes("open cart")) {
            navigate("/Product_List");
            speak("Navigating to cart page.");
        }
        else if (command.includes("tell about website")) {
            speak("Clothify is an online clothing store offering the latest trends for men, women, and children.");
        } else if (command.includes("help")) {
            speak("You can say things like 'open home', 'open collection', or 'open contact '.");
        } else {
            speak("Sorry, I didn’t understand that. Please try again.");
        }
    };

    const startListening = () => {
        if (recognitionRef.current) recognitionRef.current.start();
    };

    return (
        <div className="voice-assistant">
            <button onClick={startListening} className="voice-btn">
                🎤 Bot
            </button>
            {listening && <p>Listening...</p>}
        </div>
    );
};
