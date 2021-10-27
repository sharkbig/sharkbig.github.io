var map = L.map('mapid');

// 設定經緯度座標
map.setView(new L.LatLng(24.1, 121), 12);

// 設定圖資來源
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18});


function getColor(value){
		if (value > 150){
			return "#D400FF"; 
		} else if (value > 100) {
			return "#00D5FF";
		} else if (value > 50) {
			return "#2BFF00";
		} else if (value >40){
			return "#80FF00";
		} else if (value > 30){
			return "#D4FF00";
		} else if (value > 20){
			return "#FFD500";
		} else if (value > 10){
			return "#FF8000";
		} else if (value > 0){
			return "#FF2A00";
		}
}

map.addLayer(osm);

// $.get('/static/data/20211025135743_evt.txt',function(csvString) {

//     // Use PapaParse to convert string to array of objects
//     var data = Papa.parse(csvString, {header: true, delimiter:" "}).data;

//     for (var i in data) {
//       var row = data[i];
//       var colorcode= getColor(row.depth);
//       var marker = L.circleMarker([row.lat, row.lon],{radius: 5,color:colorcode }).bindPopup(row.date);
//       marker.addTo(map);
//     }

//   });

var dataLayerGroup=new L.layerGroup();

function addLayerToMap(){
	if (map.hasLayer(dataLayerGroup)){
		map.removeLayer(dataLayerGroup)
		dataLayerGroup.clearLayers()

	}
	var minDep=document.getElementById("MinDep").value;
	var maxDep=document.getElementById("MaxDep").value;
	var minMag=document.getElementById("MinMag").value;
	var maxMag=document.getElementById("MaxMag").value;
	$.get('data/20211025135743_evt.txt',function(csvString) {
    // Use PapaParse to convert string to array of objects
    	var data = Papa.parse(csvString, {header: true, delimiter:" "}).data;
    	for (var i in data) {
			var row = data[i];
			if (row.depth-minDep>0 && row.depth-maxDep<0){
				if (row.magnitude-minMag>0 && row.magnitude-maxMag<0){
				var colorcode=getColor(row.depth);
				var marker = L.circleMarker([row.lat, row.lon],{radius: 5,color:colorcode}
					).bindPopup(row.date+"<br>depth: "+row.depth+"<br>mag: "+row.magnitude);
				dataLayerGroup.addLayer(marker);	
				}
			}	
    	}
	});
	dataLayerGroup.addTo(map);
}


addLayerToMap();
