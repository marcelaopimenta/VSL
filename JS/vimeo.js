$(document).ready(function() {
    $(function() {
  
          var options = {
            url: "https://player.vimeo.com/video/723382089?h=e5bd1fe6ec",
            width: 800,
            autoplay:1,
            muted: 1,
            controls: 0,
          };

          $('#firstPlayButton').show();
          $('#startButton').hide();
          $('#pauseButton').hide();     
      
          var videoPlayer = new Vimeo.Player('myVideo', options);

          videoPlayer.on('timeupdate', function(data) {                  
            setProgressValue(data.percent * 100);
          });
         
          $('#firstPlayButton').click(function(){
            $('#firstPlayButton').hide();
            $('#startButton').hide(); 
            $('#pauseButton').show();                      
            videoPlayer.muted = false;
            videoPlayer.setVolume(1);
            videoPlayer.setCurrentTime(0);
          });
  
          $('#pauseButton').click(function(){
            $('#startButton').show();
            $('#pausebutton').hide(); 
            videoPlayer.pause();
          });

          $('#startButton').click(function(){
            $('#startButton').hide();
            $('#pausebutton').show(); 
            videoPlayer.play();
          });
  
          function setProgressValue(value) {
            $('#progressbarBootStrap').attr("aria-valuenow",value);
            $('#progressbarBootStrap').attr("style","width:" + value + "%");
          }
      } );
});