var mapaFarmacia; //  L'objecte Google Maps 
var numFarmacia;  //El número del a farmàcia de guàrdia
var dd;  var mm; // Dia i mes  escollits
var ara = new Date(); // Per calcular l'hora en que es fa la consulta


// Mostra la informació asociada a unafarmàcia        
function showMessage(map, marker, msg) {
	var infowindow = new google.maps.InfoWindow({
		content : msg,
		size : new google.maps.Size(30, 50)
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
}

function initialize(opcio) {
	// opcio = 2 => Totes les farmàcies. Oopcio = 1 => Sols lade guàrdia
    // Dia i mes seleccionat en format ENTER!!!
	
	// Important: parseInt(valor, 10) => per evitar error amb els mesos de juliol/agost!!!!
	dd = parseInt(getDia(), 10); 	mm = parseInt(getMes(), 10);
	// alert ("Mes: " + mm +" Dia: " + dd );	
	
	// Farmacies segons el mes. 
	// Gener - Juny i Setembre-Desembre: Totes. Juliol i Agost:Sols 4. Atenció: Actualitzar!!!
	farmaciesJuliol = new Array (4);  	farmaciesJuliol = [3, 4, 5, 7]; 
	farmaciesAgost = new Array (4); 	farmaciesAgost = 	[1, 2, 6, 8 ];
	farmaciesRestaAny = new Array (8);  farmaciesRestaAny = [1, 2, 3, 4, 5, 6, 7, 8];
	
	if ((mm == 7) || (mm == 8)) { // Estiu
		numFarmaciesObertes = 4;
		farmaciesObertes = new Array(numFarmaciesObertes);
		if (mm == 7) {
			farmaciesObertes = farmaciesJuliol;
		}
		else {
			farmaciesObertes = farmaciesAgost;
		}
	}
	else { // Resta de l'any
			numFarmaciesObertes = 8;
			farmaciesObertes = farmaciesRestaAny;
	}

	var horaAct = ara.getHours(); // Hora en que es fa la consulta
	if (horaAct < 9) { 
		dd = dd - 1;  // Encara està de guàrdia la farmàcia d'ahir!!!
	}
	
	// Seleccionem el número de farmacia de guàrdia
	numFarmacia = getNumFarmacia(dd, mm);
	// alert ("Mes: " + mm +" Dia: " + dd + "Farmàcia guàrdia: " + numFarmacia);		
	
	switch (opcio) {
	case 1: { // Sols la de guàrdia
		
		// Informació de la farmàcia
		var novaFarmacia = new Array();
		novaFarmacia = getInfoFarmacia (numFarmacia);
		
		var latLng = new google.maps.LatLng(novaFarmacia['lon'], novaFarmacia['lat']);
		var titol = novaFarmacia['titol'];
		var missatge = novaFarmacia['missatge'];

		icona = "imatges/marker_roig.png";
		// alert ("-> "  + novaFarmacia['titol']+ novaFarmacia['lat'] + " . " + novaFarmacia['lon'] + novaFarmacia['missatge']);
	
		// Opcions globals del mapa 
		var mapOptions = {
			zoom : 17,
			scaleControl : false, 
			streetViewControl : false,
			center : new google.maps.LatLng(novaFarmacia['lon'], novaFarmacia['lat']),
			mapTypeId : google.maps.MapTypeId.ROADMAP 		
		};
		mapaFarmacia = new google.maps.Map(document.getElementById('mapa'), mapOptions);
	
		var farmaciaGuardia = new google.maps.Marker({
			position : latLng,
			map : mapaFarmacia,
			title : titol,
			icon: icona
		});
	
		showMessage(mapaFarmacia, farmaciaGuardia, missatge);
		
		break;
	} // Fi del case
	
	case 2: { //  Totes
		// Opcions globals del mapa 
		// alert ("Opcio: " + opcio);
		var mapOptions = {
			zoom : 15,
			scaleControl : false, 
			streetViewControl : false,
			center : new google.maps.LatLng(39.120938,-0.448143),
			mapTypeId : google.maps.MapTypeId.ROADMAP 		// Tipus de mapa
		};
		mapaFarmacies = new google.maps.Map(document.getElementById('mapa'), mapOptions);
		
		// Informació de totes les farmàcies
		var novaFarmacia = new Array();
		var icona;
		
		// Bucle per a totes les farmàcies
		for (var i=0; i<numFarmaciesObertes; i++) { // De 0 a 7!! 
			// Informació de la farmàcia
			novaFarmacia = getInfoFarmacia (farmaciesObertes[i]);
			var latLng = new google.maps.LatLng(novaFarmacia['lon'], novaFarmacia['lat']);
			var titol = novaFarmacia['titol'];
			var missatge = novaFarmacia['missatge']; 
			
			// alert ("-->>" + numFarmacia + " -- " + farmaciesObertes[i])
			if (numFarmacia == farmaciesObertes[i]) { // Farmàcia de guàrdia en ROIG
				icona = "imatges/marker_roig.png";
			}
			else { // Resta farmàcies en BLAU
				icona = "imatges/marker_blau.png";
			}
			// alert ("-> "  + novaFarmacia['titol']+ novaFarmacia['lat'] + " . " + novaFarmacia['lon'] + novaFarmacia['missatge']);
			var farmaciaGuardia = new google.maps.Marker({
				position : latLng,
				map : mapaFarmacies,
				title : titol,
				icon: icona
			});
			showMessage(mapaFarmacies, farmaciaGuardia, missatge);
		}
		
		break;
	}
	
	} // Fi del switch
}

google.maps.event.addDomListener(window, 'load', function () { initialize(1);});


