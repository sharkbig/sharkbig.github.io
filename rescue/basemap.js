

var basemap = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
        new ol.layer.Tile({
            title: '魯地圖',
            source: new ol.source.XYZ({
              url: 'https://rs.happyman.idv.tw/map/moi_osm/{z}/{x}/{y}.png'
            })
          }),

    ]
})
