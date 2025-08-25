const mic = document.querySelector('#mic');
const data = document.querySelector('#data');

function speak(sentence) {
    const bolo = new SpeechSynthesisUtterance(sentence);
    bolo.rate = 1;
    bolo.pitch = 1;
    window.speechSynthesis.speak(bolo);
}


function wish() {
    speak("I am your assistant");
}


window.addEventListener('load', () =>/* function() also use*/ {
    speak("hello Wajid");
    wish();
})

const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognice = new Speech();

recognice.onresult = (event) => {
    const res = event.resultIndex;
    const transcript = event.results[res][0].transcript;
    data.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

mic.addEventListener('click', () => {
    recognice.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Not Understand";

    if (message.includes('hello')) {
        const final = "sir hello";
        speech.text = final;
    }

    else if (message.includes('how are you')) {
        const final = "i am fine";
        speech.text = final;
    }

    else if (message.includes('introduce yourself') || message.includes('introduction')) {
        const final = "I am a Virtual Assistatant and my name is Deniel i am created by mr. Wajid Akhtar on 15th march 2024";
        speech.text = final;
    }

    else if (message.includes('open youtube')) {
        window.open("https://www.youtube.com/", "_blank");
        const final = "Opening Youtube";
        speech.text = final;
    }

    else if (message.includes('open instagram')) {
        window.open("https://www.instagram.com/", "_blank");
        const final = "Opening instagram";
        speech.text = final;
    }
    else if (message.includes('open calculator')) {
        window.open('Calculator:///')
        const final = "Opening Calculator";
        speech.text = final;
    }
    else if (message.includes('open whatsapp')) {
        window.open('Whatsapp:///')
        const final = "Opening Whatsapp";
        speech.text = final;
    }

    else if (message.includes('open my github profile')) {
        window.open("https://github.com/wajidakhtar4321", "_blank");
        const final = "Opening Your Github Profile";
        speech.text = final;
    }
    else if (message.includes('linkedin')) {
        window.open("https://www.linkedin.com/", "_blank");
        const final = "Opening Linkedin";
        speech.text = final;
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const final = "Showing you the Inforamation about " + message + " on google";
        speech.text = final;
    }

    speech.volume = 5;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
const array = ['images/images1.jpg', 'images/images2.jpg', 'images/images3.jpg', 'images/images.4.jpg'];
let pos = 0;
function forword() {
    if (pos < array.length - 1) {
        pos++;
    }
    else {
        pos = 0;
    }
    document.getElementById('im').src = array[pos];

    if (pos == 0) {
        document.getElementById('r1').checked = true;
        document.getElementById('r2').checked = false;
        document.getElementById('r3').checked = false;
        document.getElementById('r4').checked = false;
    }
    if (pos == 1) {
        document.getElementById('r1').checked = false;
        document.getElementById('r2').checked = true;
        document.getElementById('r3').checked = false;
        document.getElementById('r4').checked = false;
    }
    if (pos == 2) {
        document.getElementById('r1').checked = false;
        document.getElementById('r2').checked = false;
        document.getElementById('r3').checked = true;
        document.getElementById('r4').checked = false;
    }
    if (pos == 3) {
        document.getElementById('r1').checked = false;
        document.getElementById('r2').checked = false;
        document.getElementById('r3').checked = false;
        document.getElementById('r4').checked = true;
    }
}


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form submission to handle validation manually

    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Regular expression for username (at least one uppercase, one lowercase, and one number)
    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    // Regular expression for password (at least 8 characters, one uppercase, one lowercase, one number, and one special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:,.<>?/-]).{8,}$/;

    // Clear previous error messages and reset border styles
    document.getElementById("error-message").textContent = "";
    document.getElementById("username").style.borderColor = "";
    document.getElementById("password").style.borderColor = "";
    document.getElementById("username-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    let isValid = true;

    // Validate username
    if (username === "" || !usernameRegex.test(username)) {
        isValid = false;
        document.getElementById("username").style.borderColor = "red";  // Highlight username field
        document.getElementById("username-error").textContent = "Username incorrect";  // Error message below username
    }

    // Validate password
    if (password === "" || !passwordRegex.test(password)) {
        isValid = false;
        document.getElementById("password").style.borderColor = "red";  // Highlight password field
        document.getElementById("password-error").textContent = "Password incorrect";  // Error message below password
    }


    if (isValid) {
        alert("Login successful!");

    }

});
