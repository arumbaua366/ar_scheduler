$(document).ready(function () {


    var inputText = document.querySelector(".save-text");
    // var currentTime = new Date().getHours()
    var currentTime = moment().hours();
    var newName = $(inputText).val();

    setInterval(function() {
        $(".current-date").text(moment().format("LLLL"))
    }, 1000);
    
    backgroundUpdate();

    function backgroundUpdate() {
        $(".row").each(function () {
            var timeBlock = parseInt($(this).data('time'));
    
            if (timeBlock < currentTime) {
                $(this).find('.input-area').attr("style", "background-color: gray");
    
            } else if (timeBlock === currentTime) {
                $(this).find('.input-area').attr("style", "background-color: red");
    
            } else if (timeBlock > currentTime) {
                $(this).find('.input-area').attr("style", "background-color: green");
            }
        });
    };

    setInterval(backgroundUpdate, 2000);
    // for(var i = newDate; i <24; i++) {
    //         if(i < currentTime) {
    //             $(".time-block").attr("style", "background-color: gray")
    //             console.log($('.time-block'))
    //         }
    
         // if (time < currenttime) {
             // set background to gray
         // } if else (time > currenttime) {
             // set background to green
         // } else {
             // set background to red

         
    
    
    
    
    // function setDate () {
        
    // }

});
