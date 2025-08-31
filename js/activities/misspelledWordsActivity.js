// Vowel Teams Spelling App - Misspelled Words Activity
// Handles the find-and-correct misspelled words activity

class MisspelledWordsActivity {
    constructor(app) {
        this.app = app;
        // State for misspelled activity
        this.currentSentence = null;
        this.selectedMisspellings = [];
        this.currentCorrection = null;
        this.sentenceWords = [];
        
        this.bindEvents();
    }

    bindEvents() {
        // Misspelled words activity events
        document.getElementById('submit-correction').addEventListener('click', () => {
            this.submitCorrection();
        });
        
        document.getElementById('correction-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitCorrection();
            }
        });
        
        document.getElementById('finish-sentence').addEventListener('click', () => {
            this.finishSentence();
        });

        // Back button
        document.getElementById('back-to-activities-4').addEventListener('click', () => {
            Utils.backToActivities();
        });
    }

    loadMisspelledQuestion() {
        if (this.app.currentQuestion >= this.app.practiceWords.length) {
            Utils.showResults(this.app.score, this.app.totalQuestions);
            return;
        }
        
        this.currentSentence = this.app.practiceWords[this.app.currentQuestion];
        this.selectedMisspellings = [];
        this.currentCorrection = null;
        this.sentenceWords = this.currentSentence.sentence.split(' ');
        
        // Reset UI
        document.getElementById('correction-area').style.display = 'none';
        document.getElementById('selected-misspellings').innerHTML = '';
        document.getElementById('misspelled-feedback').textContent = '';
        document.getElementById('misspelled-feedback').className = 'feedback';
        document.getElementById('finish-sentence').style.display = 'none';
        
        this.displaySentence();
        Utils.updateProgress('misspelled', this.app.currentQuestion, this.app.totalQuestions);
    }

    displaySentence() {
        const sentenceDisplay = document.getElementById('sentence-display');
        sentenceDisplay.innerHTML = '';
        
        this.sentenceWords.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.className = 'sentence-word';
            wordSpan.dataset.index = index;
            
            // Make words clickable
            wordSpan.addEventListener('click', () => {
                this.selectWord(wordSpan, word, index);
            });
            
            sentenceDisplay.appendChild(wordSpan);
            
            // Add space after word (except last word)
            if (index < this.sentenceWords.length - 1) {
                sentenceDisplay.appendChild(document.createTextNode(' '));
            }
        });
    }

    selectWord(wordElement, word, index) {
        // Remove punctuation for comparison
        const cleanWord = word.replace(/[.,!?;:]$/, '');
        
        // Check if this word is actually misspelled
        const isMisspelled = this.currentSentence.misspellings.some(m => m.word === cleanWord);
        
        if (isMisspelled) {
            // Check if already selected
            const alreadySelected = this.selectedMisspellings.some(m => m.word === cleanWord);
            
            if (alreadySelected) {
                // Unselect
                wordElement.classList.remove('selected-misspelled');
                this.selectedMisspellings = this.selectedMisspellings.filter(m => m.word !== cleanWord);
            } else {
                // Select
                wordElement.classList.add('selected-misspelled');
                const misspelling = this.currentSentence.misspellings.find(m => m.word === cleanWord);
                this.selectedMisspellings.push(misspelling);
            }
            
            this.updateSelectedMisspellingsDisplay();
            this.checkIfReadyToFinish();
        } else {
            // Wrong selection - show feedback
            wordElement.classList.add('wrong-selection');
            setTimeout(() => {
                wordElement.classList.remove('wrong-selection');
            }, 1000);
            
            const feedback = document.getElementById('misspelled-feedback');
            feedback.textContent = `"${cleanWord}" is spelled correctly! Look for misspelled words.`;
            feedback.className = 'feedback incorrect';
            
            setTimeout(() => {
                feedback.textContent = '';
                feedback.className = 'feedback';
            }, 2000);
        }
    }

    updateSelectedMisspellingsDisplay() {
        const container = document.getElementById('selected-misspellings');
        container.innerHTML = '';
        
        if (this.selectedMisspellings.length > 0) {
            const title = document.createElement('h4');
            title.textContent = 'Selected misspelled words:';
            title.className = 'selected-title';
            container.appendChild(title);
            
            this.selectedMisspellings.forEach(misspelling => {
                const wordDiv = document.createElement('div');
                wordDiv.className = 'selected-misspelling';
                wordDiv.innerHTML = `
                    <span class="misspelled-word">${misspelling.word}</span>
                    <button class="correct-btn" onclick="window.misspelledActivity.startCorrection('${misspelling.word}')">Correct</button>
                `;
                container.appendChild(wordDiv);
            });
        }
    }

    checkIfReadyToFinish() {
        const allFound = this.currentSentence.misspellings.every(m => 
            this.selectedMisspellings.some(s => s.word === m.word)
        );
        
        if (allFound && this.selectedMisspellings.length > 0) {
            document.getElementById('finish-sentence').style.display = 'inline-block';
        } else {
            document.getElementById('finish-sentence').style.display = 'none';
        }
    }

    startCorrection(misspelledWord) {
        this.currentCorrection = misspelledWord;
        document.getElementById('correction-area').style.display = 'block';
        document.getElementById('misspelled-word-display').textContent = `"${misspelledWord}"`;
        document.getElementById('correction-input').value = '';
        document.getElementById('correction-input').focus();
    }

    submitCorrection() {
        const correction = document.getElementById('correction-input').value.toLowerCase().trim();
        const misspelling = this.currentSentence.misspellings.find(m => m.word === this.currentCorrection);
        
        if (!correction) return;
        
        if (correction === misspelling.correct.toLowerCase()) {
            // Correct!
            const feedback = document.getElementById('misspelled-feedback');
            feedback.textContent = `✅ Correct! "${this.currentCorrection}" should be "${misspelling.correct}".`;
            feedback.className = 'feedback correct';
            
            // Mark as corrected
            const selectedMisspelling = this.selectedMisspellings.find(m => m.word === this.currentCorrection);
            if (selectedMisspelling) {
                selectedMisspelling.corrected = true;
                selectedMisspelling.userCorrection = correction;
            }
            
            // Update display
            this.updateSelectedMisspellingsDisplay();
            document.getElementById('correction-area').style.display = 'none';
            this.currentCorrection = null;
            
            // Check if all corrections are complete
            this.checkAllCorrectionsComplete();
            
        } else {
            // Incorrect - show shake animation and enhanced feedback
            const feedback = document.getElementById('misspelled-feedback');
            const correctionInput = document.getElementById('correction-input');
            const correctionArea = document.getElementById('correction-area');
            
            feedback.textContent = `❌ Try again! "${correction}" is not the correct spelling.`;
            feedback.className = 'feedback incorrect';
            
            // Add shake animation to input
            correctionInput.classList.add('shake');
            
            // Add error styling to correction area
            correctionArea.classList.add('error');
            
            // Clear the input
            correctionInput.value = '';
            
            // Focus back on input after a brief delay
            setTimeout(() => {
                correctionInput.focus();
            }, 100);
            
            // Remove animations after they complete
            setTimeout(() => {
                correctionInput.classList.remove('shake');
                correctionArea.classList.remove('error');
            }, 600);
            
            // Clear feedback after a delay
            setTimeout(() => {
                feedback.textContent = '';
                feedback.className = 'feedback';
            }, 3000);
        }
    }

    checkAllCorrectionsComplete() {
        const allCorrected = this.selectedMisspellings.every(m => m.corrected);
        const allFound = this.currentSentence.misspellings.every(m => 
            this.selectedMisspellings.some(s => s.word === m.word)
        );
        
        if (allFound && allCorrected) {
            setTimeout(() => {
                this.app.score++;
                Utils.showCelebration();
                Utils.updateScore(this.app.score);
                Utils.addStar();
                
                setTimeout(() => {
                    this.app.currentQuestion++;
                    this.loadMisspelledQuestion();
                }, 2500);
            }, 1000);
        }
    }

    finishSentence() {
        // Check if user found all misspelled words
        const allFound = this.currentSentence.misspellings.every(m => 
            this.selectedMisspellings.some(s => s.word === m.word)
        );
        
        if (!allFound) {
            const feedback = document.getElementById('misspelled-feedback');
            const missed = this.currentSentence.misspellings.filter(m => 
                !this.selectedMisspellings.some(s => s.word === m.word)
            );
            
            feedback.textContent = `💫 You missed ${missed.length} misspelled word${missed.length > 1 ? 's' : ''}. Keep looking!`;
            feedback.className = 'feedback incorrect';
            
            // Highlight missed words
            missed.forEach(m => {
                const words = document.querySelectorAll('.sentence-word');
                words.forEach(word => {
                    const cleanWord = word.textContent.replace(/[.,!?;:]$/, '');
                    if (cleanWord === m.word) {
                        word.classList.add('missed-word');
                        setTimeout(() => {
                            word.classList.remove('missed-word');
                        }, 3000);
                    }
                });
            });
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MisspelledWordsActivity;
} else {
    window.MisspelledWordsActivity = MisspelledWordsActivity;
}