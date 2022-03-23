// Business
// $(document).ready(function() {
//   event.preventDefault();
//   const height = $("#heightInput").val();
//   const food = $("input:radio[name=food]:checked").val();
//   const dob = $("#bday").val();
//   const favoriteColor = $("#color").val();
// });
// });

// User Interface


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const height = $("#heightInput").val();
    const food = $("input:radio[name=food]:checked").val();
    const dob = $("#bday").val();
    const favoriteColor = $("#color").val();

    $(".height").text(height);
    $(".food").text(food);
    $(".bday").text(dob);
    $(".color").text(favoriteColor);
  });
});
