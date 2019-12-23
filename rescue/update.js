var style_update = {
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
      color: '#ff33d7',
      width:1.5
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#ff33d7',
      width: 1.5
    })
  })
};

var update = new ol.layer.Vector({

  source: new ol.source.Vector({

    url:'data/20191223陳芃+天人_B區神木群.gpx',
    format: new ol.format.GPX()

  }),

  style: function(feature){
    return style_update[feature.getGeometry().getType()];
  }
});

map.addLayer(update)
