$("#addForm").hide();
function add() {
  $("#addForm").show();
}
function cancel() {
  $("#category").val("");
  $("#addForm").hide();
}
$(document).ready(function() {
  $(".add-row").click(function() {
    var category = $("#category").val();

    var rowCount = $("#customFields tr").length;
    var markup =
      "<tr><td>" +
      category +
      "</td><td>" +
      rowCount +
      "</td><td>" +
      '  <button type="button"  class="remCF btn btn-danger">X </button></td></tr>';
    $("table tbody").before(markup);
    $("#category").val("");
  });
});

$("#customFields").on("click", ".remCF", function() {
  $(this)
    .parent()
    .parent()
    .remove();
});