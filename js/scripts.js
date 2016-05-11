$(document).ready(function(){

  var tock,
      $scope = {};
  console.log("loaded");

  //jQuery HTML Elements
  var $minutes = $('#minutes'),
      $seconds = $('#seconds'),
      $play = $('#play'),
      $pause = $('#pause'),
      $restart = $('#restart'),
      $user = $('#user'),
      $comp = $('#comp'),
      $won = $('#won'),
      $tied = $('#tied'),
      $lost = $('#lost');

  $scope.restart = function(){
    $minutes.val(0);
    $seconds.val(0);
    $won.text(0);
    $tied.text(0);
    $lost.text(0);
    $user.attr('src', './images/blank.png');
    $comp.attr('src', './images/blank.png');

    $scope.playing = false;
    clearInterval(tock);
    $scope.userSelection = "./images/blank.png";
    $scope.compSelection = "./images/blank.png";
  };
  $scope.restart();

  play.click(function(){
    // $scope.playing = true;
    console.log("play on");
    // tick();
    // tock = setInterval(tick, 1000);
  });
  $scope.pause = function() {
    $scope.playing = false;
    clearInterval(tock);
  };

  function tick(){
    $scope.seconds--;
    if($scope.minutes === 0)
     if($scope.seconds === 9) alert("10 seconds remaining");
     else if($scope.seconds === 0) endGame();
    if($scope.seconds < 0){
      $scope.minutes--;
      $scope.seconds = 59;
    }
  }

  function endGame(){
    if($scope.won > $scope.lost) alert("Congratulations. You won!!");
    else if($scope.won === $scope.lost) alert("TIED");
    else alert("Sorry, but you lost this time...");
    $scope.restart();
  }

  $scope.throw = function(choice){
    if($scope.playing){
      if(choice === 1) $scope.userSelection = "./images/paper1.png";
      else if(choice === 2) $scope.userSelection = "./images/scissors1.png";
      else $scope.userSelection = "./images/rock1.png";

      var comp = Math.ceil(Math.random()*3);

      if(comp === 1) $scope.compSelection = "./images/paper2.png";
      else if(comp === 2) $scope.compSelection = "./images/scissors2.png";
      else $scope.compSelection = "./images/rock2.png";


      if(choice === comp) $scope.tied++;
      else switch(choice){
        case 1:
          (comp === 3) ? $scope.won++ : $scope.lost++; break;
        case 2:
          (comp === 1) ? $scope.won++ : $scope.lost++; break;
        case 3:
          (comp === 2) ? $scope.won++ : $scope.lost++; break;
      }
    }
  };

});
