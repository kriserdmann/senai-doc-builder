const https = require('https');
const fs = require('fs-extra');

fs.ensureDirSync('content/images');

const file = fs.createWriteStream("content/images/react-native.png");
https.get("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png", response => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download done');
  });
}).on('error', err => {
  fs.unlink("content/images/react-native.png");
  console.log('Error downloading', err);
});
