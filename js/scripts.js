$(document).ready(function(){

  var tock,
      seconds,
      minutes,
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

  function restart(){
    $minutes.val(0);
    $seconds.val(0);
    $won.text(0);
    $tied.text(0);
    $lost.text(0);
    $user.attr('src', './images/blank.png');
    $comp.attr('src', './images/blank.png');
    $play.show();
    $pause.hide();

    $scope.playing = false;
    clearInterval(tock);
  }
  restart();

  $play.click(function(){
    $scope.playing = true;
    console.log($scope.playing);

    $play.hide();
    $pause.show();
    seconds = $seconds.val();
    minutes = $minutes.val();
    tick();
    tock = setInterval(tick, 1000);
  });
  $pause.click(function(){
    $scope.playing = false;
    $play.show();
    $pause.hide();
    clearInterval(tock);
  });
  $restart.click(restart);

  function tick(){
    seconds--;
    console.log(minutes);
    console.log(seconds);
    $seconds.val(seconds);
    if(minutes > 0){
      if(seconds < 0){
        seconds = 59;
        $minutes.val(--minutes);
        $seconds.val(seconds);
      }
    }
    else
      if(seconds === 10) alert("10 seconds remaining");
      else if(seconds <= 0) endGame();
  }

  function endGame(){
    if($scope.won > $scope.lost) alert("Congratulations. You won!!");
    else if($scope.won === $scope.lost) alert("TIED");
    else alert("Sorry, but you lost this time...");
    restart();
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
