// L.mapquest.key = 'KEY';//trtouver la key 

// // 'map' refers to a <div> element with the ID map
// L.mapquest.map('map', {
//   center: [37.7749, -122.4194],
//   layers: L.mapquest.tileLayer('map'),
//   zoom: 12
// });

window.onload = function() {
    L.mapquest.key = 'XMpItR5N4ql0gPdg';// ma cle public

    var map = L.mapquest.map('map', {
      center: [37.7749, -122.4194],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });

    map.addControl(L.mapquest.control());
  }