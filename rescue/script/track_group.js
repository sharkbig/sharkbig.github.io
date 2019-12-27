var track_group = new ol.layer.Group({
    'title': 'GPX maps',
    layers: [
        new ol.layer.Vector({
            title: '1215-1222馬望海搜救路線',
            visible: false,
            source: new ol.source.Vector({
              url: './data/1215-1222馬望海搜救路線._Lite.gpx',
              format: new ol.format.GPX()
            }),
            style: function(feature) {
                // return style_update(feature);
                return style_setter(feature,'#FFEC00')
              }
          }),

        new ol.layer.Vector({
          title: '20191223陳芃+天人_B區神木群',
          source: new ol.source.Vector({
            url: './data/20191223陳芃+天人_B區神木群.gpx',
            format: new ol.format.GPX()
          }),
          style: function(feature) {
              return style_setter(feature,'#00FFEC');

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
            return style_setter(feature,'#FF000');
          }
          // projection: new ol.Projection("EPSG:4326")
        }),


      new ol.layer.Vector({
        title: '2019-12-25 tracks',
        source: new ol.source.Vector({
          url:'./data/1225_lite.gpx',
          format: new ol.format.GPX()
        }),
        style: function(feature){
          return style_setter(feature,'#FF0000');
        }
      }),

      new ol.layer.Vector({
        title: '2019-12-26 tracks',
        source: new ol.source.Vector({
          url:'./data/1226_lite.gpx',
          format: new ol.format.GPX()
        }),
        style: function(feature){
          return style_setter(feature,'#008E29');
        }
      }),



      new ol.layer.Vector({
        title: '2019-12-27 tracks',
        source: new ol.source.Vector({
          url:'./data/1227_lite.gpx',
          format: new ol.format.GPX()
        }),
        style: function(feature){
          return style_setter(feature,'#1F95B2');
        }
      }),


    ]

})
