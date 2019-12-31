// default zoom, center and rotation
var zoom = 16;
var center = [121.30171,24.53225];


// popup coordination
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
});
closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};


// scale bar
function scaleControl() {
  control = new ol.control.ScaleLine({
    units: 'metric',
    bar: true,
    steps: 4,
    text: true,
    minWidth: 100
  });
  return control;
}


// permalink
if (window.location.hash !== '') {
  // try to restore center, zoom-level and rotation from the URL
  var hash = window.location.hash.replace('#map=', '');
  var parts = hash.split('/');
  if (parts.length === 3) {
    zoom = parseInt(parts[0], 10);
    center = [
      parseFloat(parts[1]),
      parseFloat(parts[2])
    ];
  }
}

var map = new ol.Map({
  controls: ol.control.defaults().extend([
    scaleControl()
  ]),
  target: 'map',
  layers: [
    basemap,
    track_group
  ],
  overlays: [overlay],
  view: new ol.View({
      center: ol.proj.fromLonLat(center),
      zoom: zoom
  })
});

// Create a LayerSwitcher instance and add it to the map
var layerSwitcher = new ol.control.LayerSwitcher();
map.addControl(layerSwitcher);

var shouldUpdate = true;
var view = map.getView();
var updatePermalink = function() {
  if (!shouldUpdate) {
    // do not update the URL when the view was changed in the 'popstate' handler
    shouldUpdate = true;
    return;
  }

  var center = view.getCenter();
  var coor = ol.proj.toLonLat(center)
  var hash = '#map=' +
      view.getZoom().toFixed(1) + '/' +
      coor[0].toFixed(7) + '/' +
      coor[1].toFixed(7)
  var state = {
    zoom: view.getZoom(),
    center: view.getCenter()
  };
  window.history.pushState(state, 'map', hash);
};

map.on('moveend', updatePermalink);

// restore the view state when navigating through the history, see
// https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
window.addEventListener('popstate', function(event) {
  if (event.state === null) {
    return;
  }
  map.getView().setCenter(event.state.center);
  map.getView().setZoom(event.state.zoom);
  shouldUpdate = false;
});


map.on('singleclick', function(evt) {
    var coordinate = evt.coordinate;
    // var hdms = toStringHDMS(toLonLat(coordinate));
    var loc = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326')
    content.innerHTML = loc[0].toFixed(7) + ',' + loc[1].toFixed(7)
    overlay.setPosition(coordinate);
});