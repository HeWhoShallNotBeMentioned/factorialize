var factorial = function(bob) {
  if (bob == 0) {
    return 1;
  } else {
    return bob * factorial(bob - 1)
  }
};

$(document).ready(function() {
  $("form#factorial_input").submit(function(event) {
    var bob = parseInt($("input#bob").val());
    var user_factorial = factorial(bob);

    $(".bob").text(bob);
    $(".factorialized").text(user_factorial);

    $("#result").show();
    event.preventDefault();
  });
});
