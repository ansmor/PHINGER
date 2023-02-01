$(document).ready(function () {	
    $('.country, .cx_grp, .timing, .dateDD, .dateMM, .dateYY').on('change',function(){
        var selectedCa = $(".cancer_type").val();
        var selectedCx = $(".cx_grp").val();
        var selectedTiming = $(".timing").val();
        var selectedDay = $(".dateDD").val();
        var selectedMonth = $(".dateMM").val();
        var selectedYear = $(".dateYY").val();
        $('#demo').html(selectedCa + " , " + selectedCx + " , " + selectedTiming +
                       " , " + "cx start date: " + selectedDay + selectedMonth + selectedYear);
    });
});


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("You have successfully copied the text!");
}