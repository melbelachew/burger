$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/devoured" + id, {
      type: "PUT",
      data: devoured
    }).then(function() {
      console.log("devoured");
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurg = {
      name: $("#burger")
        .val()
        .trim(),
      devoured: $("true")
        .val()
        .trim()
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg
    }).then(function() {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
