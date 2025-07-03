const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const hour = new Date().getHours();// ✅ 0–23 format
    console.log("Current Hour:", hour);

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Tejas Boss");
    } else if (hour >= 12 && hour < 16) {
        speak("Good Afternoon Tejas Boss");
    } else if (hour >= 16 && hour < 20) {
        speak("Good Evening Tejas Boss");
    } else {
        speak("Good Night Tejas Boss");
    }
}

window.addEventListener('load', () => {
  speak("Activating Inertia");
  setTimeout(wishMe, 2000); // Let the first sentence finish
});

// Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  content.textContent = transcript;
  speakThis(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
  content.textContent = "Listening....";
  recognition.start();
});

function speakThis(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I did not understand what you said, please try again";

  if (message.includes('hey') || message.includes('hello')) {
    speech.text = "Hello Boss";
  } else if (message.includes('how are you')) {
    speech.text = "I am fine boss, tell me how can I help you";
  } else if (message.includes('name')) {
    speech.text = "My name is Inertia";
  } else if (message.includes('open google')) {
    window.open("https://google.com", "_blank");
    speech.text = "Opening Google";
  }
  else if (message.includes('open youtube')) {
    window.open("https://youtube.com", "_blank");
    speech.text = "Opening YouTube";
  }
  else if (message.includes('open instagram')) {
    window.open("https://instagram.com", "_blank");
    speech.text = "Opening Instagram";
  } else if (message.includes('open leetcode')) {
    window.open("https://leetcode.com", "_blank");
    speech.text = "Opening Leetcode";
  } else if (message.includes('open github')) {
    window.open("https://github.com", "_blank");
    speech.text = "Opening GitHub";
  } else if (message.includes('wikipedia')) {
    window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
    speech.text = "Here's what I found on Wikipedia";
  } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    speech.text = "Here's what I found on the internet";
  } else if (message.includes('time')) {
    const time = new Date().toLocaleTimeString();
    speech.text = `Current time is ${time}`;
  } else if (message.includes('date')) {
    const date = new Date().toLocaleDateString();
    speech.text = `Today's date is ${date}`;
  } else if (message.includes('telegram')) {
    window.open('tg://', "_blank");
    speech.text = "Opening Telegram";
  } else if (message.includes('calculator')) {
    window.open('Calculator:///', "_blank");
    speech.text = "Opening Calculator";
  } else if (message.includes('weather')) {
    window.open("https://www.google.com/search?q=weather", "_blank");
    speech.text = "Showing weather forecast";
  } else if (message.includes('play music')) {
    window.open("https://music.youtube.com", "_blank");
    speech.text = "Playing music on YouTube";
  } else if (message.includes('battery')) {
    navigator.getBattery().then(function (battery) {
      const level = Math.round(battery.level * 100);
      const finalText = "Battery level is " + level + " percent";
      speak(finalText);
    });
    return;
  } else {
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    speech.text = `Here’s something I found for ${message}`;
  }

  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}

var typed = new Typed(".auto-input", {
    strings: ["I'm your virtual assistance <span>I N E R T I A</span> how can I help you....."],
    typeSpeed: 100,      
    backDelay: 1000,  
    loop: false,
    html: true,
    showCursor: false 
});


