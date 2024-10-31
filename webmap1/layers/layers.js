ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1144088.588082, 7143039.446233, -1089372.566428, 7177231.570088]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_natural_beach_county_mayo_1 = new ol.format.GeoJSON();
var features_natural_beach_county_mayo_1 = format_natural_beach_county_mayo_1.readFeatures(json_natural_beach_county_mayo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_beach_county_mayo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_beach_county_mayo_1.addFeatures(features_natural_beach_county_mayo_1);
var lyr_natural_beach_county_mayo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_natural_beach_county_mayo_1, 
                style: style_natural_beach_county_mayo_1,
                popuplayertitle: "natural_beach_county_mayo",
                interactive: true,
                title: '<img src="styles/legend/natural_beach_county_mayo_1.png" /> natural_beach_county_mayo'
            });
var format_natural_beach_county_mayo_2 = new ol.format.GeoJSON();
var features_natural_beach_county_mayo_2 = format_natural_beach_county_mayo_2.readFeatures(json_natural_beach_county_mayo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_beach_county_mayo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_beach_county_mayo_2.addFeatures(features_natural_beach_county_mayo_2);
var lyr_natural_beach_county_mayo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_natural_beach_county_mayo_2, 
                style: style_natural_beach_county_mayo_2,
                popuplayertitle: "natural_beach_county_mayo",
                interactive: true,
                title: '<img src="styles/legend/natural_beach_county_mayo_2.png" /> natural_beach_county_mayo'
            });
var format_natural_beach_county_mayo_3 = new ol.format.GeoJSON();
var features_natural_beach_county_mayo_3 = format_natural_beach_county_mayo_3.readFeatures(json_natural_beach_county_mayo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_beach_county_mayo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_beach_county_mayo_3.addFeatures(features_natural_beach_county_mayo_3);
var lyr_natural_beach_county_mayo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_natural_beach_county_mayo_3, 
                style: style_natural_beach_county_mayo_3,
                popuplayertitle: "natural_beach_county_mayo",
                interactive: true,
                title: '<img src="styles/legend/natural_beach_county_mayo_3.png" /> natural_beach_county_mayo'
            });

lyr_OSMStandard_0.setVisible(true);lyr_natural_beach_county_mayo_1.setVisible(true);lyr_natural_beach_county_mayo_2.setVisible(true);lyr_natural_beach_county_mayo_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_natural_beach_county_mayo_1,lyr_natural_beach_county_mayo_2,lyr_natural_beach_county_mayo_3];
lyr_natural_beach_county_mayo_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'noexit': 'noexit', });
lyr_natural_beach_county_mayo_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', });
lyr_natural_beach_county_mayo_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'lifeguard': 'lifeguard', 'alt_name': 'alt_name', 'name': 'name', });
lyr_natural_beach_county_mayo_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'noexit': '', });
lyr_natural_beach_county_mayo_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'natural': '', });
lyr_natural_beach_county_mayo_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'natural': 'TextEdit', 'lifeguard': 'TextEdit', 'alt_name': 'TextEdit', 'name': 'TextEdit', });
lyr_natural_beach_county_mayo_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'noexit': 'no label', });
lyr_natural_beach_county_mayo_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', });
lyr_natural_beach_county_mayo_3.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'natural': 'inline label - visible with data', 'lifeguard': 'inline label - visible with data', 'alt_name': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_natural_beach_county_mayo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});