var app = angular.module("loppu", ["ngMaterial"]);

app.controller("loppuCtrl", function ($scope, $mdDialog, $http) {
  document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
  $scope.sammuta = function(){
    navigator.app.exitApp();
  }
var OpenWeatherAppKey = "690b69deb347e843d6a1c85c5a92500f";
$scope.kaupunki = "";
$scope.saaZip = function(){
  var OpenWeatherAppKey = "690b69deb347e843d6a1c85c5a92500f";
   $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.kaupunki +
  '&appid=690b69deb347e843d6a1c85c5a92500f' + '&units=metric' + '&lang=FI').then(function(response){
    var data = response.data;
    $scope.nimi = data.name;
    $scope.lampo = "Lämpö: " + data.main.temp + "C";
    $scope.tuuli = "Tuuli: " + data.wind.speed + "m/s";
    $scope.pilvet = "Pilvisyys: " + data.clouds.all + "%";
    $scope.kuvaus = "Kuvaus: " + data.weather[0].description;
    $scope.maa = data.sys.country;
    $scope.ikoni = "owf owf-" + data.weather[0].id + " owf-2x";

console.log(response);
},function errorCallback(response) {
          alert("Tarkista kirjoitusasu, tai ongelmia tietojen haussa");
  });
  var date = new Date();

  var options = {
     formatLength:'short',
     selector:'date'
  }
  navigator.globalization.dateToString(date, onSucces, onError, options);
  function onSucces(date) {
     $scope.pvm = date.value;
  }
  function onError(){
     alert('Error getting dateString');
  }
};
}
$scope.saaGps = function getPosition(){
  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady(){

  var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  var options = {
    enableHighAccuracy: false

  }
  function onSuccess(position){
  var OpenWeatherAppKey = "690b69deb347e843d6a1c85c5a92500f";
  var date = new Date();

  var options = {
     formatLength:'short',
     selector:'date'
  }
  navigator.globalization.dateToString(date, onSucces, onError, options);
  function onSucces(date) {
     $scope.pvm = date.value;
  }
  function onError(){
     alert('Error getting dateString');
  }
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
   $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude +
  '&appid=690b69deb347e843d6a1c85c5a92500f' + '&units=metric' + '&lang=FI').then(function(response){
    var data = response.data;
    $scope.nimi = data.name;
    $scope.lampo = "Lämpö: " + data.main.temp + "C";
    $scope.tuuli = "Tuuli: " + data.wind.speed + "m/s";
    $scope.pilvet = "Pilvisyys: " + data.clouds.all + "%";
    $scope.kuvaus = "Kuvaus: " + data.weather[0].description;
    $scope.maa = data.sys.country;
    $scope.ikoni = "owf owf-" + data.weather[0].id + " owf-2x";

console.log(response);

},function errorCallback(response) {
          alert("Tarkista kirjoitusasu");
  });
} function onError(error){
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
  }
};
};
});//controller
