var myApp = angular.module( 'myApp', [] );

myApp.controller( 'WhereMyPeeps', function( $http ){ //removed '$http'

var vm = this;

vm.addRecord = function(){
var objectToSend ={
name: vm.nameIn,
location: vm.locationIn,
}; //end objectToSend
$http({
method: 'POST',
url: '/testPost',
data: objectToSend
}).then(function(response){
  vm.getRecords();
});
vm.nameIn ='';
vm.locationIn='';
};//end addRecord

vm.getRecords = function(){
$http({
method: 'GET',
url: '/getRecords',
}).then( function( response ){
vm.allTheRecords = response.data;

console.log( vm.allTheRecords );

}); function myError( response ){ //changed comma to semi
console.log( response.statusText );
}
};//end getRecords
vm.getRecords();


vm.deleteRecord = function(id){
   console.log('delete',id);

   $http({
     method: 'DELETE',
     url: '/deleteRecord/' + id,
   }).then(function mySuccess(response){
     vm.getRecords();
   }, function myBad(response){
     console.log(response);
   });
 };
});//end of controller
