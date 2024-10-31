ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-709072.448305, 7042719.869406, -683625.696897, 7058621.582460]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_amenity_college_dublin_1 = new ol.format.GeoJSON();
var features_amenity_college_dublin_1 = format_amenity_college_dublin_1.readFeatures(json_amenity_college_dublin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_college_dublin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_college_dublin_1.addFeatures(features_amenity_college_dublin_1);cluster_amenity_college_dublin_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_amenity_college_dublin_1
});
var lyr_amenity_college_dublin_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_amenity_college_dublin_1, 
                style: style_amenity_college_dublin_1,
                popuplayertitle: "amenity_college_dublin",
                interactive: true,
                title: '<img src="styles/legend/amenity_college_dublin_1.png" /> amenity_college_dublin'
            });
var format_amenity_college_dublin_2 = new ol.format.GeoJSON();
var features_amenity_college_dublin_2 = format_amenity_college_dublin_2.readFeatures(json_amenity_college_dublin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_college_dublin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_college_dublin_2.addFeatures(features_amenity_college_dublin_2);
var lyr_amenity_college_dublin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_college_dublin_2, 
                style: style_amenity_college_dublin_2,
                popuplayertitle: "amenity_college_dublin",
                interactive: true,
                title: '<img src="styles/legend/amenity_college_dublin_2.png" /> amenity_college_dublin'
            });

lyr_OSMStandard_0.setVisible(true);lyr_amenity_college_dublin_1.setVisible(true);lyr_amenity_college_dublin_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_amenity_college_dublin_1,lyr_amenity_college_dublin_2];
lyr_amenity_college_dublin_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator': 'operator', 'access': 'access', 'wikipedia': 'wikipedia', 'addr:postcode': 'addr:postcode', 'short_name': 'short_name', 'barrier': 'barrier', 'wheelchair': 'wheelchair', 'website': 'website', 'phone': 'phone', 'fax': 'fax', 'email': 'email', 'contact:twitter': 'contact:twitter', 'contact:facebook': 'contact:facebook', 'college': 'college', 'addr:housename': 'addr:housename', 'wikidata': 'wikidata', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'name': 'name', 'check_date': 'check_date', 'entrance': 'entrance', });
lyr_amenity_college_dublin_2.set('fieldAliases', {'full_id': 'full_id', 'contact:email': 'contact:email', 'name': 'name', });
lyr_amenity_college_dublin_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'operator': '', 'access': '', 'wikipedia': '', 'addr:postcode': '', 'short_name': '', 'barrier': '', 'wheelchair': '', 'website': '', 'phone': '', 'fax': '', 'email': '', 'contact:twitter': '', 'contact:facebook': '', 'college': '', 'addr:housename': '', 'wikidata': '', 'addr:street': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'name': '', 'check_date': '', 'entrance': '', });
lyr_amenity_college_dublin_2.set('fieldImages', {'full_id': '', 'contact:email': '', 'name': '', });
lyr_amenity_college_dublin_1.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'inline label - visible with data', 'osm_type': 'hidden field', 'amenity': 'inline label - visible with data', 'operator': 'hidden field', 'access': 'hidden field', 'wikipedia': 'hidden field', 'addr:postcode': 'hidden field', 'short_name': 'inline label - visible with data', 'barrier': 'hidden field', 'wheelchair': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'contact:twitter': 'hidden field', 'contact:facebook': 'hidden field', 'college': 'inline label - visible with data', 'addr:housename': 'inline label - visible with data', 'wikidata': 'hidden field', 'addr:street': 'hidden field', 'addr:housenumber': 'hidden field', 'addr:country': 'hidden field', 'addr:city': 'hidden field', 'name': 'inline label - visible with data', 'check_date': 'hidden field', 'entrance': 'hidden field', });
lyr_amenity_college_dublin_2.set('fieldLabels', {'full_id': 'inline label - visible with data', 'contact:email': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_amenity_college_dublin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});