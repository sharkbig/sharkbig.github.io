var basemap = new ol.layer.Group({
    'title': 'Base maps',
    layers: [

      //rudy's map
        new ol.layer.Tile({
          title: '魯地圖',
          source: new ol.source.XYZ({
            url: 'https://rs.happyman.idv.tw/map/moi_osm/{z}/{x}/{y}.png'
          })
        }),
        // google satellite map
        new ol.layer.Tile({
          visible: false,
          title: 'Google satellite',
          source: new ol.source.XYZ({
            url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
          })
        }),

        // wmts nlcs


        new ol.layer.Tile({
          visible: false,
          title: 'nlsc',
          source: new ol.source.TileWMS({
            url:'https://wms.nlsc.gov.tw/wms',
            params:{
              'LAYERS':'PHOTO_MIX',
              'FORMAT':'image/png',
              'crs':'EPSG:4326',
              'dpiMode':'7',
              'VERSION':'1.1.1'
            },
            transition:0,
            serverType:'mapserver',

          })
        })

    ]
})
