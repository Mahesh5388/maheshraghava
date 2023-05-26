let score = JSON.parse(localStorage.getItem('score'))
        if(!score)
        {
            score = {
                wins : 0,
                loses:0,
                tie:0,
            }
        }
        updateScoreElement();
        
        function computerplay()
        {
            let computerMove='';
            let randomNumber = Math.random();
            if(randomNumber>=0 && randomNumber<1/3)
            {
                computerMove = 'rock';
            }
            else if(randomNumber>=1/3 && randomNumber>2/3)
            {
                computerMove = 'paper';
            }
            else
            {
               computerMove = 'scissor';
            }
            return computerMove;

        }

        let result = ' ';
        function humanPlay(humanMove)
        {
            let computerMove = computerplay();
            if(computerMove === 'rock')
            {
                if(humanMove === 'rock')
                {
                    result = 'tie';
                }
                else if(humanMove === 'paper')
                {
                    result = 'you win';
                }
                else if(humanMove === 'scissor')
                {
                    result = 'you lose';
                }
            }
            else if(computerMove === 'paper')
            {
                if(humanMove === 'rock')
                {
                    result = 'you lose';
                }
                else if(humanMove === 'paper')
                {
                    result = 'tie';
                }
                else if(humanMove === 'scissor')
                {
                    result = 'you win';
                }
            }
            else if(computerMove === 'scissor')
            {
                if(humanMove === 'rock')
                {
                    result = 'you win';
                }
                else if(humanMove === 'paper')
                {
                    result = 'you lose';
                }
                else if(humanMove === 'scissor')
                {
                    result = 'tie';
                }
            }
            
            if(result === 'you win')
            {
                score.wins++;
            }
            else if(result === 'you lose')
            {
                score.loses++;
            }
            else if(result === 'tie')
            {
                score.tie++;
            }

            document.querySelector('.js-result').innerText = `${result}`;

            updateScoreElement();

            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.js-compare').innerHTML =  `you
        <img class="move-icon" src="Images/${humanMove}-emoji.png">
        <img class="move-icon" src="Images/${computerMove}-emoji.png">
        computer`;
        }
        function updateScoreElement()
        {
            document.querySelector('.js-score').innerText = `Wins ${score.wins}, Loses: ${score.loses}, Ties:${score.tie}`;
        }
       