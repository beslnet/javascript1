//1

$('input:first').val('Daniela Mora');
$('#first-name').val('Rodrigo');
$('[name=firstname]').val('Francisca');

//2
$( "a" ).click(function( event ) {
	alert("aaa");
  event.stopPropagation();

  // Do something
});