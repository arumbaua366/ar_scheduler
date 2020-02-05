    // var inputText = document.querySelector(".save-text");
    // var currentTime = new Date().getHours()
    var currentTime = moment().hours();
    

    setInterval(function() {
        $(".current-date").text(moment().format("LLLL"))
    }, 1000);
    
    backgroundUpdate();

    // can't figure out why this won't work - no error messages
    function backgroundUpdate() {
        $(".row").each(function () {
            var timeBlock = parseInt($(this).data("time"));
    
            if (timeBlock < currentTime) {
                $(".save-text").css("style", "background-color: gray");
    
            } else if (timeBlock === currentTime) {
                $(".save-text").css("style", "background-color: red");
    
            } else if (timeBlock > currentTime) {
                $(".save-text").css("style", "background-color: green");
            }
        });
    };

    setInterval(backgroundUpdate, 2000);
  
    $(".save-button").on("click", function () {
        var savedText = $(this).siblings(".text-div").find("textarea").val;
        var storedTime = $(this).parent().data("time");
        localStorage.setItem(savedText,storedTime)
       
        localStorage.setItem(savedText, storedTime)
    });

    // loop this??
    $('[data-time="1"]').find("textarea").val(localStorage.getItem("1"));
    $('[data-time="2"]').find("textarea").val(localStorage.getItem("2"));
    $('[data-time="3"]').find("textarea").val(localStorage.getItem("3"));
    $('[data-time="4"]').find("textarea").val(localStorage.getItem("4"));
    $('[data-time="5"]').find("textarea").val(localStorage.getItem("5"));
    $('[data-time="6"]').find("textarea").val(localStorage.getItem("6"));
    $('[data-time="7"]').find("textarea").val(localStorage.getItem("7"));
    $('[data-time="8"]').find("textarea").val(localStorage.getItem("8"));
    $('[data-time="9"]').find("textarea").val(localStorage.getItem("9"));
    $('[data-time="10"]').find("textarea").val(localStorage.getItem("10"));
    $('[data-time="11"]').find("textarea").val(localStorage.getItem("11"));
    $('[data-time="12"]').find("textarea").val(localStorage.getItem("12"));
    $('[data-time="13"]').find("textarea").val(localStorage.getItem("13"));
    $('[data-time="14"]').find("textarea").val(localStorage.getItem("14"));
    $('[data-time="15"]').find("textarea").val(localStorage.getItem("15"));
    $('[data-time="16"]').find("textarea").val(localStorage.getItem("16"));
    $('[data-time="17"]').find("textarea").val(localStorage.getItem("17"));
    $('[data-time="18"]').find("textarea").val(localStorage.getItem("18"));
    $('[data-time="19"]').find("textarea").val(localStorage.getItem("19"));
    $('[data-time="20"]').find("textarea").val(localStorage.getItem("20"));
    $('[data-time="21"]').find("textarea").val(localStorage.getItem("21"));
    $('[data-time="22"]').find("textarea").val(localStorage.getItem("22"));
    $('[data-time="23"]').find("textarea").val(localStorage.getItem("23"));
    $('[data-time="24"]').find("textarea").val(localStorage.getItem("24"));
    
    /* for (var i = 0; i < 24; i++) {

    }*/





         // if (time < currenttime) {
             // set background to gray
         // } if else (time > currenttime) {
             // set background to green
         // } else {
             // set background to red

