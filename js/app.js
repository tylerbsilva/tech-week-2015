angular.module('thankYouApp', [])

  .controller('thankYouController', ['$scope', function($scope){
    $scope.userName = 'naomi';
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    $scope.eventName = 'TechWeek2015';
    $scope.pathToImg = 'assets/header-image.png';
    $scope.yourName = 'Tyler Silva';
    $scope.jobTitle = 'Front End Web Developer';
    $scope.website = 'www.tylerbsilva.com';
    $scope.phone = '847.852.0696';
    $scope.email = 'tylerbsilva@gmail.com';
    $scope.pathToResume = 'assets/Silva_Tyler_Resume.pdf';
    $scope.summary = 'A results-driven, front end developer seeking a role that will allow me to advance my expertise in web development. Heavily influenced by my design background, and three years of experience in  the athletic and entertainment industries, my skillset is diversified to aide in any situation. I am creative, spontaneous, and adapt well to all environments. Nearing completion of <a href="https://www.thinkful.com/">Thinkful</a>’s Front End Development bootcamp, I am eager to take my web development career to the next level.';

    $scope.facebook = 'ty.silva';
    $scope.twitter = 'tysilva';
    $scope.github = 'tylerbsilva';
    $scope.linkedIn = 'tylerbsilva';
  }])

  .directive('thankYou', function(){
    return {
      restrict: 'E',
      templateUrl: '/js/templates/thank-you.html'
    };
  })

  .directive('basicInfo', function(){
    return {
      restrict: 'E',
      templateUrl: '/js/templates/basic-info.html'
    };
  })

  .directive('socialMedia', function(){
    return {
      restrict: 'E',
      templateUrl: '/js/templates/social-media.html'
    };
  });
