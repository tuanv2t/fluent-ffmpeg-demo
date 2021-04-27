var ffmpeg = require('fluent-ffmpeg');

  var proc = ffmpeg('video_1080_01.mp4')
        //ffmpeg()
        //.input(process.cwd() + '/' +productFile.path)
        //.inputFormat('mp4')
        // Generate 720P video
        //.setFfMpegPath('C:\ffmgeg\ffmpeg-4.4-full_build\bin\ffmpeg')
        .output('video_720_01.mp4')
        .videoCodec('libx264')  
        .size('1280x720')
  
        .on('error', function(err) {
          console.log('... on error 2222: ' + err);
           
        })	
        .on('progress', function(progress) { 
            console.log('... on frames: ' + progress.frames);
            
        })
        .on('end', function() { 
          console.log('... on end: ' );
        
            
        })
        .run();
	