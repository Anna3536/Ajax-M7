$(document).ready(function() {
    let unJoke = $("#botonJoke");

    unJoke.click(function(e) {
        e.preventDefault();
        $.ajax({
            type: "get",
            url: "http://api.icndb.com/jokes/random",
            dataType: "json",
            success: function(response) {
                console.log(response.value.joke);
                $("#joke").parent().removeClass("d-none");
                $("#joke").html(response.value.joke);

            }
        });



    });

});