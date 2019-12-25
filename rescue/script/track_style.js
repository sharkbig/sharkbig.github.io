// track style and add label
//
// var color = {
//   "1215-1222馬望海搜救路線._Lite.gpx":'#FFEC00',
//   '20191223陳芃+天人_B區神木群':'#00FFEC',
//   '2019-12-24 tracks':'#FF000',
//   '2019-12-25 tracks':'FF0000',
// }


var style_setter = function(feature,LineColor){
  var geom = feature.getGeometry().getType()
  var name = feature.get('name')
  switch (geom) {
    case 'Point':
    return new ol.style.Style({
        image: new ol.style.Circle({
          fill: new ol.style.Fill({
            color: 'rgba(0,255,0,0.4)'
          }),
          radius: 2,
          stroke: new ol.style.Stroke({
            color: '#ff0',
            width: 1
          })
        }),
        text: new ol.style.Text({
          font:'bold 10pt Arial',
          text: name,
        })
      })

      break;
    case 'LineString':
      return new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: LineColor,
            width:1.5
          })
      })
      break;
    case 'MultiLineString':
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: LineColor,
          width: 1.5
        })
      })
    default:
      return null
  }
};
