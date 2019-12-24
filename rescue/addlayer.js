(function() {
  // Create a map containing two group layers
  var map = new ol.Map({
      target: 'map',
      layers: [
          new ol.layer.Group({
              'title': 'Base maps',
              layers: [
                  new ol.layer.Tile({
                      title: '魯地圖',
                      source: new ol.source.XYZ({
                        url: 'https://rs.happyman.idv.tw/map/moi_osm/{z}/{x}/{y}.png'
                      })
                    }),

              ]
          }),
          new ol.layer.Group({
              'title': 'GPX maps',
              layers: [
                  new ol.layer.Vector({
                      title: '1215-1222馬望海搜救路線',
                      source: new ol.source.Vector({
                        url: './data/1215-1222馬望海搜救路線._Lite.gpx',
                        format: new ol.format.GPX()
                      }),
                      style: function(feature) {
                          return style_update[feature.getGeometry().getType()];
                        }

                    }),
                    new ol.layer.Vector({
                      title: '20191223陳芃+天人_B區神木群',
                      source: new ol.source.Vector({
                        url: './data/20191223陳芃+天人_B區神木群.gpx',
                        format: new ol.format.GPX()
                      }),
                      style: function(feature) {
                          return style_update1[feature.getGeometry().getType()];
                        }
                      // projection: new ol.Projection("EPSG:4326")
                    }),
                    new ol.layer.Vector({
                      title: '2019-12-24 tracks',
                      source: new ol.source.Vector({
                        url: './data/1224_lite.gpx',
                        format: new ol.format.GPX()
                      }),
                      style: function(feature) {
                          return style_1224[feature.getGeometry().getType()];
                        }
                      // projection: new ol.Projection("EPSG:4326")
                    })

              ]
          }),

      ],
      view: new ol.View({
          center: ol.proj.fromLonLat([121.30171,24.53225]),
          zoom: 14
      })
  });

  // Create a LayerSwitcher instance and add it to the map
  var layerSwitcher = new ol.control.LayerSwitcher();
  map.addControl(layerSwitcher);



})();
