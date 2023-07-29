// map id: 7d9c1141be45eb47
// api_key: AIzaSyBYI2oEV4K9_obh3hvw_hekvLGLz0-HWP0
// change API restriction to website domain once domain is hosted
// -31.854297170967453, 115.99873333631643

function initMap() {
  const mapCenter = { lat: -31.854297170967453, lng: 115.99873333631643 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: mapCenter,
    mapId: "7d9c1141be45eb47",
    mapTypeControl: false,
    streetViewControl: false,
  });

  //Name
  //lat, lng
  //Image URL
  // scaledSize with, height

  //-31.790834078419522, 115.73870067921905

  const markers = [
    [
      "Nikola Estate",
      -31.854297170967453,
      115.99873333631643,
      "./resources/rings-wedding-regular.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Nikola Estate</h1>' +
        "<p><b>Wedding Venue<b><p>" +
        '<div id="bodyContent">' +
        '<p><a href="https://nikolaestatewines.com.au/">' +
        "Venue Website</a> " +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "Costal Suburbs",
      -31.87751007864457,
      115.73249113480156,
      "./resources/map_icons/umbrella-beach-light.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Costal Suburbs</h1>' +
        '<div id="bodyContent">' +
        "<p>Beaches stretch along the coast north of Perth.<p>" +
        "<p>Cottesloe, City Beach, Scarborough and Hillarys all offer swimming, cafes and restaurants.<p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "Marjorie St",
      -31.785196684877803,
      115.73627139116245,
      "./resources/map_icons/champagne-glasses-light.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Majorie Street</h1>' +
        '<div id="bodyContent">' +
        "<p>Our house where we will be hosting a brunch on the 16th of March.<p>" +
        "<p>Bring your swimmers for a dip afterwards!<p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "PC21",
      -32.012472887512865,
      115.63954440554621,
      "./resources/jet-fighter-duotone.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">pc21</h1>' +
        '<div id="bodyContent">' +
        "<p><b>PC21</b> doing some sick zoomies</p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "Hillarys Marina",
      -31.823337177657226,
      115.71105767386943,
      "./resources/ferry-light.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Hillarys Marina</h1>' +
        '<div id="bodyContent">' +
        "<p>Hillarys Marina, ferries to Rottnest Island depart from here and Elizabth Quay, Perth city.</p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "Perth CBD",
      -31.94253619954706,
      115.85874308016774,
      "./resources/city-light.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Perth City</h1>' +
        '<div id="bodyContent">' +
        "<p>Wander around Kings Park, take a walk along the Swan River, kayak from Sir James Mitchell Park or have lunch at Elizabeth Quay!</p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "Rottnest Island",
      -32.03342161705879,
      115.52282595634725,
      "./resources/map_icons/mask-snorkel-light.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Rotto</h1>' +
        '<div id="bodyContent">' +
        "<p>Take a bike ride around the island and have lunch with the Quokkas – a relaxing day trip.<p>" +
        "<p>Ferries depart from Fremantle Harbour, Perth CBD and Hillarys Boat Harbour daily.</p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "Fremantle",
      -32.048625328130676,
      115.75614567614299,
      "./resources/map_icons/wine-glass-empty-light.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Freo</h1>' +
        '<div id="bodyContent">' +
        "<p>30-minutes South of the city, Freo is filled with plenty of delicious food and breweries.<p>" +
        "<p>We recommend taking a tour of the Fremantle Prison, wandering the Fremantle Markets and eating the afternoon away.</p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "Swan Valley",
      -31.80621954633963,
      115.99959008933864,
      "./resources/map_icons/grapes-light.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Swan Valley</h1>' +
        '<div id="bodyContent">' +
        "<p>Perth's local wine region is 30-minutes east of the city, most easily accessed by car (or a River Cruise if you're feeling fancy/Father of the Bride).<p>" +
        "<p>Our day in the Swan normally looks like oysters at Lancaster Wines, tastings at Sandalford Winery and lunch at Old Young's Distillery.</p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
    [
      "Margaret River",
      -33.81406224839192,
      115.03675840172554,
      "./resources/map_icons/grapes-light.svg",
      38,
      31,
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Margaret River</h1>' +
        '<div id="bodyContent">' +
        "<p>If you're planning a longer WA adventure, we'd recommend making the 3-hour drive south to Margaret River.<p>" +
        "<p>The region is known for its wineries but is also home to Busselton Jetty, beautiful beaches at Dunsborough and Yallingup, surf breaks, caves and bush walks. Our favourite stops are the Cellar Door at Vasse Felix, Cheeky Monkey Brewing Co., Swings & Roundabouts for lunch and gin tastings at Wise Wine.</p>" +
        "</p>" +
        "</div>" +
        "</div>",
    ],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
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
