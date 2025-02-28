// State Management
const state = {
    isLoggedIn: false,
    isActive: false,
    timer: 60,
    timeLimit: 60,
    text: '',
    userInput: '',
    wpm: 0,
    accuracy: 100,
    theme: 'dark',
    difficulty: 'medium',
    mode: 'words',
    wordCount: 25,
    language: 'english',
    caretStyle: 'block',
    soundEnabled: true,
    confidenceMode: false,
    statistics: {
        highestWpm: 0,
        averageWpm: 0,
        testsCompleted: 0,
        totalTime: 0
    }
};

// Text Samples by Language
const textSamples = {
    english: {
        words: [
            "jump", "table", "ocean", "bright", "cup", "fast", "yellow", "globe", "moon", "river",
            "lamp", "code", "apple", "desk", "dream", "plane", "zebra", "storm", "kind", "silver",
            "happy", "tiny", "beach", "robot", "phone", "novel", "quiet", "bridge", "track", "sun",
            "pencil", "light", "fence", "door", "jungle", "oyster", "grape", "cloud", "fox", "breeze",
            "whale", "brave", "window", "magic", "storm", "peace", "sharp", "bottle", "flower", "carrot",
            "turtle", "market", "shield", "puzzle", "island", "ticket", "freeze", "whisper", "velvet", "chase",
            "rocket", "mirror", "candle", "melon", "button", "corner", "guitar", "bucket", "eagle", "purple",
            "castle", "pocket", "soccer", "circle", "winter", "horizon", "painter", "zigzag", "sketch", "butter",
            "straw", "echo", "bubble", "scooter", "arch", "bridge", "wizard", "pirate", "shadow", "dancer",
            "fortune", "zipper", "glitter", "chocolate", "comet", "hammer", "echo", "cactus", "jigsaw", "skylight",
            "trophy", "whisk", "paddle", "pebble", "cherry", "blanket", "ribbon", "ladder", "compass", "lantern",
            "puzzle", "tiger", "marble", "banana", "chimney", "orbit", "hurdle", "kettle", "mosaic", "thunder",
            "picnic", "lizard", "parrot", "castle", "saddle", "knight", "raindrop", "shuttle", "sunbeam", "crystal",
            "goblet", "butterfly", "lantern", "postcard", "riddle", "icicle", "carousel", "spectrum", "jellyfish", "tornado",
            "starlight", "lighthouse", "seashell", "treasure", "midnight", "firework", "meadow", "glacier", "catapult", "monsoon",
            "lullaby", "hedgehog", "balloon", "quilt", "boomerang", "rainbow", "fireplace", "pyramid", "kaleidoscope", "fountain",
            "avocado", "telescope", "waterfall", "dragonfly", "pendulum", "volcano", "mermaid", "carousel", "astronaut", "gondola",
            "snorkel", "blueprint", "hummingbird", "symphony", "orchestra", "parachute", "octopus", "scorpion", "sapphire", "sundial",
            "skateboard", "campfire", "whirlpool", "zeppelin", "butterscotch", "jackpot", "alley", "mystic", "flame", "bounce",
            "doodle", "cobweb", "hazel", "swift", "goblin", "waddle", "potion", "glimmer", "spindle", "chisel",
            "bramble", "thicket", "whittle", "shimmer", "tangle", "flourish", "snicker", "cascade", "twilight", "ember",
            "mariner", "yonder", "horizon", "ripple", "quiver", "cavern", "whisper", "flicker", "plume", "crackle",
            "rummage", "snuggle", "trickle", "pebble", "scurry", "whimsy", "frolic", "slumber", "glow", "swirl",
            "breeze", "dazzle", "fable", "glisten", "blizzard", "meadow", "cuddle", "tinker", "serenade", "quaint",
            "swindle", "flurry", "sizzle", "juggle", "bubbly", "clatter", "flick", "wobble", "grumble", "tumble",
            "flutter", "chatter", "squeak", "whiff", "crunch", "twinkle", "puddle", "dimple", "bellow", "snarl",
            "whack", "cobble", "spurt", "scuttle", "muddle", "cringe", "prickle", "wheeze", "fumble", "throb",
            "splatter", "squabble", "wrangle", "scramble", "dangle", "amble", "scamper", "slink", "skulk", "wiggle",
            "sputter", "snicker", "bustle", "shuffle", "scorch", "swoon", "scrunch", "grizzle", "chuckle", "clump",
            "cringe", "skid", "trudge", "yank", "crash", "splash", "zap", "plop", "zoom", "clap",
            "thump", "wham", "zing", "plunk", "quack", "pop", "boom", "honk", "whizz", "chomp",
            "gulp", "gasp", "hiccup", "burp", "chew", "nibble", "munch", "scoff", "slurp", "lick",
            "sniff", "whine", "growl", "bark", "howl", "hiss", "croak", "ribbit", "hoot", "chirp",
            "squawk", "cluck", "oink", "baa", "neigh", "buzz", "rustle", "creak", "crackle", "clang",
            "tinkle", "rattle", "whirl", "whoosh", "whip", "fizz", "drizzle", "downpour", "sprinkle", "drip",
            "splish", "splosh", "squelch", "clatter", "jangle", "titter", "guffaw", "snort", "giggle", "snicker",
            "smirk", "chortle", "gape", "blink", "wink", "squint", "stare", "peer", "ogle", "glance",
            "glimpse", "leer", "beam", "grin", "frown", "scowl", "pout", "grimace", "yawn", "sigh"
        ],
        quotes: [
            "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
            "In the middle of every difficulty lies opportunity. - Albert Einstein",
            "Do what you can, with what you have, where you are. - Theodore Roosevelt",
            "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
            "Happiness depends upon ourselves. - Aristotle",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "Turn your wounds into wisdom. - Oprah Winfrey",
            "It does not matter how slowly you go as long as you do not stop. - Confucius",
            "Do what you feel in your heart to be right – for you’ll be criticized anyway. - Eleanor Roosevelt",
            "Act as if what you do makes a difference. It does. - William James",
            "Opportunities don't happen. You create them. - Chris Grosser",
            "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
            "Success is how high you bounce when you hit bottom. - George S. Patton",
            "Don’t count the days, make the days count. - Muhammad Ali",
            "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
            "If you want to fly, give up everything that weighs you down. - Toni Morrison",
            "The best way to predict the future is to create it. - Peter Drucker",
            "Doubt kills more dreams than failure ever will. - Suzy Kassem",
            "You are enough just as you are. - Meghan Markle",
            "The secret of getting ahead is getting started. - Mark Twain",
            "Don’t let yesterday take up too much of today. - Will Rogers",
            "The way to get started is to quit talking and begin doing. - Walt Disney",
            "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
            "Everything you’ve ever wanted is on the other side of fear. - George Addair",
            "Dream big and dare to fail. - Norman Vaughan",
            "Do what you love and you’ll never work another day in your life. - Marc Anthony",
            "Quality is not an act, it is a habit. - Aristotle",
            "Nothing will work unless you do. - Maya Angelou",
            "It always seems impossible until it's done. - Nelson Mandela",
            "If opportunity doesn’t knock, build a door. - Milton Berle",
            "Difficulties strengthen the mind, as labor does the body. - Seneca",
            "We must let go of the life we have planned, so as to accept the one that is waiting for us. - Joseph Campbell",
            "Life is really simple, but we insist on making it complicated. - Confucius",
            "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
            "Courage is resistance to fear, mastery of fear – not absence of fear. - Mark Twain",
            "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
            "Don’t be pushed by your problems, be led by your dreams. - Ralph Waldo Emerson",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "If you can dream it, you can do it. - Walt Disney",
            "A journey of a thousand miles begins with a single step. - Lao Tzu",
            "You miss 100% of the shots you don’t take. - Wayne Gretzky",
            "Life isn’t about finding yourself. Life is about creating yourself. - George Bernard Shaw",
            "Everything you can imagine is real. - Pablo Picasso",
            "The only way to do great work is to love what you do. - Steve Jobs",
            "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
            "Tough times never last, but tough people do. - Robert H. Schuller",
            "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
            "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
            "He who has a why to live can bear almost any how. - Friedrich Nietzsche",
            "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
            "To handle yourself, use your head; to handle others, use your heart. - Eleanor Roosevelt",
            "The greatest wealth is to live content with little. - Plato",
            "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
            "Injustice anywhere is a threat to justice everywhere. - Martin Luther King Jr.",
            "If you tell the truth, you don’t have to remember anything. - Mark Twain",
            "One day, or day one. You decide. - Unknown",
            "Perseverance is not a long race; it is many short races one after another. - Walter Elliot",
            "A room without books is like a body without a soul. - Marcus Tullius Cicero",
            "Dwell on the beauty of life. Watch the stars, and see yourself running with them. - Marcus Aurelius",
            "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
            "Be yourself; everyone else is already taken. - Oscar Wilde",
            "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
            "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
            "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
            "Life is what happens when you’re busy making other plans. - John Lennon",
            "Do what you can, with what you have, where you are. - Theodore Roosevelt",
            "Well done is better than well said. - Benjamin Franklin",
            "Turn your wounds into wisdom. - Oprah Winfrey",
            "I have not failed. I’ve just found 10,000 ways that won’t work. - Thomas Edison",
            "Your big opportunity may be right where you are now. - Napoleon Hill",
            "Live in the sunshine, swim the sea, drink the wild air. - Ralph Waldo Emerson",
            "Don’t cry because it’s over, smile because it happened. - Dr. Seuss",
            "A mind is like a parachute. It doesn’t work if it isn’t open. - Frank Zappa"
        ]
        ,
        paragraphs: [
            "The technology industry continues to evolve at an unprecedented pace, bringing new innovations daily.",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            "In three words I can sum up everything I've learned about life: it goes on.",
            "Life is full of surprises. You never know what tomorrow holds.",
            "The sun sets, but it always rises again. New beginnings await.",
            "A small act of kindness can change someone’s whole day.",
            "Sometimes, the hardest decisions lead to the best outcomes.",
            "Growth happens when you step outside your comfort zone.",
            "The sound of rain can be oddly calming, like nature’s lullaby.",
            "Dream big, but take small steps every day toward your goal.",
            "Laughter is the best medicine. It makes everything lighter.",
            "Time spent with loved ones is never wasted.",
            "A good book can transport you to another world in seconds.",
            "Every challenge you overcome makes you stronger.",
            "The ocean’s waves remind us that life is full of ups and downs.",
            "A simple smile can brighten someone’s day in an instant.",
            "Music has a way of speaking when words fail.",
            "The best adventures often come unplanned and unexpected.",
            "Change is scary, but it’s often the key to something better.",
            "Courage isn’t the absence of fear, but acting despite it.",
            "Flowers bloom after the rain, just like we grow after hardship.",
            "Quiet moments can be just as powerful as loud ones.",
            "A deep breath can help reset your entire mindset.",
            "Sunrises remind us that each day is a fresh start.",
            "You don’t have to have all the answers. Just keep going.",
            "Creativity thrives when you let go of expectations.",
            "Sometimes, the smallest moments hold the greatest joy.",
            "Kind words can echo in a person’s heart for years.",
            "A single step forward is still progress.",
            "Rainy days make the sunny ones even more special.",
            "The stars shine brightest when the sky is darkest.",
            "Life is a journey, not a race. Enjoy the process.",
            "Happiness often comes from the simplest things.",
            "Nature has a way of making everything feel peaceful.",
            "Forgiveness is a gift you give yourself.",
            "The best stories are the ones we create ourselves.",
            "Success is built on persistence, not perfection.",
            "Every person you meet has a story worth hearing.",
            "True strength is found in kindness and patience.",
            "New experiences help us grow in unexpected ways.",
            "A fresh perspective can change everything.",
            "Believe in yourself. You are capable of great things.",
            "Memories are the treasures we carry through life.",
            "Sometimes, doing nothing is exactly what you need.",
            "A positive mindset can turn obstacles into opportunities.",
            "Love and laughter make life truly meaningful.",
            "Even the longest journey starts with a single step.",
            "Let go of what you can’t control and focus on what you can.",
            "Mistakes are just lessons in disguise.",
            "There’s beauty in simplicity and joy in little things.",
            "Be present. Life happens in the now.",
            "One kind action can start a ripple effect of goodness."
        ]
    }
};

const themes = {
    dark: {
        background: '#232323',
        text: '#e2b714',
        cursor: '#e2b714',
        incorrect: '#ca4754',
        correct: '#7ec699',
        quote: '#e2b714'
    },
    light: {
        background: '#ffffff',
        text: '#232323',
        cursor: '#232323',
        incorrect: '#ca4754',
        correct: '#7ec699',
        quote: '#232323'
    },
    matrix: {
        background: '#000000',
        text: '#00ff00',
        cursor: '#00ff00',
        incorrect: '#ff0000',
        correct: '#008000',
        quote: '#00ff00'
    }
};

const sounds = {
    keypress: new Audio('https://www.soundjay.com/button/button-09a.mp3'),
    error: new Audio('https://www.soundjay.com/button/button-10.mp3'),
    complete: new Audio('https://www.soundjay.com/button/button-17.mp3')
};

const elements = {
    wpm: document.getElementById('wpm'),
    accuracy: document.getElementById('accuracy'),
    timer: document.getElementById('timer'),
    textDisplay: document.getElementById('textDisplay'),
    userInput: document.getElementById('userInput'),
    startButton: document.getElementById('startButton'),
    progressBar: document.getElementById('progressBar'),
    themeSelect: document.getElementById('themeSelect'),
    timeLimitSelect: document.getElementById('timeLimitSelect'),
    difficultySelect: document.getElementById('difficultySelect'),
    modeSelect: document.getElementById('modeSelect'),
    wordCountSelect: document.getElementById('wordCountSelect'),
    languageSelect: document.getElementById('languageSelect'),
    caretStyleSelect: document.getElementById('caretStyleSelect'),
    soundToggle: document.getElementById('soundToggle'),
    confidenceModeToggle: document.getElementById('confidenceModeToggle'),
    loginForm: document.getElementById('loginForm'),
    navLinks: document.querySelectorAll('[data-page]'),
    pages: document.querySelectorAll('.page'),
    statistics: document.getElementById('statistics')
};

// Initialize
function init() {
    setupEventListeners();
    updateTheme(state.theme);
    loadStatistics();
}

// Event Listeners
function setupEventListeners() {
    elements.startButton.addEventListener('click', startTest);
    elements.userInput.addEventListener('input', handleInput);
    elements.themeSelect.addEventListener('change', (e) => updateTheme(e.target.value));
    elements.timeLimitSelect.addEventListener('change', (e) => state.timeLimit = parseInt(e.target.value));
    // elements.difficultySelect.addEventListener('change', (e) => state.difficulty = e.target.value);
    elements.modeSelect.addEventListener('change', (e) => state.mode = e.target.value);
    elements.wordCountSelect.addEventListener('change', (e) => state.wordCount = parseInt(e.target.value));
    elements.languageSelect.addEventListener('change', (e) => state.language = e.target.value);
    // elements.caretStyleSelect.addEventListener('change', (e) => updateCaretStyle(e.target.value));
    // elements.soundToggle.addEventListener('change', (e) => state.soundEnabled = e.target.checked);
    // elements.confidenceModeToggle.addEventListener('change', (e) => state.confidenceMode = e.target.checked);
    // elements.loginForm.addEventListener('submit', handleLogin);

    // Key Commands
}

// Theme Management
function updateTheme(theme) {
    state.theme = theme;
    document.body.setAttribute('data-bs-theme', theme);
    elements.themeSelect.value = theme;

    const colors = themes[theme];
    document.documentElement.style.setProperty('--theme-bg', colors.background);
    document.documentElement.style.setProperty('--theme-text', colors.text);
    document.documentElement.style.setProperty('--theme-cursor', colors.cursor);
    document.documentElement.style.setProperty('--theme-incorrect', colors.incorrect);
    document.documentElement.style.setProperty('--theme-correct', colors.correct);
    document.documentElement.style.setProperty('--theme-quote', colors.quote);
}

// Caret Style Management
function updateCaretStyle(style) {
    state.caretStyle = style;
    document.documentElement.style.setProperty('--caret-style', style);
}

// Statistics Management
function loadStatistics() {
    const savedStats = localStorage.getItem('typingStats');
    if (savedStats) {
        state.statistics = JSON.parse(savedStats);
        updateStatisticsDisplay();
    }
}

function updateStatistics() {
    state.statistics.testsCompleted++;
    state.statistics.totalTime += state.timeLimit - state.timer;

    if (state.wpm > state.statistics.highestWpm) {
        state.statistics.highestWpm = state.wpm;
    }

    const totalTests = state.statistics.testsCompleted;
    const newAverage = (state.statistics.averageWpm * (totalTests - 1) + state.wpm) / totalTests;
    state.statistics.averageWpm = Math.round(newAverage);

    localStorage.setItem('typingStats', JSON.stringify(state.statistics));
    updateStatisticsDisplay();
}

function updateStatisticsDisplay() {
    if (elements.statistics) {
        elements.statistics.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value">${state.statistics.highestWpm}</div>
                    <div class="stat-label">Highest WPM</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${state.statistics.averageWpm}</div>
                    <div class="stat-label">Average WPM</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${state.statistics.testsCompleted}</div>
                    <div class="stat-label">Tests Completed</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${Math.round(state.statistics.totalTime / 60)}</div>
                    <div class="stat-label">Total Time (min)</div>
                </div>
            </div>
        `;
    }
}

// Test Generation
function generateTest() {
    switch (state.mode) {
        case 'words':
            return generateWordTest();
        case 'paragraph':
            return generateParagraphTest();
        case 'quote':
            return generateQuoteTest();
        default:
            return generateWordTest();
    }
}

function generateWordTest() {
    const words = textSamples[state.language].words;
    const selectedWords = [];
    for (let i = 0; i < state.wordCount; i++) {
        selectedWords.push(words[Math.floor(Math.random() * words.length)]);
    }
    return selectedWords.join(' ');
}

function generateParagraphTest() {
    const paragraphs = textSamples[state.language].paragraphs;
    return paragraphs[Math.floor(Math.random() * paragraphs.length)];
}

function generateQuoteTest() {
    const quotes = textSamples[state.language].quotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Typing Test Logic
function startTest() {
    state.isActive = true;
    state.timer = state.timeLimit;
    state.text = generateTest();
    state.userInput = '';
    state.wpm = 0;
    state.accuracy = 100;

    elements.userInput.value = '';
    elements.userInput.disabled = false;
    elements.userInput.focus();
    elements.textDisplay.classList.add('active');

    updateDisplay();
    startTimer();

    elements.startButton.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Restart';
}

function restartTest() {
    if (state.isActive) {
        endTest();
    }
    startTest();
}

function handleInput(e) {
    if (!state.isActive) return;

    const input = e.target.value;
    console.log(input);

    state.userInput = input;



    // Play sound effects
    if (state.soundEnabled) {
        if (input.length > 0 && input[input.length - 1] === state.text[input.length - 1]) {
            sounds.keypress.currentTime = 0;
            sounds.keypress.play();
        } else if (input.length > 0) {
            sounds.error.currentTime = 0;
            sounds.error.play();
        }
    }

    updateStats();
    updateDisplay();

    // Check if test is complete
    if (state.mode === 'words' && input === state.text) {
        endTest();
        if (state.soundEnabled) {
            sounds.complete.play();
        }
    }
}

function updateStats() {
    const progress = (state.userInput.length / state.text.length) * 100;
    elements.progressBar.style.width = `${Math.min(progress, 100)}%`;
}

function updateDisplay() {
    elements.wpm.textContent = state.wpm;
    elements.accuracy.textContent = state.accuracy;
    elements.timer.textContent = state.timer;

    // Highlight text
    const display = [...state.text].map((char, i) => {
        if (!state.confidenceMode || i < state.userInput.length) {
            if (i < state.userInput.length) {
                return `<span class="${char === state.userInput[i] ? 'correct' : 'incorrect'}">${char}</span>`;
            } else if (i === state.userInput.length) {
                return `<span class="current">${char}</span>`;
            }
        }
        return char;
    }).join('');

    elements.textDisplay.innerHTML = display;
}

function startTimer() {
    const interval = setInterval(() => {
        if (elements.userInput.value.length >= elements.textDisplay.innerText.length) {
            clearInterval(interval);
            endTest();
        }
        else if (state.timer > 0 && state.isActive) {
            state.timer--;
            elements.timer.textContent = state.timer;
        } else {
            clearInterval(interval);
            endTest();
        }
    }, 1000);
}

function endTest() {
    state.isActive = false;
    elements.userInput.disabled = true;
    elements.textDisplay.classList.remove('active');
    elements.startButton.innerHTML = '<i class="bi bi-play-fill"></i> Start';
    let userInput = elements.userInput.value.split(' ');
    let originalText = elements.textDisplay.innerText.split(' ');
    let correctCount = 0;
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === originalText[i]) {
            correctCount++;
        }
    }
    console.log("*******************************************************************: " + correctCount);

    const words = correctCount;
    const minutes = (state.timeLimit - state.timer) / 60;
    console.log("*******************************************************************: " + minutes);

    state.wpm = Math.round(words / minutes) || 0;

    // Calculate Accuracy
    const correctChars = [...userInput].filter((char, i) => char === originalText[i]).length;
    state.accuracy = Math.round((correctChars / state.userInput.length) * 100) || 100;

    updateStatistics();

}

// Login Handler
function handleLogin(e) {
    e.preventDefault();
    state.isLoggedIn = true;
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    loadStatistics();
}

// Page Navigation
function changePage(pageId) {
    elements.pages.forEach(page => page.classList.remove('active'));
    elements.navLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(`${pageId}Page`).classList.add('active');
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
}

init();

function logout() {
    window.location.href = "login.html"
}

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "r") {
        event.preventDefault();
        restartTest();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        startTest();
    }
});
