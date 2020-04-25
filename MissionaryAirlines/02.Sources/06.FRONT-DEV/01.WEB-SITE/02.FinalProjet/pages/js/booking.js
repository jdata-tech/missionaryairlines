function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function send(userData) {
	console.log(userData);
	
	fetch('http://localhost:8066/resource', {
												method: 'POST',
												headers: {
													'Content-Type': 'application/json;charset=utf-8'
												},
												body: JSON.stringify(userData)
											}
	)
	.then(response => response.status)
	.then(status => console.log(status));

	return status;
}

function publishComment(){
	console.log("On y est !");
	
	/*fetch('http://localhost:8066/resource?name=Jessica')
			  .then(response => response.json())
			  .then(toto => console.log(toto.message));

	
	var req = new XMLHttpRequest();
	// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
	req.open("GET", "http://localhost:8066/resource?name=Jessica");
	// Gestion de l'événement indiquant la fin de la requête
	req.addEventListener("load", function () {
		// Affiche la réponse reçue pour la requête
		console.log(req.responseText);
	});
	req.send(null);
	
	/*fetch('http://localhost:8066/resource?name=Jessica')
	  .then(response => response.json())
	  .then(toto => alert(toto));*/
	
	/*fetch('https://orion.trs.dalkia.net/orionrest/rest/system/site/list', {
	  headers: {
		Authorization: 'Bearer 8sm6yvs2nhnrzyyeb669ysc6n'
	  }
	})
	  .then(response => response.text())
	  .then(contents => console.log(contents))
	  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));*/
}

function programDataById(programID){
	var programData = {};
	
	switch (programID) {
		case "1" :
			programData.name = "Ministres aux Enfants";
			programData.fullName = "UMPJ des Ministres aux Enfants";
			programData.subName = "Ministres aux Enfants";
			programData.startDate = new Date('2021-01-30');
			programData.endDate = new Date('2021-02-06');
			programData.endDateOffer = new Date('2020-12-30 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "2" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "3" :
			programData.name = "Étudiants & Jeunes";
			programData.fullName = "UMPJ des Étudiants & Jeunes";
			programData.subName = "Étudiants & Jeunes";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "4" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "5" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "6" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "7" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "8" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "9" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "10" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "11" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "12" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		case "13" :
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
			break;
		default:
			programData.name = "Pasteurs & Missionnaires";
			programData.fullName = "UMPJ des Pasteurs & Missionnaires";
			programData.subName = "Leaders et Dirigeants";
			programData.startDate = new Date('2020-03-26');
			programData.endDate = new Date('2020-04-06');
			programData.endDateOffer = new Date('2020-06-31 23:59:59');
			programData.paypalKey = "6YQUEJSY88R9U";
			programData.totalPrice = 600;
			programData.fees = 90;
			programData.currency = "€";
			programData.stars = 5;
			programData.backgroundImage = "img/photo/camp-biblique.jpg";
			programData.badge = "Formation UMPJ";
	}
	
	return programData;
}

function setProgramResumeFields(programID) {
	switch (programID) {
		case "1" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "2" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "3" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "4" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "5" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "6" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "7" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "8" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "9" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "10" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "11" :
			document.getElementById("ProgramResumeName").innerHTML="Camp Biblique des Étudiants";
			document.getElementById("ProgramResumeSubName").innerHTML="Étudiants d'universités";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=31;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Juillet";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=16;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Août";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=135;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=6;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=135*6;
			document.getElementById("ProgramTotalPrice").innerHTML=135*6 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/biblecamp-3.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		case "12" :
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
			break;
		default:
			document.getElementById("ProgramResumeName").innerHTML="UMPJ </br>Pasteurs & Missionnaires";
			document.getElementById("ProgramResumeSubName").innerHTML="Leaders et Dirigeants";
			document.getElementById("ProgramResumeDepartureDay").innerHTML=26;
			document.getElementById("ProgramResumeDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramResumeDepartureYear").innerHTML=2020;
			document.getElementById("ProgramResumeReturnDay").innerHTML=6;
			document.getElementById("ProgramResumeReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramResumeReturnYear").innerHTML=2020;
			document.getElementById("ProgramMonthlyPrice").innerHTML=165;
			document.getElementById("ProgramMonthlyPeriod").innerHTML=3;
			document.getElementById("ProgramServicePrice").innerHTML=90;
			document.getElementById("ProgramAirTicketPrice").innerHTML=165*3;
			document.getElementById("ProgramTotalPrice").innerHTML=165*3 + 90;
			document.getElementById("ProgramBlueuStars").innerHTML='<div class="mt-n1"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i></div>';
			document.getElementById("ProgramImage").innerHTML='<img src="img/photo/koume-6.jpg" alt="" width="100" class="ml-3 rounded">';
	}
}

function setProgramFields(programID) {
	switch (programID) {
		case "1" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "2" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "3" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "4" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "5" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "6" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "7" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "8" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "9" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "10" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "11" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="11" />';
			document.getElementById("ProgramName").innerHTML="Camp Biblique des Étudiants";
			document.getElementById("ProgramDepartureDay").innerHTML=31;
			document.getElementById("ProgramDepartureMonth").innerHTML="Juillet";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=16;
			document.getElementById("ProgramReturnMonth").innerHTML="Août";
			document.getElementById("ProgramReturnPlace").innerHTML="Site du Camp";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		case "12" :
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
			break;
		default:
			document.getElementById("ProgramID").innerHTML='<input type="hidden" name="prg" value="1" />';
			document.getElementById("ProgramName").innerHTML="UMPJ Pasteurs & Missionnaires";
			document.getElementById("ProgramDepartureDay").innerHTML=26;
			document.getElementById("ProgramDepartureMonth").innerHTML="Mars";
			document.getElementById("ProgramDeparturePlace").innerHTML="Aéroport Paris-CDG";
			document.getElementById("ProgramDepartureTime").innerHTML="06";
			document.getElementById("ProgramReturnDay").innerHTML=6;
			document.getElementById("ProgramReturnMonth").innerHTML="Avril";
			document.getElementById("ProgramReturnPlace").innerHTML="Campus de Ndoumbi";
			document.getElementById("ProgramReturnTime").innerHTML="10";
	}
}