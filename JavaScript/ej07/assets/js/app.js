(function (){
	var validar_email=/^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/;
	console.log(validar_email.test("hola@arkaitzgarro.com")===true);
	console.log(validar_email.test("jaioneirizar@hotmail.es")===true);
	console.log(validar_email.test("jaione.irizar@gmail.com")===true);
	console.log(validar_email.test(".@test.es")===true);
	console.log(validar_email.test("-@arkaitzgarro.com")===true);
	console.log(validar_email.test("hola.test-test@arkaitzgarro.com")===true);
	console.log(validar_email.test("hola.aa@arkaitzgarro.es")===true);


})();