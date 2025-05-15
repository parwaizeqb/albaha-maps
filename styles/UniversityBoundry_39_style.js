var size = 0;
var placement = 'point';

var style_UniversityBoundry_39 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "16.900000000000002px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#bebc46";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Text") !== null) {
        labelText = String(feature.get("Text"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: [19.0,3.8,7.6,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
