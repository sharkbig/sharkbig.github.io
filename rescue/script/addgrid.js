// add grid line to the map

var grid = new ol.layer.Graticule({
  title:'grid',
  visible:false,
  strokeStyle: new ol.style.Stroke({
    color:'#C7C7C7',
    width:'3',
    lineDash:[0.5,4]
  }),
  showLabels:true,
})
map.addLayer(grid)
