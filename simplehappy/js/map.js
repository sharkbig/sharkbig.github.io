var map = L.map('map').setView([25.01882,121.5391], 15);
var happyman = L.tileLayer('https://tile.happyman.idv.tw/map/moi_osm/{z}/{x}/{y}.png').addTo(map);
var gpx = L.tileLayer('https://tile.happyman.idv.tw/map/gpxtrack/{z}/{x}/{y}.png').addTo(map);


// selected layer group
var air= L.tileLayer('https://wmts.nlsc.gov.tw/wmts/EMAP2/default/EPSG:3857/{z}/{y}/{x}');
var nlsc= L.tileLayer('https://wmts.nlsc.gov.tw/wmts/PHOTO2/default/EPSG:3857/{z}/{y}/{x}');
var selectmap = {
	"happyman": happyman,
	"nlsc":nlsc
}

var checkbox= {
	'gpx': gpx,
	"road":air,
}
var layerControl = L.control.layers(selectmap,checkbox).addTo(map);
