var DocFinder = require('./../js/docfinder.js').docFinderModule;

var getDocList = function(list) {

};

$(document).ready(function() {
  var newDocFinder = new DocFinder();
  var location = "Portland";
  newDoctorFinder.getDoctors(list);

  $('#medical-issue-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').empty();
    newDoctorFinder.getDoctors(list);
  });
});
