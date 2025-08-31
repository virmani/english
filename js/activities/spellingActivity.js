// Vowel Teams Spelling App - Spelling Activity
// Handles the main spelling practice activity

class SpellingActivity {
    constructor(app) {
        this.app = app;
        this.bindEvents();
    }

    bindEvents() {
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

        // Back button
        document.getElementById('back-to-activities').addEventListener('click', () => {
            Utils.backToActivities();
        });
    }

    loadSpellingQuestion() {
        if (this.app.currentQuestion >= this.app.practiceWords.length) {
            Utils.showResults(this.app.score, this.app.totalQuestions);
            return;
        }
        
        const currentWord = this.app.practiceWords[this.app.currentQuestion];
        document.getElementById('word-hint').textContent = currentWord.hint;
        document.getElementById('user-input').value = '';
        document.getElementById('user-input').focus();
        document.getElementById('feedback').textContent = '';
        document.getElementById('feedback').className = 'feedback';
        
        Utils.updateProgress('spelling', this.app.currentQuestion, this.app.totalQuestions);
    }

    playWord() {
        if (this.app.currentQuestion < this.app.practiceWords.length) {
            const word = this.app.practiceWords[this.app.currentQuestion].word;
            Utils.speakWord(word);
            
            const playBtn = document.getElementById('play-word');
            playBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                playBtn.style.transform = 'scale(1)';
            }, 200);
        }
    }

    checkSpellingAnswer() {
        const userInput = document.getElementById('user-input').value.toLowerCase().trim();
        const correctWord = this.app.practiceWords[this.app.currentQuestion].word.toLowerCase();
        const feedbackEl = document.getElementById('feedback');
        
        if (userInput === correctWord) {
            this.app.score++;
            feedbackEl.textContent = `🎉 Correct! Great job spelling "${correctWord}"!`;
            feedbackEl.className = 'feedback correct';
            
            Utils.showCelebration();
            Utils.updateScore(this.app.score);
            Utils.addStar();
            
            setTimeout(() => {
                this.app.currentQuestion++;
                this.loadSpellingQuestion();
            }, 2000);
            
        } else {
            feedbackEl.textContent = `💫 Try again! The word is "${correctWord}". Listen carefully!`;
            feedbackEl.className = 'feedback incorrect';
            
            setTimeout(() => {
                Utils.speakWord(correctWord);
            }, 1000);
            
            document.getElementById('user-input').value = '';
            document.getElementById('user-input').focus();
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpellingActivity;
} else {
    window.SpellingActivity = SpellingActivity;
}