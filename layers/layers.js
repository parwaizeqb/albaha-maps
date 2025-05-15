var wms_layers = [];


        var lyr_BingVirtualEarth_0 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://cawm.lib.uiowa.edu/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_MapzenGlobalTerrain_1 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });

        var lyr_TransportDark_2 = new ol.layer.Tile({
            'title': 'Transport Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriStreets_3 = new ol.layer.Tile({
            'title': 'Esri Streets',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpeStreetMapnick_4 = new ol.layer.Tile({
            'title': 'OpeStreet Mapnick',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_5 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_6 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_7 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSattelite_8 = new ol.layer.Tile({
            'title': 'Google Sattelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleStreets_9 = new ol.layer.Tile({
            'title': 'Google Streets',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Axes_10 = new ol.format.GeoJSON();
var features_Axes_10 = format_Axes_10.readFeatures(json_Axes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Axes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Axes_10.addFeatures(features_Axes_10);
var lyr_Axes_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Axes_10, 
                style: style_Axes_10,
                popuplayertitle: 'محاور/Axes',
                interactive: true,
                title: '<img src="styles/legend/Axes_10.png" /> محاور/Axes'
            });
var format_Entrances_11 = new ol.format.GeoJSON();
var features_Entrances_11 = format_Entrances_11.readFeatures(json_Entrances_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entrances_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entrances_11.addFeatures(features_Entrances_11);
var lyr_Entrances_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entrances_11, 
                style: style_Entrances_11,
                popuplayertitle: 'ممرات دخول/Entrances',
                interactive: true,
                title: '<img src="styles/legend/Entrances_11.png" /> ممرات دخول/Entrances'
            });
var format_Columns_12 = new ol.format.GeoJSON();
var features_Columns_12 = format_Columns_12.readFeatures(json_Columns_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Columns_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Columns_12.addFeatures(features_Columns_12);
var lyr_Columns_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Columns_12, 
                style: style_Columns_12,
                popuplayertitle: 'أعمده/Columns',
                interactive: true,
                title: '<img src="styles/legend/Columns_12.png" /> أعمده/Columns'
            });
var format_Doors_13 = new ol.format.GeoJSON();
var features_Doors_13 = format_Doors_13.readFeatures(json_Doors_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Doors_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Doors_13.addFeatures(features_Doors_13);
var lyr_Doors_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Doors_13, 
                style: style_Doors_13,
                popuplayertitle: 'أبواب/Doors',
                interactive: true,
                title: '<img src="styles/legend/Doors_13.png" /> أبواب/Doors'
            });
var format_Levels_14 = new ol.format.GeoJSON();
var features_Levels_14 = format_Levels_14.readFeatures(json_Levels_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Levels_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Levels_14.addFeatures(features_Levels_14);
var lyr_Levels_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Levels_14, 
                style: style_Levels_14,
                popuplayertitle: 'مستويات/Levels',
                interactive: true,
                title: '<img src="styles/legend/Levels_14.png" /> مستويات/Levels'
            });
var format_Ramps_15 = new ol.format.GeoJSON();
var features_Ramps_15 = format_Ramps_15.readFeatures(json_Ramps_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ramps_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ramps_15.addFeatures(features_Ramps_15);
var lyr_Ramps_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ramps_15, 
                style: style_Ramps_15,
                popuplayertitle: 'منحدرات/Ramps',
                interactive: true,
                title: '<img src="styles/legend/Ramps_15.png" /> منحدرات/Ramps'
            });
var format_Stairs_16 = new ol.format.GeoJSON();
var features_Stairs_16 = format_Stairs_16.readFeatures(json_Stairs_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stairs_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stairs_16.addFeatures(features_Stairs_16);
var lyr_Stairs_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stairs_16, 
                style: style_Stairs_16,
                popuplayertitle: 'سلالم/Stairs',
                interactive: true,
                title: '<img src="styles/legend/Stairs_16.png" /> سلالم/Stairs'
            });
var format_Walls_17 = new ol.format.GeoJSON();
var features_Walls_17 = format_Walls_17.readFeatures(json_Walls_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walls_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walls_17.addFeatures(features_Walls_17);
var lyr_Walls_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walls_17, 
                style: style_Walls_17,
                popuplayertitle: 'حوائط/Walls',
                interactive: true,
                title: '<img src="styles/legend/Walls_17.png" /> حوائط/Walls'
            });
var format_Windows_18 = new ol.format.GeoJSON();
var features_Windows_18 = format_Windows_18.readFeatures(json_Windows_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Windows_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Windows_18.addFeatures(features_Windows_18);
var lyr_Windows_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Windows_18, 
                style: style_Windows_18,
                popuplayertitle: 'نوافذ/Windows',
                interactive: true,
                title: '<img src="styles/legend/Windows_18.png" /> نوافذ/Windows'
            });
var format_Doors_19 = new ol.format.GeoJSON();
var features_Doors_19 = format_Doors_19.readFeatures(json_Doors_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Doors_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Doors_19.addFeatures(features_Doors_19);
var lyr_Doors_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Doors_19, 
                style: style_Doors_19,
                popuplayertitle: 'أبواب/Doors',
                interactive: true,
                title: '<img src="styles/legend/Doors_19.png" /> أبواب/Doors'
            });
var format_Levels_20 = new ol.format.GeoJSON();
var features_Levels_20 = format_Levels_20.readFeatures(json_Levels_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Levels_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Levels_20.addFeatures(features_Levels_20);
var lyr_Levels_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Levels_20, 
                style: style_Levels_20,
                popuplayertitle: 'مستويات/Levels',
                interactive: true,
                title: '<img src="styles/legend/Levels_20.png" /> مستويات/Levels'
            });
var format_Stairs_21 = new ol.format.GeoJSON();
var features_Stairs_21 = format_Stairs_21.readFeatures(json_Stairs_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stairs_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stairs_21.addFeatures(features_Stairs_21);
var lyr_Stairs_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stairs_21, 
                style: style_Stairs_21,
                popuplayertitle: 'سلالم/Stairs',
                interactive: true,
                title: '<img src="styles/legend/Stairs_21.png" /> سلالم/Stairs'
            });
var format_Walls_22 = new ol.format.GeoJSON();
var features_Walls_22 = format_Walls_22.readFeatures(json_Walls_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walls_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walls_22.addFeatures(features_Walls_22);
var lyr_Walls_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walls_22, 
                style: style_Walls_22,
                popuplayertitle: 'حوائط/Walls',
                interactive: true,
                title: '<img src="styles/legend/Walls_22.png" /> حوائط/Walls'
            });
var format_Windows_23 = new ol.format.GeoJSON();
var features_Windows_23 = format_Windows_23.readFeatures(json_Windows_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Windows_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Windows_23.addFeatures(features_Windows_23);
var lyr_Windows_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Windows_23, 
                style: style_Windows_23,
                popuplayertitle: 'نوافذ/Windows',
                interactive: true,
                title: '<img src="styles/legend/Windows_23.png" /> نوافذ/Windows'
            });
var format_RoadNetwork_24 = new ol.format.GeoJSON();
var features_RoadNetwork_24 = format_RoadNetwork_24.readFeatures(json_RoadNetwork_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadNetwork_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNetwork_24.addFeatures(features_RoadNetwork_24);
var lyr_RoadNetwork_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNetwork_24, 
                style: style_RoadNetwork_24,
                popuplayertitle: 'شبكة الطرق/Road Network',
                interactive: true,
                title: '<img src="styles/legend/RoadNetwork_24.png" /> شبكة الطرق/Road Network'
            });
var format_ResearchCity_25 = new ol.format.GeoJSON();
var features_ResearchCity_25 = format_ResearchCity_25.readFeatures(json_ResearchCity_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResearchCity_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResearchCity_25.addFeatures(features_ResearchCity_25);
var lyr_ResearchCity_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResearchCity_25, 
                style: style_ResearchCity_25,
                popuplayertitle: 'مدينة البحوث/Research City',
                interactive: true,
                title: '<img src="styles/legend/ResearchCity_25.png" /> مدينة البحوث/Research City'
            });
var format_GreenAreas_Parks_26 = new ol.format.GeoJSON();
var features_GreenAreas_Parks_26 = format_GreenAreas_Parks_26.readFeatures(json_GreenAreas_Parks_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenAreas_Parks_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenAreas_Parks_26.addFeatures(features_GreenAreas_Parks_26);
var lyr_GreenAreas_Parks_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenAreas_Parks_26, 
                style: style_GreenAreas_Parks_26,
                popuplayertitle: 'المناطق الخضراء والحدائق/Green Areas_Parks',
                interactive: true,
                title: '<img src="styles/legend/GreenAreas_Parks_26.png" /> المناطق الخضراء والحدائق/Green Areas_Parks'
            });
var format_SportsArea_27 = new ol.format.GeoJSON();
var features_SportsArea_27 = format_SportsArea_27.readFeatures(json_SportsArea_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SportsArea_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SportsArea_27.addFeatures(features_SportsArea_27);
var lyr_SportsArea_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SportsArea_27, 
                style: style_SportsArea_27,
                popuplayertitle: 'المنطقة الرياضية/Sports Area',
                interactive: true,
                title: '<img src="styles/legend/SportsArea_27.png" /> المنطقة الرياضية/Sports Area'
            });
var format_InvestmentZone_28 = new ol.format.GeoJSON();
var features_InvestmentZone_28 = format_InvestmentZone_28.readFeatures(json_InvestmentZone_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InvestmentZone_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InvestmentZone_28.addFeatures(features_InvestmentZone_28);
var lyr_InvestmentZone_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InvestmentZone_28, 
                style: style_InvestmentZone_28,
                popuplayertitle: 'المنطقة الاستثمارية/Investment Zone',
                interactive: true,
                title: '<img src="styles/legend/InvestmentZone_28.png" /> المنطقة الاستثمارية/Investment Zone'
            });
var format_ServiceAreas_29 = new ol.format.GeoJSON();
var features_ServiceAreas_29 = format_ServiceAreas_29.readFeatures(json_ServiceAreas_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreas_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreas_29.addFeatures(features_ServiceAreas_29);
var lyr_ServiceAreas_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreas_29, 
                style: style_ServiceAreas_29,
                popuplayertitle: 'مناطق الخدمات/Service Areas',
                interactive: true,
                title: '<img src="styles/legend/ServiceAreas_29.png" /> مناطق الخدمات/Service Areas'
            });
var format_Hospital_Medical_Colleges_30 = new ol.format.GeoJSON();
var features_Hospital_Medical_Colleges_30 = format_Hospital_Medical_Colleges_30.readFeatures(json_Hospital_Medical_Colleges_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_Medical_Colleges_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_Medical_Colleges_30.addFeatures(features_Hospital_Medical_Colleges_30);
var lyr_Hospital_Medical_Colleges_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_Medical_Colleges_30, 
                style: style_Hospital_Medical_Colleges_30,
                popuplayertitle: 'المستشفى والكليات الطبية/Hospital _ Medical_Colleges',
                interactive: true,
                title: '<img src="styles/legend/Hospital_Medical_Colleges_30.png" /> المستشفى والكليات الطبية/Hospital _ Medical_Colleges'
            });
var format_FacultyHousing_31 = new ol.format.GeoJSON();
var features_FacultyHousing_31 = format_FacultyHousing_31.readFeatures(json_FacultyHousing_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacultyHousing_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacultyHousing_31.addFeatures(features_FacultyHousing_31);
var lyr_FacultyHousing_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacultyHousing_31, 
                style: style_FacultyHousing_31,
                popuplayertitle: 'إسكان أعضاء هيئة التدريس/Faculty Housing',
                interactive: true,
                title: '<img src="styles/legend/FacultyHousing_31.png" /> إسكان أعضاء هيئة التدريس/Faculty Housing'
            });
var format_MarriedHousing_32 = new ol.format.GeoJSON();
var features_MarriedHousing_32 = format_MarriedHousing_32.readFeatures(json_MarriedHousing_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarriedHousing_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarriedHousing_32.addFeatures(features_MarriedHousing_32);
var lyr_MarriedHousing_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarriedHousing_32, 
                style: style_MarriedHousing_32,
                popuplayertitle: 'إسكان طلاب متزوجين/Married Housing',
                interactive: true,
                title: '<img src="styles/legend/MarriedHousing_32.png" /> إسكان طلاب متزوجين/Married Housing'
            });
var format_FemaleColleges_33 = new ol.format.GeoJSON();
var features_FemaleColleges_33 = format_FemaleColleges_33.readFeatures(json_FemaleColleges_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FemaleColleges_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FemaleColleges_33.addFeatures(features_FemaleColleges_33);
var lyr_FemaleColleges_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FemaleColleges_33, 
                style: style_FemaleColleges_33,
                popuplayertitle: 'كليات الطالبات/Female Colleges',
                interactive: true,
                title: '<img src="styles/legend/FemaleColleges_33.png" /> كليات الطالبات/Female Colleges'
            });
var format_MaleColleges_34 = new ol.format.GeoJSON();
var features_MaleColleges_34 = format_MaleColleges_34.readFeatures(json_MaleColleges_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaleColleges_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaleColleges_34.addFeatures(features_MaleColleges_34);
var lyr_MaleColleges_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaleColleges_34, 
                style: style_MaleColleges_34,
                popuplayertitle: 'كليات طلاب/Male Colleges',
                interactive: true,
                title: '<img src="styles/legend/MaleColleges_34.png" /> كليات طلاب/Male Colleges'
            });
var format_FemaleHousing_35 = new ol.format.GeoJSON();
var features_FemaleHousing_35 = format_FemaleHousing_35.readFeatures(json_FemaleHousing_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FemaleHousing_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FemaleHousing_35.addFeatures(features_FemaleHousing_35);
var lyr_FemaleHousing_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FemaleHousing_35, 
                style: style_FemaleHousing_35,
                popuplayertitle: 'سكن طالبات/Female Housing',
                interactive: true,
                title: '<img src="styles/legend/FemaleHousing_35.png" /> سكن طالبات/Female Housing'
            });
var format_MaleHousing_36 = new ol.format.GeoJSON();
var features_MaleHousing_36 = format_MaleHousing_36.readFeatures(json_MaleHousing_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaleHousing_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaleHousing_36.addFeatures(features_MaleHousing_36);
var lyr_MaleHousing_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaleHousing_36, 
                style: style_MaleHousing_36,
                popuplayertitle: 'سكن طلاب/Male Housing',
                interactive: true,
                title: '<img src="styles/legend/MaleHousing_36.png" /> سكن طلاب/Male Housing'
            });
var format_Housing_37 = new ol.format.GeoJSON();
var features_Housing_37 = format_Housing_37.readFeatures(json_Housing_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Housing_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Housing_37.addFeatures(features_Housing_37);
var lyr_Housing_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Housing_37, 
                style: style_Housing_37,
                popuplayertitle: 'إسكان/Housing',
                interactive: true,
                title: '<img src="styles/legend/Housing_37.png" /> إسكان/Housing'
            });
var format_Abara_38 = new ol.format.GeoJSON();
var features_Abara_38 = format_Abara_38.readFeatures(json_Abara_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abara_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abara_38.addFeatures(features_Abara_38);
var lyr_Abara_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abara_38, 
                style: style_Abara_38,
                popuplayertitle: 'عبارة/Abara',
                interactive: true,
                title: '<img src="styles/legend/Abara_38.png" /> عبارة/Abara'
            });
var format_UniversityBoundry_39 = new ol.format.GeoJSON();
var features_UniversityBoundry_39 = format_UniversityBoundry_39.readFeatures(json_UniversityBoundry_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniversityBoundry_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityBoundry_39.addFeatures(features_UniversityBoundry_39);
var lyr_UniversityBoundry_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityBoundry_39, 
                style: style_UniversityBoundry_39,
                popuplayertitle: 'حدود منطقة الجامعة/University Boundry',
                interactive: true,
                title: '<img src="styles/legend/UniversityBoundry_39.png" /> حدود منطقة الجامعة/University Boundry'
            });
var format_Arterial_Routes_40 = new ol.format.GeoJSON();
var features_Arterial_Routes_40 = format_Arterial_Routes_40.readFeatures(json_Arterial_Routes_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arterial_Routes_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arterial_Routes_40.addFeatures(features_Arterial_Routes_40);
var lyr_Arterial_Routes_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arterial_Routes_40, 
                style: style_Arterial_Routes_40,
                popuplayertitle: 'طرق شريانية/Arterial_Routes',
                interactive: true,
                title: '<img src="styles/legend/Arterial_Routes_40.png" /> طرق شريانية/Arterial_Routes'
            });
var format_Regional_Roads_41 = new ol.format.GeoJSON();
var features_Regional_Roads_41 = format_Regional_Roads_41.readFeatures(json_Regional_Roads_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regional_Roads_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regional_Roads_41.addFeatures(features_Regional_Roads_41);
var lyr_Regional_Roads_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regional_Roads_41, 
                style: style_Regional_Roads_41,
                popuplayertitle: 'طرق اقليمية/Regional_Roads',
                interactive: true,
                title: '<img src="styles/legend/Regional_Roads_41.png" /> طرق اقليمية/Regional_Roads'
            });
var format_Groups_42 = new ol.format.GeoJSON();
var features_Groups_42 = format_Groups_42.readFeatures(json_Groups_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Groups_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Groups_42.addFeatures(features_Groups_42);
var lyr_Groups_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Groups_42, 
                style: style_Groups_42,
                popuplayertitle: 'التجمعات الفرعية/Groups',
                interactive: true,
                title: '<img src="styles/legend/Groups_42.png" /> التجمعات الفرعية/Groups'
            });
var format_AlBahaRegion_43 = new ol.format.GeoJSON();
var features_AlBahaRegion_43 = format_AlBahaRegion_43.readFeatures(json_AlBahaRegion_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlBahaRegion_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlBahaRegion_43.addFeatures(features_AlBahaRegion_43);
var lyr_AlBahaRegion_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlBahaRegion_43, 
                style: style_AlBahaRegion_43,
                popuplayertitle: 'حدود منطقة الباحة/Al Baha Region',
                interactive: true,
                title: '<img src="styles/legend/AlBahaRegion_43.png" /> حدود منطقة الباحة/Al Baha Region'
            });
var group_AlBahaRegion = new ol.layer.Group({
                                layers: [lyr_Arterial_Routes_40,lyr_Regional_Roads_41,lyr_Groups_42,lyr_AlBahaRegion_43,],
                                fold: 'close',
                                title: 'منطقة الباحة/Al Baha Region'});
var group_UniversityArea = new ol.layer.Group({
                                layers: [lyr_RoadNetwork_24,lyr_ResearchCity_25,lyr_GreenAreas_Parks_26,lyr_SportsArea_27,lyr_InvestmentZone_28,lyr_ServiceAreas_29,lyr_Hospital_Medical_Colleges_30,lyr_FacultyHousing_31,lyr_MarriedHousing_32,lyr_FemaleColleges_33,lyr_MaleColleges_34,lyr_FemaleHousing_35,lyr_MaleHousing_36,lyr_Housing_37,lyr_Abara_38,lyr_UniversityBoundry_39,],
                                fold: 'close',
                                title: 'منطقة الجامعة/University Area'});
var group_Collegefirstfloor = new ol.layer.Group({
                                layers: [lyr_Doors_19,lyr_Levels_20,lyr_Stairs_21,lyr_Walls_22,lyr_Windows_23,],
                                fold: 'close',
                                title: 'كلية التربية الدور الأول/College, first floor'});
var group_CollegegroundFlour = new ol.layer.Group({
                                layers: [lyr_Axes_10,lyr_Entrances_11,lyr_Columns_12,lyr_Doors_13,lyr_Levels_14,lyr_Ramps_15,lyr_Stairs_16,lyr_Walls_17,lyr_Windows_18,],
                                fold: 'close',
                                title: 'كلية التربية الدور الأرضي/College,ground Flour '});
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_BingVirtualEarth_0,lyr_MapzenGlobalTerrain_1,lyr_TransportDark_2,lyr_EsriStreets_3,lyr_OpeStreetMapnick_4,lyr_OpenStreetMap_5,lyr_GoogleHybrid_6,lyr_GoogleTerrain_7,lyr_GoogleSattelite_8,lyr_GoogleStreets_9,],
                                fold: 'close',
                                title: 'الطبقات الأساسية/Base Layers'});

lyr_BingVirtualEarth_0.setVisible(true);lyr_MapzenGlobalTerrain_1.setVisible(true);lyr_TransportDark_2.setVisible(true);lyr_EsriStreets_3.setVisible(true);lyr_OpeStreetMapnick_4.setVisible(true);lyr_OpenStreetMap_5.setVisible(true);lyr_GoogleHybrid_6.setVisible(true);lyr_GoogleTerrain_7.setVisible(true);lyr_GoogleSattelite_8.setVisible(true);lyr_GoogleStreets_9.setVisible(true);lyr_Axes_10.setVisible(true);lyr_Entrances_11.setVisible(true);lyr_Columns_12.setVisible(true);lyr_Doors_13.setVisible(true);lyr_Levels_14.setVisible(true);lyr_Ramps_15.setVisible(true);lyr_Stairs_16.setVisible(true);lyr_Walls_17.setVisible(true);lyr_Windows_18.setVisible(true);lyr_Doors_19.setVisible(true);lyr_Levels_20.setVisible(true);lyr_Stairs_21.setVisible(true);lyr_Walls_22.setVisible(true);lyr_Windows_23.setVisible(true);lyr_RoadNetwork_24.setVisible(true);lyr_ResearchCity_25.setVisible(true);lyr_GreenAreas_Parks_26.setVisible(true);lyr_SportsArea_27.setVisible(true);lyr_InvestmentZone_28.setVisible(true);lyr_ServiceAreas_29.setVisible(true);lyr_Hospital_Medical_Colleges_30.setVisible(true);lyr_FacultyHousing_31.setVisible(true);lyr_MarriedHousing_32.setVisible(true);lyr_FemaleColleges_33.setVisible(true);lyr_MaleColleges_34.setVisible(true);lyr_FemaleHousing_35.setVisible(true);lyr_MaleHousing_36.setVisible(true);lyr_Housing_37.setVisible(true);lyr_Abara_38.setVisible(true);lyr_UniversityBoundry_39.setVisible(true);lyr_Arterial_Routes_40.setVisible(true);lyr_Regional_Roads_41.setVisible(true);lyr_Groups_42.setVisible(true);lyr_AlBahaRegion_43.setVisible(true);
var layersList = [group_BaseLayers,group_CollegegroundFlour,group_Collegefirstfloor,group_UniversityArea,group_AlBahaRegion];
lyr_Axes_10.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Entrances_11.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Columns_12.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Doors_13.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Levels_14.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Ramps_15.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Stairs_16.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Walls_17.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Windows_18.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Doors_19.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Levels_20.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'text': 'text', });
lyr_Stairs_21.set('fieldAliases', {'Layer': 'Layer', 'Linetype': 'Linetype', 'Text': 'Text', });
lyr_Walls_22.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Windows_23.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_RoadNetwork_24.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', });
lyr_ResearchCity_25.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', });
lyr_GreenAreas_Parks_26.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', });
lyr_SportsArea_27.set('fieldAliases', {'layer': 'layer', 'landuse': 'landuse', });
lyr_InvestmentZone_28.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_ServiceAreas_29.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Hospital_Medical_Colleges_30.set('fieldAliases', {'layer': 'layer', 'landuse': 'landuse', });
lyr_FacultyHousing_31.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_MarriedHousing_32.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', });
lyr_FemaleColleges_33.set('fieldAliases', {'layer': 'layer', 'luse': 'luse', });
lyr_MaleColleges_34.set('fieldAliases', {'Layer': 'Layer', 'Text': 'Text', });
lyr_FemaleHousing_35.set('fieldAliases', {'layer': 'layer', 'luse': 'luse', });
lyr_MaleHousing_36.set('fieldAliases', {'Layer': 'Layer', 'Text': 'Text', });
lyr_Housing_37.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Abara_38.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_UniversityBoundry_39.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Arterial_Routes_40.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Regional_Roads_41.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Groups_42.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_AlBahaRegion_43.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Axes_10.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Entrances_11.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Columns_12.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Doors_13.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Levels_14.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Ramps_15.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Stairs_16.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Walls_17.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Windows_18.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Doors_19.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Levels_20.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'text': 'TextEdit', });
lyr_Stairs_21.set('fieldImages', {'Layer': 'TextEdit', 'Linetype': 'TextEdit', 'Text': 'TextEdit', });
lyr_Walls_22.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Windows_23.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_RoadNetwork_24.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', });
lyr_ResearchCity_25.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', });
lyr_GreenAreas_Parks_26.set('fieldImages', {'Layer': '', 'EntityHand': '', });
lyr_SportsArea_27.set('fieldImages', {'layer': 'TextEdit', 'landuse': 'TextEdit', });
lyr_InvestmentZone_28.set('fieldImages', {'Layer': '', 'EntityHand': '', 'Text': '', });
lyr_ServiceAreas_29.set('fieldImages', {'Layer': '', 'EntityHand': '', 'Text': '', });
lyr_Hospital_Medical_Colleges_30.set('fieldImages', {'layer': 'TextEdit', 'landuse': 'TextEdit', });
lyr_FacultyHousing_31.set('fieldImages', {'Layer': '', 'EntityHand': '', 'Text': '', });
lyr_MarriedHousing_32.set('fieldImages', {'Layer': '', 'EntityHand': '', });
lyr_FemaleColleges_33.set('fieldImages', {'layer': '', 'luse': '', });
lyr_MaleColleges_34.set('fieldImages', {'Layer': '', 'Text': '', });
lyr_FemaleHousing_35.set('fieldImages', {'layer': '', 'luse': '', });
lyr_MaleHousing_36.set('fieldImages', {'Layer': 'TextEdit', 'Text': 'TextEdit', });
lyr_Housing_37.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Abara_38.set('fieldImages', {'Layer': '', 'EntityHand': '', 'Text': '', });
lyr_UniversityBoundry_39.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Arterial_Routes_40.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Regional_Roads_41.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Groups_42.set('fieldImages', {'Layer': '', 'SubClasses': '', 'EntityHand': '', 'Text': '', });
lyr_AlBahaRegion_43.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Axes_10.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Entrances_11.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Columns_12.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Doors_13.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Levels_14.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Ramps_15.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Stairs_16.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Walls_17.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Windows_18.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Doors_19.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Levels_20.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'text': 'no label', });
lyr_Stairs_21.set('fieldLabels', {'Layer': 'no label', 'Linetype': 'no label', 'Text': 'no label', });
lyr_Walls_22.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Windows_23.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_RoadNetwork_24.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', });
lyr_ResearchCity_25.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', });
lyr_GreenAreas_Parks_26.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', });
lyr_SportsArea_27.set('fieldLabels', {'layer': 'no label', 'landuse': 'no label', });
lyr_InvestmentZone_28.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_ServiceAreas_29.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Hospital_Medical_Colleges_30.set('fieldLabels', {'layer': 'no label', 'landuse': 'no label', });
lyr_FacultyHousing_31.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_MarriedHousing_32.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', });
lyr_FemaleColleges_33.set('fieldLabels', {'layer': 'no label', 'luse': 'no label', });
lyr_MaleColleges_34.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_FemaleHousing_35.set('fieldLabels', {'layer': 'no label', 'luse': 'no label', });
lyr_MaleHousing_36.set('fieldLabels', {'Layer': 'no label', 'Text': 'no label', });
lyr_Housing_37.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Abara_38.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_UniversityBoundry_39.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Arterial_Routes_40.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Regional_Roads_41.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Groups_42.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_AlBahaRegion_43.set('fieldLabels', {'Layer': 'inline label - always visible', 'EntityHand': 'inline label - always visible', 'Text': 'inline label - always visible', });
lyr_AlBahaRegion_43.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});