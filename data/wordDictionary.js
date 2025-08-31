// Vowel Teams Spelling App - Word Dictionary
// Contains all words and sentences used across activities

const WordDictionary = {
    // Easy words (Level 1: 3-5 letters, common words)
    easyWords: [
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
    ],
    
    // Hard words (Level 2: 6+ letters, complex words)
    hardWords: [
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
        { word: 'recreation', hint: 'Fun activities 🎮', vowelTeam: 'ea,ion', sound: '/ē/+/shun/', level: 2, multipleTeams: true },
        { word: 'cooperation', hint: 'Working together 🤝', vowelTeam: 'oo,e,ion', sound: '/ū/+/e/+/shun/', level: 2, multipleTeams: true },
        { word: 'moonbeam', hint: 'Light from the moon 🌙', vowelTeam: 'oo,ea', sound: '/ū/+/ē/', level: 2, multipleTeams: true },
        { word: 'seacoast', hint: 'Shore by the ocean 🌊', vowelTeam: 'ea,oa', sound: '/ē/+/ō/', level: 2, multipleTeams: true },
        { word: 'playground', hint: 'Place to play outside 🛝', vowelTeam: 'ay,ou', sound: '/ā/+/ow/', level: 2, multipleTeams: true },
        { word: 'toadstool', hint: 'Type of mushroom 🍄', vowelTeam: 'oa,oo', sound: '/ō/+/ū/', level: 2, multipleTeams: true },
        { word: 'treehouse', hint: 'House built in a tree 🌳', vowelTeam: 'ee,ou', sound: '/ē/+/ow/', level: 2, multipleTeams: true },
        { word: 'snowplow', hint: 'Machine that clears snow ❄️', vowelTeam: 'ow,ow', sound: '/ō/+/ō/', level: 2, multipleTeams: true },
        { word: 'motivation', hint: 'Wanting to do something 💪', vowelTeam: 'o,i,a,ion', sound: '/ō/+/ī/+/ā/+/shun/', level: 2, multipleTeams: true },
        { word: 'transportation', hint: 'Ways to travel 🚗', vowelTeam: 'a,o,a,ion', sound: '/ā/+/ō/+/ā/+/shun/', level: 2, multipleTeams: true },
        { word: 'celebration', hint: 'Happy party 🎉', vowelTeam: 'e,e,a,ion', sound: '/ē/+/ē/+/ā/+/shun/', level: 2, multipleTeams: true },
        { word: 'rainbow', hint: 'Colorful arc in sky 🌈', vowelTeam: 'ai,o', sound: '/ā/+/ō/', level: 2, multipleTeams: true }
    ],
    
    // Sentences for misspelled words activity
    misspelledSentences: [
        // Easy sentences (Level 1) - one misspelling per sentence
        { sentence: "The raen fell on the roof all day.", misspellings: [{ word: "raen", correct: "rain", position: 1 }], level: 1 },
        { sentence: "I like to plai outside with my friends.", misspellings: [{ word: "plai", correct: "play", position: 3 }], level: 1 },
        { sentence: "The grean tree is very tall.", misspellings: [{ word: "grean", correct: "green", position: 1 }], level: 1 },
        { sentence: "Can you sie the bird in the sky?", misspellings: [{ word: "sie", correct: "see", position: 2 }], level: 1 },
        { sentence: "The boi played with his new toy.", misspellings: [{ word: "boi", correct: "boy", position: 1 }], level: 1 },
        { sentence: "My coat keeps me warm in the coold weather.", misspellings: [{ word: "coold", correct: "cold", position: 8 }], level: 1 },
        { sentence: "The moen shines bright at night.", misspellings: [{ word: "moen", correct: "moon", position: 1 }], level: 1 },
        { sentence: "I can drai a beautiful picture.", misspellings: [{ word: "drai", correct: "draw", position: 2 }], level: 1 },
        { sentence: "The rope is very long and stroang.", misspellings: [{ word: "stroang", correct: "strong", position: 6 }], level: 1 },
        { sentence: "My bloo crayon is my favorite color.", misspellings: [{ word: "bloo", correct: "blue", position: 1 }], level: 1 },
        
        // Hard sentences (Level 2) - multiple misspellings per sentence
        { sentence: "The trean will arrive at the staition soon.", misspellings: [{ word: "trean", correct: "train", position: 1 }, { word: "staition", correct: "station", position: 6 }], level: 2 },
        { sentence: "We had a grait time at the beech yesterday.", misspellings: [{ word: "grait", correct: "great", position: 3 }, { word: "beech", correct: "beach", position: 8 }], level: 2 },
        { sentence: "The astronot went to space in a huge roket.", misspellings: [{ word: "astronot", correct: "astronaut", position: 1 }, { word: "roket", correct: "rocket", position: 8 }], level: 2 },
        { sentence: "My teecher explained the raeson for the homework.", misspellings: [{ word: "teecher", correct: "teacher", position: 1 }, { word: "raeson", correct: "reason", position: 5 }], level: 2 },
        { sentence: "The mowse ran quickly across the kitchon floor.", misspellings: [{ word: "mowse", correct: "mouse", position: 1 }, { word: "kitchon", correct: "kitchen", position: 6 }], level: 2 },
        { sentence: "I need to paws and think about this problom.", misspellings: [{ word: "paws", correct: "pause", position: 3 }, { word: "problom", correct: "problem", position: 8 }], level: 2 },
        { sentence: "The ranboe appeared after the hevy rain.", misspellings: [{ word: "ranboe", correct: "rainbow", position: 1 }, { word: "hevy", correct: "heavy", position: 6 }], level: 2 },
        { sentence: "She enjoed reading the treasur map carefully.", misspellings: [{ word: "enjoed", correct: "enjoyed", position: 1 }, { word: "treasur", correct: "treasure", position: 4 }], level: 2 }
    ],
    
    // Vowel team groups for activities
    vowelTeamGroups: {
        '/ā/': ['ai', 'ay'],
        '/ē/': ['ee', 'ea', 'ey'],
        '/oi/': ['oi', 'oy'],
        '/ō/': ['oa', 'oe', 'ow', 'o_e'],
        '/ow/': ['ou', 'ow'],
        '/ū/': ['oo', 'ue', 'ew'],
        '/aw/': ['au', 'aw'],
        '/shun/': ['ion']
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WordDictionary;
} else {
    window.WordDictionary = WordDictionary;
}