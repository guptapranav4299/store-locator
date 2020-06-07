
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'mapquest',
  httpAdapter:'http',

  apiKey: '8edUrNk2oIkAhm64fBO9GM6sx9v60vgD', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports=geocoder;
