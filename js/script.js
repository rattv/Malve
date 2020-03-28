$(function() {

    var note = $('#note'),
        ts = new Date(2020, 0, 1),
        newYear = true;

    if ((new Date()) > ts) {
        // The new year is here! Count towards something else.
        // Notice the *1000 at the end - time must be in milliseconds
        ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp: ts,
        callback: function(days, hours, minutes, seconds) {

            var message = "";

            message += days + " дней " ;
            message += hours + " часа ";
            message += minutes + " минут " + " и ";
            message += seconds + " секунд " + " <br />";

                message += "Осталось всего лишь 10 дней, чтобы купить наш товар по выгодной цене!" + "</br>" + "(Мы не скрываем, что вам придёт просрочка)";

            note.html(message);
        }
    });

});