{
  const playGame = function (playerInput){
    clearMessages()
    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      }
      else if(argMoveId == 2){
        return 'papier';
      }
      else if(argMoveId == 3){
        return 'nożyce';
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    const displayResult = function (argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
      else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja wygrywam!');
      }
      else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
      }
      else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
      }
      else if( argComputerMove ==  argPlayerMove ){
        printMessage('Remis!');
      }
      else if(argPlayerMove == 'nieznany ruch') {
        printMessage('Zły ruch!!!!')
      } 
    }
    displayResult(computerMove, playerMove);

  }
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}
