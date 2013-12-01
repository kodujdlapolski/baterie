	var map;
    var markers = [];

    function showMarkers() {
      var bounds = map.getBounds();
      var northeast = bounds.getNorthEast();
      var southwest = bounds.getSouthWest();
      var endpoint = "https://script.google.com/macros/s/AKfycbx5147iblNol6l2n50x472S2OAwhcIXUvOpir6w1mGIsPliRO4f/exec?f1=" 
        + southwest.lng() + "&f2=" + southwest.lat() + "&t1=" + northeast.lng() + "&t2=" +  northeast.lat();        
      
      $.get(endpoint, function( data ) {
        if (data) {
          for (var i=0; i<markers.length; i++) {
            markers[i].setMap(null);
          }
          markers = [];

          for (var i=0; i<data.length; i++) {
            var location = data[i];

            var position = new google.maps.LatLng(location.lat, location.lng);
            var marker = new google.maps.Marker({
              map:map,
              position: position,
              title: location.name
            });

/*
            var infowindow = new google.maps.InfoWindow({
                  content: location.name
            });

            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
            });
*/

            markers.push(marker);
          }
        }
      });
      
    }

      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(50.0614, 19.937533),
          zoom: 16
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        google.maps.event.addListener(map, 'idle', showMarkers);
      }
      google.maps.event.addDomListener(window, 'load', initialize);