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
      color: '#FFEC00',
      width:10
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#FFEC00',
      width:10
    })
  })
};

var update = new ol.layer.Vector({

  source: new ol.source.Vector({

    url:'data/20191224 天人岩屋_B區神木群上方.gpx',
    format: new ol.format.GPX()

  }),

  style: function(feature){
    return style_update[feature.getGeometry().getType()];
  }
});

map.addLayer(update)
