// Relació farmàcies guàrdia
// -----------------------------------------------------------------------------------------------
// Dilluns					Dimarts					Dimecres				Dijous
// Divendres 				Dissabte				Diumenge
// -----------------------------------------------------------------------------------------------
// Novembre 
	// 1a setmana
																			data ['11']['01'] = 7; 	
	data [11][2] = 8;	   data [11][3] = 1;	data [11][4] = 2;
	// 2a setmana
	data [11][5] = 3; 	data [11][6] = 4;	   data [11][7] = 5;	data [11][8] = 6;
	data [11][9] = 7;	   data [11][10] = 1;	data [11][11] = 8;
	// 3a setmana 
	data [11][12] = 2;	data [11][13] = 3;	data [11][14] = 4;	data [11][15] = 5;
	data [11][16] = 6;	data [11][17] = 7;	data [11][18] = 8;
	// 3a setmana
	data [11][19] = 1; 	data [11][20] = 2;	data [11][21] = 3;	data [11][22] = 4;
	data [11][23] = 5;	data [11][24] = 6;	data [11][25] = 7;
	// 4a setmana 
	data [11][26] = 8;	data [11][27] = 1;	data [11][28] = 2;	data [11][29] = 3;
	data [11][30] = 4;	
	
// Desembre 
	// 1a setmana
	
							   data [12][1] = 5;	data [12][2] = 6;	
	// 2a setmana	
	data [12][3] = 7;	   data [12][4] = 8;  data [12][5] = 1; 	data [12][6] = 2;	
	data [12][7] = 3;	   data [12][8] = 4;  data [12][9] = 5;	
	// 3a setmana 
	data [12][10] = 6;	data [12][11] = 7;  data [12][12] = 8;	data [12][13] = 1;	
	data [12][14] = 2;	data [12][15] = 3;  data [12][16] = 4;	
	// 3a setmana
	data [12][17] = 5;	data [12][18] = 6;  data [12][19] = 7; 	data [12][20] = 8;	
 	data [12][21] = 1;	data [12][22] = 2;  data [12][23] = 3;	
	// 4a setmana 
	data [12][24] = 4;	data [12][25] = 5;  data [12][26] = 6;	data [12][27] = 7;	
	data [12][28] = 8;	data [12][29] = 1;  data [12][30] = 2;	
	// 5a setmana
	data [12][31] = 3;

// Juliol: Sols 4 farmàcies.  2012: 3 4 5 7 
	// 1a setmana
	data [7][1] = 4; data [7][2] = 5; data [7][3] = 7;  data [7][4] = 3; 
	data [7][5] = 5; data [7][6] = 7; data [7][7] = 3;						
	// 2a setmana	
	data [7][8] = 3; data [7][9] = 4; data [7][10] = 5;  data [7][11] = 7;  
	data [7][12] = 4;data [7][13] = 5; data [7][14] = 7;		
	// 3a setmana 
	data [7][15] = 7; data [7][16] = 3; data [7][17] = 4;  data [7][18] = 5;  
	data [7][19] = 3; data [7][20] = 4; data [7][21] = 5;	
	// 3a setmana
	data [7][22] = 5;  data [7][23] = 7; data [7][24] = 3;  data [7][25] = 4;
	data [7][26] = 7;	data [7][27] = 3; data [7][28] = 4;
	// 4a setmana 
	data [7][29] = 4;  data [7][30] = 5; data [7][31] = 7;	

// Agost: Sols 4 farmàcies:  2012: 1 2 6 8
	// 1a setmana
																			data [8][1] = 2; 	
	data [8][2] = 8;	data [8][3] = 1;	data [8][4] = 2;
	// 2a setmana
	data [8][5] = 2; 	data [8][6] = 6;	data [8][7] = 8;	data [8][8] = 1;
	data [8][9] = 6;	data [8][10] = 8;	data [8][11] = 1;
	// 3a setmana 
	data [8][12] = 1;	data [8][13] = 2;	data [8][14] = 6;	data [8][15] = 8;
	data [8][16] = 2;	data [8][17] = 6;	data [8][18] = 8;
	// 3a setmana
	data [8][19] = 8; 	data [8][20] = 1;	data [8][21] = 2;	data [8][22] = 6;
	data [8][23] = 1;	data [8][24] = 2;	data [8][25] = 6;
	// 4a setmana 
	data [8][26] = 6;	data [8][27] = 8;	data [8][28] = 1;	data [8][29] = 2;
	data [8][30] = 8;	data [8][31] = 1;	



function getNumFarmacia (dd, mm) {
	
	return data [mm][dd];
}

function getInfoFarmacia(n)  {
	// Retorna tota la informació que necessitem de la farmàcia
	// Títol, Long, Lat, missatge (amb la foto)
	
	farmacies [1] = { 
			"titol":"Estrela / Romera" , 
			"lon":39.1217030,
			"lat":-0.4514444, 
			"missatge":"<p span style='color:navy;\
							font-size:12px;\
							font-family: arial, sans-serif;\
							line-height:85%;\
							margin-top:0px;\
							margin-bottom: 1px;'>\
							<b>Farmàcia Estrela / Romera </b>\
							<br>C/ Comandante Hernandez, 26 \
							<br>Telèfon:<b> 962431932</b></p>\
							<img src='fotosFarmacies/farmacia1.jpg' height='125' width='200'></img>"
	};
	farmacies [2] = { 
			"titol":"Escrivà Hermanos" , 
			"lon":39.121083,
			"lat":-0.449172, 
			"missatge":"<span style='color:navy; font-size:12px; font-family: arial, sans-serif; padding: -2px;'><B>Farmàcia Escrivà Hermanos</b><br>C/ Julian Ribera, 42 <br>Telèfon:<b> 962430014</b><br><img src='fotosFarmacies/farmacia2.jpg' height='200' width='200'></img>"
	};
	farmacies [3] = { 
			"titol":"Patricio Soler" , 
			"lon":39.124503, 
			"lat":-0.4484, 
			"missatge":"<span style='color:navy; font-size:12px; font-family: arial, sans-serif; padding: -2px;'><B>Farmàcia Patricio Soler</b><br>C/ Jose Vidal Canet, 16 <br>Telèfon:<b> 962432822</h2><br><img src='fotosFarmacies/farmacia3.jpg' height='200' width='200'></img>"
	};
	farmacies [4] = { 
			"titol":"Concepcion Boquera" , 
			"lon": 39.122355, 
			"lat":-0.450761, 
			"missatge":"<span style='color:navy; font-size:12px; font-family: arial, sans-serif; padding: -2px;'><B>Farmàcia Concepcion Boquera</b><br>C/ Julian Ribera, 1 <br>Telèfon:<b> 962431282</h2><br><img src='fotosFarmacies/farmacia4.jpg' height='200' width='200'></img>"
	};
	farmacies [5] = { 
			"titol":"Francisco Pons" , 
			"lon":39.122407, 
			"lat":-0.447757, 
			"missatge":"<span style='color:navy; font-size:12px; font-family: arial, sans-serif; padding: -2px;'><B>Farmàcia Francisco Pons</b><br>C/ Mestre Giner, 31 <br>Telèfon:<b> 962430295</h2><br><img src='fotosFarmacies/farmacia5.jpg' height='200' width='200'></img>"
	};
	farmacies [6] = { 
			"titol":"Jordi Soler" , 
			"lon":39.123747, 
			"lat":-0.445569 , 
			"missatge":"<span style='color:navy; font-size:12px; font-family: arial, sans-serif; padding: -2px;'><B>Farmàcia Jordi Soler</b><br>C/ Jose Vidal Canet, 65 <br>Telèfon:<b> 962431932</h2><br><img src='fotosFarmacies/farmacia6.jpg' height='200' width='200'></img>"
	};
	farmacies [7] = { 
			"titol":"Antonio Puerto" , 
			"lon":39.118742, 
			"lat":-0.44371, 
			"missatge":"<span style='color:navy; font-size:12px; font-family: arial, sans-serif; padding: -2px;'><B>Farmàcia Antonio Puerto</b><br>C/ SantAntoni, 109 <br>Telèfon:<b> 962430715</h2><br><img src='fotosFarmacies/farmacia7.jpg' height='200' width='200'></img>"
	};
	farmacies [8] = { 
			"titol":"Mariano Roger" , 
			"lon":39.126531,  
			"lat":-0.449688 , 
			"missatge":"<span style='color:navy; font-size:12px; font-family: arial, sans-serif; padding: -2px;'><B>Farmàcia Mariano Roger</b><br>C/ Santa Bàrbara, 7 <br>Telèfon:<b> 962432177</h2><br><img src='fotosFarmacies/farmacia8.jpg' height='200' width='200'></img>"
	};
	// alert ("->"  + farmacies[n]['titol']);
	return farmacies[n];
	
}

