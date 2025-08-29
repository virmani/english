// Vowel Teams Spelling App
class SpellingApp {
    constructor() {
        this.currentSection = 'concept';
        this.currentActivity = 'spelling';
        this.currentLevel = 1; // 1 = easy, 2 = hard
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 10;
        
        // Level-based word organization
        this.easyWords = [
            // LEVEL 1: EASY WORDS (3-5 letters, common words)
            
            // ai words
            { word: 'rain', hint: 'Water that falls from clouds ☔', vowelTeam: 'ai', sound: '/ā/', level: 1 },
            { word: 'mail', hint: 'Letters you get in the mailbox 📬', vowelTeam: 'ai', sound: '/ā/', level: 1 },
            { word: 'pain', hint: 'When something hurts 🤕', vowelTeam: 'ai', sound: '/ā/', level: 1 },
            { word: 'nail', hint: 'What you hammer into wood 🔨', vowelTeam: 'ai', sound: '/ā/', level: 1 },
            
            // ay words
            { word: 'play', hint: 'What you do at recess! 🎮', vowelTeam: 'ay', sound: '/ā/', level: 1 },
            { word: 'day', hint: 'Opposite of night ☀️', vowelTeam: 'ay', sound: '/ā/', level: 1 },
            { word: 'say', hint: 'To speak words 💬', vowelTeam: 'ay', sound: '/ā/', level: 1 },
            { word: 'way', hint: 'A path or direction ➡️', vowelTeam: 'ay', sound: '/ā/', level: 1 },
            
            // ee words
            { word: 'tree', hint: 'Tall green plant 🌳', vowelTeam: 'ee', sound: '/ē/', level: 1 },
            { word: 'free', hint: 'Costs nothing! 🆓', vowelTeam: 'ee', sound: '/ē/', level: 1 },
            { word: 'see', hint: 'To look at something 👁️', vowelTeam: 'ee', sound: '/ē/', level: 1 },
            { word: 'bee', hint: 'Insect that makes honey 🐝', vowelTeam: 'ee', sound: '/ē/', level: 1 },
            
            // ea words
            { word: 'sea', hint: 'Large body of water 🌊', vowelTeam: 'ea', sound: '/ē/', level: 1 },
            { word: 'tea', hint: 'Hot drink 🍵', vowelTeam: 'ea', sound: '/ē/', level: 1 },
            { word: 'eat', hint: 'To have food 🍎', vowelTeam: 'ea', sound: '/ē/', level: 1 },
            { word: 'meat', hint: 'Food from animals 🥩', vowelTeam: 'ea', sound: '/ē/', level: 1 },
            
            // ey words
            { word: 'key', hint: 'Opens locks 🗝️', vowelTeam: 'ey', sound: '/ē/', level: 1 },
            { word: 'grey', hint: 'Color between black and white', vowelTeam: 'ey', sound: '/ē/', level: 1 },
            
            // oi words
            { word: 'coin', hint: 'Round money 🪙', vowelTeam: 'oi', sound: '/oi/', level: 1 },
            { word: 'boil', hint: 'When water bubbles 💧', vowelTeam: 'oi', sound: '/oi/', level: 1 },
            { word: 'soil', hint: 'Dirt for plants 🌱', vowelTeam: 'oi', sound: '/oi/', level: 1 },
            { word: 'oil', hint: 'Liquid for cooking 🫒', vowelTeam: 'oi', sound: '/oi/', level: 1 },
            
            // oy words
            { word: 'toy', hint: 'Something fun to play with 🧸', vowelTeam: 'oy', sound: '/oi/', level: 1 },
            { word: 'boy', hint: 'A young male person 👦', vowelTeam: 'oy', sound: '/oi/', level: 1 },
            { word: 'joy', hint: 'Feeling very happy 😊', vowelTeam: 'oy', sound: '/oi/', level: 1 },
            
            // oa words
            { word: 'boat', hint: 'Floats on water ⛵', vowelTeam: 'oa', sound: '/ō/', level: 1 },
            { word: 'coat', hint: 'Keeps you warm 🧥', vowelTeam: 'oa', sound: '/ō/', level: 1 },
            { word: 'goat', hint: 'Farm animal that says "baa" 🐐', vowelTeam: 'oa', sound: '/ō/', level: 1 },
            { word: 'soap', hint: 'Cleans your hands 🧼', vowelTeam: 'oa', sound: '/ō/', level: 1 },
            
            // oe words
            { word: 'toe', hint: 'Part of your foot 🦶', vowelTeam: 'oe', sound: '/ō/', level: 1 },
            { word: 'hoe', hint: 'Garden tool 🪓', vowelTeam: 'oe', sound: '/ō/', level: 1 },
            
            // ow words (long o)
            { word: 'snow', hint: 'White and cold! ❄️', vowelTeam: 'ow', sound: '/ō/', level: 1 },
            { word: 'show', hint: 'What you watch on TV 📺', vowelTeam: 'ow', sound: '/ō/', level: 1 },
            { word: 'grow', hint: 'Get bigger 📈', vowelTeam: 'ow', sound: '/ō/', level: 1 },
            { word: 'glow', hint: 'Shine with light ✨', vowelTeam: 'ow', sound: '/ō/', level: 1 },
            
            // ou words
            { word: 'out', hint: 'Not inside 🚪', vowelTeam: 'ou', sound: '/ow/', level: 1 },
            { word: 'loud', hint: 'Very noisy 🔊', vowelTeam: 'ou', sound: '/ow/', level: 1 },
            { word: 'about', hint: 'Concerning or around', vowelTeam: 'ou', sound: '/ow/', level: 1 },
            
            // ow words (ow sound)
            { word: 'cow', hint: 'Farm animal that moos 🐄', vowelTeam: 'ow', sound: '/ow/', level: 1 },
            { word: 'how', hint: 'A question word ❓', vowelTeam: 'ow', sound: '/ow/', level: 1 },
            { word: 'now', hint: 'This moment ⏰', vowelTeam: 'ow', sound: '/ow/', level: 1 },
            
            // oo words
            { word: 'moon', hint: 'Shines at night 🌙', vowelTeam: 'oo', sound: '/ū/', level: 1 },
            { word: 'soon', hint: 'In a little while ⏰', vowelTeam: 'oo', sound: '/ū/', level: 1 },
            { word: 'room', hint: 'Space in a house 🏠', vowelTeam: 'oo', sound: '/ū/', level: 1 },
            { word: 'food', hint: 'What you eat 🍎', vowelTeam: 'oo', sound: '/ū/', level: 1 },
            
            // ue words
            { word: 'blue', hint: 'Color of the sky 💙', vowelTeam: 'ue', sound: '/ū/', level: 1 },
            { word: 'glue', hint: 'Makes things stick together', vowelTeam: 'ue', sound: '/ū/', level: 1 },
            { word: 'true', hint: 'Not false ✅', vowelTeam: 'ue', sound: '/ū/', level: 1 },
            
            // ew words
            { word: 'new', hint: 'Not old ✨', vowelTeam: 'ew', sound: '/ū/', level: 1 },
            { word: 'few', hint: 'Not many', vowelTeam: 'ew', sound: '/ū/', level: 1 },
            { word: 'dew', hint: 'Water drops in morning 💧', vowelTeam: 'ew', sound: '/ū/', level: 1 },
            
            // au words
            { word: 'cause', hint: 'The reason why 🤔', vowelTeam: 'au', sound: '/aw/', level: 1 },
            
            // aw words
            { word: 'claw', hint: 'Sharp nail on animals 🐾', vowelTeam: 'aw', sound: '/aw/', level: 1 },
            { word: 'draw', hint: 'Make pictures ✏️', vowelTeam: 'aw', sound: '/aw/', level: 1 },
            { word: 'saw', hint: 'Tool to cut wood 🪚', vowelTeam: 'aw', sound: '/aw/', level: 1 },
            
            // o_e words
            { word: 'home', hint: 'Where you live 🏠', vowelTeam: 'o_e', sound: '/ō/', level: 1 },
            { word: 'bone', hint: 'Hard part inside your body 🦴', vowelTeam: 'o_e', sound: '/ō/', level: 1 },
            { word: 'hope', hint: 'To wish for something good 🤞', vowelTeam: 'o_e', sound: '/ō/', level: 1 },
            { word: 'note', hint: 'Short written message 📝', vowelTeam: 'o_e', sound: '/ō/', level: 1 }
        ];
        
        this.hardWords = [
            // LEVEL 2: HARD WORDS (6+ letters, complex words)
            
            // ai words
            { word: 'train', hint: 'Choo choo! 🚂', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            { word: 'remain', hint: 'To stay or continue ⏳', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            { word: 'explain', hint: 'To make something clear 💭', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            { word: 'certain', hint: 'Sure or definite ✅', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            { word: 'curtain', hint: 'Cloth that hangs in windows 🪟', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            { word: 'arcade', hint: 'Place with video games 🕹️', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            { word: 'captain', hint: 'Leader of a ship or team ⚓', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            { word: 'contain', hint: 'To hold inside 📦', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            { word: 'raisin', hint: 'Dried grape 🍇', vowelTeam: 'ai', sound: '/ā/', level: 2 },
            
            // ay words
            { word: 'holiday', hint: 'Special day for celebration 🎉', vowelTeam: 'ay', sound: '/ā/', level: 2 },
            { word: 'birthday', hint: 'The day you were born 🎂', vowelTeam: 'ay', sound: '/ā/', level: 2 },
            { word: 'highway', hint: 'Big road for cars 🛣️', vowelTeam: 'ay', sound: '/ā/', level: 2 },
            { word: 'subway', hint: 'Underground train 🚇', vowelTeam: 'ay', sound: '/ā/', level: 2 },
            
            // ee words
            { word: 'green', hint: 'Color of grass 💚', vowelTeam: 'ee', sound: '/ē/', level: 2 },
            { word: 'three', hint: 'Number after two ③', vowelTeam: 'ee', sound: '/ē/', level: 2 },
            { word: 'thirteen', hint: 'Number after twelve 1️⃣3️⃣', vowelTeam: 'ee', sound: '/ē/', level: 2 },
            { word: 'fifteen', hint: 'Number after fourteen 1️⃣5️⃣', vowelTeam: 'ee', sound: '/ē/', level: 2 },
            { word: 'seventeen', hint: 'Number after sixteen 1️⃣7️⃣', vowelTeam: 'ee', sound: '/ē/', level: 2 },
            { word: 'between', hint: 'In the middle of two things ↔️', vowelTeam: 'ee', sound: '/ē/', level: 2 },
            
            // ea words
            { word: 'beach', hint: 'Sandy place by the ocean 🏖️', vowelTeam: 'ea', sound: '/ē/', level: 2 },
            { word: 'read', hint: 'What you do with books 📚', vowelTeam: 'ea', sound: '/ē/', level: 2 },
            { word: 'seat', hint: 'Where you sit 💺', vowelTeam: 'ea', sound: '/ē/', level: 2 },
            { word: 'reason', hint: 'Why something happens 🤔', vowelTeam: 'ea', sound: '/ē/', level: 2 },
            { word: 'season', hint: 'Spring, summer, fall, winter 🍂', vowelTeam: 'ea', sound: '/ē/', level: 2 },
            { word: 'treasure', hint: 'Valuable things like gold 💰', vowelTeam: 'ea', sound: '/ē/', level: 2 },
            { word: 'creature', hint: 'A living being 🐾', vowelTeam: 'ea', sound: '/ē/', level: 2 },
            
            // ey words
            { word: 'money', hint: 'What you use to buy things 💰', vowelTeam: 'ey', sound: '/ē/', level: 2 },
            { word: 'honey', hint: 'Sweet from bees 🍯', vowelTeam: 'ey', sound: '/ē/', level: 2 },
            { word: 'turkey', hint: 'Big bird for Thanksgiving 🦃', vowelTeam: 'ey', sound: '/ē/', level: 2 },
            { word: 'hockey', hint: 'Sport played on ice 🏒', vowelTeam: 'ey', sound: '/ē/', level: 2 },
            { word: 'donkey', hint: 'Animal like a small horse 🫏', vowelTeam: 'ey', sound: '/ē/', level: 2 },
            { word: 'monkey', hint: 'Animal that swings in trees 🐵', vowelTeam: 'ey', sound: '/ē/', level: 2 },
            { word: 'chimney', hint: 'Tall thing on roof for smoke 🏠', vowelTeam: 'ey', sound: '/ē/', level: 2 },
            
            // oy words
            { word: 'enjoy', hint: 'To like something a lot ❤️', vowelTeam: 'oy', sound: '/oi/', level: 2 },
            
            // oa words
            { word: 'approach', hint: 'To come closer 👣', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'cockroach', hint: 'Brown bug 🪳', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'charcoal', hint: 'Black stuff for grilling 🔥', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'toaster', hint: 'Machine that browns bread 🍞', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'coasting', hint: 'Moving without pedaling 🚲', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'coach', hint: 'Person who teaches sports 🏃', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'cocoa', hint: 'Hot chocolate drink ☕', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'throat', hint: 'Part of neck for swallowing 🗣️', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'cardboard', hint: 'Thick paper for boxes 📦', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'coal', hint: 'Black rock that burns ⚫', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'photograph', hint: 'Picture taken with camera 📷', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            { word: 'roadblock', hint: 'Something blocking the road 🚧', vowelTeam: 'oa', sound: '/ō/', level: 2 },
            
            // oe words
            { word: 'tiptoe', hint: 'Walking on your toes quietly 🤫', vowelTeam: 'oe', sound: '/ō/', level: 2 },
            { word: 'dominoe', hint: 'Game piece with dots 🎯', vowelTeam: 'oe', sound: '/ō/', level: 2 },
            { word: 'microscope', hint: 'Tool to see tiny things 🔬', vowelTeam: 'oe', sound: '/ō/', level: 2 },
            { word: 'rodent', hint: 'Small animal like mouse or rat 🐭', vowelTeam: 'oe', sound: '/ō/', level: 2 },
            
            // ow words (long o)
            { word: 'follow', hint: 'To go after someone 👥', vowelTeam: 'ow', sound: '/ō/', level: 2 },
            { word: 'window', hint: 'Glass opening in wall 🪟', vowelTeam: 'ow', sound: '/ō/', level: 2 },
            { word: 'rainbow', hint: 'Colorful arc in sky 🌈', vowelTeam: 'ow', sound: '/ō/', level: 2 },
            { word: 'shadow', hint: 'Dark shape made by blocking light 👤', vowelTeam: 'ow', sound: '/ō/', level: 2 },
            { word: 'throw', hint: 'Toss a ball ⚾', vowelTeam: 'ow', sound: '/ō/', level: 2 },
            
            // ou words
            { word: 'mouse', hint: 'Small animal that squeaks 🐭', vowelTeam: 'ou', sound: '/ow/', level: 2 },
            { word: 'house', hint: 'Where you live 🏠', vowelTeam: 'ou', sound: '/ow/', level: 2 },
            { word: 'sound', hint: 'What you hear 👂', vowelTeam: 'ou', sound: '/ow/', level: 2 },
            { word: 'found', hint: 'Past tense of find 🔍', vowelTeam: 'ou', sound: '/ow/', level: 2 },
            { word: 'around', hint: 'In a circle or nearby 🔄', vowelTeam: 'ou', sound: '/ow/', level: 2 },
            { word: 'mountain', hint: 'Very tall hill 🏔️', vowelTeam: 'ou', sound: '/ow/', level: 2 },
            { word: 'fountain', hint: 'Water shooting up ⛲', vowelTeam: 'ou', sound: '/ow/', level: 2 },
            { word: 'counter', hint: 'Kitchen surface for cooking 🍳', vowelTeam: 'ou', sound: '/ow/', level: 2 },
            
            // ow words (ow sound)
            { word: 'brown', hint: 'Color of chocolate 🤎', vowelTeam: 'ow', sound: '/ow/', level: 2 },
            
            // oo words
            { word: 'balloon', hint: 'Inflated rubber toy 🎈', vowelTeam: 'oo', sound: '/ū/', level: 2 },
            { word: 'cartoon', hint: 'Funny animated show 📺', vowelTeam: 'oo', sound: '/ū/', level: 2 },
            { word: 'raccoon', hint: 'Masked animal 🦝', vowelTeam: 'oo', sound: '/ū/', level: 2 },
            { word: 'bedroom', hint: 'Room where you sleep 🛏️', vowelTeam: 'oo', sound: '/ū/', level: 2 },
            { word: 'mushroom', hint: 'Fungus that grows in dirt 🍄', vowelTeam: 'oo', sound: '/ū/', level: 2 },
            
            // ue words
            { word: 'clue', hint: 'Helps solve a mystery 🕵️', vowelTeam: 'ue', sound: '/ū/', level: 2 },
            
            // ew words
            { word: 'flew', hint: 'Past tense of fly ✈️', vowelTeam: 'ew', sound: '/ū/', level: 2 },
            { word: 'grew', hint: 'Past tense of grow 🌱', vowelTeam: 'ew', sound: '/ū/', level: 2 },
            { word: 'drew', hint: 'Past tense of draw ✏️', vowelTeam: 'ew', sound: '/ū/', level: 2 },
            
            // au words
            { word: 'pause', hint: 'To stop for a moment ⏸️', vowelTeam: 'au', sound: '/aw/', level: 2 },
            { word: 'sauce', hint: 'Liquid for food 🍅', vowelTeam: 'au', sound: '/aw/', level: 2 },
            { word: 'haunt', hint: 'What ghosts do 👻', vowelTeam: 'au', sound: '/aw/', level: 2 },
            { word: 'applaud', hint: 'To clap your hands 👏', vowelTeam: 'au', sound: '/aw/', level: 2 },
            { word: 'dinosaur', hint: 'Giant extinct reptile 🦕', vowelTeam: 'au', sound: '/aw/', level: 2 },
            { word: 'restaurant', hint: 'Place to eat meals 🍽️', vowelTeam: 'au', sound: '/aw/', level: 2 },
            { word: 'astronaut', hint: 'Person who goes to space 🚀', vowelTeam: 'au', sound: '/aw/', level: 2 },
            
            // aw words
            { word: 'straw', hint: 'For drinking 🥤', vowelTeam: 'aw', sound: '/aw/', level: 2 },
            { word: 'awesome', hint: 'Really great or cool 😎', vowelTeam: 'aw', sound: '/aw/', level: 2 },
            { word: 'strawberry', hint: 'Red berry with seeds 🍓', vowelTeam: 'aw', sound: '/aw/', level: 2 },
            { word: 'crawfish', hint: 'Small lobster-like creature 🦐', vowelTeam: 'aw', sound: '/aw/', level: 2 },
            
            // o_e words
            { word: 'phone', hint: 'Device for talking to people 📱', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'stone', hint: 'Hard rock 🪨', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'rope', hint: 'Thick string for climbing 🪢', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'joke', hint: 'Something funny to make people laugh 😂', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'smoke', hint: 'Gray clouds from fire 💨', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'vote', hint: 'To choose in an election 🗳️', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'globe', hint: 'Round model of Earth 🌍', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'froze', hint: 'Past tense of freeze ❄️', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'stove', hint: 'Appliance for cooking 🔥', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'envelope', hint: 'Paper cover for letters ✉️', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'telescope', hint: 'Tool for looking at stars 🔭', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            { word: 'antelope', hint: 'Fast running animal 🦌', vowelTeam: 'o_e', sound: '/ō/', level: 2 },
            
            // ion words (-tion suffix)
            { word: 'action', hint: 'Something you do 🏃', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'nation', hint: 'A country 🏳️', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'station', hint: 'Place where trains stop 🚉', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'motion', hint: 'Movement 🌊', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'potion', hint: 'Magic liquid 🧪', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'lotion', hint: 'Cream for your skin 🧴', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'emotion', hint: 'Feeling like happy or sad 😊', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'devotion', hint: 'Strong love and loyalty 💕', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'promotion', hint: 'Getting a better job 📈', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'vacation', hint: 'Time off from school 🏖️', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'creation', hint: 'Making something new ✨', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'education', hint: 'Learning at school 🎓', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            { word: 'invitation', hint: 'Asking someone to come 💌', vowelTeam: 'ion', sound: '/shun/', level: 2 },
            
            // WORDS WITH MULTIPLE BLANKS (vowel teams + single vowels for advanced fill-in-the-blank)
            // Words with actual multiple vowel teams
            { word: 'recreation', hint: 'Fun activities 🎮', vowelTeam: 'ea,ion', sound: '/ē/+/shun/', level: 2, multipleTeams: true },
            { word: 'cooperation', hint: 'Working together 🤝', vowelTeam: 'oo,e,ion', sound: '/ū/+/e/+/shun/', level: 2, multipleTeams: true },
            { word: 'moonbeam', hint: 'Light from the moon 🌙', vowelTeam: 'oo,ea', sound: '/ū/+/ē/', level: 2, multipleTeams: true },
            { word: 'seacoast', hint: 'Shore by the ocean 🌊', vowelTeam: 'ea,oa', sound: '/ē/+/ō/', level: 2, multipleTeams: true },
            { word: 'playground', hint: 'Place to play outside 🛝', vowelTeam: 'ay,ou', sound: '/ā/+/ow/', level: 2, multipleTeams: true },
            { word: 'toadstool', hint: 'Type of mushroom 🍄', vowelTeam: 'oa,oo', sound: '/ō/+/ū/', level: 2, multipleTeams: true },
            { word: 'treehouse', hint: 'House built in a tree 🌳', vowelTeam: 'ee,ou', sound: '/ē/+/ow/', level: 2, multipleTeams: true },
            { word: 'snowplow', hint: 'Machine that clears snow ❄️', vowelTeam: 'ow,ow', sound: '/ō/+/ō/', level: 2, multipleTeams: true },
            
            // Words with one vowel team + single vowels
            { word: 'motivation', hint: 'Wanting to do something 💪', vowelTeam: 'o,i,a,ion', sound: '/ō/+/ī/+/ā/+/shun/', level: 2, multipleTeams: true },
            { word: 'transportation', hint: 'Ways to travel 🚗', vowelTeam: 'a,o,a,ion', sound: '/ā/+/ō/+/ā/+/shun/', level: 2, multipleTeams: true },
            { word: 'celebration', hint: 'Happy party 🎉', vowelTeam: 'e,e,a,ion', sound: '/ē/+/ē/+/ā/+/shun/', level: 2, multipleTeams: true },
            { word: 'rainbow', hint: 'Colorful arc in sky 🌈', vowelTeam: 'ai,o', sound: '/ā/+/ō/', level: 2, multipleTeams: true }
        ];
        
        // Vowel team groups for activities
        this.vowelTeamGroups = {
            '/ā/': ['ai', 'ay'],
            '/ē/': ['ee', 'ea', 'ey'],
            '/oi/': ['oi', 'oy'],
            '/ō/': ['oa', 'oe', 'ow', 'o_e'],
            '/ow/': ['ou', 'ow'],
            '/ū/': ['oo', 'ue', 'ew'],
            '/aw/': ['au', 'aw'],
            '/shun/': ['ion']
        };
        
        this.practiceWords = [];
        this.celebrationMessages = [
            '🌟 Amazing! 🌟',
            '🎉 Fantastic! 🎉',
            '💫 Super Job! 💫',
            '🚀 Excellent! 🚀',
            '⭐ Outstanding! ⭐',
            '🎯 Perfect! 🎯',
            '🏆 Brilliant! 🏆'
        ];
        
        this.isHandlingRoute = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupRouting();
        this.setupVowelTeamCards();
        this.updateScore();
    }
    
    setupRouting() {
        // Handle initial URL
        this.handleRoute();
        
        // Listen for back/forward button events
        window.addEventListener('popstate', () => {
            this.handleRoute();
        });
    }
    
    handleRoute() {
        const path = window.location.hash.slice(1) || 'menu';
        const [section, activity, level] = path.split('/');
        
        // Prevent infinite routing loops during initialization
        if (this.isHandlingRoute) return;
        this.isHandlingRoute = true;
        
        switch(section) {
            case 'menu':
                this.showSection('concept');
                break;
            case 'review':
                this.showSection('review');
                break;
            case 'spelling':
                if (level) this.selectLevel(parseInt(level));
                this.startActivity('spelling');
                break;
            case 'fill-blank':
                if (level) this.selectLevel(parseInt(level));
                this.startActivity('fill-blank');
                break;
            case 'sound-match':
                if (level) this.selectLevel(parseInt(level));
                this.startActivity('sound-match');
                break;
            case 'results':
                this.showSection('results');
                break;
            default:
                this.showSection('concept');
                this.updateURL('menu');
        }
        
        this.isHandlingRoute = false;
    }
    
    updateURL(path) {
        // Don't update URL if we're currently handling a route to prevent loops
        if (this.isHandlingRoute) return;
        
        const newURL = `${window.location.pathname}#${path}`;
        if (window.location.href !== newURL) {
            window.history.pushState(null, '', newURL);
        }
    }
    
    bindEvents() {
        // Level selection buttons
        document.getElementById('easy-level').addEventListener('click', () => {
            this.selectLevel(1);
        });
        
        document.getElementById('hard-level').addEventListener('click', () => {
            this.selectLevel(2);
        });
        
        // Activity selection buttons
        document.getElementById('spelling-activity').addEventListener('click', () => {
            this.startActivity('spelling');
        });
        
        document.getElementById('fill-blank-activity').addEventListener('click', () => {
            this.startActivity('fill-blank');
        });
        
        document.getElementById('sound-match-activity').addEventListener('click', () => {
            this.startActivity('sound-match');
        });
        
        // Spelling activity events
        document.getElementById('play-word').addEventListener('click', () => {
            this.playWord();
        });
        
        document.getElementById('check-answer').addEventListener('click', () => {
            this.checkSpellingAnswer();
        });
        
        document.getElementById('user-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkSpellingAnswer();
            }
        });
        
        // Sound match activity events
        document.getElementById('play-sound').addEventListener('click', () => {
            this.playSound();
        });
        
        // Back buttons
        document.getElementById('back-to-activities').addEventListener('click', () => {
            this.showSection('concept');
        });
        
        document.getElementById('back-to-activities-2').addEventListener('click', () => {
            this.showSection('concept');
        });
        
        document.getElementById('back-to-activities-3').addEventListener('click', () => {
            this.showSection('concept');
        });
        
        // Review buttons
        document.getElementById('review-concepts').addEventListener('click', () => {
            this.showSection('review');
        });
        
        document.getElementById('back-to-menu').addEventListener('click', () => {
            this.showSection('concept');
        });
        
        // Results buttons
        document.getElementById('try-again').addEventListener('click', () => {
            this.startActivity(this.currentActivity);
        });
        
        document.getElementById('back-to-concept').addEventListener('click', () => {
            this.showSection('concept');
        });
        
        document.getElementById('try-different-activity').addEventListener('click', () => {
            this.showSection('concept');
        });
    }
    
    setupVowelTeamCards() {
        const cards = document.querySelectorAll('.vowel-team-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.playVowelTeamSound(card.dataset.sound);
                card.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 200);
            });
        });
        
        // Also setup sound group headers to be clickable
        const soundGroups = document.querySelectorAll('.sound-group');
        soundGroups.forEach(group => {
            const soundTitle = group.querySelector('.sound-title');
            if (soundTitle) {
                soundTitle.style.cursor = 'pointer';
                soundTitle.addEventListener('click', () => {
                    this.playVowelTeamSound(group.dataset.sound);
                    soundTitle.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        soundTitle.style.transform = 'scale(1)';
                    }, 200);
                });
            }
        });
    }
    
    playVowelTeamSound(sound) {
        if ('speechSynthesis' in window) {
            // Convert phonetic symbols to speakable sounds
            let speakableSound = '';
            switch(sound) {
                case '/ā/':
                    speakableSound = 'long A as in play';
                    break;
                case '/ē/':
                    speakableSound = 'long E as in tree';
                    break;
                case '/oi/':
                    speakableSound = 'oy as in toy';
                    break;
                case '/ō/':
                    speakableSound = 'long O as in boat';
                    break;
                case '/ow/':
                    speakableSound = 'ow as in cow';
                    break;
                case '/ū/':
                    speakableSound = 'long U as in moon';
                    break;
                case '/aw/':
                    speakableSound = 'aw as in claw';
                    break;
                // Individual vowel team sounds
                case 'ai':
                    speakableSound = 'A I as in rain';
                    break;
                case 'ay':
                    speakableSound = 'A Y as in play';
                    break;
                case 'ee':
                    speakableSound = 'E E as in tree';
                    break;
                case 'ea':
                    speakableSound = 'E A as in beach';
                    break;
                case 'ey':
                    speakableSound = 'E Y as in key';
                    break;
                case 'oi':
                    speakableSound = 'O I as in coin';
                    break;
                case 'oy':
                    speakableSound = 'O Y as in toy';
                    break;
                case 'oa':
                    speakableSound = 'O A as in boat';
                    break;
                case 'oe':
                    speakableSound = 'O E as in toe';
                    break;
                case 'ow':
                    speakableSound = 'O W as in snow';
                    break;
                case 'ow-cow':
                    speakableSound = 'O W as in cow';
                    break;
                case 'ou':
                    speakableSound = 'O U as in mouse';
                    break;
                case 'oo':
                    speakableSound = 'double O as in moon';
                    break;
                case 'ue':
                    speakableSound = 'U E as in blue';
                    break;
                case 'ew':
                    speakableSound = 'E W as in new';
                    break;
                case 'au':
                    speakableSound = 'A U as in pause';
                    break;
                case 'aw':
                    speakableSound = 'A W as in claw';
                    break;
                case 'o_e':
                    speakableSound = 'magic E with O as in home';
                    break;
                case 'ion':
                    speakableSound = 'I O N as in action';
                    break;
                default:
                    speakableSound = sound;
            }
            
            const utterance = new SpeechSynthesisUtterance(speakableSound);
            utterance.rate = 0.8;
            utterance.pitch = 1.2;
            speechSynthesis.speak(utterance);
        }
    }
    
    selectLevel(level) {
        this.currentLevel = level;
        
        // Update button states
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (level === 1) {
            document.getElementById('easy-level').classList.add('active');
        } else {
            document.getElementById('hard-level').classList.add('active');
        }
    }
    
    getCurrentWords() {
        return this.currentLevel === 1 ? this.easyWords : this.hardWords;
    }
    
    showSection(section, updateUrl = true) {
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.remove('active');
        });
        
        document.getElementById(`${section}-section`).classList.add('active');
        this.currentSection = section;
        
        // Only update URL for certain sections to avoid conflicts with activities
        if (updateUrl && ['review', 'results', 'concept'].includes(section)) {
            let urlPath = 'menu';
            if (section === 'review') {
                urlPath = 'review';
            } else if (section === 'results') {
                urlPath = 'results';
            } else if (section === 'concept') {
                urlPath = 'menu';
            }
            this.updateURL(urlPath);
        }
    }
    
    startActivity(activity) {
        this.currentActivity = activity;
        this.score = 0;
        this.currentQuestion = 0;
        this.updateScore();
        
        // Update URL with activity and level
        this.updateURL(`${activity}/${this.currentLevel}`);
        
        // Select 10 random words for practice based on current level
        const currentWords = this.getCurrentWords();
        this.practiceWords = this.shuffleArray([...currentWords]).slice(0, this.totalQuestions);
        
        switch(activity) {
            case 'spelling':
                this.showSection('spelling', false);
                this.updateSectionTitle('spelling');
                this.loadSpellingQuestion();
                this.updateProgress('spelling');
                break;
            case 'fill-blank':
                this.showSection('fill-blank', false);
                this.updateSectionTitle('fill-blank');
                this.loadFillBlankQuestion();
                this.updateProgress('blank');
                break;
            case 'sound-match':
                this.showSection('sound-match', false);
                this.updateSectionTitle('sound-match');
                this.loadSoundMatchQuestion();
                this.updateProgress('sound');
                break;
        }
    }
    
    updateSectionTitle(activity) {
        const levelIcon = this.currentLevel === 1 ? '🌟' : '🚀';
        const levelText = this.currentLevel === 1 ? 'Level 1: Easy' : 'Level 2: Challenge';
        
        let activityName = '';
        let sectionId = '';
        
        switch(activity) {
            case 'spelling':
                activityName = 'Spelling Practice';
                sectionId = 'spelling-section';
                break;
            case 'fill-blank':
                activityName = 'Fill the Blanks';
                sectionId = 'fill-blank-section';
                break;
            case 'sound-match':
                activityName = 'Sound Match';
                sectionId = 'sound-match-section';
                break;
        }
        
        const titleElement = document.querySelector(`#${sectionId} .section-title`);
        if (titleElement) {
            titleElement.innerHTML = `${levelIcon} ${activityName} - ${levelText}`;
        }
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    updateProgress(type) {
        const progressPercent = ((this.currentQuestion + 1) / this.totalQuestions) * 100;
        document.getElementById(`${type}-progress-fill`).style.width = `${progressPercent}%`;
        document.getElementById(`${type}-current-question`).textContent = this.currentQuestion + 1;
        document.getElementById(`${type}-total-questions`).textContent = this.totalQuestions;
    }
    
    // === SPELLING ACTIVITY ===
    loadSpellingQuestion() {
        if (this.currentQuestion >= this.practiceWords.length) {
            this.showResults();
            return;
        }
        
        const currentWord = this.practiceWords[this.currentQuestion];
        document.getElementById('word-hint').textContent = currentWord.hint;
        document.getElementById('user-input').value = '';
        document.getElementById('user-input').focus();
        document.getElementById('feedback').textContent = '';
        document.getElementById('feedback').className = 'feedback';
        
        this.updateProgress('spelling');
    }
    
    playWord() {
        if (this.currentQuestion < this.practiceWords.length) {
            const word = this.practiceWords[this.currentQuestion].word;
            this.speakWord(word);
            
            const playBtn = document.getElementById('play-word');
            playBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                playBtn.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    speakWord(word) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.rate = 0.7;
            utterance.pitch = 1.1;
            utterance.volume = 0.8;
            speechSynthesis.speak(utterance);
        }
    }
    
    checkSpellingAnswer() {
        const userInput = document.getElementById('user-input').value.toLowerCase().trim();
        const correctWord = this.practiceWords[this.currentQuestion].word.toLowerCase();
        const feedbackEl = document.getElementById('feedback');
        
        if (userInput === correctWord) {
            this.score++;
            feedbackEl.textContent = `🎉 Correct! Great job spelling "${correctWord}"!`;
            feedbackEl.className = 'feedback correct';
            
            this.showCelebration();
            this.updateScore();
            this.addStar();
            
            setTimeout(() => {
                this.currentQuestion++;
                this.loadSpellingQuestion();
            }, 2000);
            
        } else {
            feedbackEl.textContent = `💫 Try again! The word is "${correctWord}". Listen carefully!`;
            feedbackEl.className = 'feedback incorrect';
            
            setTimeout(() => {
                this.speakWord(correctWord);
            }, 1000);
            
            document.getElementById('user-input').value = '';
            document.getElementById('user-input').focus();
        }
    }
    
    // === FILL BLANK ACTIVITY ===
    loadFillBlankQuestion() {
        if (this.currentQuestion >= this.practiceWords.length) {
            this.showResults();
            return;
        }
        
        const currentWord = this.practiceWords[this.currentQuestion];
        const vowelTeam = currentWord.vowelTeam;
        
        // Initialize selection state for this question
        this.currentSelections = [];
        this.expectedTeams = [];
        this.blankPositions = [];
        
        if (currentWord.multipleTeams && this.currentLevel === 2) {
            // Handle words with multiple vowel teams - sequential selection
            this.expectedTeams = vowelTeam.split(',');
            this.setupMultipleSelectionInterface(currentWord);
        } else {
            // Handle single vowel team - original logic
            this.setupSingleSelectionInterface(currentWord);
        }
        
        this.updateProgress('blank');
    }
    
    setupMultipleSelectionInterface(currentWord) {
        // Show multi-selection UI elements
        document.getElementById('selection-progress').style.display = 'block';
        document.getElementById('selected-answers').style.display = 'block';
        
        // Create word with numbered blanks
        let wordWithBlanks = this.createWordWithNumberedBlanks(currentWord);
        document.getElementById('blank-word').innerHTML = wordWithBlanks;
        document.getElementById('blank-hint').textContent = currentWord.hint;
        
        // Update instruction
        const firstElement = this.expectedTeams[0];
        const elementType = firstElement.length === 1 ? 'vowel' : 'vowel team';
        document.getElementById('blank-instruction').textContent = `Choose the ${elementType} for blank #1:`;
        
        // Setup progress dots
        this.setupProgressDots(this.expectedTeams.length);
        
        // Generate options for first selection
        this.generateOptionsForCurrentSelection(0);
        
        // Clear feedback and selections
        document.getElementById('blank-feedback').textContent = '';
        document.getElementById('blank-feedback').className = 'feedback';
        document.getElementById('selected-answers').innerHTML = '';
    }
    
    setupSingleSelectionInterface(currentWord) {
        // Hide multi-selection UI elements
        document.getElementById('selection-progress').style.display = 'none';
        document.getElementById('selected-answers').style.display = 'none';
        
        // Create word with single blank
        const vowelTeam = currentWord.vowelTeam;
        let wordWithBlank;
        
        if (vowelTeam === 'o_e') {
            // Create proper HTML blanks for o_e pattern
            wordWithBlank = currentWord.word.replace(/o(.*)e$/, '<span class="single-blank">_</span>$1<span class="single-blank">_</span>');
        } else if (vowelTeam === 'ion') {
            wordWithBlank = currentWord.word.replace('tion', 't<span class="single-blank">___</span>');
        } else {
            const blankText = '_'.repeat(vowelTeam.length);
            wordWithBlank = currentWord.word.replace(vowelTeam, `<span class="single-blank">${blankText}</span>`);
        }
        
        document.getElementById('blank-word').innerHTML = wordWithBlank;
        document.getElementById('blank-hint').textContent = currentWord.hint;
        document.getElementById('blank-instruction').textContent = 'Choose the right vowel team:';
        document.getElementById('blank-feedback').textContent = '';
        document.getElementById('blank-feedback').className = 'feedback';
        
        // Generate single selection options
        this.generateSingleSelectionOptions(currentWord);
    }
    
    createWordWithNumberedBlanks(currentWord) {
        const teams = currentWord.vowelTeam.split(',');
        let tempWord = currentWord.word;
        let blankNumber = 1;
        
        // Replace each element (vowel team or single vowel) with numbered blanks
        teams.forEach(element => {
            if (element === 'o_e') {
                // Special case for o_e pattern
                const oPos = tempWord.indexOf('o');
                const ePos = tempWord.lastIndexOf('e');
                if (oPos !== -1 && ePos !== -1) {
                    // Replace from right to left to maintain positions
                    tempWord = tempWord.substring(0, ePos) + `<span class="numbered-blank" data-blank="${blankNumber + 1}">_</span>` + tempWord.substring(ePos + 1);
                    tempWord = tempWord.substring(0, oPos) + `<span class="numbered-blank" data-blank="${blankNumber}">_</span>` + tempWord.substring(oPos + 1);
                    this.blankPositions.push({team: 'o', number: blankNumber});
                    this.blankPositions.push({team: 'e', number: blankNumber + 1});
                    blankNumber += 2;
                }
            } else if (element === 'ion') {
                // Handle -tion suffix - look for 'tion' and replace 'ion' part
                if (tempWord.includes('tion')) {
                    tempWord = tempWord.replace('tion', `t<span class="numbered-blank" data-blank="${blankNumber}">___</span>`);
                    this.blankPositions.push({team: 'ion', number: blankNumber});
                    blankNumber++;
                }
            } else if (element.length === 1) {
                // Handle single vowel - find first unprocessed occurrence
                const vowelRegex = new RegExp(`(?<!<[^>]*)[${element}](?![^<]*>)`, 'i');
                const match = tempWord.match(vowelRegex);
                if (match) {
                    const vowelIndex = match.index;
                    tempWord = tempWord.substring(0, vowelIndex) + 
                              `<span class="numbered-blank" data-blank="${blankNumber}">_</span>` + 
                              tempWord.substring(vowelIndex + 1);
                    this.blankPositions.push({team: element, number: blankNumber});
                    blankNumber++;
                }
            } else {
                // Handle vowel teams (2+ characters)
                const elementIndex = tempWord.indexOf(element);
                if (elementIndex !== -1) {
                    const blankText = '_'.repeat(element.length);
                    tempWord = tempWord.substring(0, elementIndex) + 
                              `<span class="numbered-blank" data-blank="${blankNumber}">${blankText}</span>` + 
                              tempWord.substring(elementIndex + element.length);
                    this.blankPositions.push({team: element, number: blankNumber});
                    blankNumber++;
                }
            }
        });
        
        return tempWord;
    }
    
    setupProgressDots(totalSelections) {
        const dotsContainer = document.querySelector('.progress-dots');
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < totalSelections; i++) {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        }
    }
    
    generateOptionsForCurrentSelection(selectionIndex) {
        const currentElement = this.expectedTeams[selectionIndex];
        const currentWord = this.practiceWords[this.currentQuestion];
        let options = [currentElement];
        
        if (currentElement.length === 1) {
            // Handle single vowel selection - provide single vowel options
            const singleVowels = ['a', 'e', 'i', 'o', 'u'];
            const otherVowels = singleVowels.filter(vowel => vowel !== currentElement);
            
            // Add 3 other vowels as distractors
            for (let i = 0; i < 3 && i < otherVowels.length; i++) {
                options.push(otherVowels[i]);
            }
        } else {
            // Handle vowel team selection - provide vowel team options
            const allTeams = Object.values(this.vowelTeamGroups).flat();
            // Add special patterns
            allTeams.push('o_e', 'i_e');
            
            // Create a pool of distractor options 
            const availableTeams = [...new Set(allTeams)].filter(team => 
                team !== currentElement && 
                !this.currentSelections.slice(0, selectionIndex).includes(team)
            );
            
            // Add 3 random distractors
            const shuffledDistractors = this.shuffleArray([...availableTeams]);
            for (let i = 0; i < 3 && i < shuffledDistractors.length; i++) {
                options.push(shuffledDistractors[i]);
            }
            
            // If we still need more options, add some common ones
            const fallbackTeams = ['ai', 'ea', 'oo', 'ou', 'ow', 'ay', 'ee', 'ue'];
            fallbackTeams.forEach(team => {
                if (options.length < 4 && !options.includes(team)) {
                    options.push(team);
                }
            });
        }
        
        options = this.shuffleArray(options);
        
        const container = document.getElementById('multiple-choice');
        container.innerHTML = '';
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = option;
            button.addEventListener('click', () => {
                this.handleMultipleSelection(option, selectionIndex);
            });
            container.appendChild(button);
        });
    }
    
    generateSingleSelectionOptions(currentWord) {
        const correctTeam = currentWord.vowelTeam;
        const correctSound = currentWord.sound;
        let options = [correctTeam];
        
        // Add teams with same sound
        if (this.vowelTeamGroups[correctSound]) {
            const sameSound = this.vowelTeamGroups[correctSound].filter(team => team !== correctTeam);
            options.push(...sameSound);
        }
        
        // Add some random different teams
        const allTeams = Object.values(this.vowelTeamGroups).flat();
        const otherTeams = allTeams.filter(team => !options.includes(team));
        
        while (options.length < 4 && otherTeams.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherTeams.length);
            options.push(otherTeams.splice(randomIndex, 1)[0]);
        }
        
        options = this.shuffleArray(options);
        
        const container = document.getElementById('multiple-choice');
        container.innerHTML = '';
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = option;
            button.addEventListener('click', () => {
                this.checkBlankAnswer(option, correctTeam);
            });
            container.appendChild(button);
        });
    }
    
    handleMultipleSelection(selectedTeam, selectionIndex) {
        const correctTeam = this.expectedTeams[selectionIndex];
        const isCorrect = selectedTeam === correctTeam;
        
        // Record the selection
        this.currentSelections[selectionIndex] = selectedTeam;
        
        // Update progress dots
        const dots = document.querySelectorAll('.progress-dot');
        dots[selectionIndex].classList.remove('active');
        dots[selectionIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
        
        // Show selected answer
        this.updateSelectedAnswers(selectionIndex, selectedTeam, isCorrect);
        
        // Fill in the blank with the answer (correct or incorrect)
        this.fillBlankWithAnswer(selectionIndex, selectedTeam, isCorrect);
        
        // Disable current options
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === selectedTeam) {
                btn.style.background = isCorrect ? 
                    'linear-gradient(135deg, #a8e6cf, #88d8a3)' : 
                    'linear-gradient(135deg, #fbb6ce, #f093fb)';
            }
        });
        
        if (selectionIndex < this.expectedTeams.length - 1) {
            // Move to next selection
            setTimeout(() => {
                if (dots[selectionIndex + 1]) {
                    dots[selectionIndex + 1].classList.add('active');
                }
                const nextElement = this.expectedTeams[selectionIndex + 1];
                const nextElementType = nextElement.length === 1 ? 'vowel' : 'vowel team';
                document.getElementById('blank-instruction').textContent = 
                    `Choose the ${nextElementType} for blank #${selectionIndex + 2}:`;
                this.generateOptionsForCurrentSelection(selectionIndex + 1);
            }, 1500);
        } else {
            // All selections complete
            setTimeout(() => {
                this.checkMultipleSelectionAnswer();
            }, 1500);
        }
    }
    
    updateSelectedAnswers(selectionIndex, selectedTeam, isCorrect) {
        const container = document.getElementById('selected-answers');
        const answerDiv = document.createElement('div');
        answerDiv.className = `selected-answer ${isCorrect ? 'correct' : 'incorrect'}`;
        answerDiv.innerHTML = `
            <span class=\"blank-number\">#${selectionIndex + 1}:</span>
            <span class=\"selected-team\">${selectedTeam}</span>
            <span class=\"status-icon\">${isCorrect ? '✓' : '✗'}</span>
        `;
        container.appendChild(answerDiv);
    }
    
    fillBlankWithAnswer(selectionIndex, selectedAnswer, isCorrect) {
        const blankSpan = document.querySelector(`[data-blank="${selectionIndex + 1}"]`);
        if (blankSpan) {
            // Determine what text should fill this specific blank
            let textToFill = selectedAnswer;
            
            // Check if this blank is part of an o_e pattern
            if (this.blankPositions && this.blankPositions[selectionIndex]) {
                const expectedTeam = this.blankPositions[selectionIndex].team;
                if (expectedTeam === 'o' || expectedTeam === 'e') {
                    // This blank expects a specific letter from o_e
                    if (selectedAnswer === 'o_e' || this.expectedTeams[selectionIndex] === 'o_e') {
                        textToFill = expectedTeam; // Fill with just 'o' or 'e'
                    }
                }
            }
            
            // Fill in the blank with the appropriate text
            blankSpan.textContent = textToFill;
            
            // Style based on correctness
            if (isCorrect) {
                blankSpan.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                blankSpan.style.color = '#2d5a3d';
            } else {
                blankSpan.style.background = 'linear-gradient(135deg, #fbb6ce, #f093fb)';
                blankSpan.style.color = '#7c2982';
                
                // After a delay, show the correct answer
                setTimeout(() => {
                    const correctAnswer = this.expectedTeams[selectionIndex];
                    let correctText = correctAnswer;
                    
                    // Check if the correct answer should be split for o_e pattern
                    if (this.blankPositions && this.blankPositions[selectionIndex]) {
                        const expectedTeam = this.blankPositions[selectionIndex].team;
                        if (expectedTeam === 'o' || expectedTeam === 'e') {
                            correctText = expectedTeam;
                        }
                    }
                    
                    blankSpan.textContent = correctText;
                    blankSpan.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                    blankSpan.style.color = '#2d5a3d';
                }, 1000);
            }
        }
    }
    
    checkMultipleSelectionAnswer() {
        const correctCount = this.currentSelections.filter((selection, index) => 
            selection === this.expectedTeams[index]
        ).length;
        
        const isAllCorrect = correctCount === this.expectedTeams.length;
        const feedbackEl = document.getElementById('blank-feedback');
        
        if (isAllCorrect) {
            this.score++;
            feedbackEl.textContent = `🎉 Perfect! All vowel teams are correct!`;
            feedbackEl.className = 'feedback correct';
            this.showCelebration();
            this.updateScore();
            this.addStar();
        } else {
            const partialCredit = correctCount / this.expectedTeams.length;
            if (partialCredit >= 0.5) {
                this.score += partialCredit;
            }
            feedbackEl.textContent = `💫 Good try! You got ${correctCount} out of ${this.expectedTeams.length} vowel teams correct.`;
            feedbackEl.className = 'feedback partial';
        }
        
        setTimeout(() => {
            this.currentQuestion++;
            this.loadFillBlankQuestion();
        }, 3000);
    }
    
    checkBlankAnswer(selected, correct) {
        const feedbackEl = document.getElementById('blank-feedback');
        
        if (selected === correct) {
            this.score++;
            feedbackEl.textContent = `🎉 Correct! "${correct}" makes the right sound!`;
            feedbackEl.className = 'feedback correct';
            
            this.showCelebration();
            this.updateScore();
            this.addStar();
            
            // Fill in the blank with correct answer
            this.fillSingleBlankWithAnswer(correct, true);
            
            // Highlight correct answer
            document.querySelectorAll('.choice-btn').forEach(btn => {
                btn.disabled = true;
                if (btn.textContent === correct) {
                    btn.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                }
            });
            
            setTimeout(() => {
                this.currentQuestion++;
                this.loadFillBlankQuestion();
            }, 2500);
            
        } else {
            feedbackEl.textContent = `💫 Try again! Listen to how "${correct}" sounds in this word.`;
            feedbackEl.className = 'feedback incorrect';
            
            // Fill in the blank with incorrect answer, then show correct answer
            this.fillSingleBlankWithAnswer(selected, false, correct);
            
            // Highlight wrong answer briefly
            document.querySelectorAll('.choice-btn').forEach(btn => {
                if (btn.textContent === selected) {
                    btn.style.background = 'linear-gradient(135deg, #fbb6ce, #f093fb)';
                    setTimeout(() => {
                        btn.style.background = '';
                    }, 1000);
                }
            });
            
            // Play the word
            setTimeout(() => {
                this.speakWord(this.practiceWords[this.currentQuestion].word);
            }, 1000);
        }
    }
    
    fillSingleBlankWithAnswer(selectedAnswer, isCorrect, correctAnswer = null) {
        const blankSpans = document.querySelectorAll('.single-blank');
        
        if (blankSpans.length > 0) {
            // Check if this is an o_e pattern (two blanks)
            if (blankSpans.length === 2 && (selectedAnswer === 'o_e' || correctAnswer === 'o_e')) {
                // Handle o_e pattern with separate blanks for 'o' and 'e'
                const answerToUse = correctAnswer || selectedAnswer;
                if (answerToUse === 'o_e') {
                    blankSpans[0].textContent = 'o';
                    blankSpans[1].textContent = 'e';
                } else {
                    // If incorrect answer, still fill both blanks with the selected answer
                    blankSpans[0].textContent = selectedAnswer;
                    blankSpans[1].textContent = '';
                }
                
                // Style both blanks
                blankSpans.forEach(span => {
                    if (isCorrect) {
                        span.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                        span.style.color = '#2d5a3d';
                    } else {
                        span.style.background = 'linear-gradient(135deg, #fbb6ce, #f093fb)';
                        span.style.color = '#7c2982';
                        
                        // After a delay, show the correct answer if provided
                        if (correctAnswer === 'o_e') {
                            setTimeout(() => {
                                span.textContent = span === blankSpans[0] ? 'o' : 'e';
                                span.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                                span.style.color = '#2d5a3d';
                            }, 1000);
                        }
                    }
                });
            } else {
                // Handle single blank (original logic)
                const blankSpan = blankSpans[0];
                blankSpan.textContent = selectedAnswer;
                
                // Style based on correctness
                if (isCorrect) {
                    blankSpan.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                    blankSpan.style.color = '#2d5a3d';
                } else {
                    blankSpan.style.background = 'linear-gradient(135deg, #fbb6ce, #f093fb)';
                    blankSpan.style.color = '#7c2982';
                    
                    // After a delay, show the correct answer if provided
                    if (correctAnswer) {
                        setTimeout(() => {
                            blankSpan.textContent = correctAnswer;
                            blankSpan.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                            blankSpan.style.color = '#2d5a3d';
                        }, 1000);
                    }
                }
            }
        }
    }
    
    // === SOUND MATCH ACTIVITY ===
    loadSoundMatchQuestion() {
        if (this.currentQuestion >= this.practiceWords.length) {
            this.showResults();
            return;
        }
        
        const currentWord = this.practiceWords[this.currentQuestion];
        document.getElementById('sound-display').textContent = `Sound: ${currentWord.sound}`;
        document.getElementById('sound-feedback').textContent = '';
        document.getElementById('sound-feedback').className = 'feedback';
        
        this.generateSoundOptions(currentWord);
        this.updateProgress('sound');
    }
    
    playSound() {
        if (this.currentQuestion < this.practiceWords.length) {
            const sound = this.practiceWords[this.currentQuestion].sound;
            this.playVowelTeamSound(sound);
            
            const playBtn = document.getElementById('play-sound');
            playBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                playBtn.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    generateSoundOptions(currentWord) {
        const correctTeam = currentWord.vowelTeam;
        const correctSound = currentWord.sound;
        
        // Get teams that make the same sound
        let options = this.vowelTeamGroups[correctSound] || [correctTeam];
        
        // If we need more options, add some from other sounds
        const allTeams = Object.values(this.vowelTeamGroups).flat();
        const otherTeams = allTeams.filter(team => !options.includes(team));
        
        while (options.length < 4 && otherTeams.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherTeams.length);
            options.push(otherTeams.splice(randomIndex, 1)[0]);
        }
        
        options = this.shuffleArray(options.slice(0, 4));
        
        const container = document.getElementById('vowel-team-options');
        container.innerHTML = '';
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'vowel-option-btn';
            button.textContent = option;
            button.addEventListener('click', () => {
                this.checkSoundAnswer(option, correctTeam, correctSound);
            });
            container.appendChild(button);
        });
    }
    
    checkSoundAnswer(selected, correctTeam, correctSound) {
        const feedbackEl = document.getElementById('sound-feedback');
        const correctOptions = this.vowelTeamGroups[correctSound] || [correctTeam];
        
        if (correctOptions.includes(selected)) {
            this.score++;
            feedbackEl.textContent = `🎉 Correct! "${selected}" makes the ${correctSound} sound!`;
            feedbackEl.className = 'feedback correct';
            
            this.showCelebration();
            this.updateScore();
            this.addStar();
            
            // Highlight all correct answers
            document.querySelectorAll('.vowel-option-btn').forEach(btn => {
                btn.disabled = true;
                if (correctOptions.includes(btn.textContent)) {
                    btn.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                }
            });
            
            setTimeout(() => {
                this.currentQuestion++;
                this.loadSoundMatchQuestion();
            }, 2500);
            
        } else {
            feedbackEl.textContent = `💫 Try again! Listen carefully to the ${correctSound} sound.`;
            feedbackEl.className = 'feedback incorrect';
            
            // Highlight wrong answer briefly
            document.querySelectorAll('.vowel-option-btn').forEach(btn => {
                if (btn.textContent === selected) {
                    btn.style.background = 'linear-gradient(135deg, #fbb6ce, #f093fb)';
                    setTimeout(() => {
                        btn.style.background = '';
                    }, 1000);
                }
            });
            
            // Play the sound again
            setTimeout(() => {
                this.playVowelTeamSound(correctSound);
            }, 1000);
        }
    }
    
    // === SHARED METHODS ===
    showCelebration() {
        const celebration = document.getElementById('celebration');
        const message = document.getElementById('celebration-message');
        
        message.textContent = this.getRandomCelebrationMessage();
        celebration.classList.add('active');
        
        this.createConfetti();
        
        setTimeout(() => {
            celebration.classList.remove('active');
        }, 2000);
    }
    
    getRandomCelebrationMessage() {
        return this.celebrationMessages[Math.floor(Math.random() * this.celebrationMessages.length)];
    }
    
    createConfetti() {
        const confettiContainer = document.querySelector('.confetti');
        const colors = ['#667eea', '#764ba2', '#ffeaa7', '#fab1a0', '#a8e6cf'];
        
        for (let i = 0; i < 20; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.style.position = 'absolute';
            confettiPiece.style.width = '8px';
            confettiPiece.style.height = '8px';
            confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettiPiece.style.left = Math.random() * 100 + '%';
            confettiPiece.style.animation = `confetti-fall ${2 + Math.random() * 2}s linear forwards`;
            confettiPiece.style.animationDelay = Math.random() * 0.5 + 's';
            
            confettiContainer.appendChild(confettiPiece);
            
            setTimeout(() => {
                confettiPiece.remove();
            }, 4000);
        }
    }
    
    updateScore() {
        document.getElementById('score').textContent = this.score;
    }
    
    addStar() {
        const starsContainer = document.getElementById('stars');
        const star = document.createElement('span');
        star.textContent = '⭐';
        star.style.animation = 'starPop 0.6s ease-out';
        starsContainer.appendChild(star);
    }
    
    showResults() {
        document.getElementById('final-score').textContent = this.score;
        
        const performanceMessage = document.getElementById('performance-message');
        let message = '';
        
        if (this.score === this.totalQuestions) {
            message = '🏆 Perfect! You\'re a spelling superstar! 🏆';
        } else if (this.score >= this.totalQuestions * 0.8) {
            message = '🌟 Excellent work! You\'re almost perfect! 🌟';
        } else if (this.score >= this.totalQuestions * 0.6) {
            message = '👍 Good job! Keep practicing! 👍';
        } else {
            message = '💪 Great effort! Practice makes perfect! 💪';
        }
        
        performanceMessage.textContent = message;
        
        this.showSection('results');
        
        setTimeout(() => {
            this.showCelebration();
        }, 500);
    }
}

// Add CSS for new elements
const style = document.createElement('style');
style.textContent = `
    @keyframes starPop {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            transform: scale(1.5);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SpellingApp();
});
