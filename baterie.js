	var map;
    var markers = [];
    var currentInfoWindow;

    function showMarkers() {
      var bounds = map.getBounds();
      var northeast = bounds.getNorthEast();
      var southwest = bounds.getSouthWest();
      var endpoint = "https://script.google.com/macros/s/AKfycbyTbuVRRNvv2LKauRMHlWdRHqYtfSvXPVpahhgaDha0g6q6zX2-/exec?f1=" 
        + southwest.lng() + "&f2=" + southwest.lat() + "&t1=" + northeast.lng() + "&t2=" +  northeast.lat();    
      
      $.get(endpoint, function( data ) {

        for (var i=0; i<markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];

        if (data) {
          var locationsList = "";
          
          for (var i=0; i<data.length; i++) {
            var location = data[i];
            var locationTag = "<div class='location'>" + location.name +" - " + location.address + "</div>";

            var position = new google.maps.LatLng(location.lat, location.lng);
            var marker = new google.maps.Marker({
              map:map,
              position: position,
              title: location.name
            });

            google.maps.event.addListener(marker, 'click', createClickFunc(location, marker));

            markers.push(marker);
            locationsList = locationsList + " " + locationTag;
          }
          $('#results').html(locationsList);
        }
      });
      
    }

    function createClickFunc(location, marker) {

      var infowindow = new google.maps.InfoWindow({
        content: location.name
      });

      return function() {
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }
        infowindow.open(map,marker);
        currentInfoWindow = infowindow;
      }
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