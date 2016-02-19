"use strict";
var app = angular.module('hsApp', []);
app.controller('hsCtrl',['$scope', '$http', function($scope, $http){
  $scope.itemTemplate = {
    structureName: null,
    structure:[
    {
      name: null,
      guiType: null,
      validation:[null]
    }]
  };
  $scope.add = function(){
    $scope.itemTemplateNew = $scope.itemTemplate;
    console.log($scope.itemTemplate);
  }
}]);