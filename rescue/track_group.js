

var track_group = new ol.layer.Group({
    'title': 'GPX maps',
    layers: [
        new ol.layer.Vector({
            title: '1215-1222馬望海搜救路線',
            visible:true,
            source: new ol.source.Vector({
              url: './data/1215-1222馬望海搜救路線._Lite.gpx',
              format: new ol.format.GPX()
            }),
            style: function(feature) {
                return style_update(feature);
              }

          }),


        new ol.layer.Vector({
          title: '20191223陳芃+天人_B區神木群',
          source: new ol.source.Vector({
            url: './data/20191223陳芃+天人_B區神木群.gpx',
            format: new ol.format.GPX()
          }),
          style: function(feature) {
              return style_update1(feature);
            }
          // projection: new ol.Projection("EPSG:4326")
        }),


        new ol.layer.Vector({
          title: '2019-12-24 tracks',
          source: new ol.source.Vector({
            url: './data/1224_lite.gpx',
            format: new ol.format.GPX()
          }),
          style: function(feature){
            return style_1124(feature);
          }
          // projection: new ol.Projection("EPSG:4326")
        })

    ]
})
