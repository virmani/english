// Vowel Teams Spelling App - Sound Match Activity
// Handles the sound matching activity

class SoundMatchActivity {
    constructor(app) {
        this.app = app;
        this.bindEvents();
    }

    bindEvents() {
        // Sound match activity events
        document.getElementById('play-sound').addEventListener('click', () => {
            this.playSound();
        });

        // Back button
        document.getElementById('back-to-activities-3').addEventListener('click', () => {
            Utils.backToActivities();
        });
    }

    loadSoundMatchQuestion() {
        if (this.app.currentQuestion >= this.app.practiceWords.length) {
            Utils.showResults(this.app.score, this.app.totalQuestions);
            return;
        }
        
        const currentWord = this.app.practiceWords[this.app.currentQuestion];
        document.getElementById('sound-display').textContent = `Sound: ${currentWord.sound}`;
        document.getElementById('sound-feedback').textContent = '';
        document.getElementById('sound-feedback').className = 'feedback';
        
        this.generateSoundOptions(currentWord);
        Utils.updateProgress('sound', this.app.currentQuestion, this.app.totalQuestions);
    }

    playSound() {
        if (this.app.currentQuestion < this.app.practiceWords.length) {
            const sound = this.app.practiceWords[this.app.currentQuestion].sound;
            Utils.playVowelTeamSound(sound);
            
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
        let options = WordDictionary.vowelTeamGroups[correctSound] || [correctTeam];
        
        // If we need more options, add some from other sounds
        const allTeams = Object.values(WordDictionary.vowelTeamGroups).flat();
        const otherTeams = allTeams.filter(team => !options.includes(team));
        
        while (options.length < 4 && otherTeams.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherTeams.length);
            options.push(otherTeams.splice(randomIndex, 1)[0]);
        }
        
        options = Utils.shuffleArray(options.slice(0, 4));
        
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
        const correctOptions = WordDictionary.vowelTeamGroups[correctSound] || [correctTeam];
        
        if (correctOptions.includes(selected)) {
            this.app.score++;
            feedbackEl.textContent = `🎉 Correct! "${selected}" makes the ${correctSound} sound!`;
            feedbackEl.className = 'feedback correct';
            
            Utils.showCelebration();
            Utils.updateScore(this.app.score);
            Utils.addStar();
            
            // Highlight all correct answers
            document.querySelectorAll('.vowel-option-btn').forEach(btn => {
                btn.disabled = true;
                if (correctOptions.includes(btn.textContent)) {
                    btn.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                }
            });
            
            setTimeout(() => {
                this.app.currentQuestion++;
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
                Utils.playVowelTeamSound(correctSound);
            }, 1000);
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SoundMatchActivity;
} else {
    window.SoundMatchActivity = SoundMatchActivity;
}