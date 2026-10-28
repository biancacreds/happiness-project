// Happiness Project - Joke Database
// 72+ Curated Terrible Puns, Dad Jokes, and Playful Roasts

const JOKES_DATA = [
  // --- DAD JOKES ---
  {
    id: 1,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs.",
    author: "Senior Dev Dad",
    tags: ["tech", "classic", "groaner"]
  },
  {
    id: 2,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "I told my doctor that I broke my arm in two places.",
    punchline: "He told me to stop going to those places.",
    author: "Dr. Dad",
    tags: ["medical", "boomer-humor"]
  },
  {
    id: 3,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field.",
    author: "Farmer Joe Dad",
    tags: ["crops", "classic"]
  },
  {
    id: 4,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "What do you call a factory that makes okay products?",
    punchline: "A satisfactory.",
    author: "Corporate Dad",
    tags: ["business", "dry"]
  },
  {
    id: 5,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "I only know 25 letters of the alphabet...",
    punchline: "I don't know Y.",
    author: "Spelling Bee Dad",
    tags: ["alphabet", "wordplay"]
  },
  {
    id: 6,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "What did the ocean say to the beach?",
    punchline: "Nothing, it just waved.",
    author: "Lifeguard Dad",
    tags: ["nature", "chill"]
  },
  {
    id: 7,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Why can't a bicycle stand up on its own?",
    punchline: "Because it's two-tired.",
    author: "Cyclist Dad",
    tags: ["wheels", "exhaustion"]
  },
  {
    id: 8,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "My wife told me to stop impersonating a flamingo.",
    punchline: "I had to put my foot down.",
    author: "Zoo Dad",
    tags: ["animals", "marriage"]
  },
  {
    id: 9,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "How do you organize a space party?",
    punchline: "You planet.",
    author: "NASA Dad",
    tags: ["space", "party"]
  },
  {
    id: 10,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Why did the invisible man turn down the job offer?",
    punchline: "He couldn't see himself doing it.",
    author: "Hiring Manager Dad",
    tags: ["work", "stealth"]
  },
  {
    id: 11,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "What do you call fake spaghetti?",
    punchline: "An impasta.",
    author: "Italian Chef Dad",
    tags: ["food", "crime"]
  },
  {
    id: 12,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Why do bees have sticky hair?",
    punchline: "Because they use honeycombs.",
    author: "Beekeeper Dad",
    tags: ["bugs", "grooming"]
  },
  {
    id: 13,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "I'm reading a book on anti-gravity right now.",
    punchline: "It's literally impossible to put down.",
    author: "Physics Teacher Dad",
    tags: ["science", "reading"]
  },
  {
    id: 14,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "What did one wall say to the other wall?",
    punchline: "I'll meet you at the corner.",
    author: "Architect Dad",
    tags: ["houses", "geometry"]
  },
  {
    id: 15,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Did you hear about the guy who invented the knock-knock joke?",
    punchline: "He won the 'no-bell' prize.",
    author: "Inventor Dad",
    tags: ["prizes", "meta"]
  },
  {
    id: 16,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Why don't skeletons fight each other?",
    punchline: "They don't have the guts.",
    author: "Spooky Dad",
    tags: ["halloween", "anatomy"]
  },
  {
    id: 17,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "I refuse to buy anything with velcro on it.",
    punchline: "It's a total rip-off.",
    author: "Shopper Dad",
    tags: ["fashion", "scam"]
  },
  {
    id: 18,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "What kind of shoes do secret agents wear?",
    punchline: "Sneakers.",
    author: "Double-O-Dad",
    tags: ["spy", "footwear"]
  },
  {
    id: 19,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Why did the tomato blush?",
    punchline: "Because it saw the salad dressing.",
    author: "Vegetable Dad",
    tags: ["culinary", "embarrassing"]
  },
  {
    id: 20,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "How does a penguin build its house?",
    punchline: "Igloos it together.",
    author: "Antarctic Dad",
    tags: ["diy", "birds"]
  },
  {
    id: 21,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "What do you call a cheese that isn't yours?",
    punchline: "Nacho cheese.",
    author: "Taco Tuesday Dad",
    tags: ["snacks", "property"]
  },
  {
    id: 22,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Why do mushrooms get invited to all the coolest parties?",
    punchline: "Because they're a fungi.",
    author: "Botanist Dad",
    tags: ["party", "nature"]
  },
  {
    id: 23,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "Did you hear about the cheese factory explosion in France?",
    punchline: "There was nothing left but de-brie.",
    author: "Gourmet Dad",
    tags: ["france", "disaster"]
  },
  {
    id: 24,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "What do you call a sleeping dinosaur?",
    punchline: "A dino-snore.",
    author: "Paleontologist Dad",
    tags: ["jurassic", "sleep"]
  },
  {
    id: 25,
    category: "dad",
    categoryLabel: "Dad Joke 👴",
    setup: "I used to play piano by ear...",
    punchline: "Now I use my hands like a normal human being.",
    author: "Musical Dad",
    tags: ["music", "anti-joke"]
  },

  // --- SILLY PUNS ---
  {
    id: 26,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Have you heard about the corduroy pillow?",
    punchline: "It's making headlines everywhere.",
    author: "The Punster",
    tags: ["furniture", "news"]
  },
  {
    id: 27,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear.",
    author: "Candy Connoisseur",
    tags: ["sweets", "animals"]
  },
  {
    id: 28,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why did the coffee file a police report?",
    punchline: "It got mugged right on Main Street.",
    author: "Caffeine Gremlin",
    tags: ["coffee", "crime"]
  },
  {
    id: 29,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What do you call an alligator wearing a trench coat and sunglasses?",
    punchline: "An investigator.",
    author: "Reptile Detective",
    tags: ["animals", "mystery"]
  },
  {
    id: 30,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why are elevator jokes so timeless?",
    punchline: "Because they work on so many levels.",
    author: "Building Inspector",
    tags: ["architecture", "levels"]
  },
  {
    id: 31,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What do you call a giant pile of sleeping cats?",
    punchline: "A meowtain.",
    author: "Cat Lady at 2AM",
    tags: ["cats", "nature"]
  },
  {
    id: 32,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why did the golfer pack two pairs of pants?",
    punchline: "In case he got a hole in one.",
    author: "The Caddy",
    tags: ["sports", "clothing"]
  },
  {
    id: 33,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "I tried telling a chemistry joke to my friends yesterday...",
    punchline: "There was absolutely zero reaction.",
    author: "Mad Scientist",
    tags: ["chemistry", "science"]
  },
  {
    id: 34,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What did the grape do when somebody stepped on it?",
    punchline: "It just let out a little wine.",
    author: "Sommelier Bob",
    tags: ["fruit", "drama"]
  },
  {
    id: 35,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why did the math textbook look so completely miserable?",
    punchline: "It had way too many problems to solve on its own.",
    author: "Algebra Survivor",
    tags: ["school", "mental-health"]
  },
  {
    id: 36,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What do you call a fish with no eyes?",
    punchline: "A fsh.",
    author: "Sea Explorer",
    tags: ["spelling", "ocean"]
  },
  {
    id: 37,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why are tree frogs always in such great spirits?",
    punchline: "Because they eat whatever bugs them.",
    author: "Forest Ranger",
    tags: ["therapy", "insects"]
  },
  {
    id: 38,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What kind of tea is notoriously hard to swallow?",
    punchline: "Reali-tea.",
    author: "Philosopher Tea Drinker",
    tags: ["existential", "beverage"]
  },
  {
    id: 39,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "I was wondering why the frisbee kept looking bigger and bigger...",
    punchline: "And then it hit me.",
    author: "Park Concussion Patient",
    tags: ["sports", "impact"]
  },
  {
    id: 40,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What do you call a bumblebee that cannot make up its mind?",
    punchline: "A maybee.",
    author: "Indecisive Bee",
    tags: ["bugs", "anxiety"]
  },
  {
    id: 41,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why did the melon jump straight into the swimming pool?",
    punchline: "It always dreamed of becoming a water-melon.",
    author: "Fruit Dreamer",
    tags: ["summer", "goals"]
  },
  {
    id: 42,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What do you call an unpredictable photographer's device?",
    punchline: "A loose cannon.",
    author: "Vintage Camera Guy",
    tags: ["photography", "danger"]
  },
  {
    id: 43,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why did the chocolate chip cookie rush to the ER?",
    punchline: "Because it was feeling terribly crummy.",
    author: "Bakery Nurse",
    tags: ["dessert", "health"]
  },
  {
    id: 44,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What do you call a golden retriever that practices witchcraft?",
    punchline: "A Labracadabrador.",
    author: "Hogwarts Canine Dept",
    tags: ["dogs", "magic"]
  },
  {
    id: 45,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why should you never, ever trust a staircase?",
    punchline: "Because they are always up to something.",
    author: "Elevator Fanatic",
    tags: ["paranoia", "steps"]
  },
  {
    id: 46,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What happens when you cross a snowman with a hungry vampire?",
    punchline: "You get severe frostbite.",
    author: "Winter Monster",
    tags: ["winter", "monsters"]
  },
  {
    id: 47,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "Why did the ripe banana go see a physician?",
    punchline: "It just wasn't peeling very well.",
    author: "Fruit Clinic",
    tags: ["fruit", "doctors"]
  },
  {
    id: 48,
    category: "pun",
    categoryLabel: "Silly Pun 🥐",
    setup: "What do you call a belt made entirely out of wristwatches?",
    punchline: "A massive waist of time.",
    author: "Clockmaker",
    tags: ["accessories", "time"]
  },

  // --- ROAST ME (PLAYFUL / RELATABLE GEN Z & INTERNET ROASTS) ---
  {
    id: 49,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You're definitely not lazy...",
    punchline: "You're just in extreme energy-saving mode. For the past 4 consecutive years.",
    author: "Your Battery Indicator",
    tags: ["lifestyle", "relatable"]
  },
  {
    id: 50,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "I would love to roast you right now, but...",
    punchline: "My mom always taught me never to burn trash.",
    author: "The Schoolyard Menace",
    tags: ["savage", "classic"]
  },
  {
    id: 51,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "Your attention span is so microscopic...",
    punchline: "You probably forgot why you clicked this button three seconds ago.",
    author: "TikTok Algorithm",
    tags: ["brainrot", "attention"]
  },
  {
    id: 52,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "Excuse me, you have something stuck on your chin.",
    punchline: "No, not that one... the third chin down.",
    author: "Front Camera Selfie",
    tags: ["appearance", "ouch"]
  },
  {
    id: 53,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "I would happily explain this to you...",
    punchline: "Unfortunately, I ran out of crayons and emotional bandwidth.",
    author: "Tired Coworker",
    tags: ["workplace", "patience"]
  },
  {
    id: 54,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You remind me so much of a rain cloud.",
    punchline: "Whenever you finally leave, the day suddenly becomes bright and sunny.",
    author: "The Weather Channel",
    tags: ["vibe-check", "shady"]
  },
  {
    id: 55,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "Remember when you promised you'd get your life together this Monday?",
    punchline: "Which Monday was that again? It's been 87 Mondays.",
    author: "Your Forgotten Google Calendar",
    tags: ["procrastination", "guilt"]
  },
  {
    id: 56,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "They say laughter is the best medicine in the world...",
    punchline: "If that's true, your face is currently curing terminal diseases everywhere.",
    author: "Chief Medical Officer",
    tags: ["looks", "burn"]
  },
  {
    id: 57,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You bring an unbelievable amount of joy into every single room...",
    punchline: "The exact moment you walk out of it.",
    author: "The Party Host",
    tags: ["social", "brutal"]
  },
  {
    id: 58,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You have an entire digital graveyard of 142 open browser tabs...",
    punchline: "And deep down, you still delusionally believe you're gonna read that 2021 tab.",
    author: "Google Chrome RAM Monitor",
    tags: ["tech", "adhd"]
  },
  {
    id: 59,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You possess the unearned confidence of a mediocre podcast host...",
    punchline: "With a $25 Amazon microphone and literally zero listeners.",
    author: "Spotify Weekly",
    tags: ["creators", "cringe"]
  },
  {
    id: 60,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "Astronomers recently discovered that the universe is constantly expanding...",
    punchline: "Mostly to get as far away as possible from your weekly screen time report.",
    author: "James Webb Telescope",
    tags: ["screentime", "astronomy"]
  },
  {
    id: 61,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "Your greatest secret talent is buying expensive self-help books...",
    punchline: "And using them exclusively as aesthetic coasters for cold brews.",
    author: "Unread Bookshelf",
    tags: ["money", "habits"]
  },
  {
    id: 62,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You're really not that clumsy at all.",
    punchline: "The floor just seems to aggressively demand a hug every twenty minutes.",
    author: "Gravity Itself",
    tags: ["clumsy", "physics"]
  },
  {
    id: 63,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You really put the 'pro' in...",
    punchline: "Procrastinating until 3:45 AM while staring blankly at ceiling fan blades.",
    author: "The Unfinished Essay",
    tags: ["night-owl", "panic"]
  },
  {
    id: 64,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You claim you hate drama and avoid conflict at all costs...",
    punchline: "Yet you just spent 47 uninterrupted minutes reading stranger fights on Reddit.",
    author: "Reddit Lurker",
    tags: ["hypocrite", "tea"]
  },
  {
    id: 65,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "If overthinking actually burned calories...",
    punchline: "You would have evaporated into a fine mist three years ago.",
    author: "Your Anxious Braincell",
    tags: ["overthinking", "fitness"]
  },
  {
    id: 66,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You have 19 separate alarms set between 6:30 AM and 7:15 AM...",
    punchline: "And you still woke up in a cold sweat at 9:42 AM looking like a haunted Victorian doll.",
    author: "The Snooze Button",
    tags: ["morning", "sleep"]
  },
  {
    id: 67,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "Don't worry about being replaced by artificial intelligence.",
    punchline: "Even the most advanced neural network refused to replicate your sleep schedule.",
    author: "Sentient Supercomputer",
    tags: ["ai", "sleep"]
  },
  {
    id: 68,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You're not financially broke, okay?",
    punchline: "You're just being ruthlessly held hostage by your daily $9 iced emotional support matcha.",
    author: "Your Bank Statement",
    tags: ["finances", "coffee"]
  },
  {
    id: 69,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "Your Spotify playlist goes from 2000s rap to crying-on-the-kitchen-floor indie in 2 seconds...",
    punchline: "Your therapist is genuinely working overtime just to comprehend your vibe.",
    author: "The Therapist",
    tags: ["music", "chaos"]
  },
  {
    id: 70,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "Your posture right this second resembles a boiled shrimp.",
    punchline: "Go on, straighten your spine. We both know you just felt called out.",
    author: "Your Lumbar Spine",
    tags: ["posture", "shrimp"]
  },
  {
    id: 71,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You're basically the human equivalent of a software update notice.",
    punchline: "Everyone immediately hits 'Remind me tomorrow' whenever you show up.",
    author: "Windows Update",
    tags: ["tech", "burn"]
  },
  {
    id: 72,
    category: "roast",
    categoryLabel: "Roast Me 🔥",
    setup: "You told yourself you'd watch 'just one more episode'...",
    punchline: "The birds are chirping, the sun is rising, and your dog looks disappointed in your choices.",
    author: "Netflix Autoplay",
    tags: ["binge", "regret"]
  }
];

// Helper to get jokes by category
function getJokesByCategory(category = "all") {
  if (category === "all") return JOKES_DATA;
  return JOKES_DATA.filter(joke => joke.category === category);
}

// Daily Joke logic (deterministic based on calendar date)
function getJokeOfTheDay() {
  const today = new Date();
  // Simple seed from year, month, date
  const seed = today.getFullYear() * 1000 + (today.getMonth() + 1) * 31 + today.getDate();
  const index = seed % JOKES_DATA.length;
  return JOKES_DATA[index];
}
