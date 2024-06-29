import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import {fromLonLat} from 'ol/proj.js';

// const washingtonLonLat = [-77.036667, 38.895];
// const washingtonWebMercator = fromLonLat(washingtonLonLat);

// const belgradeLonLat = [20.2800, 44.4900];
// 44.812545624749404, 20.46122694933934
// 44.816245, 20.460469 // yandex
// const belgradeLonLat = [20.46122694933934, 44.812545624749404];
const belgradeLonLat = [20.460469, 44.816245];

const belgradeWebMercator = fromLonLat(belgradeLonLat);


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    // projection: 'EPSG:4326',
    // center: [0,0],
    center: belgradeWebMercator,
    zoom: 12,
    // maxZoom: ,
    minZoom: 12,
  })
});

map.on('loadstart', function () {
  console.log('show preloader');
});
map.on('loadend', function () {
  console.log('remove preloader');
});


// Styling examples:
// - https://openlayers.org/en/v8.1.0/examples/street-labels.html
// - https://openlayers.org/en/v8.1.0/examples/animation.html - amination
// - https://openlayers.org/en/v8.1.0/examples/zoomslider.html - zoom slider
// - https://openlayers.org/en/v8.1.0/examples/svg-layer.html - interactive
// - https://openlayers.org/en/v8.1.0/examples/clusters-dynamic.html - clusters
// - https://openlayers.org/en/v8.1.0/examples/full-screen.html - fullscreen mode desktop
// - https://openlayers.org/en/v8.1.0/examples/full-screen-source.html
// - https://openlayers.org/en/v8.1.0/examples/mobile-full-screen.html - fullscreen mode mobile