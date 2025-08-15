
$(document).ready(function () {
    var cardOpen = false;
    $(".container").click(function () {
        if (!cardOpen) {
            $(".card").stop().animate({
                top: "-90px"
            }, "slow");
        } else {
            $(".card").stop().animate({
                top: 0
            }, "slow"
            );
        }
        cardOpen = !cardOpen;
    });
});