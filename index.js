var ffmpeg = require('fluent-ffmpeg');

// make sure you set the correct path to your video file
var proc = ffmpeg('image_01.png')
  // loop for 5 seconds
  .loop(5)
  // using 25 fps
  .fps(25)
  // setup event handlers
  .on('end', function() {
    console.log('file has been converted succesfully');
  })
  .on('error', function(err) {
    console.log('an error happened: ' + err.message);
  })
  // save to file
  .save('image_01.png.m4v');