$(function() {
  $(".change-devoured").on("click", function(event) {
    let id = $(this).data("id");
    const newDevoured = { doured: devour}; //$(this).data("newdevoured");

    const newDevouredState = {
      devoured: newDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    const newBurger = {
      name: $("#ca").val().trim(),
      devoured: 0 //$("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});