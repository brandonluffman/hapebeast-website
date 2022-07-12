
$('#background-video').click(function(){this.paused?this.play():this.pause();});




$("video").prop('muted', true);

$("#mute-video").click( function (){
if( $("video").prop('muted') ) {
        $("video").prop('muted', false);
        //$('#volume').css('display', 'none');
} else {
    $("video").prop('muted', true);
    //$('#muted').css('display', 'none');
}
});

$( "#mute-video" ).click(function() {
    $( ".volume-button" ).toggle();
  });




/*

const vid = document.getElementById('#background-video');
const mutedbtn = document.getElementById('#muted');
const volume = document.getElementById('#muted');


if (vid.muted = true) {
    mutedbtn.style.display = "visible";
    volume.style.display = "hidden";
} else if (vid.muted = false) {
    mutedbtn.style.display = "hidden";
    volume.style.display = "visible";
}
*/