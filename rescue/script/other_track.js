var other = new ol.layer.Group({
  title:"other",
  layers:[
    new ol.layer.Vector({
      title: '2019-12-30 seasons',
      source: new ol.source.Vector({
        url:'./data/20191230_seasonsC2.gpx',
        format: new ol.format.GPX()
      }),
      style: function(feature){
        return style_setter(feature,'#DC00FF');
      }
    }),

    new ol.layer.Vector({
      title: '2018_邊吉岩山西北陵探勘.kml',
      source: new ol.source.Vector({
        url:'./data/2018_邊吉岩山西北陵探勘.kml',
        format: new ol.format.KML()
      }),
      style: function(feature){
        return style_setter(feature,'#DC00FF');
      }
    }),

    new ol.layer.Vector({
      title: '2018_鎮金邊.kml',
      source: new ol.source.Vector({
        url:'./data/2018_鎮金邊.kml',
        format: new ol.format.KML()
      }),
      style: function(feature){
        return style_setter(feature,'#DC00FF');
      }
    })
  ]
})
