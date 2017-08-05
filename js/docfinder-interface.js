var DoctorFinder = require('./../js/docfinder.js').doctorModule;

$(document).ready(function() {
  var newDoctorFinder = new DoctorFinder();

  $('#medical-issue-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').empty();
    newDoctorFinder.getDoctors(medicalIssue);
  });
});
