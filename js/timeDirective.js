angular.module('timeApp').directive('showTime', function() {
  return {
    restrict: 'AE',
    scope: {
      myVal: '&'
    },
    template: '<div> The current time is {{time | date: "shortTime"}}  {{myVal}} </div>',

    //
    // controller: function($scope) {
    //   $scope.myVal = $scope.myVal + '!!!!!!';
    // },


    link: function(scope, elem, attrs) {
      console.log(scope.time)
      scope.time = new Date();
      

      // console.log(scope.time)
    }
  }
})
