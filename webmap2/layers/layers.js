ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1078009.779422, 6490124.723824, 428115.358608, 7431304.577613]);
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
var format_highway_services_england_1 = new ol.format.GeoJSON();
var features_highway_services_england_1 = format_highway_services_england_1.readFeatures(json_highway_services_england_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_services_england_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_services_england_1.addFeatures(features_highway_services_england_1);
var lyr_highway_services_england_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_services_england_1, 
                style: style_highway_services_england_1,
                popuplayertitle: "highway_services_england",
                interactive: true,
                title: '<img src="styles/legend/highway_services_england_1.png" /> highway_services_england'
            });

lyr_OSMStandard_0.setVisible(true);lyr_highway_services_england_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_highway_services_england_1];
lyr_highway_services_england_1.set('fieldAliases', {'osm_id': 'osm_id', 'highway': 'highway', 'opening_hours': 'opening_hours', 'name': 'name', 'hgv': 'hgv', });
lyr_highway_services_england_1.set('fieldImages', {'osm_id': 'TextEdit', 'highway': 'TextEdit', 'opening_hours': 'TextEdit', 'name': 'TextEdit', 'hgv': 'TextEdit', });
lyr_highway_services_england_1.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'highway': 'inline label - visible with data', 'opening_hours': 'inline label - visible with data', 'name': 'inline label - visible with data', 'hgv': 'inline label - visible with data', });
lyr_highway_services_england_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});