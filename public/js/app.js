"use strict";
var app = angular.module('hsApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/home',
    controller: 'homeCtrl'
  }).when('/date', {
    templateUrl: 'pages/date',
  });
}]);
app.controller('homeCtrl',['$scope', '$http', function($scope, $http){
  // $scope.itemTemplate = {
  //   structureName: null,
  //   structure:[
  //   {
  //     name: null,
  //     guiType: null,
  //     validation:[null]
  //   }]
  // };
  $scope.itemTemplate = {};
  $scope.itemTemplate.structure = [];
  $scope.name = "Aladdin";
  $scope.add = function(itemTemplate){
    $http.post('/users/newObj',{
      "data": $scope.name
    }).success(function (){
      console.log("Sucsses");
    }).error(function (data, status){
      console.log(data);
    });
    $scope.itemTemplate.structure.push(itemTemplate.structure); 
    console.log($scope.itemTemplate);
    $scope.itemTemplate = {
      structure:[
      {
        name: null,
        guiType: null,
        validation:[null]
      }]
    };
  }
}]);