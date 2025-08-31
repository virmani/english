// Vowel Teams Spelling App - Fill the Blanks Activity
// Handles the fill-in-the-blanks activity with single and multiple selections

class FillBlanksActivity {
    constructor(app) {
        this.app = app;
        // State for fill-blank activity
        this.currentSelections = [];
        this.expectedTeams = [];
        this.blankPositions = [];
        
        this.bindEvents();
    }

    bindEvents() {
        // Back button
        document.getElementById('back-to-activities-2').addEventListener('click', () => {
            Utils.backToActivities();
        });
    }

    loadFillBlankQuestion() {
        if (this.app.currentQuestion >= this.app.practiceWords.length) {
            Utils.showResults(this.app.score, this.app.totalQuestions);
            return;
        }
        
        const currentWord = this.app.practiceWords[this.app.currentQuestion];
        const vowelTeam = currentWord.vowelTeam;
        
        // Initialize selection state for this question
        this.currentSelections = [];
        this.expectedTeams = [];
        this.blankPositions = [];
        
        if (currentWord.multipleTeams && this.app.currentLevel === 2) {
            // Handle words with multiple vowel teams - sequential selection
            this.expectedTeams = vowelTeam.split(',');
            this.setupMultipleSelectionInterface(currentWord);
        } else {
            // Handle single vowel team - original logic
            this.setupSingleSelectionInterface(currentWord);
        }
        
        Utils.updateProgress('blank', this.app.currentQuestion, this.app.totalQuestions);
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
        const currentWord = this.app.practiceWords[this.app.currentQuestion];
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
            const allTeams = Object.values(WordDictionary.vowelTeamGroups).flat();
            // Add special patterns
            allTeams.push('o_e', 'i_e');
            
            // Create a pool of distractor options 
            const availableTeams = [...new Set(allTeams)].filter(team => 
                team !== currentElement && 
                !this.currentSelections.slice(0, selectionIndex).includes(team)
            );
            
            // Add 3 random distractors
            const shuffledDistractors = Utils.shuffleArray([...availableTeams]);
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
        
        options = Utils.shuffleArray(options);
        
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
        if (WordDictionary.vowelTeamGroups[correctSound]) {
            const sameSound = WordDictionary.vowelTeamGroups[correctSound].filter(team => team !== correctTeam);
            options.push(...sameSound);
        }
        
        // Add some random different teams
        const allTeams = Object.values(WordDictionary.vowelTeamGroups).flat();
        const otherTeams = allTeams.filter(team => !options.includes(team));
        
        while (options.length < 4 && otherTeams.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherTeams.length);
            options.push(otherTeams.splice(randomIndex, 1)[0]);
        }
        
        options = Utils.shuffleArray(options);
        
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
        
        // Only record the selection if it's correct
        if (isCorrect) {
            this.currentSelections[selectionIndex] = selectedTeam;
        }
        
        // Update progress dots
        const dots = document.querySelectorAll('.progress-dot');
        if (isCorrect) {
            dots[selectionIndex].classList.remove('active');
            dots[selectionIndex].classList.add('correct');
        } else {
            // Don't change the dot for incorrect answers - keep it active so user knows to keep trying
            dots[selectionIndex].classList.add('incorrect');
            setTimeout(() => {
                dots[selectionIndex].classList.remove('incorrect');
            }, 1500);
        }
        
        // Show selected answer only if correct
        if (isCorrect) {
            this.updateSelectedAnswers(selectionIndex, selectedTeam, isCorrect);
        }
        
        // Fill in the blank with the answer (correct or incorrect)
        this.fillBlankWithAnswer(selectionIndex, selectedTeam, isCorrect);
        
        if (isCorrect) {
            // Disable current options only if correct
            document.querySelectorAll('.choice-btn').forEach(btn => {
                btn.disabled = true;
                if (btn.textContent === selectedTeam) {
                    btn.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                }
            });
            
            if (selectionIndex < this.expectedTeams.length - 1) {
                // Move to next selection only if current answer is correct
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
        } else {
            // Incorrect answer - highlight wrong choice briefly and let user try again
            document.querySelectorAll('.choice-btn').forEach(btn => {
                if (btn.textContent === selectedTeam) {
                    btn.style.background = 'linear-gradient(135deg, #fbb6ce, #f093fb)';
                    setTimeout(() => {
                        btn.style.background = '';
                    }, 1500);
                }
            });
            
            // Show feedback encouraging to try again
            const feedback = document.getElementById('blank-feedback');
            feedback.textContent = `💫 Try again! Choose the correct ${this.expectedTeams[selectionIndex].length === 1 ? 'vowel' : 'vowel team'} for blank #${selectionIndex + 1}.`;
            feedback.className = 'feedback incorrect';
            
            // Clear feedback after delay
            setTimeout(() => {
                feedback.textContent = '';
                feedback.className = 'feedback';
            }, 3000);
        }
    }

    updateSelectedAnswers(selectionIndex, selectedTeam, isCorrect) {
        const container = document.getElementById('selected-answers');
        const answerDiv = document.createElement('div');
        answerDiv.className = `selected-answer ${isCorrect ? 'correct' : 'incorrect'}`;
        answerDiv.innerHTML = `
            <span class="blank-number">#${selectionIndex + 1}:</span>
            <span class="selected-team">${selectedTeam}</span>
            <span class="status-icon">${isCorrect ? '✓' : '✗'}</span>
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
                
                // Keep the incorrect answer visible - don't reveal correct answer
                // Let the user continue with the remaining blanks or try again
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
            this.app.score++;
            feedbackEl.textContent = `🎉 Perfect! All vowel teams are correct!`;
            feedbackEl.className = 'feedback correct';
            Utils.showCelebration();
            Utils.updateScore(this.app.score);
            Utils.addStar();
        } else {
            const partialCredit = correctCount / this.expectedTeams.length;
            if (partialCredit >= 0.5) {
                this.app.score += partialCredit;
            }
            feedbackEl.textContent = `💫 Good try! You got ${correctCount} out of ${this.expectedTeams.length} vowel teams correct.`;
            feedbackEl.className = 'feedback partial';
        }
        
        setTimeout(() => {
            this.app.currentQuestion++;
            this.loadFillBlankQuestion();
        }, 3000);
    }

    checkBlankAnswer(selected, correct) {
        const feedbackEl = document.getElementById('blank-feedback');
        
        if (selected === correct) {
            this.app.score++;
            feedbackEl.textContent = `🎉 Correct! "${correct}" makes the right sound!`;
            feedbackEl.className = 'feedback correct';
            
            Utils.showCelebration();
            Utils.updateScore(this.app.score);
            Utils.addStar();
            
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
                this.app.currentQuestion++;
                this.loadFillBlankQuestion();
            }, 2500);
            
        } else {
            feedbackEl.textContent = `💫 Try again! Listen to how "${correct}" sounds in this word.`;
            feedbackEl.className = 'feedback incorrect';
            
            // Fill in the blank with incorrect answer only - don't reveal correct answer
            this.fillSingleBlankWithAnswer(selected, false);
            
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
                Utils.speakWord(this.app.practiceWords[this.app.currentQuestion].word);
            }, 1000);
        }
    }

    fillSingleBlankWithAnswer(selectedAnswer, isCorrect) {
        const blankSpans = document.querySelectorAll('.single-blank');
        
        if (blankSpans.length > 0) {
            // Check if this is an o_e pattern (two blanks)
            if (blankSpans.length === 2 && selectedAnswer === 'o_e') {
                // Handle o_e pattern with separate blanks for 'o' and 'e'
                blankSpans[0].textContent = 'o';
                blankSpans[1].textContent = 'e';
                
                // Style both blanks
                blankSpans.forEach(span => {
                    if (isCorrect) {
                        span.style.background = 'linear-gradient(135deg, #a8e6cf, #88d8a3)';
                        span.style.color = '#2d5a3d';
                    } else {
                        span.style.background = 'linear-gradient(135deg, #fbb6ce, #f093fb)';
                        span.style.color = '#7c2982';
                        
                        // Keep the incorrect answer visible - don't reveal correct answer
                        // Let the user try again with the other options
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
                    
                    // Keep the incorrect answer visible - don't reveal correct answer
                    // Let the user try again with the other options
                }
            }
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FillBlanksActivity;
} else {
    window.FillBlanksActivity = FillBlanksActivity;
}