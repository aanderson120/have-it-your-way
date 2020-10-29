$(function(){
    $(".create-form").on("sumbit", function(event) {
        event.preventDefault();

        const newBurger = {
            burgerName: $("#input").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("here's your burger");
                location.reload();
              }
        );
    });

        $(".eatIt").on("click", function(event) {

            const id = $(this).data("burgerId");
            const newState = $(this).data("devoured");
            console.log("this", $(this).data("burgerId"));

            const newDevoured = {
                devoured: true
            };

            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevoured
            }).then(
                function() {
                    console.log("devoured");
                    location.reload();
                }
            );
        });
});