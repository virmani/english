// Vowel Teams Spelling App - Main Application Controller
// Coordinates all activities and manages the overall app state

class SpellingApp {
    constructor() {
        this.currentSection = 'concept';
        this.currentActivity = 'spelling';
        this.currentLevel = 1; // 1 = easy, 2 = hard
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 10;
        
        this.practiceWords = [];
        this.isHandlingRoute = false;
        
        // Initialize activity handlers
        this.spellingActivity = new SpellingActivity(this);
        this.fillBlanksActivity = new FillBlanksActivity(this);
        this.soundMatchActivity = new SoundMatchActivity(this);
        this.misspelledWordsActivity = new MisspelledWordsActivity(this);
        
        // Make activities globally accessible for callbacks
        window.misspelledActivity = this.misspelledWordsActivity;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupRouting();
        this.setupVowelTeamCards();
        Utils.updateScore(this.score);
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
            case 'misspelled':
                if (level) this.selectLevel(parseInt(level));
                this.startActivity('misspelled');
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
        
        document.getElementById('misspelled-activity').addEventListener('click', () => {
            this.startActivity('misspelled');
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
                Utils.playVowelTeamSound(card.dataset.sound);
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
                    Utils.playVowelTeamSound(group.dataset.sound);
                    soundTitle.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        soundTitle.style.transform = 'scale(1)';
                    }, 200);
                });
            }
        });
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
        return this.currentLevel === 1 ? WordDictionary.easyWords : WordDictionary.hardWords;
    }
    
    getCurrentSentences() {
        return WordDictionary.misspelledSentences.filter(sentence => sentence.level === this.currentLevel);
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
        Utils.updateScore(this.score);
        
        // Update URL with activity and level
        this.updateURL(`${activity}/${this.currentLevel}`);
        
        // Select practice items based on activity type and current level
        if (activity === 'misspelled') {
            const currentSentences = this.getCurrentSentences();
            this.practiceWords = Utils.shuffleArray([...currentSentences]).slice(0, this.totalQuestions);
        } else {
            const currentWords = this.getCurrentWords();
            this.practiceWords = Utils.shuffleArray([...currentWords]).slice(0, this.totalQuestions);
        }
        
        switch(activity) {
            case 'spelling':
                this.showSection('spelling', false);
                this.updateSectionTitle('spelling');
                this.spellingActivity.loadSpellingQuestion();
                break;
            case 'fill-blank':
                this.showSection('fill-blank', false);
                this.updateSectionTitle('fill-blank');
                this.fillBlanksActivity.loadFillBlankQuestion();
                break;
            case 'sound-match':
                this.showSection('sound-match', false);
                this.updateSectionTitle('sound-match');
                this.soundMatchActivity.loadSoundMatchQuestion();
                break;
            case 'misspelled':
                this.showSection('misspelled', false);
                this.updateSectionTitle('misspelled');
                this.misspelledWordsActivity.loadMisspelledQuestion();
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
            case 'misspelled':
                activityName = 'Find Misspelled Words';
                sectionId = 'misspelled-section';
                break;
        }
        
        const titleElement = document.querySelector(`#${sectionId} .section-title`);
        if (titleElement) {
            titleElement.innerHTML = `${levelIcon} ${activityName} - ${levelText}`;
        }
    }
}

// Initialize the app when DOM is loaded
let spellingApp;
document.addEventListener('DOMContentLoaded', () => {
    spellingApp = new SpellingApp();
    window.spellingApp = spellingApp;
});