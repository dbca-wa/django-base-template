// const { createApp } = Vue;
var testmap = Vue.createApp({
    template: '#testmaptemplate',
    delimiters: ["[[", "]]"],
    props: {
        proposalId: {
            type: Number,
        },
    },
    methods: {
       testDiv: function() {
       },
       loadMap: function() {
            var attribution = new ol.control.Attribution({
                 collapsible: false
            });

            var map = new ol.Map({
                controls: ol.control.defaults({attribution: false}).extend([attribution]),
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM({
                            url: 'https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png',
                            attributions: [ ol.source.OSM.ATTRIBUTION, 'Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>' ],
                            maxZoom: 18
                        })
                    })
                ],
                target: 'map',
                view: new ol.View({
                    center: ol.proj.fromLonLat([4.35247, 50.84673]),
                    maxZoom: 18,
                    zoom: 12
                })
            });

       } 
    },
    data: function() {
      return {
        message: 'Hello Vue 2 TEST!',
      }
    },
    mounted: function () { 
         console.log("Loading Map Template");
         var vm = this;
         var attribution = new ol.control.Attribution({
             collapsible: false
         });
         this.$nextTick(() => {
             console.log("Loading Map");
             vm.loadMap();

         });
    },
  }).mount("#testmap");

