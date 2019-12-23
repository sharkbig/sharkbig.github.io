/// this is update


var style_update = {
  'Point': new ol.style.Style({
    image: new ol.style.Circle({
      // fill
      fill: new ol.style.Fill({
        color: 'rgba(255,255,0,0.4)'
      }),
      radius: 2,

      // stroke
      stroke: new ol.style.Stroke({
        color: '#ff0',
        width: 1
      })
    })
  }),

  'LineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#002BFF',
      width: 1.5
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#002BFF',
      width: 1.5
    })
  })
};
var update = ol.layer.Vector({
  source: new ol.source.Vector({
    url:'/rescue\data\20191223 陳芃+天人_B區神木群.gpx'
    format: new ol.format.GPX()

  }),
  style: function(feature){
    return style_update[feature.getGeometry().getType()];
  }
});


// plot on map
var map = new ol.Map({
    target: 'map',
    layers: [update]
  })
  });
