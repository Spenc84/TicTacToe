$(document).ready(function(){

  // Local variable
  var tock,
      seconds,
      minutes,
      playing;

  // jQuery HTML Elements
  var $minutes = $('#minutes'),
      $seconds = $('#seconds'),
      $play = $('#play'),
      $pause = $('#pause'),
      $restart = $('#restart'),
      $rock = $('#rock'),
      $scissors = $('#scissors'),
      $paper = $('#paper'),
      $user = $('#user'),
      $comp = $('#comp'),
      $won = $('#won'),
      $tied = $('#tied'),
      $lost = $('#lost');

  restart();
  console.log("loaded");

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
    playing = false;
    clearInterval(tock);
  }
  function play(){
    seconds = parseInt($seconds.val());
    minutes = parseInt($minutes.val());
    if(minutes === 0 && seconds === 0) return;
    playing = true;
    $play.hide();
    $pause.show();
    tick();
    if(seconds !== 0) tock = setInterval(tick, 1000);
  }
  function pause(){
    playing = false;
    $play.show();
    $pause.hide();
    clearInterval(tock);
  }

  $play.click(play);
  $pause.click(pause);
  $restart.click(restart);

  function tick(){
    seconds--;
    $seconds.val(seconds);
    if(minutes > 0) {
      if(seconds < 0){
        seconds = 59;
        $minutes.val(--minutes);
        $seconds.val(seconds);
      }
    } else {
      if(seconds === 10) alert("10 seconds remaining");
      else if(seconds <= 0) endGame();
    }
  }

  function endGame(){
    var won = $won.text();
        lost = $lost.text();

    if(won > lost) alert("Congratulations. You won!!");
    else if(won === lost) alert("TIED");
    else alert("Sorry, but you lost this time...");
    restart();
  }

  $rock.click(function(){$throw(3);});
  $scissors.click(function(){$throw(2);});
  $paper.click(function(){$throw(1);});
  function $throw(choice){
    if(playing){
      if(choice === 1) $user.attr('src', './images/paper1.png');
      else if(choice === 2) $user.attr('src', './images/scissors1.png');
      else $user.attr('src', './images/rock1.png');

      var comp = Math.ceil(Math.random()*3);

      if(comp === 1) $comp.attr('src', './images/paper2.png');
      else if(comp === 2) $comp.attr('src', './images/scissors2.png');
      else $comp.attr('src', './images/rock2.png');


      if(choice === comp) $tied.text(parseInt($tied.text()) + 1);
      else switch(choice){
        case 1:
          (comp === 3) ? $won.text(parseInt($won.text()) + 1) : $lost.text(parseInt($lost.text()) + 1); break;
        case 2:
          (comp === 1) ? $won.text(parseInt($won.text()) + 1) : $lost.text(parseInt($lost.text()) + 1); break;
        case 3:
          (comp === 2) ? $won.text(parseInt($won.text()) + 1) : $lost.text(parseInt($lost.text()) + 1); break;
      }
    }
  }

});
