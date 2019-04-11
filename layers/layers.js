var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Vel_Esp_0 = new ol.format.GeoJSON();
var features_Vel_Esp_0 = format_Vel_Esp_0.readFeatures(json_Vel_Esp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vel_Esp_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vel_Esp_0.addFeatures(features_Vel_Esp_0);var lyr_Vel_Esp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vel_Esp_0, 
                style: style_Vel_Esp_0,
    title: 'Vel_Esp<br />\
    <img src="styles/legend/Vel_Esp_0_0.png" />  0.00 - 0.56 <br />\
    <img src="styles/legend/Vel_Esp_0_1.png" />  0.56 - 1.13 <br />\
    <img src="styles/legend/Vel_Esp_0_2.png" />  1.13 - 1.69 <br />\
    <img src="styles/legend/Vel_Esp_0_3.png" />  1.69 - 2.26 <br />\
    <img src="styles/legend/Vel_Esp_0_4.png" />  2.26 - 2.82 <br />'
        });var format_Vel_EspAAB_1 = new ol.format.GeoJSON();
var features_Vel_EspAAB_1 = format_Vel_EspAAB_1.readFeatures(json_Vel_EspAAB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vel_EspAAB_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vel_EspAAB_1.addFeatures(features_Vel_EspAAB_1);var lyr_Vel_EspAAB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vel_EspAAB_1, 
                style: style_Vel_EspAAB_1,
    title: 'Vel_EspAAB<br />\
    <img src="styles/legend/Vel_EspAAB_1_0.png" />  0.00 - 0.57 <br />\
    <img src="styles/legend/Vel_EspAAB_1_1.png" />  0.57 - 1.13 <br />\
    <img src="styles/legend/Vel_EspAAB_1_2.png" />  1.13 - 1.70 <br />\
    <img src="styles/legend/Vel_EspAAB_1_3.png" />  1.70 - 2.26 <br />\
    <img src="styles/legend/Vel_EspAAB_1_4.png" />  2.26 - 2.83 <br />'
        });var format_Vel_EspAAR_2 = new ol.format.GeoJSON();
var features_Vel_EspAAR_2 = format_Vel_EspAAR_2.readFeatures(json_Vel_EspAAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vel_EspAAR_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vel_EspAAR_2.addFeatures(features_Vel_EspAAR_2);var lyr_Vel_EspAAR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vel_EspAAR_2, 
                style: style_Vel_EspAAR_2,
    title: 'Vel_EspAAR<br />\
    <img src="styles/legend/Vel_EspAAR_2_0.png" />  0.00 - 0.57 <br />\
    <img src="styles/legend/Vel_EspAAR_2_1.png" />  0.57 - 1.13 <br />\
    <img src="styles/legend/Vel_EspAAR_2_2.png" />  1.13 - 1.70 <br />\
    <img src="styles/legend/Vel_EspAAR_2_3.png" />  1.70 - 2.26 <br />\
    <img src="styles/legend/Vel_EspAAR_2_4.png" />  2.26 - 2.83 <br />'
        });var format_Vel_Natural_3 = new ol.format.GeoJSON();
var features_Vel_Natural_3 = format_Vel_Natural_3.readFeatures(json_Vel_Natural_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vel_Natural_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vel_Natural_3.addFeatures(features_Vel_Natural_3);var lyr_Vel_Natural_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vel_Natural_3, 
                style: style_Vel_Natural_3,
    title: 'Vel_Natural<br />\
    <img src="styles/legend/Vel_Natural_3_0.png" />  0.00 - 0.57 <br />\
    <img src="styles/legend/Vel_Natural_3_1.png" />  0.57 - 1.13 <br />\
    <img src="styles/legend/Vel_Natural_3_2.png" />  1.13 - 1.70 <br />\
    <img src="styles/legend/Vel_Natural_3_3.png" />  1.70 - 2.27 <br />\
    <img src="styles/legend/Vel_Natural_3_4.png" />  2.27 - 2.83 <br />'
        });var format_EspolonesAguasArriba_4 = new ol.format.GeoJSON();
var features_EspolonesAguasArriba_4 = format_EspolonesAguasArriba_4.readFeatures(json_EspolonesAguasArriba_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspolonesAguasArriba_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EspolonesAguasArriba_4.addFeatures(features_EspolonesAguasArriba_4);var lyr_EspolonesAguasArriba_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EspolonesAguasArriba_4, 
                style: style_EspolonesAguasArriba_4,
                title: '<img src="styles/legend/EspolonesAguasArriba_4.png" /> Espolones Aguas Arriba'
            });var format_EspolonesAguasAbajo_5 = new ol.format.GeoJSON();
var features_EspolonesAguasAbajo_5 = format_EspolonesAguasAbajo_5.readFeatures(json_EspolonesAguasAbajo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspolonesAguasAbajo_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EspolonesAguasAbajo_5.addFeatures(features_EspolonesAguasAbajo_5);var lyr_EspolonesAguasAbajo_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EspolonesAguasAbajo_5, 
                style: style_EspolonesAguasAbajo_5,
                title: '<img src="styles/legend/EspolonesAguasAbajo_5.png" /> Espolones Aguas Abajo'
            });var format_Espolones_6 = new ol.format.GeoJSON();
var features_Espolones_6 = format_Espolones_6.readFeatures(json_Espolones_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espolones_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Espolones_6.addFeatures(features_Espolones_6);var lyr_Espolones_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Espolones_6, 
                style: style_Espolones_6,
                title: '<img src="styles/legend/Espolones_6.png" /> Espolones'
            });var lyr_TopoBatimetria_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "TopoBatimetria",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TopoBatimetria_7.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8322596.613260, 1025126.965591, -8318109.759487, 1036325.322474]
                            })
                        });
var group_VectoresVelocidad = new ol.layer.Group({
                                layers: [lyr_Vel_Esp_0,lyr_Vel_EspAAB_1,lyr_Vel_EspAAR_2,lyr_Vel_Natural_3,],
                                title: "Vectores Velocidad"});
var group_Espolones = new ol.layer.Group({
                                layers: [lyr_EspolonesAguasArriba_4,lyr_EspolonesAguasAbajo_5,lyr_Espolones_6,],
                                title: "Espolones"});

lyr_Vel_Esp_0.setVisible(false);lyr_Vel_EspAAB_1.setVisible(false);lyr_Vel_EspAAR_2.setVisible(false);lyr_Vel_Natural_3.setVisible(false);lyr_EspolonesAguasArriba_4.setVisible(false);lyr_EspolonesAguasAbajo_5.setVisible(false);lyr_Espolones_6.setVisible(false);lyr_TopoBatimetria_7.setVisible(true);
var layersList = [baseLayer,group_VectoresVelocidad,group_Espolones,lyr_TopoBatimetria_7];
lyr_Vel_Esp_0.set('fieldAliases', {'ID': 'ID', 'magnitude': 'magnitude', });
lyr_Vel_EspAAB_1.set('fieldAliases', {'ID': 'ID', 'magnitude': 'magnitude', });
lyr_Vel_EspAAR_2.set('fieldAliases', {'ID': 'ID', 'magnitude': 'magnitude', });
lyr_Vel_Natural_3.set('fieldAliases', {'ID': 'ID', 'magnitude': 'magnitude', });
lyr_EspolonesAguasArriba_4.set('fieldAliases', {'ID': 'ID', });
lyr_EspolonesAguasAbajo_5.set('fieldAliases', {'ID': 'ID', });
lyr_Espolones_6.set('fieldAliases', {'ID': 'ID', });
lyr_Vel_Esp_0.set('fieldImages', {'ID': 'Hidden', 'magnitude': 'TextEdit', });
lyr_Vel_EspAAB_1.set('fieldImages', {'ID': 'Hidden', 'magnitude': 'TextEdit', });
lyr_Vel_EspAAR_2.set('fieldImages', {'ID': 'Hidden', 'magnitude': 'TextEdit', });
lyr_Vel_Natural_3.set('fieldImages', {'ID': 'Hidden', 'magnitude': 'TextEdit', });
lyr_EspolonesAguasArriba_4.set('fieldImages', {'ID': 'TextEdit', });
lyr_EspolonesAguasAbajo_5.set('fieldImages', {'ID': 'TextEdit', });
lyr_Espolones_6.set('fieldImages', {'ID': 'TextEdit', });
lyr_Vel_Esp_0.set('fieldLabels', {});
lyr_Vel_EspAAB_1.set('fieldLabels', {});
lyr_Vel_EspAAR_2.set('fieldLabels', {});
lyr_Vel_Natural_3.set('fieldLabels', {});
lyr_EspolonesAguasArriba_4.set('fieldLabels', {});
lyr_EspolonesAguasAbajo_5.set('fieldLabels', {});
lyr_Espolones_6.set('fieldLabels', {});
lyr_Espolones_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});