$(document).ready(function() {
  $("#form").submit(function(event) {
    var nameInput = $("input#name-input").val();
    var appointmentInput = $("input#appointment-type").val();
    var emailInput = $("input#email-input").val();
    var telInput = $("input#tel-input").val();
    var dateInput = $("input#date-input").val();
    var timeInput = $("input#time-input").val();

    $(".name").text(nameInput);
    $(".appointment").text(appointmentInput);
    $(".email").text(emailInput);
    $(".tel").text(telInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
