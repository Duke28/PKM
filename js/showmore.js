
$(document).ready(function(){
  $("#more-services").on("hide.bs.collapse", function(){
    $("#btn-show-more").html(' Show More');
  });
  $("#more-services").on("show.bs.collapse", function(){
    $("#btn-show-more").html(' Show Less');
  });
});