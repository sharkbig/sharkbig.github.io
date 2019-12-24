
(function() {
  // Create a map containing two group layers
  var map = new ol.Map({
      target: 'map',
      layers: [
        basemap,
        track_group

      ],
      view: new ol.View({
          center: ol.proj.fromLonLat([121.30171,24.53225]),
          zoom: 16
      })
  });

  // Create a LayerSwitcher instance and add it to the map
  var layerSwitcher = new ol.control.LayerSwitcher();
  map.addControl(layerSwitcher);



})();
