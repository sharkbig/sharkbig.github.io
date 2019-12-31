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
          visible: false,
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
          visible: false,
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
        visible: false,
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
        visible: false,
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
        visible: false,
        source: new ol.source.Vector({
          url:'./data/1227_lite.gpx',
          format: new ol.format.GPX()
        }),
        style: function(feature){
          return style_setter(feature,'#1F95B2');
        }
      }),


      new ol.layer.Vector({
        title: '2019-12-28 tracks',
        visible: false,
        source: new ol.source.Vector({
          url:'./data/1228_lite.gpx',
          format: new ol.format.GPX()
        }),
        style: function(feature){
          return style_setter(feature,'#D67500');
        }
      }),



      new ol.layer.Vector({
        title: '2019-12-29 tracks',
        visible: false,
        source: new ol.source.Vector({
          url:'./data/1229_lite.gpx',
          format: new ol.format.GPX()
        }),
        style: function(feature){
          return style_setter(feature,'#DC4FFF');
        }
      }),

      new ol.layer.Vector({
        title: '2019-12-30 tracks',
        source: new ol.source.Vector({
          url:'./data/20191230 台大永暉陳芃-神木區步道1k溪溝.gpx',
          format: new ol.format.GPX()
        }),
        style: function(feature){
          return style_setter(feature,'#DC4FFF');
        }
      }),

      new ol.layer.Vector({
        title: '20191231.gpx',
        source: new ol.source.Vector({
          url:'./data/20191231.gpx',
          format: new ol.format.GPX()
        }),
        style: function(feature){
          return style_setter(feature,'#DC00FF');
        }
      }),

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
      }),


    ]

})
