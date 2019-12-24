var style_1224 = {
  'Point': new ol.style.Style({
    image: new ol.style.Circle({

      fill: new ol.style.Fill({
        color: 'rgba(255,255,0,0.4)'
      }),

      radius: 2,

      stroke: new ol.style.Stroke({
        color: '#ff0',
        width: 1
      })
    })
  }),

  'LineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#FFEC00',
      width:1.5
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#FFEC00',
      width: 1.5
    })
  })
};

var update_1224 = new ol.layer.Vector({

  source: new ol.source.Vector({
    url:'data/1224_lite.gpx',
    format: new ol.format.GPX()
  }),

  style: function(feature){
    return style_1224[feature.getGeometry().getType()];
  }
});

map.addLayer(update_1224)
