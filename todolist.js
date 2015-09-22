$(document).ready(function() {
  $("#textbox").focus();
  var listnumber = 0;


  $("#submit").click(function(event) {
    event.preventDefault();
    var innernumber = listnumber;
    listnumber++;
    innernumber++;


    var input = $("#textbox").val();
    $(".items").append("<li class='need" + innernumber + "'><input type='checkbox' class='boxcheck" + innernumber + "'> " + input + "<button class='delete btn-sm btn-danger'>Delete</button></li>");
    $("#textbox").val("").focus();

    $(".boxcheck" + innernumber).click(function(){
      if ($(".boxcheck" + innernumber).prop("checked")) {
        $(".need" + innernumber).css("text-decoration", "line-through");
      } else {
        $(".need" + innernumber).css("text-decoration", "none");
      };
    });


    $('.delete').click(function() {
      $(this).parent().remove();
      $("#textbox").focus();

    });



  }); //click














}); //doc ready
