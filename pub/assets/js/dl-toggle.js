$(function() {
  showdd = function() {
    ddObj = $(this).next("dd")[0];
    $(ddObj).show();
    $(this).removeClass("hidden").addClass("visible").click(hidedd);
  };
  hidedd = function() {
    ddObj = $(this).next("dd")[0];
    $(ddObj).hide();
    $(this).removeClass("visible").addClass("hidden").click(showdd);
  };
  $("dl.toggle dd").hide();
  $("dl.toggle dt").addClass("hidden");
  $("dt.hidden").click(showdd);
});
