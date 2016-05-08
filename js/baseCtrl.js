angular.module('rockPaperScissors')
.controller('baseCtrl', function($scope){
  $scope.minutes = 0;
  $scope.seconds = 0;
  $scope.won = 0;
  $scope.tied = 0;
  $scope.lost = 0;
  $scope.playing = false;
});
