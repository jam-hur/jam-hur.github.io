// map id: 7d9c1141be45eb47
// api_key: AIzaSyBYI2oEV4K9_obh3hvw_hekvLGLz0-HWP0
// change API restriction to website domain once domain is hosted
// -31.854297170967453, 115.99873333631643

function initMap() {
    const mapCenter = { lat: -31.854297170967453, lng: 115.99873333631643 };
    const map = new google.maps.Map(document.getElementById("map"), { 
    zoom: 11,
    center: mapCenter,
    mapId: '7d9c1141be45eb47',
    mapTypeControl: false,
    streetViewControl: false
    });
  
    //Name
    //lat, lng
    //Image URL
    // scaledSize with, height

    //-31.790834078419522, 115.73870067921905

    const markers = [
        [
          "Nikola Estate"  ,
          -31.854297170967453,
          115.99873333631643,
          "./resources/rings-wedding-regular.svg",
          38,
          31,
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Nikola Estate</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Nikola Estate</b> is where our wedding will" + "take place! </b>" +
          "We are heaps stoked" +
          " It will be the sickest day for everyone  " +
          "There will be wine and heaps of food that you won't have to pay for</p>" +
          '<p><a href="https://nikolaestatewines.com.au/">' +
          "Venue Website</a> " +
          "</p>" +
          "</div>" +
          "</div>"
        ],
        [
        "Our Place",
        -31.790834078419522,
        115.73870067921905,
        "./resources/umbrella-beach-regular.svg",
        38,
        31,
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Our Place</h1>' +
        '<div id="bodyContent">' +
        "<p>Chuck whatever text in here you want!" + " probs even can take an image</p>" +
        '<p><a href="https://nikolaestatewines.com.au/">' +
        "Venue Website</a> " +
        "</p>" +
        "</div>" +
        "</div>"
        ],
        [
        "PC21",
        -31.89232642160868,
        115.6927463327795,
        "./resources/jet-fighter-duotone.svg",
        38,
        31,
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">pc21</h1>' +
        '<div id="bodyContent">' +
        "<p><b>PC21</b> doing some sick zoomies</p>" +
        '<p><a href="https://nikolaestatewines.com.au/">' +
        "Venue Website</a> " +
        "</p>" +
        "</div>" +
        "</div>"
        ]
        
    ]
   
    for(let i = 0; i < markers.length; i++) {
        const currMarker = markers[i]

        const marker = new google.maps.Marker({
          position: { lat: currMarker[1], lng: currMarker[2] },
          map,
          title: currMarker[0],
          icon: {
            url: currMarker[3],
            scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
          }
        });

        const infowindow = new google.maps.InfoWindow({
            content: currMarker[6],
          });
         
        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
            });
          });
    }

  }
  
  window.initMap = initMap;


//   Below worked fine

// const marker = new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Nikola Estate",
//     icon: {
//       url: "./resources/map-pin-solid.svg",
//       scaledSize: new google.maps.Size(40, 40)
//     }
//   });
//   const contentString =
//   '<div id="content">' +
//   '<div id="siteNotice">' +
//   "</div>" +
//   '<h1 id="firstHeading" class="firstHeading">Nikola Estate</h1>' +
//   '<div id="bodyContent">' +
//   "<p><b>Nikola Estate</b>, also referred to as <b>Ayers Rock</b>, is a large " +
//   "sandstone rock formation in the southern part of the " +
//   "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
//   "south west of the nearest large town, Alice Springs; 450&#160;km " +
//   "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
//   "features of the Uluru - Kata Tjuta National Park. Uluru is " +
//   "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
//   "Aboriginal people of the area. It has many springs, waterholes, " +
//   "rock caves and ancient paintings. Uluru is listed as a World " +
//   "Heritage Site.</p>" +
//   '<p><a href="https://nikolaestatewines.com.au/">' +
//   "Venue Website</a> " +
//   "</p>" +
//   "</div>" +
//   "</div>";
//   const infowindow = new google.maps.InfoWindow({
//       content: contentString,
//       ariaLabel: "Uluru",
//     });
   
  
//     marker.addListener("click", () => {
//       infowindow.open({
//         anchor: marker,
//         map,
//       });
//     });

// }