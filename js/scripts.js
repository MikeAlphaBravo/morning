$(function() {
  $("p").click(function() {
    $("#kerrygold-show").toggle();
    $("#kerrygold-hidden").toggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#reset").click(function() {
    $("body").removeClass();
    $("body").addClass("original-background");
  });

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#blanks form").submit(function(event) {
    var addressInput = $("input#address").val();
    var citystatezipInput = $("input#citystatezip").val();
    var phoneInput= $("input#phone").val();
    var emailInput = $("input#email").val();
    var quantityInput = $("input#quantity").val();

    $(".address").text(addressInput);
    $(".citystatezip").text(citystatezipInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);
    $(".quantity").text(quantityInput);

    $("#story").show();

    event.preventDefault();
  });
});
