// Vowel Teams Spelling App - Shared Utilities
// Common functionality used across multiple activities

const Utils = {
    // Celebration messages
    celebrationMessages: [
        '🌟 Amazing! 🌟',
        '🎉 Fantastic! 🎉',
        '💫 Super Job! 💫',
        '🚀 Excellent! 🚀',
        '⭐ Outstanding! ⭐',
        '🎯 Perfect! 🎯',
        '🏆 Brilliant! 🏆'
    ],

    // Shuffle array utility
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    // Get random celebration message
    getRandomCelebrationMessage() {
        return this.celebrationMessages[Math.floor(Math.random() * this.celebrationMessages.length)];
    },

    // Speech synthesis for word/sound playback
    speakWord(word) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.rate = 0.7;
            utterance.pitch = 1.1;
            utterance.volume = 0.8;
            speechSynthesis.speak(utterance);
        }
    },

    // Play vowel team sounds
    playVowelTeamSound(sound) {
        if ('speechSynthesis' in window) {
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
                case '/shun/':
                    speakableSound = 'shun as in action';
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
    },

    // Create confetti animation
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
    },

    // Show celebration with message and confetti
    showCelebration() {
        const celebration = document.getElementById('celebration');
        const message = document.getElementById('celebration-message');
        
        message.textContent = this.getRandomCelebrationMessage();
        celebration.classList.add('active');
        
        this.createConfetti();
        
        setTimeout(() => {
            celebration.classList.remove('active');
        }, 2000);
    },

    // Add star animation to score
    addStar() {
        const starsContainer = document.getElementById('stars');
        const star = document.createElement('span');
        star.textContent = '⭐';
        star.style.animation = 'starPop 0.6s ease-out';
        starsContainer.appendChild(star);
    },

    // Update progress bar
    updateProgress(type, currentQuestion, totalQuestions) {
        const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;
        document.getElementById(`${type}-progress-fill`).style.width = `${progressPercent}%`;
        document.getElementById(`${type}-current-question`).textContent = currentQuestion + 1;
        document.getElementById(`${type}-total-questions`).textContent = totalQuestions;
    },

    // Update score display
    updateScore(score) {
        document.getElementById('score').textContent = score;
    },

    // Navigate back to main concept section
    backToActivities() {
        if (window.spellingApp) {
            window.spellingApp.showSection('concept');
        }
    },

    // Show results screen
    showResults(score, totalQuestions) {
        document.getElementById('final-score').textContent = score;
        
        const performanceMessage = document.getElementById('performance-message');
        let message = '';
        
        if (score === totalQuestions) {
            message = '🏆 Perfect! You\'re a spelling superstar! 🏆';
        } else if (score >= totalQuestions * 0.8) {
            message = '🌟 Excellent work! You\'re almost perfect! 🌟';
        } else if (score >= totalQuestions * 0.6) {
            message = '👍 Good job! Keep practicing! 👍';
        } else {
            message = '💪 Great effort! Practice makes perfect! 💪';
        }
        
        performanceMessage.textContent = message;
        
        if (window.spellingApp) {
            window.spellingApp.showSection('results');
        }
        
        setTimeout(() => {
            this.showCelebration();
        }, 500);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
} else {
    window.Utils = Utils;
}