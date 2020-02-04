$(document).ready(function () {


    var inputText = document.querySelector(".save-text");
    // var currentTime = new Date().getHours()
    var currentTime = moment().hours();
    var newName = $(inputText).val();


    function backgroundUpdate() {
        $(".time-row").each(function () {
            var timeBlock = parseInt($(this).data('time'));
    
            if (timeBlock < currentTime) {
                $(this).find('.text-area').removeClass('present future').addClass('past');
    
            } else if (timeBlock === currentTime) {
                $(this).find('.text-area').removeClass('past future').addClass('present');
    
            } else if (timeBlock > currentTime) {
                $(this).find('.text-area').removeClass('past present').addClass('future');
            }
        });
    };

    $(".save-button").click(function() {
        localStorage.getItem(newName);   
    })
    
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

         }
    
    
    
    
    // function setDate () {
        
    // }

});
