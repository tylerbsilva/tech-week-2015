angular.module('thankYouApp', [])
  .controller('thankYouController', ['$scope', '$http', '$location', function($scope, $http, $location){
    // grab the path
    $scope.wayfinding = $location.path();
    console.log($scope.wayfinding);
    // remove the slash
    $scope.company = $scope.wayfinding.substring(1);
    // get recruiter list
    $http.get('./assets/recruiters.JSON').
    success(function(data, status, headers, config) {
      $scope.data = data[$scope.company];

      // set user info
      $scope.userName = $scope.data.name;
      $scope.message = $scope.data.message;
    });
    // set your own personal data
    $scope.eventName = 'TechWeek2015';
    $scope.pathToImg = 'assets/header-image.png';
    $scope.yourName = 'Tyler Silva';
    $scope.jobTitle = 'Front End Web Developer';
    $scope.website = 'www.tylerbsilva.com';
    $scope.phone = '847.852.0696';
    $scope.email = 'tylerbsilva@gmail.com';
    $scope.pathToResume = 'assets/Silva_Tyler_Resume.pdf';
    $scope.summary = 'A results-driven, front end developer seeking a role that will allow me to advance my expertise in web development. Heavily influenced by my design background, and three years of experience in  the athletic and entertainment industries, my skillset is diversified to aide in any situation. I am creative, spontaneous, and adapt well to all environments. Nearing completion of Thinkful’s Front End Development bootcamp, I am eager to take my web development career to the next level.';
    // set your social media accounts
    $scope.facebook = 'ty.silva';
    $scope.twitter = 'tysilva';
    $scope.github = 'tylerbsilva';
    $scope.linkedIn = 'tylerbsilva';
  }])

  .directive('thankYou', function(){
    return {
      restrict: 'E',
      templateUrl: './js/templates/thank-you.html'
    };
  })

  .directive('basicInfo', function(){
    return {
      restrict: 'E',
      templateUrl: './js/templates/basic-info.html'
    };
  })

  .directive('socialMedia', function(){
    return {
      restrict: 'E',
      templateUrl: './js/templates/social-media.html'
    };
  });
