
    // add all your code to this method, as this will ensure that page is loaded
    AmCharts.ready(function() {
        // create AmMap object
        var map = new AmCharts.AmMap();
        // set path to images
        map.pathToImages = "http://www.ammap.com/lib/images/";
        
        /* create data provider object
         mapVar tells the map name of the variable of the map data. You have to
         view source of the map file you included in order to find the name of the 
         variable - it's the very first line after commented lines.
         
         getAreasFromMap indicates that amMap should read all the areas available
         in the map data and treat them as they are included in your data provider.
         in case you don't set it to true, all the areas except listed in data
         provider will be treated as unlisted.
        */
        var icon= "M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z"; 

        var show_data = function(object){
            console.log(object)
        }

        var dataProvider = {
            mapVar: AmCharts.maps.usaLow,
            getAreasFromMap:true, 
            centerMap: true, 
            // addListener(clickMapObject, show_data(this))

            // images:[{latitude:40.3951, longitude:-73.5619, svgPath:icon, color:"#CC0000", scale:0.5, label:"New York", labelShiftY:2, title:"New York",description:"New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."}]     
            
        }; 
        // pass data provider to the map object
        map.dataProvider = dataProvider;
    
        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map.areasSettings = {
            autoZoom: false,
            rollOverColor: "#2d4989",
            color: "#7b91c4",
            rollOverBorder: "#2d4989",
            // descriptionWindowWidth: 100,
            // descriptionWindowX: 1000,
            // descriptionWindowY: 2000
        };
    
        // let's say we want a small map to be displayed, so let's create it
        // map.smallMap = new AmCharts.SmallMap();
    
        // write the map to container div
        map.write("mapdiv");               
        
    });
