"use strict";
var app = angular.module('hsApp', []);
app.controller('hsCtrl',['$scope', '$http', function($scope, $http){
  // $scope.itemTemplate = {
  //   structureName: null,
  //   structure:[
  //   {
  //     name: null,
  //     guiType: null,
  //     validation:[null]
  //   }]
  // };
  $scope.counter = 0;
  $scope.itemTemplate = {};
  $scope.itemTemplate.structure = [];
  $scope.add = function(itemTemplate){
    $scope.itemTemplate.structure.push(itemTemplate.structure); 
    console.log($scope.itemTemplate);
    $scope.counter += 1 ;
  }
}]);