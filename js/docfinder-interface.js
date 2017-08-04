var DoctorFinder = require('./../js/docfinder.js').doctorModule;

var getCount = function(location, count) {
  $('#portland-doctors').text(count);
};

var getDoctorStats = function(medical-issue, listing) {
  // listings.forEach(function(element) {
    $('#doctor-specialty').append('<li>'+listing.specialty+'</li>');
    $('#location').append('<li>'+listing.location+'</li>');
    $('#insurance-plans').append('<li>'+convertDate(listing.insurance_plans)+'</li>');
};

$(document).ready(function() {
  var newDoctorFinder = new DoctorFinder();
  var location = "Portland";
  newDoctorFinder.getDoctors(location, getCount);

  $('#medical-issue-form').submit(function(event) {
    event.preventDefault();
    var medical-issue = $('#medical-issue').val();
    $('#medical-issue').empty();
    newDoctorFinder.getDoctorsByMedicalIssue(medical-issue, getDoctorStats);
  });
});
