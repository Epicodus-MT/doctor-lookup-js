var apiKey = require('./../.env').apiKey;

function DoctorFinder() {

}

DoctorFinder.prototype.getDoctors = function(location, getCount) {
  $.get('https://doctorindex.org:443/api/v3/search/count?location='+location+'&distance=10&stolenness=stolen').then(function(response) {
      getCount(location, response.proximity);
      console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.portland-doctors').text(error.responseJSON.message);
    });
  };

exports.getDoctors = functionq(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
  };
};


// DoctorFinder.prototype.getDoctorsByMedicalIssue = function(medicalIssue, getDoctorStats) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
//
//     response.doctors.forEach(function(doctor) {
//       getDoctorStats(medical-issue, doctor);
//       console.log(doctor);
//     });
//
//   }).fail(function(error) {
//     $('.medical-issue-results').text(error.responseJSON.message);
//   });
// };
