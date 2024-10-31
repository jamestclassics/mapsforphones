ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1357338.129669, 6720316.859370, -218817.057040, 7431780.382297]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IrishTowns_1 = new ol.format.GeoJSON();
var features_IrishTowns_1 = format_IrishTowns_1.readFeatures(json_IrishTowns_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrishTowns_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrishTowns_1.addFeatures(features_IrishTowns_1);cluster_IrishTowns_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_IrishTowns_1
});
var lyr_IrishTowns_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IrishTowns_1, 
                style: style_IrishTowns_1,
                popuplayertitle: "Irish Towns",
                interactive: true,
                title: '<img src="styles/legend/IrishTowns_1.png" /> Irish Towns'
            });

lyr_OSMStandard_0.setVisible(true);lyr_IrishTowns_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_IrishTowns_1];
lyr_IrishTowns_1.set('fieldAliases', {'full_id': 'full_id', 'population:2016': 'population:2016', 'old_name': 'old_name', 'name': 'name', });
lyr_IrishTowns_1.set('fieldImages', {'full_id': '', 'population:2016': '', 'old_name': '', 'name': '', });
lyr_IrishTowns_1.set('fieldLabels', {'full_id': 'inline label - visible with data', 'population:2016': 'inline label - visible with data', 'old_name': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_IrishTowns_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});