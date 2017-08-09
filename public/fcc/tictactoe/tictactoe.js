/*User Story: I can play a game of Tic Tac Toe with the computer. - WIP

User Story: My game will reset as soon as it's over so I can play again - Done

User Story: I can choose whether I want to play as X or O - Done
*/

/* Todo :
      - front - done
      - Draw - bugged : Ne marche pas si le dernier coup est un coup gagnant... problème au niveau de "count" :
      quand il est égal à 9, balance toujours draw(), ne regarde pas s'il y a une combinaison gagnante
      ==> solution trouvée : encapsuler draw() dans un setTimeout(fun, 0) pour s'assurer qu'il soit lancé :) ==> DONE.
      - auto New Game - done
      - IA - Done
      - change popup - disactivated
      - One or Two Players - done
      - Random to choose the first player
      - Table of scores
      - Change color of cases when there is a winner - done
*/

$(function() {
  let count = 0
  const [notPlaying, playing] = [0, 1]
  let status = playing
  const [winner, noWinner] = [0, 1]
  let win = noWinner
  const [turnX, turnO] = [0, 1]
  let turn = turnX
  let winningTrio = []
  let boxesIndex = 0
  let boardFull = false
  let humanXorO = "X"
  let computerXorO = "O"
  const [onePlayer, twoPlayers] = [0, 1]
  let mode = onePlayer
  let points = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  let xPositions = [];
  let oPositions = [];
  let tempXPositions = xPositions
  let tempOPositions = oPositions
  let actualBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  const boxes = $('.boxes')
  const reset = $('.reset')
  const winCombinaisons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
  ];

  // OPTIONS :

    $(".xOrO").on("click", function() {
      if (count === 0) {
      humanXorO = $("input[name='XorO']:checked").val()
      humanXorO === "X" ? computerXorO = "O" : computerXorO = "X"
      if (turn === turnX && computerXorO==="X" && mode === onePlayer){
        setTimeout(function(){multipleChoices()},500)
      }
      if (turn === turnO && computerXorO==="O" && mode === onePlayer){
        setTimeout(function(){multipleChoices()},500)
      }
      console.log(humanXorO + " " + computerXorO + " " + turn)
    }
    });

    $(".oneOrTwoPlayers").on("click", function() {
      if (count === 0) {
      $("input[name='1or2']:checked").val() === "2" ? mode = twoPlayers : mode = onePlayer
      if (turn === turnX && computerXorO==="X" && mode === onePlayer){
        setTimeout(function(){multipleChoices()},500)
      }
      if (turn === turnO && computerXorO==="O" && mode === onePlayer){
        setTimeout(function(){multipleChoices()},500)
      }
      console.log(humanXorO + " " + computerXorO + " " + turn)
      console.log(mode)
    }
    });


  //Random
  function randomize(){
    Math.floor(Math.random() * 2) > 0 ? turn = turnO : turn = turnX

    if (turn === turnX && computerXorO==="X" && count === 0 && mode === onePlayer){
      setTimeout(function(){multipleChoices()},500)
    }
    if (turn === turnO && computerXorO==="O" && count === 0 && mode === onePlayer){
      setTimeout(function(){multipleChoices()},500)
    }
    console.log(turn)
  }

  randomize()
  // COMPARE TWO ARRAYS
  function containsAll(combinaisonsChecked, positions) {
    var arrayOfNumbers = positions.map(Number);
    if (status === playing) {
      for (var y = 0, len = combinaisonsChecked.length; y < len; y++) {
        if ($.inArray(combinaisonsChecked[y], arrayOfNumbers) == -1) return false;
      }
      winningTrio = combinaisonsChecked
      return true;
    }
  }

  // CHECK IF THE BOARD IS FULL - BUGGED CAUSE OF IA
  function draw() {
    console.log(boardFull)

    $('.turn').html("It was a draw")
    setTimeout(function() {
      newGame()
    }, 2000)
  }

  // CHECK IF THERE IS A WINNER
  function isThereAWinner(positions) {
    for (var i in winCombinaisons) {
      let combinaisonsChecked = winCombinaisons[i]
      if (count >= 5 && count <= 9 && status === playing) {
        if (containsAll(combinaisonsChecked, positions) === true) {
          return true
        }
      }
    }
    setTimeout(function() {
      if (count === 9 && winningTrio.length <3) {
        draw()
      }
    }, 0)
  }
  //SAME FUNCTION THAN isThereAWinner() without draw()
  function check(positions){
    for (var i in winCombinaisons) {
      let combinaisonsChecked = winCombinaisons[i]
        if (containsAll(combinaisonsChecked, positions) === true) {
          win = winner
        }
      }
    }
  function newGame() {
    randomize()
    boardFull = false
    $(boxes).html('')
    $('.turn').html("NEW GAME")
    actualBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    xPositions = []
    oPositions = []
    count = 0
    winningTrio = []
    status = playing
    win = noWinner
    $(reset).addClass("invisible")
    $('body').css("background-color", "#009688")
    $("input[name='1or2']:checked").val() === "2" ? mode = twoPlayers : mode = onePlayer
    humanXorO = $("input[name='XorO']:checked").val()
    humanXorO === "X" ? computerXorO = "O" : computerXorO = "X"
    for (var i = 1; i <= 9; i++) {
      let id = "#" + i
      $(id).css("background-color", "")
    }
  }


  // JQUERY STUFF TO COMPLETE THE BOARD
  $(boxes).on('click', function() {
    let value = $(this).attr("value")
    boxesIndex = Number(value) - 1
    if (status === playing) {
      if ($(this).html() === '') {
        if (turn === turnX) {
          count++
          console.log("count (X):" + count)
          xPositions.push(value)
          console.log("xPositions : " + xPositions)
          turn = turnO
          $(this).html("<span class='X'>X</span>")
          $('.turn').html("Turn of <span class='O'>O</span> !")
          $(reset).removeClass("invisible")
          if (isThereAWinner(xPositions) === true) {
            setTimeout(function() {
              $('.turn').html("Congratulations <span class='X'>X</span> !")
              $('body').css("background-color", "#E57373")
              status = notPlaying
              win = winner
              for (var i in winningTrio) {
                let id = "#" + winningTrio[i]
                $(id).css("background-color", "#E57373")
              }

            }, 0)

            setTimeout(function() {
              newGame()
            }, 2000)
          }

          multipleChoices()
        }
        else if (turn === turnO) {
          $(this).html("<span class='O'>O</span>")
          count++
          console.log("count(O) :" + count)
          oPositions.push(value)
          console.log("oPositions : " + oPositions)
          turn = turnX
          $('.turn').html("Turn of <span class='X'>X</span> !")
          $(reset).removeClass("invisible")
          if (isThereAWinner(oPositions) === true) {
            setTimeout(function() {
              $('.turn').html("Congratulations <span class='O'>O</span> !")
              $('body').css("background-color", "#FFF59D")
              status = notPlaying
              win = winner
              for (var i in winningTrio) {
                let id = "#" + winningTrio[i]
                $(id).css("background-color", "#FFF59D")
              }
            }, 0)
            setTimeout(function() {
              newGame()
            }, 2000)
          }
          multipleChoices()
        }

      }
    } else {
      0
    }
  })

  $(reset).on('click', function() {
    newGame()
  })



  /* Pour que mon ordinateur puisse jouer, je veux qu'il puisse analyser les différents choix possibles et leur associer une valeur. Le meilleur choix étant celui à la plus haute valeur.*/
  function multipleChoices() {

    if (mode === onePlayer) {
    let emptyPositions = []
    tempXPositions = xPositions
    tempOPositions = oPositions
    points = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    actualBoard.splice(boxesIndex, 1, (boxesIndex + 1))

    function findEmptyPositions() {
      emptyPositions = []
      for (var i = 0; i <= 8; i++) {
        let temp = (actualBoard[i] - i)
        temp != 1 ? emptyPositions.push(i + 1) : 0
      }
      emptyPositions.length === 0 ? boardFull = true : 0
      points.length = emptyPositions.length
      if (emptyPositions.includes(5) === true){
        let center = emptyPositions.indexOf(5)
        points[center]=1000
      }
    }
    findEmptyPositions()


    function compareEmptyPositions() {

      for (var i in emptyPositions){
          tempXPositions.push(emptyPositions[i])
          console.log("tempX " +tempXPositions)
          tempOPositions.push(emptyPositions[i])
          console.log("tempO " +tempOPositions)

        if (computerXorO === "X"){
          check(tempOPositions)
          if (win === winner){
            points[i] === 0 ? points[i]=10 : points[i] = 1
            win = noWinner
          }
          check(tempXPositions)
          if (win === winner){
          points[i] === 0 ? points[i] = 100 : points[i] = 1
          win = noWinner
        }
        }
        if (computerXorO === "O"){
          check(tempXPositions)
          if (win === winner){
            points[i] === 0 ? points[i]=10 : points[i] = 1
            win = noWinner
          }
          check(tempOPositions)
          if (win === winner){
          points[i] === 0 ? points[i] = 100 : points[i] = 1
          win = noWinner
        }
          console.log("points : " + points)
        }
          tempXPositions.splice(-1)
          tempOPositions.splice(-1)
        }
      }
      compareEmptyPositions()

function play() {
        // Je souhaite regarder l'array "points" récupérer l'index de la plus haute valeur, et jouer mon coup sur l'index correspondant dans l'array "emptyPositions"
        let i = points.indexOf(Math.max(...points));
        let id = "#" + emptyPositions[i]
        console.log("I play here : " + id)
        if (computerXorO === "X" && turn === turnX && status === playing){
          xPositions.push(emptyPositions[i])
          boxesIndex = Number(emptyPositions[i]) - 1
          actualBoard.splice(boxesIndex, 1, (boxesIndex + 1))
          $(id).html("<span class='X'>X</span>")
          turn = turnO
          count++
          i < 0 ? draw() : 0
          if (isThereAWinner(xPositions) === true) {
            setTimeout(function() {
              $('.turn').html("Congratulations <span class='X'>X</span> !")
              $('body').css("background-color", "#E57373")
              status = notPlaying
              win = winner
              for (var y in winningTrio) {
                let ids = "#" + winningTrio[y]
                $(ids).css("background-color", "#E57373")
              }

            }, 0)

            setTimeout(function() {
              newGame()
            }, 2000)
          }
        }
        if (computerXorO === "O" && turn === turnO && status === playing){
          oPositions.push(emptyPositions[i])
          boxesIndex = Number(emptyPositions[i]) - 1
          actualBoard.splice(boxesIndex, 1, (boxesIndex + 1))
          $(id).html("<span class='O'>O</span>")
          turn = turnX
          count++
          i < 0 ? draw() : 0
          if (isThereAWinner(oPositions) === true) {
            setTimeout(function() {
              $('.turn').html("Congratulations <span class='O'>O</span> !")
              $('body').css("background-color", "#FFF59D")
              status = notPlaying
              win = winner
              for (var y in winningTrio) {
                let ids = "#" + winningTrio[y]
                $(ids).css("background-color", "#FFF59D")
              }
            }, 0)
            setTimeout(function() {
              newGame()
            }, 2000)
          }
        }
      }
      setTimeout(function(){play()},500)
    }
  }
})
