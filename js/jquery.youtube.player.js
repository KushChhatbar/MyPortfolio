// Strict Mode
"use strict";

// Create player script
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';

// Add Scrtpt to the document scripts 
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Configure the player
var tv;

// Youtube API Ready
function onYouTubePlayerAPIReady() {
    tv = new YT.Player('tv', {
        playerVars: {
			autoplay: 1,
			autohide: 1,
			modestbranding: 0,
			rel: 0,
			showinfo: 0,
			controls: 0,
			start: $("#tv").attr("data-video-start-from"),
			end: $("#tv").attr("data-video-end-to"),
			loop: 1,
			disablekb: 1,
			enablejsapi: 0,
			iv_load_policy: 3,
			playlist: $("#tv").attr("data-video-id")
		},
		videoId: $("#tv").attr("data-video-id"),
		suggestedQuality: 'hd720',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

// Youtube Player Ready
function onPlayerReady() {
    tv.playVideo();
    tv.mute();
}

// Resize the video to fit the size of the screen
function vidRescale(){
	var w = $(window).width(),
		h = $(window).height();

	if (w/h > 16/9){
		tv.setSize(w, w/16*9);
		$('.lx-youtube-background .lx-youtube-screen').css({'left': '0px'});
	} else {
		tv.setSize(h/9*16, h);
		$('.lx-youtube-background .lx-youtube-screen').css({'left': -($('.lx-youtube-background .lx-youtube-screen').outerWidth()-w)/2});
	}
}

// Window load event
$(window).on('load resize', function(){
	vidRescale();
});